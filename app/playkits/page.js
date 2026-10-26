import Link from "next/link";

export const metadata = { title: "The Playkits" };

// Contents of the Complete Playkit, grouped as in Siyakholwa's catalogue.
const inside = [
  {
    title: "Wooden & sewn",
    items: [
      "Wooden jigsaw puzzles (12 and 20 pieces)",
      "Wooden blocks in a tub",
      "Wooden cars",
      "Board pieces: dice, shapes, animals, play money",
      "Hand and finger puppets",
      "Dolls in pairs",
    ],
  },
  {
    title: "Art & stationery",
    items: [
      "Colour pencils and jumbo crayons",
      "Scissors (right- and left-handed)",
      "Tempera paint set and brushes",
      "Glue, markers and Prestik",
      "Craft sticks and a ream of paper",
    ],
  },
  {
    title: "Play & motor skills",
    items: [
      "Shape sorter and stacking cups",
      "Plastic bricks and counting cubes",
      "Lacing shapes with tweezers",
      "Balls and skipping ropes",
      "Animal set, pegs and cookie cutters",
    ],
  },
  {
    title: "For the classroom",
    items: [
      "Sturdy storage container",
      "Basic first aid kit",
      "Daily routine line",
    ],
  },
];

// Kits we are exploring. None of these are for sale yet.
const comingLater = [
  {
    name: "Health & Safety Kit",
    text: "What centres need to register, like a mattress and a bucket with a tap.",
  },
  {
    name: "Skills Kit",
    text: "Focused on fine motor skills, counting and early problem-solving.",
  },
  {
    name: "Build-your-own Kit",
    text: "Pick the pieces that fit your children, your space and your budget.",
  },
  {
    name: "Sports Kit",
    text: "Balls, ropes and outdoor games for active play.",
  },
  {
    name: "Story Kit",
    text: "Books and dolls that look like the children who play with them.",
  },
];

export default function Playkits() {
  return (
    <main className="playkits">
      <h1>The Playkits</h1>
      <p className="lead">
        One complete kit today, with more on the way.
      </p>

      <section className="kit-feature">
        <div className="placeholder-img kit-placeholder">Photo coming soon</div>

        <div>
          <span className="badge">Available now</span>
          <h2>Complete Playkit</h2>
          <p>
            Everything an early learning programme needs to get started: about
            50–60 items for creative, physical and early maths play. The wooden
            toys, puppets and cloth items are made by the youth makers in
            Keiskammahoek, and the rest is carefully sourced.
          </p>
          <ul className="facts">
            <li>
              <strong>Items:</strong> about 50–60
            </li>
            <li>
              <strong>Packed in:</strong> a sturdy storage container
            </li>
            <li>
              <strong>For:</strong> ECD centres and early learning programmes
            </li>
            <li>
              <strong>Price:</strong> on request
            </li>
          </ul>
          <Link className="btn" href="/ecd">
            Request a quote
          </Link>
        </div>
      </section>

      <section>
        <h2>What&apos;s inside</h2>
        <div className="inside">
          {inside.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="note">
          Contents can vary slightly between kits. Age guidance per item is
          still being reviewed.
        </p>
      </section>

      <section className="coming">
        <p className="coming-label">Coming later</p>
        <h2>Kits we are working on</h2>
        <p>
          Ideas in development, shaped by what centres tell us they need. Not
          available yet.
        </p>
        <div className="coming-grid">
          {comingLater.map((kit) => (
            <div className="coming-card" key={kit.name}>
              <h3>{kit.name}</h3>
              <p>{kit.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
