import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "For Teachers" };

// Teacher support we are building. Status tells visitors how far along each part is.
const support = [
  {
    name: "Online guide with every kit",
    status: "In development",
    text: "Simple activities for every piece in the kit, sorted by age group and the skill it builds.",
  },
  {
    name: "Online training",
    status: "Planned",
    text: "Short videos that show how to use the kit and plan play-based lessons.",
  },
  {
    name: "Monthly activity ideas",
    status: "Planned",
    text: "New activities every month, including ideas that only need everyday materials.",
  },
  {
    name: "Teacher workshops",
    status: "Later",
    text: "Hands-on sessions where ECD teachers try activities together and learn from each other.",
  },
  {
    name: "Teacher community",
    status: "Later",
    text: "A place to share the activities that work in your classroom.",
  },
];

export default function Teachers() {
  return (
    <main className="teachers">
      <h1>For Teachers</h1>
      <p className="about-intro">
        Toys help, but teachers make the difference. We are building simple,
        practical support so every ECD teacher can get more learning out of
        every kit, and out of everyday things.
      </p>

      <section>
        <h2>Learning doesn&apos;t have to be expensive</h2>
        <p className="teachers-text">
          Singing, stories, movement and everyday materials like containers,
          paper and stones build children&apos;s language, thinking and motor
          skills. What often makes the difference is knowing how to use them.
          That is what our teacher support is for.
        </p>
      </section>

      <section>
        <h2>What we are building</h2>
        <div className="about-grid">
          {support.map((item) => (
            <div className="about-card" key={item.name}>
              <span className="badge">{item.status}</span>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Be the first to know</h2>
        <p className="teachers-text">
          Tell us what you would find useful, and we will let you know when the
          first guide and workshops are ready.
        </p>
        <EnquiryForm source="Teacher support">
          <label>
            Name <input name="name" type="text" required />
          </label>
          <label>
            Email <input name="email" type="email" required />
          </label>
          <label>
            Centre or organisation <input name="centre" type="text" />
          </label>
          <label>
            I&apos;m interested in
            <select name="interest" required defaultValue="">
              <option value="">Choose…</option>
              <option>Activity guides</option>
              <option>Online training</option>
              <option>Teacher workshops</option>
              <option>All of these</option>
            </select>
          </label>
          <label className="checkbox">
            <input name="consent" type="checkbox" required /> I agree that my
            details may be stored to contact me about this.
          </label>
          <button className="btn" type="submit">
            Keep me posted
          </button>
        </EnquiryForm>
      </section>
    </main>
  );
}
