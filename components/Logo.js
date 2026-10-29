// The TUDO logo: the letters as single pen strokes on writing lines, in one
// colour (--logo, purple by default). On the home page the "rule" and "draw"
// classes animate it as if it is being written (see .write-anim in globals.css).
const letters =
  "M60 50 V126 Q60 140 74 140 M44 90 H80 M104 90 V118 Q104 140 126 140 Q148 140 148 118 V90 V140 " +
  "M219 40 V140 M219 115 A25 25 0 1 1 169 115 A25 25 0 1 1 219 115 " +
  "M293 115 A25 25 0 1 1 243 115 A25 25 0 1 1 293 115";

export default function Logo({ className }) {
  return (
    <svg className={className} viewBox="0 18 340 140" aria-hidden="true">
      <g strokeWidth="2.5" stroke="var(--logo)">
        <line className="rule" x1="4" y1="40" x2="336" y2="40" />
        <line className="rule" x1="4" y1="90" x2="336" y2="90" strokeDasharray="9 7" opacity="0.5" />
        <line className="rule" x1="4" y1="140" x2="336" y2="140" />
      </g>
      <path
        className="draw"
        pathLength="1"
        d={letters}
        fill="none"
        stroke="var(--logo)"
        strokeWidth="27"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
