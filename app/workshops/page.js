export const metadata = { title: "Workshops" };

// Teacher support we plan to offer after launch.
const plans = [
  ["Hands-on workshops", "ECD teachers try the activities together and learn how to get the most out of every kit."],
  ["A teacher network", "Teachers share what works in their classroom and support each other."],
  ["Mentorship", "Experienced ECD practitioners guide new centres over time."],
];

export default function Workshops() {
  return (
    <main className="soon-page">
      <span className="badge">Coming later</span>
      <h1>Workshops &amp; Network</h1>
      <p className="lead">
        Toys help, but teachers make the difference. After launch, we&apos;ll
        support ECD teachers and partners in their communities.
      </p>
      <div className="about-grid">
        {plans.map(([name, text]) => (
          <div className="about-card" key={name}>
            <h3>{name}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p>
        <a className="btn" href="/#waitlist">
          Get updates
        </a>
      </p>
    </main>
  );
}
