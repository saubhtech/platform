export default function PricingSection() {
  return (
    <section className="pricing-section" id="branding">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>
            2. Branding & Leads
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1rem", marginTop: "0.5rem" }}>
            Hybrid digital branding leveraging UGC & SMA for organic lead generation
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
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
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "var(--dark)",
              }}
            >
              UGC — User Generated Content
            </h3>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
              Content produced by communities, creators & associates that build trust and authenticity for brands.
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
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "var(--dark)",
              }}
            >
              SMA — Social Media Amplification
            </h3>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
              Amplifying brand content through distributed user networks to drive reach, engagement & organic leads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
