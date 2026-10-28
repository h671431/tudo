import Link from "next/link";
import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "About & Contact" };

export default function Contact() {
  return (
    <main className="about">
      <h1>About us</h1>
      <p className="about-intro">
        Tudo is a young company with big ambitions. We build learning kits for
        early childhood development (ECD) centres in low-income communities,
        and we aim to beat everyone else on price.
      </p>

      <section className="about-grid">
        <div className="about-card">
          <h3>The problem</h3>
          <p>
            Centres in low-income communities can&apos;t afford good learning
            materials, so the children who need them most go without.
          </p>
        </div>
        <div className="about-card">
          <h3>Our solution</h3>
          <p>
            We curate the best learning products into one kit at the lowest
            price we can, chosen using early childhood and child health
            research, with an online guide for teachers.
          </p>
        </div>
        <div className="about-card">
          <h3>Business model</h3>
          <p>
            Centres and families buy a kit once. A monthly subscription adds new
            toys, teacher guides and a community, and brands partner with us.
          </p>
        </div>
        <div className="about-card">
          <h3>Where we&apos;re going</h3>
          <p>
            From South Africa to low-income communities around the world, and
            to Norway.
          </p>
        </div>
      </section>

      <p className="note">
        We are at an early stage. Products, prices and terms are still being
        finalised. <Link href="/team">Meet the team</Link>
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
