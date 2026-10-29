import Link from "next/link";

export const metadata = { title: "Meet the Team" };

// The team behind Tudo and what each of us studies. Add a photo to
// public/team/ and set `photo` to show it.
const team = [
  {
    name: "Zwelihle",
    study: "Medicine",
    goal: "Wants Tudo to reach every ECD centre that is still missing good learning materials.",
  },
  {
    name: "Rhonda",
    study: "Statistics",
    goal: "Wants to get Tudo kits into centres, NGOs and CSI programmes across South Africa.",
  },
  {
    name: "Anele",
    study: "Social Work",
    goal: "Wants teachers, partners and brands to understand why play matters for learning.",
  },
  {
    name: "Hannah",
    study: "Software Engineering",
    goal: "Wants Tudo to be a business that can grow, and to bring it to Norway one day.",
  },
  {
    name: "Israel",
    study: "Computer Science",
    goal: "Wants to show investors and partners what Tudo can become.",
  },
];

export default function Team() {
  return (
    <main className="team-page">
      <h1>Meet the Team</h1>
      <p className="about-intro">
        Five students from five different fields, because real problems need
        different perspectives. We believe every child deserves good learning:
        parents shouldn&apos;t have to stress about what their child needs, and
        families and ECD centres with less should get the same strong start.
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
            <p>{person.goal}</p>
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
