// The TUDO logo: the letters as pen strokes on writing lines, in one colour
// (--logo, purple by default), on top of a dotted copy (--logo-dots, yellow) that sits
// slightly offset so the two overlap. On the home page the dots appear first, then the
// "draw" strokes trace over them one after another (see .write-anim in globals.css).

// Each stroke in writing order, with when it starts and how long it takes (seconds),
// roughly in proportion to its length so the pen moves at an even speed.
const strokes = [
  { d: "M60 50 V126 Q60 140 74 140", delay: 0.25, dur: 0.18 }, // t, down
  { d: "M44 90 H80", delay: 0.46, dur: 0.07 }, // t, across
  { d: "M104 90 V118 Q104 140 126 140 Q148 140 148 118 V90 V140", delay: 0.57, dur: 0.31 }, // u
  { d: "M219 115 A25 25 0 1 1 169 115 A25 25 0 1 1 219 115", delay: 0.92, dur: 0.29 }, // d, bowl
  { d: "M219 40 V140", delay: 1.24, dur: 0.18 }, // d, stem
  { d: "M293 115 A25 25 0 1 1 243 115 A25 25 0 1 1 293 115", delay: 1.46, dur: 0.29 }, // o
];

export default function Logo({ className }) {
  return (
    <svg className={className} viewBox="0 18 340 140" aria-hidden="true">
      <g strokeWidth="2.5" stroke="var(--logo)">
        <line className="rule" x1="4" y1="40" x2="336" y2="40" />
        <line className="rule" x1="4" y1="90" x2="336" y2="90" strokeDasharray="9 7" opacity="0.5" />
        <line className="rule" x1="4" y1="140" x2="336" y2="140" />
      </g>
      <g
        className="dots"
        fill="none"
        stroke="var(--logo-dots, #FFC93C)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray="0 15"
        transform="translate(-15 11)"
      >
        {strokes.map((s) => (
          <path key={s.d} d={s.d} />
        ))}
      </g>
      <g fill="none" stroke="var(--logo)" strokeWidth="27" strokeLinecap="round" strokeLinejoin="round">
        {strokes.map((s) => (
          <path
            key={s.d}
            className="draw"
            pathLength="1"
            d={s.d}
            style={{ "--delay": `${s.delay}s`, "--dur": `${s.dur}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
