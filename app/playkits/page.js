import Link from "next/link";
import OrderButton from "../../components/OrderButton";

export const metadata = { title: "T-Kits" };

// The two launch kits. Each has one item for each learning area, plus the guide.
const kits = [
  {
    name: "T-Kit 2–3",
    age: "For 2 to 3 years",
    items: [
      ["Learning", "A chunky puzzle with shapes and animals"],
      ["Movement", "Stacking cups to grip, stack and sort"],
      ["Creativity", "Big crayons and a first drawing book"],
      ["Health", "Play set for brushing teeth and washing hands"],
      ["Feelings", "A picture book about feelings"],
    ],
  },
  {
    name: "T-Kit 3–4",
    age: "For 3 to 4 years",
    items: [
      ["Learning", "Counting and matching game"],
      ["Movement", "Lacing shapes for small hands"],
      ["Creativity", "Play dough and shape cutters"],
      ["Health", "Healthy food play set"],
      ["Feelings", "Feelings cards to name and share"],
    ],
  },
];

// What a subscriber gets over the year.
const year = [
  ["Straight away", "Your first kit, with a guide for every piece"],
  ["Every month", "New activities with the same kit, and our parent community"],
  ["Halfway", "A surprise toy your child keeps"],
  ["On the birthday", "The next kit. The old one goes to an ECD centre."],
];

export default function Playkits() {
  return (
    <main className="playkits">
      <h1>T-Kits</h1>
      <p className="tkits-sub">Tools for growing into more.</p>
      <p className="lead">
        Developmental play experiences designed around children&apos;s
        evolving needs. One box for every stage: we choose the toys, you play
        and learn together.
      </p>

      <section className="kit-grid two">
        {kits.map((kit) => (
          <div className="kit-card" key={kit.name}>
            <div className="placeholder-img kit-photo">Photo coming soon</div>
            <div className="kit-info">
              <span className="badge">{kit.age}</span>
              <h2>{kit.name}</h2>
              <ul className="kit-items">
                {kit.items.map(([area, item]) => (
                  <li key={area}>
                    <strong>{area}</strong>
                    <span>{item}</span>
                  </li>
                ))}
                <li>
                  <strong>Guide</strong>
                  <span>Activity cards, DIY ideas and short videos</span>
                </li>
              </ul>
              <div className="kit-actions">
                <OrderButton kit={kit.name} />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="pricing">
        <h2>One simple price</h2>
        <table className="price-table">
          <tbody>
            <tr>
              <th scope="row">First month</th>
              <td>R299</td>
              <td>Your first kit is sent straight away</td>
            </tr>
            <tr>
              <th scope="row">Every month after</th>
              <td>R149</td>
              <td>Activities, community, a surprise and your next kit</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Your year with TUDO</h2>
        <ol className="year">
          {year.map(([when, what]) => (
            <li key={when}>
              <strong>{when}</strong>
              <span>{what}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="teacher-link">
        <h2>Return, refresh, give</h2>
        <p>
          When your child moves on, send the old kit back. We clean and refill
          it, and sponsors give it to an ECD centre that can&apos;t afford one.{" "}
          <Link href="/contact">Sponsor a centre</Link>
        </p>
      </section>

      <p className="note">
        Kit contents may change slightly. All kits are for supervised play and
        follow the age labels on each product.
      </p>
    </main>
  );
}
