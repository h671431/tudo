"use client";

import { useState } from "react";

// A team card that flips over to show the back. Hover flips it on a computer;
// a tap or click (or Enter/Space) flips it on any device.
export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className={`flip-card${flipped ? " flipped" : ""}`}
      aria-pressed={flipped}
      onClick={() => setFlipped(!flipped)}
    >
      <span className="flip-inner">
        <span className="flip-front">{front}</span>
        <span className="flip-back">{back}</span>
      </span>
    </button>
  );
}
