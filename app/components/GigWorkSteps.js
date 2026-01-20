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

        {/* Heading */}
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          3. Phygital Gig-Work
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "2rem", fontSize: "1rem" }}>
          Hybrid marketplace merging digital & physical work clusters
        </p>

        {/* CARD TILE GRID */}
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";
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
