// Drawn mock-ups of the sample kit: a kraft box with the Tudo label, and the
// sample products. Used on The Playkits until we have real photos.

const ink = "#4B2A7B";
const kraft = "#D6B58A";
const kraftDark = "#B98F5E";

// Simple flat drawings of each sample product, in the same 120 x 100 frame.
const drawings = {
  abacus: (
    <>
      <rect x="18" y="14" width="84" height="72" rx="6" fill="none" stroke="#B98F5E" strokeWidth="6" />
      {[30, 44, 58, 72].map((y, row) =>
        <g key={y}>
          <line x1="21" y1={y} x2="99" y2={y} stroke="#B98F5E" strokeWidth="2" />
          {[0, 1, 2, 3].map((n) => (
            <circle
              key={n}
              cx={30 + n * 11 + (row % 2) * 30}
              cy={y}
              r="5.5"
              fill={["#F26B21", "#FFC93C", "#7FB8A4", "#9C7FD0"][row]}
            />
          ))}
        </g>
      )}
    </>
  ),
  blocks: (
    <>
      <rect x="22" y="52" width="34" height="34" rx="5" fill="#FFC93C" />
      <rect x="62" y="52" width="34" height="34" rx="5" fill="#7FB8A4" />
      <rect x="42" y="16" width="34" height="34" rx="5" fill="#F4A3A8" transform="rotate(-6 59 33)" />
      <text x="39" y="77" textAnchor="middle" fontSize="20" fontWeight="700" fill={ink}>A</text>
      <text x="79" y="77" textAnchor="middle" fontSize="20" fontWeight="700" fill={ink}>3</text>
      <circle cx="54" cy="31" r="1.8" fill={ink} />
      <circle cx="64" cy="30" r="1.8" fill={ink} />
      <path d="M52 38q7 6 14-1" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  pegs: (
    <>
      <rect x="12" y="22" width="96" height="60" rx="8" fill="#E8CFA6" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => {
          const x = 30 + c * 20;
          const y = 36 + r * 17;
          const lifted = r === 0 && c === 1;
          return (
            <g key={`${r}${c}`} transform={lifted ? "translate(4 -14)" : undefined}>
              <circle cx={x} cy={y} r="7.5" fill={["#F26B21", "#7FB8A4", "#9C7FD0", "#FFC93C"][(r + c) % 4]} />
              <circle cx={x} cy={y} r="2.6" fill="#B98F5E" />
            </g>
          );
        })
      )}
      <circle cx="50" cy="36" r="7.5" fill="none" stroke="#B98F5E" strokeDasharray="2 2" />
    </>
  ),
  chunky: (
    <>
      <rect x="10" y="40" width="100" height="46" rx="8" fill="#E8CFA6" />
      <path d="M22 78v-18h10v-14h6v14h8v18z" fill="#FFC93C" />
      <path d="M58 78c0-14 6-20 16-20s14 6 14 12v8h-6v-6h-14v6z" fill="#A9B3BC" />
      <path d="M66 18c-6 0-10 5-10 11v13h20V29c0-6-4-11-10-11z" fill="#F26B21" transform="rotate(10 66 30)" />
      <rect x="92" y="60" width="10" height="18" rx="3" fill="#7FB8A4" />
    </>
  ),
  fishing: (
    <>
      <rect x="10" y="50" width="100" height="38" rx="8" fill="#9FD3E0" />
      <path d="M22 70q6-7 14 0q-8 7-14 0zM36 70l6-5v10z" fill="#F26B21" />
      <path d="M70 76q6-7 14 0q-8 7-14 0zM84 76l6-5v10z" fill="#FFC93C" />
      <path d="M54 62q5-6 12 0q-7 6-12 0zM66 62l5-4v8z" fill="#9C7FD0" />
      <line x1="20" y1="12" x2="80" y2="26" stroke="#B98F5E" strokeWidth="5" strokeLinecap="round" />
      <line x1="80" y1="26" x2="80" y2="46" stroke={ink} strokeWidth="1.5" />
      <rect x="76" y="44" width="8" height="6" rx="2" fill={ink} />
    </>
  ),
  pizza: (
    <>
      <circle cx="54" cy="56" r="34" fill="#F2C46D" />
      <circle cx="54" cy="56" r="28" fill="#E86A4A" />
      <path d="M54 56L54 22M54 56L83 73M54 56L25 73" stroke="#F2C46D" strokeWidth="3" />
      {[[44, 40], [64, 44], [40, 62], [62, 66], [52, 76], [70, 56]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="3.6" fill={x > 55 ? "#7FB8A4" : "#FFF3D6"} />
      ))}
      <rect x="92" y="18" width="7" height="44" rx="3" fill="#B98F5E" transform="rotate(18 95 40)" />
      <rect x="94" y="56" width="9" height="24" rx="4" fill="#E8CFA6" transform="rotate(18 98 68)" />
    </>
  ),
};

