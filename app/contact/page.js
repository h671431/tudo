import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "Contact" };

// Who we want to hear from, besides parents (they join the waiting list).
const partners = [
  {
    id: "sponsors",
    name: "Sponsors & NPOs",
    text: "Fund refreshed TUDO kits for ECD centres that can't afford them. We report back on every centre you support.",
  },
  {
    id: "brands",
    name: "Brands",
    text: "Get your educational products into TUDO kits and in front of the families who need them.",
  },
];

export default function Contact() {
  return (
    <main className="contact">
      <h1>Contact</h1>
      <p className="lead">Let&apos;s give every child a strong start, together.</p>

      <section className="about-grid partner-grid">
        {partners.map((p) => (
          <a className="about-card partner-card" href="#contact-form" id={p.id} key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
            <span className="partner-link">Get in touch →</span>
          </a>
        ))}
      </section>

      <section id="contact-form">
        <h2>Send us a message</h2>
        <EnquiryForm source="Contact">
          <label>
            I&apos;m contacting you as
            <select name="type" required defaultValue="">
              <option value="">Choose…</option>
              <option>Sponsor or NPO</option>
              <option>Brand</option>
              <option>ECD centre</option>
              <option>Parent</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Name <input name="name" type="text" required />
          </label>
          <label>
            Organisation <input name="organisation" type="text" />
          </label>
          <label>
            Email <input name="email" type="email" required />
          </label>
          <label>
            Message <textarea name="message" rows={4} required></textarea>
          </label>
          <label className="checkbox">
            <input name="consent" type="checkbox" required /> I agree that my
            details may be stored to answer this message.
          </label>
          <button className="btn" type="submit">
            Send
          </button>
        </EnquiryForm>
      </section>
    </main>
  );
}
