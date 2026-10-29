export const metadata = { title: "TUDO Family" };

// The parent community we are building.
const ideas = [
  ["Share", "Tips and ideas from other parents on the same journey."],
  ["Ask", "Questions answered by people who know early learning."],
  ["Grow", "New activities every month, for every stage."],
];

export default function Family() {
  return (
    <main className="soon-page">
      <span className="badge">Coming soon</span>
      <h1>TUDO Family</h1>
      <p className="lead">
        A community where parents share what works, support each other and
        learn together, from the first kit to school.
      </p>
      <div className="about-grid">
        {ideas.map(([name, text]) => (
          <div className="about-card" key={name}>
            <h3>{name}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p>
        <a className="btn" href="/#waitlist">
          Join waiting list
        </a>
      </p>
    </main>
  );
}