// Sample products, with what each one teaches. Teaching notes come from our
// supplier's product information.
export const samples = [
  {
    key: "abacus",
    name: "Counting abacus",
    skill: "Early maths",
    age: "3+",
    text: "100 wooden beads to count, add and take away, and to spot patterns.",
  },
  {
    key: "blocks",
    name: "Learning blocks & cards",
    skill: "Language",
    age: "18 months+",
    text: "Letters, numbers, colours, emotions and movements like jumping, with activity cards.",
  },
  {
    key: "pegs",
    name: "Alphabet peg puzzle",
    skill: "Pre-reading",
    age: "3–5",
    text: "Children use the pincer grip to lift each letter and match it with a picture.",
  },
  {
    key: "chunky",
    name: "Chunky animal puzzle",
    skill: "Motor skills",
    age: "2+",
    text: "For younger children, who use a grabbing motion to pull out the thick pieces.",
  },
  {
    key: "fishing",
    name: "Magnetic fishing game",
    skill: "Hand–eye",
    age: "3+",
    text: "Matching the magnet on the rod to each fish trains hand–eye coordination.",
  },
  {
    key: "pizza",
    name: "Pizza play set",
    skill: "Cutting & role play",
    age: "3–5",
    text: "Cutting through the Velcro makes a real cutting sound, so children learn how to cut.",
  },
];

// Skill icons printed on the box: maths, language, motor skills and play.
function BoxIcons({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="11" />
      <path d="M7 12h10M12 7v10" />
      <circle cx="40" cy="12" r="11" />
      <text x="40" y="17" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" stroke="none">A</text>
      <circle cx="68" cy="12" r="11" />
      <path d="M63 15c2-6 8-6 10 0" />
      <circle cx="96" cy="12" r="11" />
      <circle cx="96" cy="12" r="4" />
    </g>
  );
}

// The kraft box with rope handle, like the box a centre would receive.
export function KitBox() {
  return (
    <svg className="kit-box" viewBox="0 0 400 360" role="img" aria-label="Tudo learning box, ages 2 to 5, with six sample products">
      <ellipse cx="200" cy="338" rx="160" ry="12" fill="#000" opacity="0.08" />
      <path d="M150 92c0-46 100-46 100 0" fill="none" stroke="#C9B79C" strokeWidth="7" strokeLinecap="round" />
      <path d="M70 100l40-28h180l40 28z" fill={kraftDark} />
      <rect x="70" y="100" width="260" height="236" rx="6" fill={kraft} />
      <path d="M330 100l0 236" stroke={kraftDark} strokeWidth="3" />
      <image href="/logo.svg" x="96" y="124" width="150" height="62" />
      <text x="98" y="210" fontSize="26" fontWeight="700" fill={ink}>Learning Box</text>
      <text x="98" y="236" fontSize="15" fill={ink} opacity="0.8">Play that opens possibilities</text>
      <rect x="236" y="250" width="78" height="66" rx="10" fill={ink} />
      <text x="275" y="276" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">AGES</text>
      <text x="275" y="302" textAnchor="middle" fontSize="22" fontWeight="700" fill="#FFC93C">2–5</text>
      <rect x="86" y="268" width="138" height="48" rx="10" fill={ink} />
      <BoxIcons x={93} y={280} />
    </svg>
  );
}

// The sample products as tiles, each with its drawing, skill and age.
export function SampleGrid() {
  return (
    <div className="sample-grid">
      {samples.map((item) => (
        <div className="sample-card" key={item.key}>
          <div className="sample-art">
            <svg viewBox="0 0 120 100" aria-hidden="true">
              {drawings[item.key]}
            </svg>
          </div>
          <div className="sample-meta">
            <span>{item.skill}</span>
            <span>{item.age}</span>
          </div>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
