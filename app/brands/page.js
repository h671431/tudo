import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "For Brands" };

// How a partner brand's product ends up in a Tudo kit.
const steps = [
  { name: "Tell us about it", text: "Send us your product and what it teaches." },
  { name: "We test it", text: "We check it against the skills each kit builds, and with teachers." },
  { name: "It goes in a kit", text: "Your product reaches centres as part of a complete, guided kit." },
  { name: "You hear back", text: "Feedback from teachers on how children use it." },
];

// What we look for when choosing products.
const criteria = [
  { name: "Builds a skill", text: "Language, early maths, motor skills or social play." },
  { name: "Safe and durable", text: "Made to last in a busy classroom." },
  { name: "Affordable at scale", text: "A price that works for centres in low-income communities." },
  { name: "Fits the kit", text: "Works alongside the other pieces and our activity guide." },
];

export default function Brands() {
  return (
    <main className="brands">
      <h1>For Brands</h1>
      <p className="about-intro">
        Tudo puts together learning kits from products made by different
        companies. If you make toys, books or learning materials for young
        children, we would like to hear from you.
      </p>

      <section>
        <h2>How it works</h2>
        <div className="cards">
          {steps.map((step, n) => (
            <div className="card" key={step.name}>
              <div className="step-num">{n + 1}</div>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>What we look for</h2>
        <div className="about-grid">
          {criteria.map((item) => (
            <div className="about-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Get your product in a kit</h2>
        <EnquiryForm source="Brand partner">
          <label>
            Company <input name="company" type="text" required />
          </label>
          <label>
            Name <input name="name" type="text" required />
          </label>
          <label>
            Email <input name="email" type="email" required />
          </label>
          <label>
            Website <input name="website" type="url" />
          </label>
          <label>
            Your product and what it teaches
            <textarea name="product" rows={4} required></textarea>
          </label>
          <label className="checkbox">
            <input name="consent" type="checkbox" required /> I agree that my
            details may be stored to answer this enquiry.
          </label>
          <button className="btn" type="submit">
            Send
          </button>
        </EnquiryForm>
      </section>
    </main>
  );
}
