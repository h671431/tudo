import Link from "next/link";
import { KitBox, SampleGrid } from "../../components/KitPreview";

export const metadata = { title: "The Playkits" };

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
        <KitBox />

        <div>
          <span className="badge">In development</span>
          <h2>Complete Playkit</h2>
          <p>
            Everything an early learning centre needs to get started. We pick
            products from different brands using early childhood and health
            research, test them with teachers and pack them into one kit, with
            an online guide that shows how to use every piece.
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
              <strong>Price:</strong> the lowest we can offer, made for
              low-income centres. Confirmed soon.
            </li>
            <li>
              <strong>Delivery:</strong> free to your centre
            </li>
          </ul>
          <Link className="btn" href="/ecd">
            Register interest
          </Link>
        </div>
      </section>

      <section>
        <h2>Inside the sample kit</h2>
        <p className="teachers-text">
          The first products we are testing for the kit. Each one is chosen for
          a skill children need before school.
        </p>
        <SampleGrid />
        <p className="note">
          Drawings of sample products, not photos. The final contents depend on
          the brands we partner with.
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
