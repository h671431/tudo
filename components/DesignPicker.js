"use client";

import { useEffect, useState } from "react";

// Colour palette chooser in the bottom-right corner, shown while the team
// decides (site.showDesignPicker). "Classic" is the current TUDO purple and
// orange; the others add the new palette colours that go with it.
const palettes = [
  { id: "classic", name: "Classic", colors: ["#4B2A7B", "#F26B21", "#FFC93C"] },
  { id: "grape", name: "Grape", colors: ["#694873", "#F2A359", "#F5D3C8"] },
  { id: "sunset", name: "Sunset", colors: ["#4B2A7B", "#F2A359", "#F5D3C8"] },
  { id: "olive", name: "Olive", colors: ["#694873", "#7B886F", "#F5D3C8"] },
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
