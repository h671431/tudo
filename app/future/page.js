import DemoForm from "../../components/DemoForm";

export const metadata = { title: "Our Vision" };

export default function Future() {
  return (
    <div className="home">
      <main>
        <section className="hero hero-small">
          <div className="blob one"></div>
          <div className="blob two"></div>

          <div className="hero-content">
            <span className="badge">Concept stage</span>
            <h1>
              Bigger than <span>one kit.</span>
            </h1>
            <p>Where we&apos;re heading. Plans, not promises.</p>
          </div>
        </section>

        <section className="section reveal">
          <h2>The roadmap</h2>
          <div className="timeline">
            <div className="phase">
              <span className="phase-label">Now</span>
              <h3>Start in South Africa</h3>
              <p>Pilot kits for ECD centres, made by youth makers.</p>
            </div>
            <div className="phase">
              <span className="phase-label">Next</span>
              <h3>Families &amp; the Club</h3>
              <p>Kits for parents at home, plus a monthly subscription.</p>
            </div>
            <div className="phase">
              <span className="phase-label">Later</span>
              <h3>Scale internationally</h3>
              <p>
                Selling in Norway and beyond, with production that can grow.
              </p>
            </div>
          </div>
        </section>

        <section className="section club reveal">
          <h2>The Playkit Club</h2>
          <p className="lead">
            Buy the kit once. Stay in the club. Get something new every year.
          </p>
          <div className="flow">
            <div className="flow-step">
              <div className="flow-icon">📦</div>
              <h3>Buy the kit</h3>
              <p>One-time purchase.</p>
            </div>
            <div className="flow-step">
              <div className="flow-icon">🔁</div>
              <h3>Join monthly</h3>
              <p>A small monthly fee.</p>
            </div>
            <div className="flow-step">
              <div className="flow-icon">🎁</div>
              <h3>New every year</h3>
              <p>A new, innovative piece sent home automatically.</p>
            </div>
          </div>
          <p className="small">
            Pricing to be confirmed. Not available for purchase yet.
          </p>
        </section>

        <section className="section reveal">
          <h2>Who it&apos;s for</h2>
          <div className="chips">
            <span className="chip">ECD centres</span>
            <span className="chip">NGOs &amp; CSI</span>
            <span className="chip">Parents &amp; families</span>
            <span className="chip">Schools</span>
          </div>
        </section>

        <section className="section band reveal">
          <h2>Always improving</h2>
          <p>
            We keep making the kit better, with small upgrades based on feedback
            from teachers and children.
          </p>
        </section>

        <section className="section reveal">
          <h2>Want to be first?</h2>
          <div>
            <DemoForm>
              <label>
                Email <input type="email" required />
              </label>
              <label>
                I&apos;m interested in
                <select required defaultValue="">
                  <option value="">Choose…</option>
                  <option>The Playkit Club</option>
                  <option>Buying in Norway</option>
                  <option>Partnering with you</option>
                </select>
              </label>
              <label className="checkbox">
                <input type="checkbox" required /> I agree that my email may be
                stored to contact me about this.
              </label>
              <button className="btn" type="submit">
                Join the waitlist
              </button>
            </DemoForm>
          </div>
        </section>
      </main>
    </div>
  );
}
