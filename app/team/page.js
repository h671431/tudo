import Link from "next/link";

export const metadata = { title: "Meet the Team" };

// The team behind Tudo. Add a photo to public/team/ and set `photo` to show it.
const team = [
  {
    name: "Zwelihle",
    role: "CEO & Project Lead",
    background: "Studies Medicine.",
    goal: "Wants Tudo to reach every ECD centre that is still missing good learning materials.",
  },
  {
    name: "Rhonda",
    role: "Sales",
    background: "Studies Statistics.",
    goal: "Wants to get Tudo kits into centres, NGOs and CSI programmes across South Africa.",
  },
  {
    name: "Anele",
    role: "Communication",
    background: "Background in Social Development and Sociology.",
    goal: "Wants teachers, partners and brands to understand why play matters for learning.",
  },
  {
    name: "Hannah",
    role: "Finance & Tech",
    background: "Studies IT at HVL, Western Norway University of Applied Sciences.",
    goal: "Wants Tudo to be a business that can grow, and to bring it to Norway one day.",
  },
  {
    name: "Israel",
    role: "Tech & Pitch",
    background: "Studies Computer Science.",
    goal: "Wants to show investors and partners what Tudo can become.",
  },
];

export default function Team() {
  return (
    <main className="team-page">
      <h1>Meet the Team</h1>
      <p className="about-intro">
        We are five students from five different fields, in the MakersForge
        programme at the University of Cape Town. Solving real problems takes
        different perspectives. We are building Tudo into a company that aims high: good
        learning for every child whose centre can&apos;t afford it.
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
            <span className="badge">{person.role}</span>
            {person.background && <p className="small">{person.background}</p>}
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
