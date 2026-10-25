import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <main>
        <section className="hero">
          <div className="blob one"></div>
          <div className="blob two"></div>
          <div className="blob three"></div>

          <div className="hero-content">
            <h1>
              Play that opens <span>possibilities.</span>
            </h1>
            <p>Make learning fun, accessible and affordable.</p>
            <Link className="btn" href="/ecd">
              Request a sample
            </Link>
            <Link className="btn secondary" href="/ngo">
              Institutional supply
            </Link>
            <p className="note">
              A working venture concept. Product details, pricing and
              partnerships are subject to confirmation.
            </p>
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
            <span className="chip">New products every year</span>
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
