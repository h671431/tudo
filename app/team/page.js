import Link from "next/link";

export const metadata = { title: "Meet the Team" };

// The team behind Tudo and what each of us studies. Add a photo to
// public/team/ and set `photo` to show it.
const team = [
  {
    name: "Zweli",
    study: "Medicine",
  },
  {
    name: "Rhonda",
    study: "Statistics",
  },
  {
    name: "Anele",
    study: "Social Work",
  },
  {
    name: "Hannah",
    photo: "/team/hannah.jpg",
    study: "Software Engineering",
  },
  {
    name: "Israel",
    study: "Computer Science",
  },
];

export default function Team() {
  return (
    <main className="team-page">
      <h1>Meet the Team</h1>
      <p className="about-intro">
        Five students from five different fields, because real problems need
        different perspectives. Parents should be able to focus on their
        child, not on researching what their child needs. And no child should
        start school behind because their family couldn&apos;t afford the right
        start.
      </p>

      <section className="team-grid">
        {team.map((person) => (
          <div className="team-card" key={person.name}>
            {person.photo ? (
              <img src={person.photo} alt={person.name} />
            ) : (
              <div className="placeholder-img">Photo coming soon</div>
            )}
            <h3>{person.name}</h3>
            <span className="badge">{person.study}</span>
          </div>
        ))}
      </section>

      <p>
        <Link className="btn" href="/contact">
          Get in touch
        </Link>
      </p>
    </main>
  );
}
