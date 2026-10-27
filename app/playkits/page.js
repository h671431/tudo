import Link from "next/link";

export const metadata = { title: "The Playkits" };

// What the Complete Playkit covers, grouped by the skill each piece builds.
// The exact products depend on which brands we partner with.
const inside = [
  {
    title: "Language & stories",
    items: ["Picture books", "Puppets for storytelling", "Picture and word cards"],
  },
  {
    title: "Early maths",
    items: ["Counting cubes", "Shape sorter", "Puzzles of different sizes"],
  },
  {
    title: "Motor skills",
    items: ["Building blocks", "Lacing and threading", "Balls and skipping ropes"],
  },
  {
    title: "Creative & social play",
    items: ["Crayons, paint and paper", "Role-play toys", "Games to play together"],
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
        Learning kits built from the best products we can find, chosen for
        the skill each piece builds.
      </p>

      <section className="kit-feature">
        <div className="placeholder-img kit-placeholder">Photo coming soon</div>

        <div>
          <span className="badge">In development</span>
          <h2>Complete Playkit</h2>
          <p>
            Everything an early learning centre needs to get started. We pick
            products from different brands, test them with teachers and pack
            them into one kit, with an online guide that shows how to use every
            piece.
          </p>
          <ul className="facts">
            <li>
              <strong>Built around:</strong> language, maths, motor skills and play
            </li>
            <li>
              <strong>Comes with:</strong> an online activity guide
            </li>
            <li>
              <strong>For:</strong> ECD centres and early learning programmes
            </li>
            <li>
              <strong>Price:</strong> made for low-income centres, confirmed soon
            </li>
          </ul>
          <Link className="btn" href="/ecd">
            Register interest
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
          Examples of what a kit can include. The final contents depend on the
          products and brands we choose.
        </p>
      </section>

      <section className="teacher-link">
        <h2>More than toys</h2>
        <p>
          Every kit comes with an online guide, and we are building more
          support to help teachers get the most out of it.{" "}
          <Link href="/teachers">See our teacher support</Link>
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
