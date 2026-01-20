import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const today = new Date();
  const date = today.toLocaleDateString("en-IN");
  const year = today.getFullYear();

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "1.5rem",
  };

  const thTdStyle = {
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "10px 14px",
    color: "rgba(255,255,255,0.9)",
    fontSize: "0.9rem",
    fontWeight: 500,
  };

  const linkStyle = {
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    fontWeight: 400,
  };

  const footerColor = {
    background: "#0d1117",
    color: "#fff",
    padding: "2rem 1.5rem 3rem",
    marginTop: "4rem",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <footer style={footerColor}>
      
      {/* TOP DATE */}
      <div style={{ textAlign: "right", fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.75rem" }}>
        {date}
      </div>

      {/* TABLE */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Saubh.Tech</th>
            <th style={thTdStyle}>Community</th>
            <th style={thTdStyle}>Business</th>
            <th style={thTdStyle}>Legal</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>About Us</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Be an Advisor</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Branding & Leads</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Privacy Policy</Link>
            </td>
          </tr>

          <tr>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>How It Works</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Certification</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Outsource Requirements</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Terms of Service</Link>
            </td>
          </tr>

          <tr>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Success Stories</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Work from Anywhere</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Phygital Workplace</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Escrow System</Link>
            </td>
          </tr>

          <tr>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Owners Team</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Calculate Earnings</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>Subscription</Link>
            </td>
            <td style={thTdStyle}>
              <Link href="#" style={linkStyle}>DPDPA & GDPR Compliance</Link>
            </td>
          </tr>
        </tbody>
      </table>

      {/* CONTACT ROW */}
      <div style={{ textAlign: "center", margin: "1.2rem 0", fontSize: "0.9rem" }}>
        📞 Call &nbsp; | &nbsp; 💬 WhatsApp &nbsp; | &nbsp; ✉ Email &nbsp; | &nbsp; in LinkedIn &nbsp; | &nbsp; ⓧ X &nbsp; | &nbsp; ▶ YouTube
      </div>

      {/* LOGO + COMPANY */}
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Image
          src="/file.png"
          alt="logo"
          width={45}
          height={45}
          style={{ marginBottom: "0.5rem" }}
        />
        <div style={{ marginBottom: "0.4rem" }}>Saubh.Tech</div>
        <div style={{ opacity: 0.8, marginBottom: "0.4rem" }}>Address: Bengaluru, India</div>
        <div style={{ opacity: 0.8 }}>GSTIN: 07ABCDE1234F1Z5</div>
      </div>

      {/* BOTTOM YEAR */}
      <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem", opacity: 0.7 }}>
        © {year} Saubh.Tech, All Rights Reserved.
      </div>
    </footer>
  );
}
