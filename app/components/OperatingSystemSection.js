export default function OperatingSystemSection() {
  return (
    <section className="pricing-section" id="operating-system">
      <div className="container">

        {/* HEADER */}
        <div
          className="section-header"
          style={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                padding: "8px",
                borderRadius: "50%",
                background: "rgba(13,148,136,0.1)",
              }}
            >
              {/* Operating System Icon */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke="#0d9488"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h2 style={{ margin: 0, fontWeight: 700 }}>Operating System</h2>
          </div>

          <p style={{ color: "#6b7280", fontSize: "1rem" }}>
            Integrated back-office stack to drive business workflows
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}
        >

          {/* 1 — Data & Marketing */}
          <OSCard
            title="Data & Marketing"
            desc="Tools to acquire, enrich and activate customer demand"
            icon={
              <svg viewBox="0 0 24 24" stroke="#0d9488" fill="none" strokeWidth="2">
                <path d="M3 3v18h18"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
            }
          />

          {/* 2 — Sales & Support */}
          <OSCard
            title="Sales & Support"
            desc="Manage leads, sales cycles and service tickets"
            icon={
              <svg viewBox="0 0 24 24" stroke="#0d9488" fill="none" strokeWidth="2">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M10 14h.01"></path>
                <path d="M14 14h.01"></path>
                <path d="M8 10h8v4a4 4 0 0 1-8 0v-4z"></path>
              </svg>
            }
          />

          {/* 3 — HR & Recruitment */}
          <OSCard
            title="HR & Recruitment"
            desc="Hiring, onboarding and workforce management"
            icon={
              <svg viewBox="0 0 24 24" stroke="#0d9488" fill="none" strokeWidth="2">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M6 21v-2a6 6 0 0 1 12 0v2"></path>
              </svg>
            }
          />

          {/* NEW 4 — Career Map / Choice */}
          <OSCard
            title="Career Map / Choice"
            desc="Pathways to explore, compare and decide future careers"
            icon={
              <svg viewBox="0 0 24 24" stroke="#0d9488" fill="none" strokeWidth="2">
                <path d="M12 2v20"></path>
                <path d="M5 7h14l-4 4H9l-4-4z"></path>
                <path d="M5 17h14l-4-4H9l-4 4z"></path>
              </svg>
            }
          />

          {/* NEW 5 — Education Index */}
          <OSCard
            title="Education Index"
            desc="Profiles educational streams, institutions and pathways"
            icon={
              <svg viewBox="0 0 24 24" stroke="#0d9488" fill="none" strokeWidth="2">
                <path d="M22 10L12 5 2 10l10 5 10-5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            }
          />

          {/* NEW 6 — Work Opportunities */}
          <OSCard
            title="Work Opportunities"
            desc="Maps workplace demand and workforce availability"
            icon={
              <svg viewBox="0 0 24 24" stroke="#0d9488" fill="none" strokeWidth="2">
                <path d="M20 13v-2a4 4 0 0 0-8 0v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M6 21v-2a6 6 0 0 1 12 0v2"></path>
              </svg>
            }
          />

        </div>
      </div>
    </section>
  );
}

function OSCard({ title, desc, icon }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        background: "var(--white)",
        padding: "1.5rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "rgba(13,148,136,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "0.75rem",
        }}
      >
        {icon}
      </div>
      <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: ".5rem" }}>{title}</h4>
      <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
