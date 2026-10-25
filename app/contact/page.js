import DemoForm from "../../components/DemoForm";

export const metadata = { title: "About & Contact" };

export default function Contact() {
  return (
    <main>
      <h1>About us</h1>
      <p>
        Tudo is an independent, proposed distribution venture connecting local
        youth makers with the educators and organisations that need
        early-learning materials.
      </p>
      <p className="note">
        The distribution agreement, brand ownership and commercial terms are
        still pending validation.
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
