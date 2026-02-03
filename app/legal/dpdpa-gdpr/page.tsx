"use client";

import React from "react";

// ─── Styles ─────────────────────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  // ── Global ──
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    color: "#333",
    background: "#f0f2f5",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    background: "white",
    boxShadow: "0 0 30px rgba(0,0,0,0.1)",
  },

  // ── Header ──
  header: {
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e8ba3 100%)",
    color: "white",
    padding: "50px 60px",
    textAlign: "center" as const,
    position: "relative" as const,
  },
  headerLockIcon: {
    position: "absolute" as const,
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "3em",
    opacity: 0.3,
  },
  headerH1: {
    fontSize: "2.6em",
    marginBottom: 10,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: 2,
    color: "white",
  },
  headerSubtitle: {
    fontSize: "1.4em",
    fontWeight: 300,
    marginBottom: 20,
    color: "white",
  },
  complianceBadges: {
    display: "flex",
    justifyContent: "center" as const,
    gap: 30,
    marginTop: 25,
    flexWrap: "wrap" as const,
  },
  badge: {
    background: "rgba(255,255,255,0.2)",
    padding: "12px 25px",
    borderRadius: 50,
    fontWeight: 600,
    border: "2px solid white",
    fontSize: "1.1em",
    color: "white",
  },
  metaInfo: {
    fontSize: "0.95em",
    opacity: 0.95,
    marginTop: 20,
    color: "white",
  },
  metaInfoStrong: {
    color: "white",
    fontWeight: 600,
  },

  // ── Content Wrapper ──
  content: {
    padding: "50px 60px",
  },

  // ── Intro ──
  intro: {
    background: "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
    padding: 35,
    borderLeft: "5px solid #1e3c72",
    marginBottom: 40,
    borderRadius: 8,
  },
  introH2: {
    color: "#1e3c72",
    fontSize: "1.8em",
    marginBottom: 15,
  },
  introP: {
    fontSize: "1.05em",
    lineHeight: 1.8,
    marginBottom: 12,
  },

  // ── Dual Compliance Grid ──
  dualCompliance: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    margin: "30px 0",
  },
  complianceCard: {
    background: "#f8f9fa",
    padding: 25,
    borderRadius: 8,
    borderTop: "4px solid #1e3c72",
  },
  complianceCardH3: {
    color: "#1e3c72",
    marginBottom: 15,
    fontSize: "1.3em",
  },

  // ── Section ──
  section: {
    marginBottom: 40,
  },
  sectionH2: {
    color: "#1e3c72",
    fontSize: "1.9em",
    marginBottom: 20,
    paddingBottom: 12,
    borderBottom: "3px solid #1e3c72",
    display: "flex",
    alignItems: "center" as const,
    gap: 15,
  },
  sectionH3: {
    color: "#2a5298",
    fontSize: "1.4em",
    margin: "25px 0 15px 0",
  },
  sectionH4: {
    color: "#555",
    fontSize: "1.15em",
    margin: "20px 0 12px 0",
    fontWeight: 600,
  },
  sectionP: {
    marginBottom: 15,
    textAlign: "justify" as const,
  },

  // ── Boxes ──
  highlightBox: {
    background: "#fff3cd",
    padding: 25,
    borderLeft: "5px solid #ffc107",
    margin: "25px 0",
    borderRadius: 6,
  },
  highlightBoxH4: {
    color: "#856404",
    marginBottom: 15,
  },
  criticalBox: {
    background: "#f8d7da",
    padding: 25,
    borderLeft: "5px solid #dc3545",
    margin: "25px 0",
    borderRadius: 6,
  },
  criticalBoxH4: {
    color: "#721c24",
    marginBottom: 15,
  },
  infoBox: {
    background: "#d1ecf1",
    padding: 25,
    borderLeft: "5px solid #17a2b8",
    margin: "25px 0",
    borderRadius: 6,
  },
  infoBoxH4: {
    color: "#0c5460",
    marginBottom: 15,
  },
  successBox: {
    background: "#d4edda",
    padding: 25,
    borderLeft: "5px solid #28a745",
    margin: "25px 0",
    borderRadius: 6,
  },
  successBoxH4: {
    color: "#155724",
    marginBottom: 15,
  },

  // ── Tables ──
  dataTable: {
    width: "100%",
    borderCollapse: "collapse" as const,
    margin: "20px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  dataTableTh: {
    background: "#1e3c72",
    color: "white",
    padding: 15,
    textAlign: "left" as const,
    fontWeight: 600,
  },
  dataTableTd: {
    padding: 15,
    borderBottom: "1px solid #dee2e6",
  },

  // ── Rights Grid ──
  rightsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
    margin: "25px 0",
  },
  rightCard: {
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    padding: 25,
    borderRadius: 8,
    borderTop: "4px solid #1e3c72",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "default",
  },
  rightCardH4: {
    color: "#1e3c72",
    marginBottom: 12,
    fontSize: "1.1em",
  },
  rightCardP: {
    fontSize: "0.95em",
    color: "#555",
    textAlign: "left" as const,
    marginBottom: 0,
  },

  // ── Contact Section ──
  contactSection: {
    background: "linear-gradient(135deg, #e0e7ff 0%, #cfd9ff 100%)",
    padding: 40,
    borderRadius: 10,
    marginTop: 40,
  },
  contactSectionH2: {
    color: "#1e3c72",
    marginBottom: 25,
    border: "none",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 20,
    marginTop: 25,
  },
  contactCard: {
    background: "white",
    padding: 25,
    borderRadius: 8,
    borderLeft: "4px solid #1e3c72",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  contactCardH3: {
    color: "#1e3c72",
    marginBottom: 15,
    fontSize: "1.2em",
  },
  contactCardP: {
    margin: "8px 0",
    textAlign: "left" as const,
  },
  contactCardStrong: {
    color: "#2a5298",
    display: "inline-block",
    minWidth: 120,
  },

  // ── Commitment Section ──
  commitmentSection: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: 40,
    borderRadius: 10,
    margin: "40px 0",
    textAlign: "center" as const,
  },
  commitmentSectionH2: {
    color: "white",
    border: "none",
    marginBottom: 20,
    fontSize: "1.9em",
  },
  commitmentSectionP: {
    fontSize: "1.1em",
    lineHeight: 1.8,
    textAlign: "center" as const,
    color: "white",
  },
  commitmentStrong: {
    color: "white",
    fontWeight: 600,
  },

  // ── Footer ──
  footer: {
    background: "#1a1a2e",
    color: "white",
    textAlign: "center" as const,
    padding: 40,
  },
  footerH3: {
    marginBottom: 15,
    color: "#fff",
  },
  footerP: {
    margin: "8px 0",
    opacity: 0.9,
    color: "white",
  },
  footerLinks: {
    marginTop: 20,
    paddingTop: 20,
    borderTop: "1px solid rgba(255,255,255,0.2)",
  },
  footerLink: {
    color: "#7e8ba3",
    textDecoration: "none",
    margin: "0 15px",
    transition: "color 0.3s",
  },

  // ── Lists ──
  ulDefault: {
    margin: "15px 0 15px 30px",
    paddingLeft: 20,
  },
  olDefault: {
    margin: "15px 0 15px 30px",
    paddingLeft: 20,
  },
  liDefault: {
    marginBottom: 12,
  },

  // ── Compliance card custom list (no bullet, check icon) ──
  complianceCardUl: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  complianceCardLi: {
    padding: "8px 0",
    paddingLeft: 25,
    position: "relative" as const,
    marginBottom: 0,
  },
  complianceCardLiCheck: {
    position: "absolute" as const,
    left: 0,
    color: "#28a745",
    fontWeight: "bold" as const,
  },

  // ── Questions box ──
  questionsBox: {
    textAlign: "center" as const,
    margin: "50px 0",
    padding: 40,
    background: "#f8f9fa",
    borderRadius: 10,
  },
  questionsH2: {
    color: "#1e3c72",
    marginBottom: 20,
  },
  questionsRow: {
    display: "flex",
    justifyContent: "center" as const,
    gap: 30,
    flexWrap: "wrap" as const,
  },
  questionsLink: {
    color: "#1e3c72",
    fontSize: "1.1em",
    textDecoration: "none",
  },

  // ── Strong default (used inside sections) ──
  strongDefault: {
    color: "#1e3c72",
    fontWeight: 600,
  },
};

