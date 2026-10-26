import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "About & Contact" };

export default function Contact() {
  return (
    <main className="about">
      <h1>About us</h1>
      <p className="about-intro">
        Tudo is a young startup that gets quality playkits to early childhood
        development (ECD) centres in South Africa, with toys made by young
        people in the Eastern Cape.
      </p>

      <section className="about-grid">
        <div className="about-card">
          <h3>Who we are</h3>
          <p>
            Students in UCT&apos;s MakersForge programme, working with
            Siyakholwa Development Foundation, an Eastern Cape non-profit since
            2001.
          </p>
        </div>
        <div className="about-card">
          <h3>Why we exist</h3>
          <p>
            Many ECD centres lack learning materials, and many young people
            lack work. We tackle both.
          </p>
        </div>
        <div className="about-card">
          <h3>What we do</h3>
          <p>
            We sell playkits to NGOs, CSI funders and ECD programmes, and
            handle ordering and delivery.
          </p>
        </div>
        <div className="about-card">
          <h3>Where we&apos;re going</h3>
          <p>
            A monthly subscription, new kits, and every child with good things
            to learn and play with.
          </p>
        </div>
      </section>

      <p className="note">
        We are at an early stage. The agreement with Siyakholwa, prices and
        terms are still being finalised.
      </p>

      <h2>Contact</h2>
      <EnquiryForm source="Contact">
        <label>
          Name <input name="name" type="text" required />
        </label>
        <label>
          Email <input name="email" type="email" required />
        </label>
        <label>
          Message <textarea name="message" rows={4} required></textarea>
        </label>
        <label className="checkbox">
          <input name="consent" type="checkbox" required /> I agree that my details may be
          stored to answer this message.
        </label>
        <button className="btn" type="submit">
          Send
        </button>
      </EnquiryForm>
    </main>
  );
}
