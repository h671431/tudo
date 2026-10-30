"use client";

import { useEffect, useState } from "react";

// Colour palette chooser in the bottom-right corner, shown while the team
// decides (site.showDesignPicker). "Now" is the current purple and yellow; the
// others are set up in globals.css under "Palettes for the style chooser".
const palettes = [
  { id: "classic", name: "Now", colors: ["#6B48A8", "#FFC93C", "#F1EAFA"] },
  { id: "palette", name: "Palette", colors: ["#856EC5", "#BCB0E0", "#FEE05D", "#FFED9B"] },
  { id: "crisp", name: "Crisp", colors: ["#5B2EC9", "#FFD60A", "#FFFFFF"] },
  { id: "pastel", name: "Pastel", colors: ["#8E7CCB", "#FCE38A", "#DCD3F5"] },
  { id: "playful", name: "Playful", colors: ["#7A4FD8", "#FFCB2B", "#3FB6E8", "#FF7A9A"] },
];

export default function DesignPicker() {
  const [theme, setTheme] = useState("classic");
  const [open, setOpen] = useState(false);

  // Load the saved choice once on the client.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tudo-palette");
      if (palettes.some((p) => p.id === saved)) setTheme(saved);
    } catch (e) {}
  }, []);

  // Apply to <html> and save.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("tudo-palette", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <div className={`design-picker${open ? "" : " closed"}`}>
      <button className="picker-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="swatches" aria-hidden="true">
          {palettes.find((p) => p.id === theme).colors.map((c) => (
            <i key={c} style={{ background: c }} />
          ))}
        </span>
        Style
      </button>
      {open && (
        <div className="picker-options">
          {palettes.map((p) => (
            <button key={p.id} aria-pressed={theme === p.id} onClick={() => setTheme(p.id)}>
              <span className="swatches" aria-hidden="true">
                {p.colors.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </span>
              {p.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
