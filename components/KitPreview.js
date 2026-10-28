// Drawn mock-ups of the sample kit: a kraft box with the Tudo label, and the
// sample products. Used on The Playkits until we have real photos.

const ink = "#4B2A7B";

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

// Skill icons printed on the box label: maths, language, motor skills and play.
function BoxIcons({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="9" cy="9" r="8" />
      <path d="M5.5 9h7M9 5.5v7" />
      <circle cx="29" cy="9" r="8" />
      <text x="29" y="12.5" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff" stroke="none">A</text>
      <circle cx="49" cy="9" r="8" />
      <path d="M45 11c1.5-4.5 6.5-4.5 8 0" />
      <circle cx="69" cy="9" r="8" />
      <circle cx="69" cy="9" r="3" />
    </g>
  );
}

// One product drawing placed in the box scene.
function Product({ name, x, y, w, rotate = 0 }) {
  const h = (w * 100) / 120;
  return (
    <g transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`} filter="url(#lift)">
      <svg x={x} y={y} width={w} height={h} viewBox="0 0 120 100">
        {drawings[name]}
      </svg>
    </g>
  );
}

// A kraft box in three-quarter view with the products laid out around it,
// styled like a product photo. Shown until we have a real one.
export function KitBox() {
  return (
    <svg className="kit-box" viewBox="0 0 520 470" role="img" aria-label="Tudo learning box, ages 2 to 5, with the six sample products around it">
      <defs>
        <linearGradient id="front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DCBC90" />
          <stop offset="1" stopColor="#C9A274" />
        </linearGradient>
        <linearGradient id="side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#B88E5D" />
          <stop offset="1" stopColor="#A47B4C" />
        </linearGradient>
        <linearGradient id="top" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#E6CBA3" />
          <stop offset="1" stopColor="#D8B887" />
        </linearGradient>
        <radialGradient id="floor" cx="0.5" cy="0.45" r="0.7">
          <stop offset="0" stopColor="#FBF6EE" />
          <stop offset="1" stopColor="#EFE4D3" />
        </radialGradient>
        <pattern id="fibre" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="#7A5530" opacity="0.18" />
          <circle cx="4" cy="4" r="0.5" fill="#fff" opacity="0.2" />
        </pattern>
        <filter id="lift" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#5A3D1E" floodOpacity="0.22" />
        </filter>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <rect width="520" height="470" fill="url(#floor)" />

      {/* Box shadow on the floor */}
      <ellipse cx="275" cy="338" rx="180" ry="22" fill="#5A3D1E" opacity="0.22" filter="url(#soft)" />

      {/* Rope handle, behind the front edge of the lid */}
      <path d="M228 112C226 40 312 40 310 104" fill="none" stroke="#E9DFCC" strokeWidth="8" strokeLinecap="round" />
      <path d="M228 112C226 40 312 40 310 104" fill="none" stroke="#CFC2A8" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 5" />

      {/* Top, side and front of the box */}
      <path d="M130 120L195 88H425L360 120Z" fill="url(#top)" />
      <path d="M130 120L195 88H425L360 120Z" fill="url(#fibre)" />
      <ellipse cx="228" cy="110" rx="6" ry="3" fill="#6E4C28" />
      <ellipse cx="310" cy="104" rx="6" ry="3" fill="#6E4C28" />
      <path d="M360 120L425 88V305L360 338Z" fill="url(#side)" />
      <path d="M360 120L425 88V305L360 338Z" fill="url(#fibre)" />
      <rect x="130" y="120" width="230" height="218" fill="url(#front)" />
      <rect x="130" y="120" width="230" height="218" fill="url(#fibre)" />
      <path d="M130 120H360L425 88" fill="none" stroke="#F1DDBD" strokeWidth="1.5" />

      {/* Front label */}
      <image href="/logo.svg" x="146" y="134" width="124" height="51" />
      <text x="150" y="208" fontSize="8.5" fontWeight="700" letterSpacing="2.4" fill="#4B2A7B" opacity="0.75">EDUCATIONAL PLAYKIT</text>
      <text x="149" y="234" fontSize="23" fontWeight="800" fill="#4B2A7B">Learning Box</text>
      <rect x="274" y="134" width="72" height="62" rx="6" fill="#4B2A7B" />
      <text x="310" y="152" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="1.2" fill="#fff">AGES</text>
      <text x="310" y="176" textAnchor="middle" fontSize="20" fontWeight="800" fill="#FFC93C">2–5</text>
      <text x="310" y="189" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff" opacity="0.85">6 PRODUCTS</text>
      <rect x="252" y="244" width="94" height="28" rx="14" fill="#4B2A7B" />
      <BoxIcons x={260} y={249} />

      {/* Side print */}
      <text transform="translate(398 300) rotate(-90) skewX(-26)" fontSize="15" fontWeight="800" letterSpacing="3" fill="#4B2A7B" opacity="0.55">tudo · learning box</text>

      {/* Activity guide card leaning on the box */}
      <g transform="rotate(-8 205 300)" filter="url(#lift)">
        <rect x="160" y="250" width="92" height="112" rx="5" fill="#4B2A7B" />
        <text x="170" y="272" fontSize="8" fontWeight="700" letterSpacing="1" fill="#FFC93C">ACTIVITY GUIDE</text>
        <text x="170" y="288" fontSize="11" fontWeight="800" fill="#fff">Play &amp; learn</text>
        <rect x="186" y="300" width="40" height="40" rx="3" fill="#fff" />
        <path d="M191 305h10v10h-10zM211 305h10v10h-10zM191 325h10v10h-10zM206 320h5v5h-5zM214 328h7v7h-7zM206 330h4v5h-4z" fill="#4B2A7B" />
      </g>

      {/* Products around the box */}
      <Product name="abacus" x={10} y={190} w={150} rotate={-4} />
      <Product name="blocks" x={392} y={238} w={118} rotate={3} />
      <Product name="pegs" x={20} y={330} w={150} rotate={-3} />
      <Product name="pizza" x={190} y={350} w={130} />
      <Product name="fishing" x={340} y={344} w={150} rotate={2} />
      <Product name="chunky" x={262} y={276} w={104} rotate={-2} />
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
