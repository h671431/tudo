import Link from "next/link";

export const metadata = { title: "The Playkits" };

export default function Playkits() {
  return (
    <main>
      <h1>The Playkits</h1>
      <p className="note">
        All products are illustrative. Age guidance is provisional and pending
        review.
      </p>

      <div className="cards">
        <div className="card">
          <div className="placeholder-img">Product image coming</div>
          <h3>Complete Playkit</h3>
          <p>Approximately 50–60 pieces for early learning.</p>
          <ul>
            <li>SKU: to be confirmed</li>
            <li>Size: to be confirmed</li>
            <li>Age suitability: pending review</li>
            <li>Materials: to be confirmed</li>
            <li>Learning objectives: to be confirmed</li>
            <li>Cleaning &amp; warnings: to be confirmed</li>
            <li>Price: on request</li>
            <li>Lead time: to be confirmed</li>
          </ul>
          <Link className="btn" href="/ecd">
            Request specification / quote
          </Link>
        </div>

        <div className="card">
          <div className="placeholder-img">Image coming</div>
          <h3>Sensory Kit</h3>
          <span className="badge">Coming later</span>
        </div>

        <div className="card">
          <div className="placeholder-img">Image coming</div>
          <h3>Skills Kit</h3>
          <span className="badge">Coming later</span>
        </div>
      </div>
    </main>
  );
}
