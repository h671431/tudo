import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "For ECDs" };

export default function Ecd() {
  return (
    <main>
      <h1>For ECD centres</h1>
      <p>
        Practical learning resources for your classroom. Prices and product
        specs are confirmed per order.
      </p>

      <h2>Before you buy – a quick checklist</h2>
      <ul>
        <li>How many children and which age groups?</li>
        <li>Which learning goals do you want to support?</li>
        <li>Where will the kits be stored and cleaned?</li>
        <li>What is your budget and when do you need them?</li>
      </ul>

      <h2>5-minute enquiry</h2>
      <EnquiryForm source="ECD centre">
        <label>
          Centre name <input name="centre" type="text" required />
        </label>
        <label>
          Region <input name="region" type="text" required />
        </label>
        <label>
          Your role <input name="role" type="text" />
        </label>
        <label>
          Email <input name="email" type="email" required />
        </label>
        <label>
          Age group
          <select name="age_group" required defaultValue="">
            <option value="">Choose…</option>
            <option>0–2 years</option>
            <option>3–4 years</option>
            <option>5–6 years</option>
          </select>
        </label>
        <label>
          Kit you are interested in
          <select name="kit" defaultValue="">
            <option value="">Not sure yet</option>
            <option>TUDO Essentials</option>
            <option>TUDO Discovery</option>
          </select>
        </label>
        <label>
          Estimated quantity <input name="quantity" type="number" min="1" />
        </label>
        <label className="checkbox">
          <input name="consent" type="checkbox" required /> I agree that my details may be
          stored to answer this enquiry.
        </label>
        <button className="btn" type="submit">
          Send enquiry
        </button>
      </EnquiryForm>
    </main>
  );
}
