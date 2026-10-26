import EnquiryForm from "../../components/EnquiryForm";

export const metadata = { title: "Our Vision" };

// Line icons for the Playkit Club steps: a box, a calendar and a sprout.
const icons = {
  kit: (
    <>
      <path d="M21 8l-9-5-9 5v8l9 5 9-5z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </>
  ),
  monthly: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  grow: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12C12 8 9 5 4 5c0 4 3 7 8 7zM12 14c0-3 2.5-6 7-6 0 3.5-2.5 6-7 6z" />
    </>
  ),
};

function FlowIcon({ name }) {
  return (
    <div className="flow-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {icons[name]}
      </svg>
    </div>
  );
}

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
            Buy the kit once. Join for a small monthly fee. Get new pieces as the children grow.
          </p>
          <div className="flow">
            <div className="flow-step">
              <FlowIcon name="kit" />
              <h3>Buy the kit</h3>
              <p>One-time purchase.</p>
            </div>
            <div className="flow-step">
              <FlowIcon name="monthly" />
              <h3>Join monthly</h3>
              <p>A small monthly fee keeps you in the club.</p>
            </div>
            <div className="flow-step">
              <FlowIcon name="grow" />
              <h3>New as they grow</h3>
              <p>New pieces matched to the next stage of development, so there is always something to look forward to.</p>
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
            <EnquiryForm source="Waitlist">
              <label>
                Email <input name="email" type="email" required />
              </label>
              <label>
                I&apos;m interested in
                <select name="interest" required defaultValue="">
                  <option value="">Choose…</option>
                  <option>The Playkit Club</option>
                  <option>Buying in Norway</option>
                  <option>Partnering with you</option>
                </select>
              </label>
              <label className="checkbox">
                <input name="consent" type="checkbox" required /> I agree that my email may be
                stored to contact me about this.
              </label>
              <button className="btn" type="submit">
                Join the waitlist
              </button>
            </EnquiryForm>
          </div>
        </section>
      </main>
    </div>
  );
}
