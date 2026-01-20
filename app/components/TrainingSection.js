import Link from 'next/link';

export default function TrainingSection() {
  return (
    <section className="training-section" id="academy">
      <div className="container">

       <div className="section-header" style={{ textAlign: "center", marginBottom: "2rem" }}>

  {/* ICON */}
  <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.6rem" }}>
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      stroke="#0d9488"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        padding: "6px",
        borderRadius: "50%",
        background: "rgba(13,148,136,0.08)",
      }}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      <circle cx="12" cy="20" r="1"/>
    </svg>
  </div>

  {/* TITLE */}
  <h2 style={{ fontSize: "1.85rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
    Learning & Skilling
  </h2>

  {/* SUBTEXT */}
  <p style={{ color: "#6b7280", fontSize: "1rem" }}>
    Professional skilling pathways to build careers and credibility
  </p>
</div>


        <div className="training-grid">

          <div className="training-card">
            <div className="solution-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h4>Life Counselling Professional (LCP)</h4>
            <p>
              Skill pathway for helping individuals navigate personal, career and emotional life choices.
            </p>
          </div>

          <div className="training-card">
            <div className="solution-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h4>Business Consulting Professional (BCP)</h4>
            <p>
              Pathway for advising enterprises and entrepreneurs across strategy, operations and brand building.
            </p>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="#calendar" className="btn-orange">
            View Training Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
