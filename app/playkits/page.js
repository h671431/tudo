import Link from "next/link";

export const metadata = { title: "The Playkits" };

// Kits and add-ons from the TUDO Business & Product Plan (October 2026).
// Prices are planned price points; contents are the target specification.
const classroomKits = [
  {
    name: "TUDO Essentials",
    tag: "Entry classroom kit",
    price: "R1,999",
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
    price: "R4,999",
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
    price: "R699",
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

const addOns = [
  {
    name: "Refresh Pack",
    price: "R299",
    text: "12 new activity cards and six replacement or extension pieces for your kit.",
  },
  {
    name: "Classroom Care",
    price: "R149 / month",
    text: "Monthly printable activities, a group Q&A with our ECD lead and replacement discounts. Cancel anytime.",
  },
  {
    name: "Educator workshop",
    price: "R1,500 / session",
    text: "A practical half-day workshop for up to 12 educators. Can be sponsored by NGOs.",
  },
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
              <p className="kit-price">{kit.price}</p>
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
        <h2>Add-ons and support</h2>
        <div className="about-grid">
          {addOns.map((item) => (
            <div className="about-card" key={item.name}>
              <h3>{item.name}</h3>
              <p className="kit-price small-price">{item.price}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="teacher-link">
        <h2>Paying for your kit</h2>
        <p>
          For now, register your interest and we will send you a quote and an
          invoice. Online card payments with Paystack are coming soon. Centres
          own their kit: Classroom Care is optional, not a rental.
        </p>
      </section>

      <p className="note">
        Planned prices. Final contents and prices are confirmed in your quote.
        All kits are for supervised use by children aged 3 and up.
      </p>
    </main>
  );
}
