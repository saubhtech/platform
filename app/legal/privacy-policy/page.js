export default function PrivacyPolicyPage() {
  return (
    <div style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "40px",
      background: "white",
      color: "#222",
      lineHeight: "1.7"
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        borderBottom: "3px solid #007bff",
        paddingBottom: "10px",
        marginBottom: "10px"
      }}>
        Privacy Policy
      </h1>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        <strong>Last Updated:</strong> December 24, 2025
      </p>

      <div style={{
        background: "#fff3cd",
        borderLeft: "4px solid #ffc107",
        padding: "15px",
        marginBottom: "20px"
      }}>
        <strong>Compliance Notice:</strong> This Privacy Policy complies with GDPR and the Digital Personal Data Protection Act, 2023 (DPDPA) of India.
      </div>

      <h2 style={h2}>1. Introduction</h2>
      <p>
        Welcome to <strong>saubh.tech</strong> ("we," "us," "our," or "Company"). We respect your privacy...
      </p>

      <p>
        By accessing or using saubh.tech, you acknowledge you have read and agree to this Privacy Policy.
      </p>

      <h2 style={h2}>2. Data Controller & Contact Information</h2>

      <div style={box}>
        <h3 style={h3}>Data Controller:</h3>
        <p>
          <strong>Company Name:</strong> Saubh Tech<br />
          <strong>Registered Address:</strong> 01 Tola-Tari, Sarha, Dahiawan Chapra, Bihar 841301<br />
          <strong>Email:</strong> it@saubh.tech<br />
          <strong>Phone:</strong> 918800607598<br />
          <strong>DPO:</strong> RP Singh<br />
          <strong>Grievance Officer:</strong> RP Singh
        </p>
      </div>

      <h2 style={h2}>3. Legal Basis for Processing</h2>
      <ul>
        <li><strong>Consent</strong></li>
        <li><strong>Contract Performance</strong></li>
        <li><strong>Legal Obligation</strong></li>
        <li><strong>Legitimate Interests</strong></li>
      </ul>

      <h2 style={h2}>4. Information We Collect</h2>
      <h3 style={h3}>4.1 Personal Data</h3>

      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Data Category</th>
            <th style={th}>Examples</th>
            <th style={th}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Identity Data</td>
            <td style={td}>Name, DOB</td>
            <td style={td}>Account creation</td>
          </tr>
          <tr>
            <td style={td}>Contact Data</td>
            <td style={td}>Email, Phone</td>
            <td style={td}>Communication</td>
          </tr>
          <tr>
            <td style={td}>Technical Data</td>
            <td style={td}>IP, Browser, Device</td>
            <td style={td}>Security & Analytics</td>
          </tr>
        </tbody>
      </table>

      <h3 style={h3}>4.2 Automatic Collection</h3>
      <ul>
        <li>Cookies</li>
        <li>Log Files</li>
        <li>Device Info</li>
      </ul>

      <h3 style={h3}>4.3 Sensitive Data</h3>
      <div style={box}>
        <strong>We do NOT collect sensitive data such as:</strong>
        <ul>
          <li>Race</li>
          <li>Politics</li>
          <li>Religion</li>
          <li>Health</li>
        </ul>
      </div>

      {/* ✍ Continue same pattern */}
      <p style={{ marginTop: "40px", color: "#555", fontSize: "0.9rem" }}>
        © 2026 Saubh.Tech. All Rights Reserved.
      </p>


            <h2 style={h2}>5. How We Use Your Information</h2>
      <ul>
        <li>Account Creation & Identity Verification</li>
        <li>Communication (Email, SMS, WhatsApp)</li>
        <li>Service Delivery & Contract Fulfillment</li>
        <li>Security, Monitoring & Fraud Detection</li>
        <li>Analytics & Product Improvements</li>
        <li>Compliance with Legal Obligations</li>
      </ul>

      <h2 style={h2}>6. Sharing & Disclosure</h2>
      <p>We do <strong>not</strong> sell personal data to third parties. Information may be shared with:</p>
      <ul>
        <li>Service Providers (AWS, Analytics, Communication)</li>
        <li>Payment Processors</li>
        <li>Legal Authorities (when required by law)</li>
        <li>Business Transfers (M&A/Restructuring)</li>
      </ul>

      <h2 style={h2}>7. International Data Transfers</h2>
      <p>
        Data may be transferred to jurisdictions with different data protection laws. Safeguards
        include Standard Contractual Clauses (SCCs) & DPDPA compliant mechanisms.
      </p>

      <h2 style={h2}>8. Data Retention</h2>
      <p>
        We retain personal data only as long as necessary for the purposes described in this Policy
        or as required by applicable law.
      </p>

      <h2 style={h2}>9. Your Rights</h2>
      <ul>
        <li>Right to Access</li>
        <li>Right to Correction</li>
        <li>Right to Consent Withdrawal</li>
        <li>Right to Data Portability</li>
        <li>Right to Grievance Redressal</li>
        <li>Right to Deletion (where applicable)</li>
      </ul>

      <div style={box}>
        <strong>Important:</strong> Exercising certain rights may affect platform functionality
        including account access and usage.
      </div>

      <h2 style={h2}>10. Cookies & Tracking Technologies</h2>
      <ul>
        <li><strong>Essential Cookies</strong> – Platform functionality</li>
        <li><strong>Analytics Cookies</strong> – Metrics & Performance</li>
        <li><strong>Marketing Cookies</strong> – Personalized Offers</li>
      </ul>

      <h2 style={h2}>11. Security Measures</h2>
      <p>
        We implement technical and organizational safeguards including encryption, access control,
        and periodic security audits to protect personal data.
      </p>

      <h2 style={h2}>12. Children’s Data</h2>
      <p>
        We do not knowingly collect data from individuals under 18. If detected, such data will be
        deleted promptly.
      </p>

      <h2 style={h2}>13. Digital Personal Data Protection Act (DPDPA), 2023 — India</h2>
      <ul>
        <li><strong>Notice:</strong> Users are informed of collection purposes.</li>
        <li><strong>Consent:</strong> Data is processed based on user consent.</li>
        <li><strong>Security Safeguards:</strong> Protective controls are implemented.</li>
        <li><strong>Data Principal Rights:</strong> Users may exercise rights by contacting us.</li>
      </ul>

      <h2 style={h2}>14. Grievance & Contact Mechanism</h2>
      <div style={box}>
        <p><strong>Grievance Officer:</strong> RP Singh</p>
        <p><strong>Email:</strong> it@saubh.tech</p>
        <p><strong>Phone:</strong> +91 8800607598</p>
        <p><strong>Address:</strong> 01 Tola-Tari, Sarha, Dahiawan Chapra, Bihar 841301</p>
        <p>Complaints will be addressed within statutory timelines.</p>
      </div>

      <h2 style={h2}>15. Changes to This Privacy Policy</h2>
      <p>
        We may modify this Privacy Policy periodically to reflect legal, operational, or
        technological changes. Significant updates will be notified through the platform.
      </p>

      <h2 style={h2}>16. Governing Law & Jurisdiction</h2>
      <p>
        This Policy is governed by the laws of India. Courts in New Delhi shall have exclusive
        jurisdiction over disputes.
      </p>

    </div>
  );
}

const h2 = {
  fontSize: "1.8rem",
  marginTop: "30px",
  marginBottom: "10px",
  color: "#007bff"
};

const h3 = {
  fontSize: "1.2rem",
  marginTop: "20px",
  marginBottom: "8px"
};

const box = {
  background: "#e7f3ff",
  padding: "15px",
  borderRadius: "6px",
  marginBottom: "20px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "15px",
  marginBottom: "20px"
};

const th = {
  padding: "10px",
  border: "1px solid #ddd",
  background: "#007bff",
  color: "white"
};

const td = {
  padding: "10px",
  border: "1px solid #ddd"
};
