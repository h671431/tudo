import Link from "next/link";

const tagline = "Make learning fun, accessible and affordable.";

// The letters of "tudo" as single pen strokes, used for the solid letters and the dotted centre line.
const letters =
  "M60 50 V126 Q60 140 74 140 M44 90 H80 M104 90 V118 Q104 140 126 140 Q148 140 148 118 V90 V140 " +
  "M219 40 V140 M219 115 A25 25 0 1 1 169 115 A25 25 0 1 1 219 115 " +
  "M293 115 A25 25 0 1 1 243 115 A25 25 0 1 1 293 115";

// Large logo on the home page. The "draw", "rule" and "pop" classes are animated in globals.css.
function LogoMark() {
  return (
    <svg viewBox="0 18 340 140" aria-hidden="true">
      <g strokeWidth="2.5">
        <line className="rule" x1="4" y1="40" x2="336" y2="40" stroke="#4B2A7B" />
        <line className="rule" x1="4" y1="90" x2="336" y2="90" stroke="#FFC93C" strokeDasharray="9 7" />
        <line className="rule" x1="4" y1="140" x2="336" y2="140" stroke="#4B2A7B" />
      </g>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path className="draw" pathLength="1" d={letters} stroke="#4B2A7B" strokeWidth="27" />
        <path className="pop" d={letters} stroke="#F26B21" strokeWidth="5.5" strokeDasharray="0 10" />
      </g>
    </svg>
  );
}

// Text split into letters so it can appear one letter at a time (see .write-anim in globals.css).
function WrittenText({ text, className }) {
  let i = 0;
  return (
    <p className={`${className} split`} data-write aria-label={text}>
      {text.split(/(\s+)/).map((part, n) =>
        /^\s*$/.test(part) ? (
          part
        ) : (
          <span className="word" key={n} aria-hidden="true">
            {[...part].map((letter) => (
              <span className="ch" key={i} style={{ "--i": i++ }}>
                {letter}
              </span>
            ))}
          </span>
        )
      )}
    </p>
  );
}

export default function Home() {
  return (
    <div className="home">
      <main>
        <section className="hero">
          <div className="blob one"></div>
          <div className="blob two"></div>
          <div className="blob three"></div>

          <div className="hero-content centered">
            <h1 className="hero-logo">
              <span className="sr-only">tudo – Educational playkits</span>
              <LogoMark />
            </h1>
            <p className="logo-sub">EDUCATIONAL PLAYKITS</p>
            <WrittenText className="tagline" text={tagline} />
            <Link className="btn" href="/ecd">
              Request a sample
            </Link>
            <Link className="btn secondary" href="/ngo">
              Institutional supply
            </Link>
            <div className="hero-why">
              <p>
                Many children in South Africa get no early learning before
                school. They start behind, and many never catch up: too many
                can&apos;t read for meaning by age 10.
              </p>
              <p className="why-answer">
                We get playkits to the early learning centres that need them
                most, made by local young people who earn a living doing it.
              </p>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <h2>How it works</h2>
          <div className="cards">
            <div className="card">
              <div className="step-num">1</div>
              <h3>Inspect</h3>
              <p>Try a sample kit.</p>
            </div>
            <div className="card">
              <div className="step-num">2</div>
              <h3>Order</h3>
              <p>Specs and price confirmed per order.</p>
            </div>
            <div className="card">
              <div className="step-num">3</div>
              <h3>Deliver</h3>
              <p>Assembled locally, delivered to you.</p>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ paddingTop: 0 }}>
          <h2>Who are you?</h2>
          <div className="tiles">
            <Link className="tile main" href="/ecd">
              I run an ECD centre
            </Link>
            <Link className="tile accent" href="/ngo">
              I&apos;m an NGO or CSI funder
            </Link>
            <Link className="tile support" href="/playkits">
              Show me the kits
            </Link>
          </div>
        </section>

        <section className="section vision-teaser reveal">
          <h2>This is just the beginning</h2>
          <div className="chips">
            <span className="chip">Families at home</span>
            <span className="chip">The Playkit Club</span>
            <span className="chip">South Africa → Norway</span>
            <span className="chip">New pieces as children grow</span>
          </div>
          <p>
            <Link className="btn" href="/future">
              See our vision
            </Link>
          </p>
        </section>

        <section className="section band reveal">
          <h2>Made by youth makers</h2>
          <p>Kits are produced through a youth-led local programme.</p>
          <p>
            <Link className="btn secondary" href="/makers">
              Meet the makers
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
