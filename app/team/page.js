import Link from "next/link";
import FlipCard from "../../components/FlipCard";

export const metadata = { title: "Meet the Team" };

// The team behind Tudo. The front of each card shows the photo, with the name
// underneath styled like the TUDO wordmark (with its yellow shade) and the study (and `role`, once set) as its tagline; the back shows what we study and a short bio. Add a photo to public/team/ and set
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
    bio: "Bringing social work into our workshops, so every family and teacher feels supported.",
  },
  {
    name: "Hannah",
    photo: "/team/hannah.jpg",
    study: "Software Engineering",
    bio: "From Norway. Excited to build TUDO's tech and online community.",
  },
  {
    name: "Israel",
    photo: "/team/israel.jpg",
    study: "Computer Science",
    bio: "Looking forward to using AI to build the TUDO Family community.",
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

      <div className="team-wrap">
        <p className="hover-hint" aria-hidden="true">
          <span>Hover over us!</span>
          <svg viewBox="0 0 120 90">
            <path d="M6 18 C 50 -4, 104 10, 92 80" />
            <path d="M78 68 L92 82 L104 64" />
          </svg>
        </p>

        <section className="team-cards">
          {team.map((person) => (
            <div className="member" key={person.name}>
              <FlipCard
                front={
                  person.photo ? (
                    <img src={person.photo} alt="" />
                  ) : (
                    <span className="flip-placeholder">Photo coming soon</span>
                  )
                }
                back={
                  <>
                    <span className="flip-name">{person.name}</span>
                    <span className="flip-study">{person.study}</span>
                    <span className="flip-bio">
                      {person.bio || `More about ${person.name} coming soon.`}
                    </span>
                  </>
                }
              />
              <p className="member-name">
                {person.name}
              </p>
              <p className="member-study">
                {person.study}
                {person.role && ` · ${person.role}`}
              </p>
            </div>
          ))}
        </section>
      </div>

      <p>
        <Link className="btn" href="/contact">
          Get in touch
        </Link>
      </p>
    </main>
  );
}
