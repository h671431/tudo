import Link from "next/link";

export const metadata = { title: "Meet the Team" };

// The team behind Tudo. The front of each card shows the photo and name; the
// back shows what we study and a short bio. Add a photo to public/team/ and set
// `photo` to show it. Leave `bio` out until the person has written their own.
const team = [
  {
    name: "Zweli",
    study: "Medicine",
    bio: "Bringing medicine into TUDO, so every kit supports how a young child's brain develops.",
  },
  {
    name: "Rhonda",
    study: "Statistics",
    bio: "Here to help turn the statistics around, and to help NPOs get the support ECD needs.",
  },
  {
    name: "Anele",
    study: "Social Work",
    bio: "A mom who can't wait for launch, and to bring social work into our workshops.",
  },
  {
    name: "Hannah",
    photo: "/team/hannah.jpg",
    study: "Software Engineering",
    bio: "From Norway. Can't wait to build TUDO's tech and online community.",
  },
  {
    name: "Israel",
    photo: "/team/israel.jpg",
    study: "Computer Science",
    bio: "Can't wait to use AI to build the TUDO Family community.",
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
