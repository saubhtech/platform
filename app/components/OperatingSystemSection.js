export default function OperatingSystemSection() {
  return (
    <section className="pricing-section" id="operating-system">
      <div className="container">

        <div className="section-header" style={{ marginBottom: "2rem" }}>
          <h2>1. Operating System</h2>
          <p style={{ color: "#6b7280", fontSize: "1rem" }}>
            Integrated back-office stack to drive business workflows
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          <div
            style={{
              flex: "1 1 280px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              background: "var(--white)",
              padding: "1.5rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: ".5rem" }}>
              Data & Marketing
            </h4>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
              Tools to acquire, enrich and activate customer demand
            </p>
          </div>

          <div
            style={{
              flex: "1 1 280px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              background: "var(--white)",
              padding: "1.5rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: ".5rem" }}>
              Sales & Support
            </h4>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
              Workflow engines to manage leads, sales cycles and service tickets
            </p>
          </div>

          <div
            style={{
              flex: "1 1 280px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              background: "var(--white)",
              padding: "1.5rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: ".5rem" }}>
              HR & Recruitment
            </h4>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
              Hiring, onboarding and workforce management infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
