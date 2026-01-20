"use client";

const clusters = [
  "Agriculture, Food & Nutrition",
  "Branding, Marketing & Sales",
  "Computing, Data & Digital Technology",
  "Education, Skilling & Career Development",
  "Finance, Banking & Insurance",
  "Government, Public Sector & Welfare",
  "Healthcare, Wellness & Personal Care",
  "HR, Employment & Gig Work",
  "Installation, Repair & Technical Support",
  "Legal, Police & Protection",
  "Manufacturing, Production & Operations",
  "Matchmaking, Relationships & Connections",
  "Media, Entertainment & Sports",
  "Real Estate, Infrastructure & Construction",
  "Transport, Logistics & Storage",
  "Travel, Tourism & Hospitality",
];

export default function GigWorkSteps() {
  return (
    <section id="phygital-gig-work" style={{ padding: "3.5rem 0" }}>
 <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>

  {/* Center Heading + Icon */}
  <div style={{ textAlign: "center", marginBottom: "2rem" }}>
    
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6c.47 0 .92-.19 1.25-.52l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06c-.33.33-.52.78-.52 1.25s.19.92.52 1.25l.06.06a1.65 1.65 0 0 0 1.25.52c.47 0 .92.19 1.25.52l.06.06a2 2 0 0 1-.06 2.83z" />
      </svg>
    </div>

    <h2 style={{ fontSize: "1.85rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
      Phygital Gig-Work
    </h2>

    <p style={{ color: "#6b7280", fontSize: "1rem" }}>
      Hybrid marketplace merging digital & physical work clusters
    </p>
  </div>

  {/* TILE GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1rem",
    }}
  >
    {clusters.map((c, i) => (
      <div
        key={i}
        style={{
          background: "var(--bg-light)",
          borderRadius: "10px",
          padding: "14px 18px",
          border: "1px solid #e5e7eb",
          fontWeight: 500,
          color: "#1f2937",
          fontSize: "0.95rem",
          letterSpacing: "-0.01em",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          transition: "all 0.25s ease",
          cursor: "pointer",
          textAlign: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.08)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {c}
      </div>
    ))}
  </div>
</div>



    </section>
  );
}
