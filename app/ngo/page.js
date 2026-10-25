import DemoForm from "../../components/DemoForm";

export const metadata = { title: "For NGOs & CSI" };

export default function Ngo() {
  return (
    <main>
      <h1>For NGOs &amp; CSI programmes</h1>
      <p>
        Supply playkits to the centres you support, made by youth makers in
        South Africa.
      </p>

      <h2>Institutional enquiry</h2>
      <DemoForm>
        <label>
          Organisation <input type="text" required />
        </label>
        <label>
          Email <input type="email" required />
        </label>
        <label>
          Region(s) <input type="text" required />
        </label>
        <label>
          Programme volume (number of kits) <input type="number" min="1" />
        </label>
        <label>
          Desired delivery date <input type="date" />
        </label>
        <label>
          Reporting expectations <textarea rows={3}></textarea>
        </label>
        <label className="checkbox">
          <input type="checkbox" /> I would like a sample order first.
        </label>
        <label className="checkbox">
          <input type="checkbox" required /> I agree that my details may be
          stored to answer this enquiry.
        </label>
        <button className="btn" type="submit">
          Send enquiry
        </button>
      </DemoForm>
    </main>
  );
}
