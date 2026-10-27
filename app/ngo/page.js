import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "For NGOs & CSI" };

export default function Ngo() {
  return (
    <main>
      <h1>For NGOs &amp; CSI programmes</h1>
      <p>
        Supply affordable learning kits to the centres you support, each with
        an online guide for teachers.
      </p>

      <h2>Institutional enquiry</h2>
      <EnquiryForm source="NGO / CSI">
        <label>
          Organisation <input name="organisation" type="text" required />
        </label>
        <label>
          Email <input name="email" type="email" required />
        </label>
        <label>
          Region(s) <input name="regions" type="text" required />
        </label>
        <label>
          Programme volume (number of kits) <input name="kits" type="number" min="1" />
        </label>
        <label>
          Desired delivery date <input name="delivery_date" type="date" />
        </label>
        <label>
          Reporting expectations <textarea name="reporting" rows={3}></textarea>
        </label>
        <label className="checkbox">
          <input name="sample_first" type="checkbox" /> I would like a sample order first.
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
