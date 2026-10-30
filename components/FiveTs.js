"use client";

import { useEffect, useState } from "react";

// The Five T's of TUDO as five connected pillars that step down from THINK to THRIVE.
// Hovering, focusing or tapping a pillar pulls the steps apart, highlights that pillar
// and shows what it stands for. A figure stands on the active step and grows from a
// small stick-figure child into a full person by THRIVE.
const pillars = [
  { name: "THINK", line: "Discover and understand.", text: "Cognitive development, learning and problem-solving." },
  { name: "TINKER", line: "Explore and create.", text: "Creativity, experimentation and imagination." },
  { name: "TRY", line: "Experiment and build confidence.", text: "Confidence, resilience and learning through experience." },
  { name: "TOGETHER", line: "Connect and grow.", text: "Social development, relationships and emotional connection." },
  { name: "THRIVE", line: "Realise your potential.", text: "Wellbeing, physical development and the realisation of potential." },
];

// Drawn as lines while small, then filled in as the figure grows (see .five-figure in globals.css).
function Figure() {
  return (
    <svg viewBox="0 0 60 100" aria-hidden="true">
      <g className="stick" fill="none" strokeWidth="4" strokeLinecap="round">
        <circle cx="30" cy="16" r="10" />
        <path d="M30 26 V60 M30 36 L16 50 M30 36 L44 50 M30 60 L20 88 M30 60 L40 88" />
      </g>
      <g className="solid" strokeLinecap="round">
        <circle cx="30" cy="14" r="10" />
        <path d="M30 30 V58" strokeWidth="15" />
        <path d="M24 32 L13 18 M36 32 L47 18" strokeWidth="7" />
        <path d="M26 60 L22 94 M34 60 L38 94" strokeWidth="8" />
      </g>
    </svg>
  );
}

export default function FiveTs() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [touched, setTouched] = useState(false);

  // Walk the figure down the steps on its own until the visitor takes over.
  useEffect(() => {
    if (touched || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % pillars.length), 2400);
    return () => clearInterval(timer);
  }, [touched]);

  function pick(i) {
    setTouched(true);
    setActive(i);
    setOpen(true);
  }

  const current = pillars[active];

  return (
    <div className="five-ts">
      <div className={`five-steps${open ? " open" : ""}`} onMouseLeave={() => setOpen(false)}>
        <div className="five-figure" style={{ "--i": active }}>
          <div className="five-hop" key={active}>
            <Figure />
          </div>
        </div>
        {pillars.map((p, i) => (
          <button
            type="button"
            key={p.name}
            className={`pillar${i === active ? " on" : ""}`}
            style={{ "--i": i }}
            aria-pressed={i === active}
            onMouseEnter={() => pick(i)}
            onFocus={() => pick(i)}
            onClick={() => pick(i)}
          >
            <span className="pillar-num">0{i + 1}</span>
            <span className="pillar-name">{p.name}</span>
          </button>
        ))}
      </div>

      <div className="five-info" aria-live="polite">
        <p className="five-num">0{active + 1}</p>
        <h3>{current.name}</h3>
        <p className="five-line">{current.line}</p>
        <p>{current.text}</p>
      </div>
    </div>
  );
}
