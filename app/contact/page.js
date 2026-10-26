import DemoForm from "../../components/DemoForm";

export const metadata = { title: "About & Contact" };

export default function Contact() {
  return (
    <main className="about">
      <h1>About us</h1>
      <p className="lead">
        Tudo is a young startup that gets quality playkits to early childhood
        development (ECD) centres in South Africa, with toys made by young
        people in the Eastern Cape.
      </p>

      <section className="about-grid">
        <div>
          <h3>Who we are</h3>
          <p>
            A team of students from the UCT MakersForge programme. We partner
            with Siyakholwa Development Foundation, an Eastern Cape non-profit
            that has worked with communities since 2001 and runs the youth-led
            workshop where the kits are made.
          </p>
        </div>
        <div>
          <h3>Why we exist</h3>
          <p>
            Many ECD centres in townships and rural areas lack basic learning
            materials, because commercial toys are expensive and donations
            are unpredictable. At the same time, too many young people have
            no work. Siyakholwa can make the kits; what it needs is buyers.
          </p>
        </div>
        <div>
          <h3>What we do</h3>
          <p>
            We sell playkits to NGOs, CSI funders and early learning
            programmes, and take care of ordering and delivery. Next, a
            monthly subscription will add new pieces to the kit as the
            children grow.
          </p>
        </div>
        <div>
          <h3>Where we&apos;re going</h3>
          <p>
            Every child with good things to learn and play with, made by young
            people building their own futures. We start in South Africa, with
            new kits and new markets to follow.
          </p>
        </div>
      </section>

      <p className="note">
        We are at an early stage. The agreement with Siyakholwa, prices and
        terms are still being finalised.
      </p>

      <h2>Contact</h2>
      <DemoForm>
        <label>
          Name <input type="text" required />
        </label>
        <label>
          Email <input type="email" required />
        </label>
        <label>
          Message <textarea rows={4} required></textarea>
        </label>
        <label className="checkbox">
          <input type="checkbox" required /> I agree that my details may be
          stored to answer this message.
        </label>
        <button className="btn" type="submit">
          Send
        </button>
      </DemoForm>
    </main>
  );
}