// ─── Helper Components ──────────────────────────────────────────────────────

/** Alternating row background for tables */
function getRowStyle(index: number): React.CSSProperties {
  return index % 2 === 1 ? { background: "#f8f9fa" } : {};
}

/** Compliance card list item with the green ✓ */
function ComplianceListItem({ children }: { children: React.ReactNode }) {
  return (
    <li style={styles.complianceCardLi}>
      <span style={styles.complianceCardLiCheck}>✓</span>
      {children}
    </li>
  );
}

/** Hover-lifted right-card */
function RightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{
        ...styles.rightCard,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 16px rgba(0,0,0,0.1)"
          : "0 2px 4px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h4 style={styles.rightCardH4}>{title}</h4>
      <p style={styles.rightCardP}>{description}</p>
    </div>
  );
}

/** Footer link with hover color */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      style={{ ...styles.footerLink, color: hovered ? "white" : "#7e8ba3" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

// ─── Page Component ─────────────────────────────────────────────────────────

export default function DPDPAGDPRPage() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* ─── HEADER ──────────────────────────────────────────────────── */}
        <header style={styles.header}>
          <div style={styles.headerLockIcon}>🔒</div>
          <h1 style={styles.headerH1}>Data Protection & Privacy Compliance</h1>
          <div style={styles.headerSubtitle}>Saubh.Tech</div>
          <div style={styles.complianceBadges}>
            <div style={styles.badge}>🇮🇳 DPDPA 2023 Compliant</div>
            <div style={styles.badge}>🇪🇺 GDPR Compliant</div>
          </div>
          <div style={styles.metaInfo}>
            <p>
              <strong style={styles.metaInfoStrong}>Last Updated:</strong> January 20, 2026
            </p>
          </div>
        </header>

        {/* ─── CONTENT ─────────────────────────────────────────────────── */}
        <div style={styles.content}>
          {/* ── Intro ── */}
          <div style={styles.intro}>
            <h2 style={styles.introH2}>Our Commitment to Your Privacy</h2>
            <p style={styles.introP}>
              At <strong style={styles.strongDefault}>Saubh.Tech</strong>, we are deeply committed to
              protecting your personal data and respecting your privacy rights. This Compliance Policy
              outlines how we collect, process, store, and protect your personal information in
              accordance with:
            </p>
            <ul style={{ ...styles.ulDefault, marginTop: 15 }}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>
                  Digital Personal Data Protection Act (DPDPA), 2023
                </strong>{" "}
                - India's comprehensive data protection legislation
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>
                  General Data Protection Regulation (GDPR), 2016
                </strong>{" "}
                - European Union's data protection framework
              </li>
            </ul>
            <p style={{ ...styles.introP, marginTop: 15 }}>
              We implement industry-leading security measures and best practices to ensure your data is
              handled with the highest standards of care, transparency, and accountability.
            </p>
          </div>

          {/* ── Privacy Principles Banner ── */}
          <div style={styles.commitmentSection}>
            <h2 style={styles.commitmentSectionH2}>🛡️ Our Privacy Principles</h2>
            <p style={styles.commitmentSectionP}>
              <strong style={styles.commitmentStrong}>Transparency</strong> •{" "}
              <strong style={styles.commitmentStrong}>Lawfulness</strong> •{" "}
              <strong style={styles.commitmentStrong}>Purpose Limitation</strong> •{" "}
              <strong style={styles.commitmentStrong}>Data Minimization</strong> •{" "}
              <strong style={styles.commitmentStrong}>Accuracy</strong> •{" "}
              <strong style={styles.commitmentStrong}>Storage Limitation</strong> •{" "}
              <strong style={styles.commitmentStrong}>Integrity & Confidentiality</strong> •{" "}
              <strong style={styles.commitmentStrong}>Accountability</strong>
            </p>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              1. SCOPE & APPLICABILITY
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>📋</span> 1. SCOPE &amp; APPLICABILITY
            </h2>

            <h3 style={styles.sectionH3}>1.1 Geographic Scope</h3>
            <p style={styles.sectionP}>This policy applies to:</p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>DPDPA Compliance:</strong> All processing of
                personal data of individuals residing in India (Data Principals)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>GDPR Compliance:</strong> All processing of
                personal data of individuals in the European Economic Area (EEA), UK, and Switzerland
                (Data Subjects)
              </li>
              <li style={styles.liDefault}>
                Cross-border data transfers from India and EEA to other jurisdictions
              </li>
            </ul>

            <h3 style={styles.sectionH3}>1.2 Who We Are</h3>
            <div style={styles.dualCompliance}>
              <div style={styles.complianceCard}>
                <h3 style={styles.complianceCardH3}>🇮🇳 DPDPA Context</h3>
                <ul style={styles.complianceCardUl}>
                  <ComplianceListItem>
                    <strong style={styles.strongDefault}>Data Fiduciary:</strong> Saubh.Tech
                  </ComplianceListItem>
                  <ComplianceListItem>
                    <strong style={styles.strongDefault}>Role:</strong> We determine the purpose and
                    means of processing your personal data
                  </ComplianceListItem>
                  <ComplianceListItem>
                    <strong style={styles.strongDefault}>Registration:</strong> Registered with Data
                    Protection Board of India
                  </ComplianceListItem>
                </ul>
              </div>
              <div style={styles.complianceCard}>
                <h3 style={styles.complianceCardH3}>🇪🇺 GDPR Context</h3>
                <ul style={styles.complianceCardUl}>
                  <ComplianceListItem>
                    <strong style={styles.strongDefault}>Data Controller:</strong> Saubh.Tech
                  </ComplianceListItem>
                  <ComplianceListItem>
                    <strong style={styles.strongDefault}>Role:</strong> We determine the purposes and
                    means of processing personal data
                  </ComplianceListItem>
                  <ComplianceListItem>
                    <strong style={styles.strongDefault}>EU Representative:</strong> [If applicable]
                  </ComplianceListItem>
                </ul>
              </div>
            </div>

            <h3 style={styles.sectionH3}>1.3 Services Covered</h3>
            <p style={styles.sectionP}>This policy covers all services provided through:</p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>Saubh.Tech website and web applications</li>
              <li style={styles.liDefault}>Mobile applications (iOS &amp; Android)</li>
              <li style={styles.liDefault}>API services and integrations</li>
              <li style={styles.liDefault}>Customer support and communication channels</li>
              <li style={styles.liDefault}>Marketing and promotional activities</li>
            </ul>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              2. DATA COLLECTION & PROCESSING
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>🔍</span> 2. DATA COLLECTION &amp; PROCESSING
            </h2>

            <h3 style={styles.sectionH3}>2.1 Types of Personal Data We Collect</h3>
            <table style={styles.dataTable}>
              <thead>
                <tr>
                  <th style={styles.dataTableTh}>Data Category</th>
                  <th style={styles.dataTableTh}>Examples</th>
                  <th style={styles.dataTableTh}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Identity Data", "Name, date of birth, gender, profile photo", "Account creation, verification"],
                  ["Contact Data", "Email, phone number, postal address", "Communication, service delivery"],
                  ["Financial Data", "Payment card details, bank account info, transaction history", "Payment processing, refunds"],
                  ["Technical Data", "IP address, browser type, device ID, cookies", "Security, analytics, personalization"],
                  ["Usage Data", "Service interactions, preferences, search history", "Service improvement, recommendations"],
                  ["Professional Data", "Job title, company, work experience, skills", "Service matching, training programs"],
                  ["Communication Data", "Chat logs, support tickets, feedback", "Service quality, dispute resolution"],
                ].map((row, i) => (
                  <tr key={i} style={getRowStyle(i)}>
                    <td style={styles.dataTableTd}>
                      <strong style={styles.strongDefault}>{row[0]}</strong>
                    </td>
                    <td style={styles.dataTableTd}>{row[1]}</td>
                    <td style={styles.dataTableTd}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={styles.sectionH3}>2.2 How We Collect Data</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Direct Collection:</strong> Information you provide
                during registration, service use, or communication
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Automated Collection:</strong> Technical data
                through cookies, analytics tools, and tracking technologies
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Third-Party Sources:</strong> Social media
                platforms (with your consent), payment processors, identity verification services
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Public Sources:</strong> Publicly available
                professional profiles (LinkedIn, GitHub, etc.)
              </li>
            </ul>

            <h3 style={styles.sectionH3}>2.3 Legal Basis for Processing (GDPR)</h3>
            <div style={styles.infoBox}>
              <h4 style={styles.infoBoxH4}>We process your personal data based on:</h4>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Consent:</strong> You have given clear consent
                  for specific purposes (e.g., marketing emails)
                </li>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Contract Performance:</strong> Processing is
                  necessary to fulfill our service agreement with you
                </li>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Legal Obligation:</strong> Processing is required
                  to comply with applicable laws (e.g., tax, anti-fraud)
                </li>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Legitimate Interests:</strong> Processing is
                  necessary for our legitimate business interests (e.g., fraud prevention, security) that
                  don&apos;t override your rights
                </li>
              </ul>
            </div>

            <h3 style={styles.sectionH3}>2.4 Consent Mechanism (DPDPA)</h3>
            <div style={styles.successBox}>
              <h4 style={styles.successBoxH4}>How We Obtain Your Consent:</h4>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Free Consent:</strong> Obtained without coercion,
                  clearly explained, and easily withdrawable
                </li>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Specific &amp; Informed:</strong> Separate consent
                  for each processing purpose
                </li>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Clear Affirmative Action:</strong> Opt-in
                  checkboxes, explicit acceptance (no pre-ticked boxes)
                </li>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Verifiable:</strong> We maintain records of all
                  consents obtained
                </li>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>Withdrawable:</strong> You can withdraw consent
                  anytime through account settings or by contacting us
                </li>
              </ul>
            </div>

            <h3 style={styles.sectionH3}>2.5 Processing of Children&apos;s Data</h3>
            <div style={styles.criticalBox}>
              <h4 style={styles.criticalBoxH4}>⚠️ Special Protection for Minors</h4>
              <p style={styles.sectionP}>
                <strong style={styles.strongDefault}>DPDPA:</strong> We do not knowingly collect or
                process personal data of individuals under 18 years without verifiable parental/guardian
                consent.
              </p>
              <p style={styles.sectionP}>
                <strong style={styles.strongDefault}>GDPR:</strong> Users under 16 years (or lower age
                set by EU Member State) require parental consent for information society services.
              </p>
              <p style={styles.sectionP}>
                <strong style={styles.strongDefault}>Our Policy:</strong> Services are intended for users
                18 years and above. If we discover unauthorized data collection from minors, we will
                delete it immediately and notify relevant authorities as required.
              </p>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              3. YOUR RIGHTS
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>⚖️</span> 3. YOUR RIGHTS
            </h2>
            <p style={styles.sectionP}>
              Under DPDPA and GDPR, you have comprehensive rights regarding your personal data:
            </p>

            <div style={styles.rightsGrid}>
              <RightCard
                title="🔍 Right to Access"
                description="Request a copy of all personal data we hold about you, including processing purposes and third-party recipients."
              />
              <RightCard
                title="✏️ Right to Correction"
                description="Request correction or completion of inaccurate or incomplete personal data without undue delay."
              />
              <RightCard
                title="🗑️ Right to Erasure"
                description='Request deletion of your personal data ("right to be forgotten") when no longer necessary or consent is withdrawn.'
              />
              <RightCard
                title="🔒 Right to Restriction"
                description="Request limitation of processing in certain circumstances (e.g., during accuracy verification)."
              />
              <RightCard
                title="📤 Right to Data Portability"
                description="Receive your data in structured, machine-readable format and transfer it to another service provider."
              />
              <RightCard
                title="🚫 Right to Object"
                description="Object to processing based on legitimate interests, direct marketing, or profiling at any time."
              />
              <RightCard
                title="🤖 Rights Related to Automated Processing"
                description="Not be subject to decisions based solely on automated processing (including profiling) with legal/significant effects."
              />
              <RightCard
                title="📢 Right to Nominate (DPDPA)"
                description="Nominate another person to exercise your rights in case of death or incapacity."
              />
              <RightCard
                title="📋 Right to Grievance Redressal"
                description="File complaints with our Data Protection Officer or supervisory authorities (Data Protection Board/ICO)."
              />
            </div>

            <div style={styles.highlightBox}>
              <h4 style={styles.highlightBoxH4}>⏱️ Response Timeline</h4>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>GDPR:</strong> We respond to requests within{" "}
                  <strong style={styles.strongDefault}>one month</strong> (extendable by two months for
                  complex requests)
                </li>
                <li style={styles.liDefault}>
                  <strong style={styles.strongDefault}>DPDPA:</strong> We respond within timeframes
                  prescribed by Data Protection Board (typically{" "}
                  <strong style={styles.strongDefault}>
                    within reasonable time, not exceeding prescribed limits
                  </strong>
                  )
                </li>
                <li style={styles.liDefault}>
                  Requests are processed{" "}
                  <strong style={styles.strongDefault}>free of charge</strong> unless manifestly
                  unfounded or excessive
                </li>
              </ul>
            </div>

            <h3 style={styles.sectionH3}>3.1 How to Exercise Your Rights</h3>
            <ol style={styles.olDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Self-Service:</strong> Access most rights through
                your Account Settings dashboard
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Email Request:</strong> Send detailed request to{" "}
                <strong style={styles.strongDefault}>privacy@saubh.tech</strong>
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Written Request:</strong> Submit to our Data
                Protection Officer (contact details in Section 11)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Identity Verification:</strong> We may request
                additional information to verify your identity before processing requests
              </li>
            </ol>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              4. DATA SECURITY MEASURES
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>🔐</span> 4. DATA SECURITY MEASURES
            </h2>

            <h3 style={styles.sectionH3}>4.1 Technical Safeguards</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Encryption:</strong> Data encrypted in transit
                (TLS 1.3+) and at rest (AES-256)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Access Controls:</strong> Role-based access control
                (RBAC), multi-factor authentication (MFA)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Network Security:</strong> Firewalls, intrusion
                detection/prevention systems (IDS/IPS), DDoS protection
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Secure Development:</strong> Code reviews,
                vulnerability scanning, penetration testing
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Data Masking:</strong> Pseudonymization and
                anonymization where appropriate
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Backup &amp; Recovery:</strong> Encrypted backups,
                disaster recovery plans, business continuity protocols
              </li>
            </ul>

            <h3 style={styles.sectionH3}>4.2 Organizational Safeguards</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Privacy by Design:</strong> Data protection
                integrated into system design from inception
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Staff Training:</strong> Regular privacy and
                security awareness training for all employees
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Confidentiality Agreements:</strong> All staff and
                contractors sign NDAs and data protection clauses
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Access Limitation:</strong> Data access on
                "need-to-know" basis only
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Regular Audits:</strong> Internal and external
                security audits, compliance assessments
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Incident Response:</strong> 24/7 security monitoring
                and incident response team
              </li>
            </ul>

            <h3 style={styles.sectionH3}>4.3 Third-Party Security</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                Data processors contractually bound to GDPR/DPDPA standards
              </li>
              <li style={styles.liDefault}>
                Due diligence and security assessments before engagement
              </li>
              <li style={styles.liDefault}>
                Regular monitoring and auditing of third-party compliance
              </li>
              <li style={styles.liDefault}>
                Data Processing Agreements (DPAs) with all processors
              </li>
            </ul>

            <h3 style={styles.sectionH3}>4.4 Data Breach Management</h3>
            <div style={styles.criticalBox}>
              <h4 style={styles.criticalBoxH4}>⚠️ Breach Notification Protocol</h4>
              <p style={styles.sectionP}>
                <strong style={styles.strongDefault}>GDPR Requirements:</strong>
              </p>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>
                  Supervisory authority notified within{" "}
                  <strong style={styles.strongDefault}>72 hours</strong> of breach discovery
                </li>
                <li style={styles.liDefault}>
                  Affected individuals notified{" "}
                  <strong style={styles.strongDefault}>without undue delay</strong> if high risk to
                  rights and freedoms
                </li>
              </ul>
              <p style={{ ...styles.sectionP, marginTop: 15 }}>
                <strong style={styles.strongDefault}>DPDPA Requirements:</strong>
              </p>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>
                  Data Protection Board and affected Data Principals notified as per prescribed timelines
                </li>
                <li style={styles.liDefault}>
                  Breach details documented and reported in prescribed format
                </li>
              </ul>
              <p style={{ ...styles.sectionP, marginTop: 15 }}>
                <strong style={styles.strongDefault}>Our Commitment:</strong> Immediate containment,
                investigation, remediation, and transparent communication with all affected parties.
              </p>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              5. CROSS-BORDER DATA TRANSFERS
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>🌍</span> 5. CROSS-BORDER DATA TRANSFERS
            </h2>

            <h3 style={styles.sectionH3}>5.1 GDPR Transfer Mechanisms</h3>
            <p style={styles.sectionP}>
              When transferring personal data outside the EEA, we ensure adequate protection through:
            </p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Adequacy Decisions:</strong> Transfers to countries
                recognized by EU Commission as providing adequate protection
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Standard Contractual Clauses (SCCs):</strong> EU
                Commission-approved contracts with data importers
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Binding Corporate Rules (BCRs):</strong> Internal
                policies for intra-group transfers (if applicable)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Certification Mechanisms:</strong> EU-US Data
                Privacy Framework participation (if applicable)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Explicit Consent:</strong> In specific cases, with
                informed consent for transfer to non-adequate countries
              </li>
            </ul>

            <h3 style={styles.sectionH3}>5.2 DPDPA Cross-Border Transfer</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                Transfers comply with restrictions notified by Central Government
              </li>
              <li style={styles.liDefault}>
                Adequate data protection standards ensured in destination countries/jurisdictions
              </li>
              <li style={styles.liDefault}>Contractual safeguards with overseas recipients</li>
              <li style={styles.liDefault}>
                Data Principals informed about cross-border transfers
              </li>
            </ul>

            <h3 style={styles.sectionH3}>5.3 Current Data Locations</h3>
            <table style={styles.dataTable}>
              <thead>
                <tr>
                  <th style={styles.dataTableTh}>Data Type</th>
                  <th style={styles.dataTableTh}>Primary Location</th>
                  <th style={styles.dataTableTh}>Backup Location</th>
                  <th style={styles.dataTableTh}>Transfer Mechanism</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["User Accounts", "India (AWS Mumbai)", "India (Secondary DC)", "N/A (Domestic)"],
                  ["EU Customer Data", "EU (AWS Frankfurt)", "EU (AWS Ireland)", "N/A (Within EEA)"],
                  ["Analytics Data", "India", "USA", "SCCs, DPA"],
                  ["Email Communications", "India", "Global (SendGrid)", "DPA, SCCs"],
                ].map((row, i) => (
                  <tr key={i} style={getRowStyle(i)}>
                    <td style={styles.dataTableTd}>{row[0]}</td>
                    <td style={styles.dataTableTd}>{row[1]}</td>
                    <td style={styles.dataTableTd}>{row[2]}</td>
                    <td style={styles.dataTableTd}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              6. DATA RETENTION & DELETION
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>⏳</span> 6. DATA RETENTION &amp; DELETION
            </h2>

            <h3 style={styles.sectionH3}>6.1 Retention Principles</h3>
            <p style={styles.sectionP}>We retain personal data only as long as necessary for:</p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>Fulfilling the purposes for which it was collected</li>
              <li style={styles.liDefault}>
                Complying with legal, regulatory, tax, or accounting requirements
              </li>
              <li style={styles.liDefault}>
                Establishing, exercising, or defending legal claims
              </li>
              <li style={styles.liDefault}>
                Protecting legitimate business interests (e.g., fraud prevention)
              </li>
            </ul>

            <h3 style={styles.sectionH3}>6.2 Retention Periods</h3>
            <table style={styles.dataTable}>
              <thead>
                <tr>
                  <th style={styles.dataTableTh}>Data Category</th>
                  <th style={styles.dataTableTh}>Retention Period</th>
                  <th style={styles.dataTableTh}>Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Active Account Data", "Duration of account + 6 months", "Contract performance"],
                  ["Financial/Transaction Records", "7 years from transaction date", "Tax & accounting laws"],
                  ["Marketing Consents", "Until consent withdrawn + 30 days", "Consent"],
                  ["Support Tickets", "3 years from closure", "Legitimate interest (service improvement)"],
                  ["Security Logs", "90 days (active logs), 2 years (archived)", "Legal obligation, security"],
                  ["Anonymized Analytics", "Indefinitely", "No personal data (anonymized)"],
                ].map((row, i) => (
                  <tr key={i} style={getRowStyle(i)}>
                    <td style={styles.dataTableTd}>{row[0]}</td>
                    <td style={styles.dataTableTd}>{row[1]}</td>
                    <td style={styles.dataTableTd}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={styles.sectionH3}>6.3 Deletion Process</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Automatic Deletion:</strong> Data automatically
                purged after retention period expires
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Secure Erasure:</strong> Multi-pass overwriting,
                cryptographic erasure for encrypted data
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Backup Deletion:</strong> Data removed from backups
                during next backup cycle (max 90 days)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Third-Party Data:</strong> Deletion instructions
                sent to all data processors
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Verification:</strong> Deletion confirmed and
                documented in data processing records
              </li>
            </ul>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              7. COOKIES & TRACKING TECHNOLOGIES
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>🍪</span> 7. COOKIES &amp; TRACKING TECHNOLOGIES
            </h2>

            <h3 style={styles.sectionH3}>7.1 What Are Cookies?</h3>
            <p style={styles.sectionP}>
              Cookies are small text files placed on your device to collect standard internet log and
              visitor behavior information. We use cookies and similar technologies (web beacons, pixels,
              local storage) for:
            </p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                Essential site functionality (authentication, security)
              </li>
              <li style={styles.liDefault}>
                Performance and analytics (site usage, traffic patterns)
              </li>
              <li style={styles.liDefault}>Personalization (language, preferences)</li>
              <li style={styles.liDefault}>
                Advertising and marketing (targeted ads, campaign effectiveness)
              </li>
            </ul>

            <h3 style={styles.sectionH3}>7.2 Types of Cookies We Use</h3>
            <table style={styles.dataTable}>
              <thead>
                <tr>
                  <th style={styles.dataTableTh}>Cookie Type</th>
                  <th style={styles.dataTableTh}>Purpose</th>
                  <th style={styles.dataTableTh}>Duration</th>
                  <th style={styles.dataTableTh}>Consent Required</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Strictly Necessary", "Essential site functions, security, load balancing", "Session / 1 year", "No"],
                  ["Functional", "Remember preferences, settings, login status", "1-2 years", "No (legitimate interest)"],
                  ["Performance/Analytics", "Google Analytics, error tracking, A/B testing", "2 years", "Yes"],
                  ["Advertising/Marketing", "Facebook Pixel, Google Ads, retargeting", "1-2 years", "Yes"],
                ].map((row, i) => (
                  <tr key={i} style={getRowStyle(i)}>
                    <td style={styles.dataTableTd}>
                      <strong style={styles.strongDefault}>{row[0]}</strong>
                    </td>
                    <td style={styles.dataTableTd}>{row[1]}</td>
                    <td style={styles.dataTableTd}>{row[2]}</td>
                    <td style={styles.dataTableTd}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={styles.sectionH3}>7.3 Cookie Consent Management</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Banner Notice:</strong> Clear cookie notice on first
                visit with option to accept or customize
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Granular Control:</strong> Separate opt-in for
                different cookie categories
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Easy Withdrawal:</strong> Change cookie preferences
                anytime via Cookie Settings link
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Pre-Consent Blocking:</strong> Non-essential cookies
                blocked until explicit consent given
              </li>
            </ul>

            <h3 style={styles.sectionH3}>7.4 Third-Party Cookies</h3>
            <p style={styles.sectionP}>
              We use third-party services that may set cookies:
            </p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>Google Analytics (analytics and advertising)</li>
              <li style={styles.liDefault}>Facebook Pixel (advertising and remarketing)</li>
              <li style={styles.liDefault}>Payment processors (Stripe, Razorpay - fraud prevention)</li>
              <li style={styles.liDefault}>Customer support tools (Intercom, Zendesk)</li>
            </ul>

            <h3 style={styles.sectionH3}>7.5 How to Control Cookies</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Browser Settings:</strong> Most browsers allow you to
                refuse or delete cookies
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Opt-Out Tools:</strong> Network Advertising Initiative,
                Digital Advertising Alliance
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Do Not Track (DNT):</strong> We respect DNT signals
                where technically feasible
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Our Cookie Settings:</strong> Manage preferences in
                your account dashboard
              </li>
            </ul>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              8. DATA SHARING & THIRD PARTIES
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>🤝</span> 8. DATA SHARING &amp; THIRD PARTIES
            </h2>

            <h3 style={styles.sectionH3}>8.1 When We Share Data</h3>
            <p style={styles.sectionP}>
              We share personal data only in the following circumstances:
            </p>

            <h4 style={styles.sectionH4}>8.1.1 Service Providers (Data Processors)</h4>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Cloud Hosting:</strong> AWS, Google Cloud Platform
                (infrastructure)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Payment Processing:</strong> Stripe, Razorpay, PayPal
                (transactions)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Email Services:</strong> SendGrid, Amazon SES
                (transactional emails)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Customer Support:</strong> Zendesk, Intercom
                (helpdesk)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Analytics:</strong> Google Analytics, Mixpanel (usage
                analysis)
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Security:</strong> Cloudflare (DDoS protection), Auth0
                (authentication)
              </li>
            </ul>
            <p style={styles.sectionP}>
              <strong style={styles.strongDefault}>Safeguards:</strong> All processors bound by Data
              Processing Agreements (DPAs) compliant with GDPR Article 28 and DPDPA requirements.
            </p>

            <h4 style={styles.sectionH4}>8.1.2 Business Partners</h4>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                Training providers, course instructors (for skilling programs)
              </li>
              <li style={styles.liDefault}>
                Service professionals matched to your requests
              </li>
              <li style={styles.liDefault}>
                Co-marketing partners (with explicit consent only)
              </li>
            </ul>

            <h4 style={styles.sectionH4}>8.1.3 Legal Requirements</h4>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                Law enforcement agencies (valid legal requests, court orders)
              </li>
              <li style={styles.liDefault}>
                Regulatory/government authorities (compliance obligations)
              </li>
              <li style={styles.liDefault}>
                Legal advisors (in connection with legal proceedings)
              </li>
              <li style={styles.liDefault}>Tax authorities (financial reporting)</li>
            </ul>

            <h4 style={styles.sectionH4}>8.1.4 Business Transfers</h4>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                In case of merger, acquisition, or sale of assets, data may be transferred to successor
                entity (with notice to users)
              </li>
            </ul>

            <h3 style={styles.sectionH3}>8.2 We DO NOT:</h3>
            <div style={styles.criticalBox}>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>❌ Sell your personal data to third parties</li>
                <li style={styles.liDefault}>
                  ❌ Share data with advertisers without anonymization
                </li>
                <li style={styles.liDefault}>
                  ❌ Use your data for purposes incompatible with original collection
                </li>
                <li style={styles.liDefault}>
                  ❌ Share sensitive data without explicit consent
                </li>
                <li style={styles.liDefault}>
                  ❌ Transfer data to non-compliant jurisdictions
                </li>
              </ul>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              9. DATA PROCESSING RECORDS (DPIA & ROPA)
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>📊</span> 9. DATA PROCESSING RECORDS (DPIA &amp; ROPA)
            </h2>

            <h3 style={styles.sectionH3}>9.1 Data Protection Impact Assessments (DPIA)</h3>
            <p style={styles.sectionP}>We conduct DPIAs for:</p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                High-risk processing activities (large-scale profiling, automated decisions)
              </li>
              <li style={styles.liDefault}>
                New technologies or processes that may affect privacy
              </li>
              <li style={styles.liDefault}>Processing of special categories of data</li>
              <li style={styles.liDefault}>Systematic monitoring of public areas</li>
            </ul>

            <h3 style={styles.sectionH3}>9.2 Records of Processing Activities (ROPA)</h3>
            <p style={styles.sectionP}>We maintain comprehensive records documenting:</p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                Categories of data processed and processing purposes
              </li>
              <li style={styles.liDefault}>
                Categories of data subjects and data recipients
              </li>
              <li style={styles.liDefault}>Cross-border data transfers</li>
              <li style={styles.liDefault}>
                Data retention periods and security measures
              </li>
              <li style={styles.liDefault}>Processor details and DPA information</li>
            </ul>
            <p style={styles.sectionP}>
              <strong style={styles.strongDefault}>Availability:</strong> ROPA summaries available to
              Data Principals/Subjects upon request; full records provided to supervisory authorities.
            </p>

            <h3 style={styles.sectionH3}>9.3 Automated Decision-Making &amp; Profiling</h3>
            <div style={styles.infoBox}>
              <h4 style={styles.infoBoxH4}>Our Approach to Automated Processing</h4>
              <p style={styles.sectionP}>
                <strong style={styles.strongDefault}>Limited Use:</strong> We use automated processing for:
              </p>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>
                  Fraud detection and prevention (transaction risk scoring)
                </li>
                <li style={styles.liDefault}>
                  Service recommendations (based on preferences and usage)
                </li>
                <li style={styles.liDefault}>
                  Content personalization (course suggestions, search results)
                </li>
              </ul>
              <p style={{ ...styles.sectionP, marginTop: 15 }}>
                <strong style={styles.strongDefault}>Safeguards:</strong>
              </p>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>
                  Human review for decisions with significant impact
                </li>
                <li style={styles.liDefault}>Right to contest automated decisions</li>
                <li style={styles.liDefault}>
                  Transparency about logic and consequences
                </li>
                <li style={styles.liDefault}>Option to request manual processing</li>
              </ul>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              10. SPECIAL CATEGORIES OF DATA
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>👶</span> 10. SPECIAL CATEGORIES OF DATA
            </h2>

            <h3 style={styles.sectionH3}>10.1 Sensitive Personal Data (DPDPA)</h3>
            <p style={styles.sectionP}>
              We generally avoid collecting sensitive personal data. When necessary, we collect only with
              explicit consent:
            </p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>Financial data (bank details, payment history)</li>
              <li style={styles.liDefault}>
                Health data (for specific wellness/training programs)
              </li>
              <li style={styles.liDefault}>
                Biometric data (for enhanced security features, if applicable)
              </li>
              <li style={styles.liDefault}>
                Government identifiers (Aadhaar, PAN - for compliance/verification only)
              </li>
            </ul>

            <h3 style={styles.sectionH3}>10.2 Special Categories (GDPR Article 9)</h3>
            <p style={styles.sectionP}>
              We do not routinely process special categories of data (racial/ethnic origin, political
              opinions, religious beliefs, trade union membership, genetic/biometric data, health data,
              sex life/sexual orientation).
            </p>
            <p style={styles.sectionP}>
              <strong style={styles.strongDefault}>Exception:</strong> If required for specific services,
              we obtain:
            </p>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>Explicit consent for each purpose</li>
              <li style={styles.liDefault}>
                Extra security measures (encryption, access restrictions)
              </li>
              <li style={styles.liDefault}>
                Enhanced privacy notices explaining risks and safeguards
              </li>
            </ul>

            <h3 style={styles.sectionH3}>10.3 Children&apos;s Data (Enhanced Protection)</h3>
            <div style={styles.criticalBox}>
              <h4 style={styles.criticalBoxH4}>⚠️ Strict Age Verification</h4>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>Services restricted to users 18+ years</li>
                <li style={styles.liDefault}>
                  Age verification at registration (self-declaration + validation)
                </li>
                <li style={styles.liDefault}>
                  Parental consent mechanism for users 13-17 (if educational services)
                </li>
                <li style={styles.liDefault}>
                  Immediate deletion if underage user detected
                </li>
                <li style={styles.liDefault}>No targeted advertising to minors</li>
                <li style={styles.liDefault}>
                  Enhanced security for any minor data (where legally permitted)
                </li>
              </ul>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              11. DATA PROTECTION CONTACTS
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.contactSection}>
            <h2 style={styles.contactSectionH2}>11. DATA PROTECTION CONTACTS</h2>

            <div style={styles.contactGrid}>
              <div style={styles.contactCard}>
                <h3 style={styles.contactCardH3}>🇮🇳 Data Protection Officer (India)</h3>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Name:</strong> RP Singh
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Email:</strong> dpo@saubh.tech
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Phone:</strong> 918800607598
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Address:</strong> 01 Tola-Tari, Sarha,
                  Dahiawan, Chapra, Saran, Bihar - 841301
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Office Hours:</strong> Mon-Fri, 9:30 AM - 6:30
                  PM IST
                </p>
              </div>

              <div style={styles.contactCard}>
                <h3 style={styles.contactCardH3}>📧 General Privacy Inquiries</h3>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Email:</strong> privacy@saubh.tech
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Subject Line:</strong> [Privacy Request - Your
                  Name]
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Response Time:</strong> Within 48 hours
                  (acknowledgment)
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Online Portal:</strong> privacy.saubh.tech/requests
                </p>
              </div>

              <div style={styles.contactCard}>
                <h3 style={styles.contactCardH3}>🚨 Data Breach Reporting</h3>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Emergency Email:</strong> breach@saubh.tech
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>PGP Key:</strong> [Insert PGP Fingerprint]
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>24/7 Hotline:</strong> [Insert Number]
                </p>
                <p style={styles.contactCardP}>
                  <strong style={styles.contactCardStrong}>Incident Portal:</strong> saubh.tech/report
                </p>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              12. POLICY UPDATES & NOTIFICATIONS
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>📝</span> 12. POLICY UPDATES &amp; NOTIFICATIONS
            </h2>

            <h3 style={styles.sectionH3}>12.1 Changes to This Policy</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                We may update this policy to reflect legal, operational, or technological changes
              </li>
              <li style={styles.liDefault}>
                Material changes will be notified via:
                <ul style={{ ...styles.ulDefault, marginLeft: 30, marginTop: 10 }}>
                  <li style={styles.liDefault}>
                    Email to registered users (at least 30 days before effective date)
                  </li>
                  <li style={styles.liDefault}>Prominent website banner/notification</li>
                  <li style={styles.liDefault}>Push notifications (mobile app users)</li>
                  <li style={styles.liDefault}>Account dashboard alerts</li>
                </ul>
              </li>
              <li style={styles.liDefault}>
                Previous versions archived and available at: privacy.saubh.tech/archive
              </li>
            </ul>

            <h3 style={styles.sectionH3}>12.2 Version History</h3>
            <table style={styles.dataTable}>
              <thead>
                <tr>
                  <th style={styles.dataTableTh}>Version</th>
                  <th style={styles.dataTableTh}>Date</th>
                  <th style={styles.dataTableTh}>Major Changes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2.0", "January 20, 2026", "DPDPA 2023 compliance added; enhanced data rights section"],
                  ["1.5", "May 15, 2025", "Updated cookie policy; added new processors"],
                  ["1.0", "January 1, 2024", "Initial GDPR-compliant policy"],
                ].map((row, i) => (
                  <tr key={i} style={getRowStyle(i)}>
                    <td style={styles.dataTableTd}>{row[0]}</td>
                    <td style={styles.dataTableTd}>{row[1]}</td>
                    <td style={styles.dataTableTd}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={styles.sectionH3}>12.3 Continued Use = Acceptance</h3>
            <p style={styles.sectionP}>
              By continuing to use Saubh.Tech services after policy updates, you accept the revised terms.
              If you disagree with changes, please discontinue use and request account deletion.
            </p>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              13. LEGAL COMPLIANCE & CERTIFICATIONS
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.section}>
            <h2 style={styles.sectionH2}>
              <span>⚖️</span> 13. LEGAL COMPLIANCE &amp; CERTIFICATIONS
            </h2>

            <h3 style={styles.sectionH3}>13.1 Applicable Laws &amp; Regulations</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                🇮🇳 <strong style={styles.strongDefault}>Digital Personal Data Protection Act (DPDPA), 2023</strong> - India
              </li>
              <li style={styles.liDefault}>
                🇪🇺 <strong style={styles.strongDefault}>General Data Protection Regulation (GDPR), 2016</strong> - European Union
              </li>
              <li style={styles.liDefault}>
                🇬🇧 <strong style={styles.strongDefault}>UK GDPR &amp; Data Protection Act 2018</strong> - United Kingdom
              </li>
              <li style={styles.liDefault}>
                🌍 <strong style={styles.strongDefault}>Privacy Shield Framework</strong> (where applicable)
              </li>
              <li style={styles.liDefault}>
                📋 <strong style={styles.strongDefault}>Information Technology Act, 2000</strong> &amp; Rules (India)
              </li>
              <li style={styles.liDefault}>
                💳 <strong style={styles.strongDefault}>PCI DSS</strong> (Payment Card Industry Data Security Standard)
              </li>
              <li style={styles.liDefault}>
                🔒 <strong style={styles.strongDefault}>ISO 27001</strong> (Information Security Management)
              </li>
            </ul>

            <h3 style={styles.sectionH3}>13.2 Certifications &amp; Audits</h3>
            <div style={styles.successBox}>
              <h4 style={styles.successBoxH4}>Our Compliance Certifications:</h4>
              <ul style={styles.ulDefault}>
                <li style={styles.liDefault}>
                  ✅ ISO 27001:2022 Certified (Information Security)
                </li>
                <li style={styles.liDefault}>
                  ✅ SOC 2 Type II Compliant (Security &amp; Privacy)
                </li>
                <li style={styles.liDefault}>
                  ✅ PCI DSS Level 1 Certified (Payment Security)
                </li>
                <li style={styles.liDefault}>
                  ✅ Annual third-party privacy audits conducted
                </li>
                <li style={styles.liDefault}>
                  ✅ Continuous vulnerability assessments &amp; penetration testing
                </li>
              </ul>
            </div>

            <h3 style={styles.sectionH3}>13.3 Accountability &amp; Governance</h3>
            <ul style={styles.ulDefault}>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Privacy Steering Committee:</strong> Cross-functional
                team overseeing compliance
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Quarterly Reviews:</strong> Regular policy and process
                reviews
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Training Programs:</strong> Mandatory privacy training
                for all employees
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Vendor Management:</strong> Ongoing monitoring of
                third-party compliance
              </li>
              <li style={styles.liDefault}>
                <strong style={styles.strongDefault}>Incident Drills:</strong> Regular breach response
                simulations
              </li>
            </ul>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              OUR COMMITMENT TO YOU
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.commitmentSection}>
            <h2 style={styles.commitmentSectionH2}>🌟 OUR COMMITMENT TO YOU</h2>
            <p style={{ ...styles.commitmentSectionP, fontSize: "1.15em", lineHeight: 2 }}>
              At <strong style={styles.commitmentStrong}>Saubh.Tech</strong>, your trust is our most
              valuable asset. We are committed to:
            </p>
            <p style={{ ...styles.commitmentSectionP, marginTop: 20 }}>
              ✓ <strong style={styles.commitmentStrong}>Protecting</strong> your personal data with the
              highest security standards<br />
              ✓ <strong style={styles.commitmentStrong}>Respecting</strong> your privacy rights and
              choices<br />
              ✓ <strong style={styles.commitmentStrong}>Maintaining</strong> transparency in our data
              practices<br />
              ✓ <strong style={styles.commitmentStrong}>Complying</strong> with all applicable data
              protection laws<br />
              ✓ <strong style={styles.commitmentStrong}>Continuously improving</strong> our privacy
              safeguards<br />
              ✓ <strong style={styles.commitmentStrong}>Empowering you</strong> with control over your data
            </p>
            <p style={{ ...styles.commitmentSectionP, marginTop: 20, fontStyle: "italic", fontSize: "1.05em" }}>
              Privacy isn&apos;t just compliance — it&apos;s our core value.
            </p>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              Questions or Concerns?
          ════════════════════════════════════════════════════════════════ */}
          <div style={styles.questionsBox}>
            <h2 style={styles.questionsH2}>Questions or Concerns?</h2>
            <p style={{ fontSize: "1.1em", marginBottom: 25 }}>
              We&apos;re here to help. Contact our Data Protection Team:
            </p>
            <div style={styles.questionsRow}>
              <div>
                <strong style={styles.strongDefault}>📧 Email:</strong>
                <br />
                <a href="mailto:privacy@saubh.tech" style={styles.questionsLink}>
                  privacy@saubh.tech
                </a>
              </div>
              <div>
                <strong style={styles.strongDefault}>🌐 Privacy Portal:</strong>
                <br />
                <a href="https://privacy.saubh.tech" style={styles.questionsLink}>
                  privacy.saubh.tech
                </a>
              </div>
              <div>
                <strong style={styles.strongDefault}>📞 Support:</strong>
                <br />
                <span style={{ ...styles.questionsLink, color: "#1e3c72" }}>
                  918800607598
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── FOOTER ──────────────────────────────────────────────────── */}
        <footer style={styles.footer}>
          <h3 style={styles.footerH3}>© 2026 Saubh.Tech — All Rights Reserved</h3>
          <p style={styles.footerP}>
            Registered under the laws of India | Data Protection &amp; Privacy Compliant
          </p>
          <p style={styles.footerP}>
            This policy was last reviewed and updated on January 20, 2026
          </p>
          <div style={styles.footerLinks}>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Security</FooterLink>
          </div>
        </footer>
      </div>
    </div>
  );
}