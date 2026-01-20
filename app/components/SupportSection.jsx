export default function SupportSection() {
  return (
    <section className="pricing-section" id="support">
      <div className="container">

        <div className="section-header" style={{ marginBottom: "2rem" }}>
          <h2>5. Team Support</h2>
          <p style={{ color: "#6b7280", fontSize: "1rem" }}>
            Multi-layer support structure for associates, businesses and users
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
          {/* Card A */}
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
            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Support Geo Hierarchy
            </h4>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
              Country → State → District → Pin-code
            </p>

            <div style={{ marginTop: "1rem", lineHeight: 1.7, color: "#1f2937" }}>
              <strong>Country:</strong> India
            </div>
          </div>

          {/* Card B */}
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
            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Support & Ticket
            </h4>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
              Centralized ticket & communication channel for resolving issues
            </p>

            <div style={{ marginTop: "1rem", lineHeight: 1.7, color: "#1f2937" }}>
              <strong>Email:</strong> saubhtech@gmail.com <br />
              <strong>Contact:</strong> +91&nbsp;88006&nbsp;07598 <br />
              <strong>Company:</strong> Saubh.Tech <br />
              <strong>GSTIN:</strong> 07ABCDE1234F1Z5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
