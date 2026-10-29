import Link from "next/link";
import Logo from "../components/Logo";
import EnquiryForm from "../components/EnquiryForm";

const tagline = "Make learning fun, accessible and affordable.";

// The circular model: a kit for each age, the old one goes on to an ECD centre.
const cycle = [
  { icon: "♡", title: "Join", text: "Parents subscribe and get the first kit straight away." },
  { icon: "✦", title: "Play & learn", text: "New activities every month, and a surprise halfway." },
  { icon: "★", title: "Grow", text: "On the birthday, the next kit arrives." },
  { icon: "↺", title: "Give back", text: "The old kit is returned and goes to an ECD centre." },
];

export default function Home() {
  return (
    <div className="home">
      <main>
        <section className="hero home-hero">
          <div className="blob one"></div>
          <div className="blob two"></div>
          <div className="blob three"></div>

          <div className="hero-content centered">
            <h1 className="hero-logo">
              <span className="sr-only">tudo – Play With Purpose</span>
              <Logo />
            </h1>
            <p className="logo-sub">PLAY WITH PURPOSE</p>
            <p className="tagline">{tagline}</p>
            <EnquiryForm
              source="Waitlist"
              className="hero-waitlist"
              sentText="You're on the list! We'll tell you when TUDO launches."
            >
              <input
                name="email"
                type="email"
                placeholder="Your email"
                aria-label="Your email"
                required
              />
              <button className="btn btn-cta" type="submit">
                Join waiting list
              </button>
            </EnquiryForm>
            <p className="hero-waitlist-note">Be one of the first families to get TUDO.</p>
          </div>
        </section>

        <section className="section story-problem reveal">
          <p className="eyebrow">The problem</p>
          <h2>
            8 out of 10 South African children can&apos;t read for meaning by
            Grade 4.
          </h2>
          <p className="story-text">
            In low-income communities, parents and ECD centres can&apos;t afford
            the right learning materials for each age, or know how to use them.
            Children lose their most important learning years.
          </p>
          <p className="source">Source: PIRLS 2021</p>
        </section>

        <section className="section story-promise reveal">
          <p className="eyebrow">Educational playkits</p>
          <h2>
            You don&apos;t have to figure out what your child needs.{" "}
            <span>We&apos;ve already done it.</span>
          </h2>
          <p className="story-text">
            The right toys for every stage, with simple guides, activities and
            videos, so every play moment builds a skill.
          </p>
        </section>

        <section className="section story-cycle reveal">
          <p className="eyebrow">How it works</p>
          <h2>A kit that grows with your child</h2>
          <ol className="cycle">
            {cycle.map((step, n) => (
              <li key={step.title} style={{ "--n": n }}>
                <span className="cycle-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section story-price reveal">
          <div>
            <p className="eyebrow">Two kits at launch</p>
            <h2>TUDO 2–3 and TUDO 3–4</h2>
            <p className="story-text">
              Learning, movement, creativity, health and feelings in one box.
            </p>
            <Link className="btn secondary" href="/playkits">
              See the playkits
            </Link>
          </div>
          <div className="price-card">
            <p className="price-big">R299</p>
            <p>first month</p>
            <p className="price-then">then R149 / month</p>
          </div>
        </section>

        <section className="section story-give reveal">
          <h2>Every returned kit helps an ECD centre.</h2>
          <p className="story-text">
            Sponsors fund refreshed kits for centres that can&apos;t afford them.{" "}
            <Link href="/contact">Become a sponsor</Link>
          </p>
        </section>

        <section className="section waitlist reveal" id="waitlist">
          <h2>Be the first to get TUDO</h2>
          <p className="story-text">
            Join the waiting list and we&apos;ll tell you when we launch.
          </p>
          <EnquiryForm
            source="Waitlist"
            sentText="You're on the list! We'll tell you when TUDO launches."
          >
            <label>
              Name <input name="name" type="text" required />
            </label>
            <label>
              Email <input name="email" type="email" required />
            </label>
            <label className="checkbox">
              <input name="consent" type="checkbox" required /> I agree that my
              details may be stored to contact me about TUDO.
            </label>
            <button className="btn btn-cta" type="submit">
              Join waiting list
            </button>
          </EnquiryForm>
        </section>
      </main>
    </div>
  );
}
