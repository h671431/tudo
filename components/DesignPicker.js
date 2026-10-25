"use client";

import { useEffect, useState } from "react";

// Temporary design picker (colour, pattern, look). Once the team has decided:
// delete this file, its use in app/layout.js, and ".design-picker" in app/globals.css.
const options = {
  theme: ["orange", "purple"],
  pattern: ["none", "dots", "checkers", "stripes"],
  look: ["modern", "whiteboard", "sticker", "soft"],
};
const labels = { theme: "Colour", pattern: "Pattern", look: "Look" };

export default function DesignPicker() {
  const [design, setDesign] = useState({
    theme: "orange",
    pattern: "none",
    look: "modern",
    closed: true,
  });

  // Load saved choice once on the client.
  useEffect(() => {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem("design-v4")) || {};
    } catch (e) {}
    setDesign((d) => ({ ...d, ...saved, closed: saved.closed ?? window.innerWidth < 700 }));
  }, []);

  // Apply to <html> and save.
  useEffect(() => {
    const root = document.documentElement;
    for (const key in options) root.dataset[key] = design[key];
    try {
      localStorage.setItem("design-v4", JSON.stringify(design));
    } catch (e) {}
  }, [design]);

  return (
    <div className={`design-picker${design.closed ? " closed" : ""}`}>
      <button
        className="picker-toggle"
        aria-expanded={!design.closed}
        onClick={() => setDesign((d) => ({ ...d, closed: !d.closed }))}
      >
        🎨 Design preview
      </button>
      {Object.keys(options).map((key) => (
        <div className="picker-row" key={key}>
          <span>{labels[key]}</span>
          {options[key].map((v) => (
            <button
              key={v}
              aria-pressed={design[key] === v}
              onClick={() => setDesign((d) => ({ ...d, [key]: v }))}
            >
              {v[0].toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
