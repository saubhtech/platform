import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const today = new Date();
  const date = today.toLocaleDateString("en-IN");
  const year = today.getFullYear();

  const footerWrapper = {
    background: "#f8fafc",   // light premium bg (same family as hero)
    color: "#0f172a",
    padding: "2.5rem 1.5rem",
    borderTop: "1px solid rgba(0,0,0,0.08)",
    marginTop: "4rem",
    fontFamily: "Inter, sans-serif"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0",
    margin: "1rem 0 1.5rem",
  };

  const thStyle = {
    borderBottom: "1px solid rgba(0,0,0,0.15)",
    padding: "8px 12px",
    textAlign: "left",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#0f172a"
  };

  const tdStyle = {
    padding: "8px 12px",
    fontSize: "0.9rem",
    color: "#334155",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: 400,
  };

  const tealLink = {
    color: "#0d9488", // teal primary
    fontWeight: 500,
    textDecoration: "none",
  };

  return (
    <footer style={footerWrapper}>

      {/* TOP DATE */}
      <div style={{ textAlign: "right", fontSize: "0.85rem", opacity: 0.7 }}>
        {date}
      </div>

      {/* TABLE / GRID */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Saubh.Tech</th>
            <th style={thStyle}>Community</th>
            <th style={thStyle}>Business</th>
            <th style={thStyle}>Legal</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={tdStyle}><Link href="#" style={linkStyle}>About Us</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Be an Advisor</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Branding & Leads</Link></td>
            <td style={tdStyle}><Link href="/legal/privacy-policy" style={tealLink}>Privacy Policy</Link></td>
          </tr>

          <tr>
            <td style={tdStyle}><Link href="#" style={linkStyle}>How It Works</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Certification</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Outsource Requirements</Link></td>
            <td style={tdStyle}><Link href="/legal/terms-of-service" style={tealLink}>Terms of Service</Link></td>
          </tr>

          <tr>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Success Stories</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Work from Anywhere</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Phygital Workplace</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Escrow System</Link></td>
          </tr>

          <tr>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Owners Team</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Calculate Earnings</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>Subscription</Link></td>
            <td style={tdStyle}><Link href="#" style={linkStyle}>DPDPA & GDPR Compliance</Link></td>
          </tr>
        </tbody>
      </table>

      {/* CONTACT */}
      <div style={{
        textAlign: "center",
        marginTop: "1rem",
        marginBottom: "1.1rem",
        color: "#334155",
        fontSize: "0.9rem"
      }}>
        📞 Call • 💬 WhatsApp • ✉ Email • in LinkedIn • 𝕏 X • ▶ YouTube
      </div>

      {/* LOGO BLOCK */}
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        {/* <Image
          src="/file.png"
          alt="logo"
          width={48}
          height={48}
          style={{ marginBottom: "0.5rem" }}
        /> */}
        <div style={{ fontWeight: 600 }}>Saubh.Tech</div>
        {/* <div style={{ fontSize: "0.85rem", opacity: 0.75 }}>Bengaluru, India</div> */}
        <div style={{ fontSize: "0.85rem", opacity: 0.75 }}>GSTIN: 07ABCDE1234F1Z5</div>
      </div>

      {/* COPYRIGHT */}
      <div style={{
        textAlign: "center",
        marginTop: "1rem",
        fontSize: "0.85rem",
        opacity: 0.75,
      }}>
        © {year} Saubh.Tech, All Rights Reserved.
      </div>
    </footer>
  );
}
