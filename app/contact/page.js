import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "About & Contact" };

export default function Contact() {
  return (
    <main className="about">
      <h1>About us</h1>
      <p className="about-intro">
        Tudo is a young company that builds affordable learning kits for early
        childhood development (ECD) centres in South Africa, from the best
        products different brands make.
      </p>

      <section className="about-grid">
        <div className="about-card">
          <h3>Who we are</h3>
          <p>
            A student startup in UCT&apos;s MakersForge programme, building
            Tudo as a business.
          </p>
        </div>
        <div className="about-card">
          <h3>Why we exist</h3>
          <p>
            Many children start school behind. Good learning materials are
            often too expensive for the centres that need them most.
          </p>
        </div>
        <div className="about-card">
          <h3>What we do</h3>
          <p>
            We choose and test products, build them into kits with an online
            guide, and deliver to centres, NGOs and CSI funders.
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
        We are at an early stage. Products, prices and terms are still being
        finalised.
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
