import Link from "next/link";

export const metadata = { title: "Meet the Team" };

// The team behind Tudo and what each of us studies. Add a photo to
// public/team/ and set `photo` to show it. `bio` is shown on the back of the
// card when it flips; leave it out until the person has written their own.
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
    bio: "From Norway. I bring a master's degree in computer technology, and I want to build that tech know-how into TUDO.",
  },
  {
    name: "Israel",
    photo: "/team/israel.jpg",
    study: "Computer Science",
  },
];

export default function Team() {
  return (
    <main className="team-page">
      <h1>Meet the Team</h1>
      <p className="team-lead">
        Five students from five different fields, because real problems need{" "}
        <em>different perspectives.</em>
      </p>
      <p className="team-why">
        Parents should be able to focus on their child, not on researching what
        their child needs. And no child should start school behind because
        their family couldn&apos;t afford the right start.
      </p>

      <section className="team-cards">
        {team.map((person) => (
          <div className="flip-card" tabIndex={0} key={person.name}>
            <div className="flip-inner">
              <div className="flip-front">
                {person.photo ? (
                  <img src={person.photo} alt={person.name} />
                ) : (
                  <div className="flip-placeholder">Photo coming soon</div>
                )}
                <p className="name-pill">
                  <span>{person.name}</span>
                  {person.study}
                </p>
              </div>
              <div className="flip-back">
                <h3>{person.name}</h3>
                <p className="flip-study">{person.study}</p>
                <p>{person.bio || `More about ${person.name} coming soon.`}</p>
              </div>
            </div>
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
