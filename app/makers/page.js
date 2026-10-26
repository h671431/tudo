export const metadata = { title: "Meet the Makers" };

// Skills the youth are trained in, from Siyakholwa's progress report to OMT.
const skills = [
  "Carpentry",
  "Sewing",
  "Toy-making",
  "Puzzle-making",
  "Quality control",
  "Production planning",
  "Basic business skills",
];

export default function Makers() {
  return (
    <main className="makers">
      <h1>Meet the Makers</h1>
      <p className="lead">
        Our kits are made by young people in Keiskammahoek, Eastern Cape,
        through a youth-led social enterprise run by Siyakholwa Development
        Foundation.
      </p>

      <div className="photos">
        <figure className="photo wide">
          <img
            src="/makers/workshop.jpg"
            alt="A young maker in safety glasses and overalls holds a wooden toy car, with rows of wooden cars and blocks on the table in front"
          />
          <figcaption>Wooden cars and building blocks ready for the kits.</figcaption>
        </figure>
        <figure className="photo">
          <img
            src="/makers/toy-cars.jpg"
            alt="Unpainted wooden toy cars with bolted wheels on a workbench next to a drill"
          />
          <figcaption>Cut, sanded and bolted by hand.</figcaption>
        </figure>
        <figure className="photo">
          <img
            src="/makers/painting.jpg"
            alt="A maker in Siyakholwa overalls fits a wheel on a green painted wooden car"
          />
          <figcaption>Finishing a painted car.</figcaption>
        </figure>
      </div>

      <section>
        <h2>Why it matters</h2>
        <p>
          Many young people in rural and under-resourced communities have no
          access to work. This enterprise gives them a job making playkits for
          early childhood development (ECD) centres, while they build skills
          and earn an income. For many of them, it is their first job.
        </p>
        <p>
          The makers learn that the playkits are not just products. They are
          learning tools that support children&apos;s development, and the
          youth are starting to see themselves as people who can contribute to
          the ECD sector and to their communities.
        </p>
        <blockquote className="quote">
          Youth creating solutions for the next generation.
        </blockquote>
      </section>

      <section>
        <h2>What the makers learn</h2>
        <div className="chips">
          {skills.map((skill) => (
            <span className="chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <p>
          Alongside the craft, they learn teamwork, time management, taking
          responsibility and working towards production targets.
        </p>
      </section>

      <section>
        <h2>Who is Siyakholwa?</h2>
        <p>
          Siyakholwa Development Foundation is a non-profit founded in 2001 in
          the Eastern Cape. Its mission is to alleviate poverty through
          sustainable projects that create jobs, with a focus on early
          childhood development, youth development and food security. It runs
          social enterprises so that its work depends less on grants, and the
          playkit workshop is its second.
        </p>
        <div className="cards">
          <div className="card">
            <div className="step-num">11</div>
            <h3>Young makers</h3>
            <p>Recruited and trained in the first phase.</p>
          </div>
          <div className="card">
            <div className="step-num">50</div>
            <h3>First kits</h3>
            <p>The first production target the team is working towards.</p>
          </div>
          <div className="card">
            <div className="step-num">25</div>
            <h3>Years of ECD and community work</h3>
            <p>Siyakholwa has worked in Eastern Cape communities since 2001.</p>
          </div>
        </div>
      </section>

      <p className="note">
        Figures come from Siyakholwa&apos;s own progress reporting and are not
        independently verified.
      </p>
    </main>
  );
}
