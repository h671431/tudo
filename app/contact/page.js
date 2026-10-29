import ContactForms from "../../components/ContactForms";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <main className="contact">
      <h1>Contact</h1>
      <p className="lead">
        Let&apos;s give every child a strong start, together. Are you a parent?{" "}
        <a href="/#waitlist">Join the waiting list</a>.
      </p>
      <ContactForms />
    </main>
  );
}
