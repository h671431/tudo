import Link from "next/link";

export const metadata = { title: "The Playkits" };

// Kits from the TUDO Business & Product Plan (October 2026). Contents are the
// target specification. Prices are not set yet, so none are shown.
const classroomKits = [
  {
    name: "TUDO Essentials",
    tag: "Entry classroom kit",
    areas: "Five learning areas",
    items: [
      "Maths & sorting: number shapes, counters and linking cubes",
      "Letters & stories: alphabet, picture and feelings cards",
      "Small hands: lacing board and a chunky animal puzzle",
      "Movement: shape beanbags and challenge cards",
      "Creative expression: crayons, chalks and templates",
      "18 activity cards and a 4-week teaching guide",
    ],
    href: "/ecd",
  },
  {
    name: "TUDO Discovery",
    tag: "Full classroom kit",
    areas: "Seven activity stations",
    items: [
      "Number Explorers, Shapes & Patterns, Letters & Sounds",
      "Little Hands & Senses, Move & Coordinate",
      "Create & Pretend, Speak & Explore",
      "36 activity cards and a 12-week rotation plan",
      "Labelled station pouches and QR video demonstrations",
    ],
    href: "/ecd",
  },
  {
    name: "TUDO Home Explorer",
    tag: "For families",
    areas: "Maths, language, patterns and stories",
    items: [
      "Counters, number cards and picture/word cards",
      "Pattern pieces in a reusable pouch",
      "12 family activity cards",
      "A 6-week parent guide",
    ],
    href: "/contact",
  },
];

// What the monthly subscription adds on top of the kit.
const subscription = [
  { name: "New toys", text: "Fresh pieces and materials as the children grow." },
  { name: "Guides for teachers", text: "New activities and teaching ideas every month." },
  { name: "A community", text: "Share what works with other educators and parents." },
];

export default function Playkits() {
  return (
    <main className="playkits">
      <h1>The Playkits</h1>
      <p className="lead">
        An early-learning system, not a random box of toys. Every kit comes
        with activity cards and a guide, so teachers and parents know exactly
        how to use each piece.
      </p>

      <section>
        <h2>Our kits</h2>
        <div className="kit-grid">
          {classroomKits.map((kit) => (
            <div className="kit-card" key={kit.name}>
              <div className="placeholder-img kit-photo">Photo coming soon</div>
              <span className="badge">{kit.tag}</span>
              <h3>{kit.name}</h3>
              <p className="kit-price">One-time purchase</p>
              <p className="kit-areas">{kit.areas}</p>
              <ul>
                {kit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="kit-actions">
                <Link className="btn" href={kit.href}>
                  Register interest
                </Link>
                <span className="pay-soon">Pay online with Paystack · coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Keep growing with a subscription</h2>
        <p className="teachers-text">
          Buy your kit once. Then choose a monthly subscription if you want
          more.
        </p>
        <div className="about-grid">
          {subscription.map((item) => (
            <div className="about-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Refills and more brands</h2>
        <p className="teachers-text">
          Refills and replacement pieces keep your kit complete. And as more
          brands join us, new kits and products will be added.{" "}
          <Link href="/brands">Are you a brand?</Link>
        </p>
      </section>

      <section className="teacher-link">
        <h2>Paying for your kit</h2>
        <p>
          For now, register your interest and we will send you a quote and an
          invoice. Online card payments with Paystack are coming soon. You own
          your kit, and the subscription is optional.
        </p>
      </section>

      <p className="note">
        Prices are not set yet. Final contents and prices are confirmed in your
        quote. All kits are for supervised use by children aged 3 and up.
      </p>
    </main>
  );
}
