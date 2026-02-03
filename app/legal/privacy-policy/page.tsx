export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-10 shadow-xl">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-900 mb-3 pb-4 border-b-4 border-[#007bff]">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          <strong>Last Updated:</strong> January 24, 2025
        </p>

        {/* Compliance Notice */}
        <div className="bg-[#fff3cd] p-4 border-l-4 border-[#ffc107] mb-8">
          <p className="text-gray-800">
            <strong>Compliance Notice:</strong> This Privacy Policy is designed to comply with the General Data Protection Regulation (GDPR) of the European Union and the Digital Personal Data Protection Act, 2023 (DPDPA) of India.
          </p>
        </div>

        {/* Section 1: Introduction */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            1. Introduction
          </h2>
          <p className="mb-4 text-gray-800 text-justify">
            Welcome to <strong>saubh.tech</strong> (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="mb-4 text-gray-800 text-justify">
            By accessing or using saubh.tech, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>
        </section>

        {/* Section 2: Data Controller */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            2. Data Controller & Contact Information
          </h2>
          <div className="bg-gray-50 p-5 border-2 border-[#007bff] rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Controller Information:</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Company Name:</strong> Saubh Tech<br />
              <strong>Registered Address:</strong> 01 Tola-Tari, Sarha, Dahiawan, Chapra, Saran, Bihar - 841301<br />
              <strong>Email:</strong> support@saubh.tech<br />
              <strong>Phone:</strong> 918800607598<br />
              <strong>Data Protection Officer (DPO):</strong> RP Singh<br />
              <strong>Grievance Officer (India):</strong> RP Singh
            </p>
          </div>
        </section>

        {/* Section 3: Legal Basis */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            3. Legal Basis for Processing (GDPR Article 6 & DPDPA Section 7)
          </h2>
          <p className="mb-4 text-gray-800 text-justify">We process your personal data based on the following legal grounds:</p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes</li>
            <li><strong>Contract Performance:</strong> Processing is necessary to fulfill a contract with you</li>
            <li><strong>Legal Obligation:</strong> Processing is necessary to comply with legal obligations</li>
            <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests (fraud prevention, security, service improvement)</li>
          </ul>
        </section>

        {/* Section 4: Information We Collect */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            4. Information We Collect
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">4.1 Personal Data You Provide</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-5">
              <thead>
                <tr className="bg-[#007bff] text-white">
                  <th className="border border-gray-300 p-3 text-left">Data Category</th>
                  <th className="border border-gray-300 p-3 text-left">Examples</th>
                  <th className="border border-gray-300 p-3 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 p-3">Identity Data</td>
                  <td className="border border-gray-300 p-3">Name, username, date of birth</td>
                  <td className="border border-gray-300 p-3">Account creation, service delivery</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Contact Data</td>
                  <td className="border border-gray-300 p-3">Email, phone number, address</td>
                  <td className="border border-gray-300 p-3">Communication, service delivery</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Financial Data</td>
                  <td className="border border-gray-300 p-3">Payment card details, bank info</td>
                  <td className="border border-gray-300 p-3">Transaction processing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Transaction Data</td>
                  <td className="border border-gray-300 p-3">Purchase history, payment records</td>
                  <td className="border border-gray-300 p-3">Order fulfillment, customer service</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Technical Data</td>
                  <td className="border border-gray-300 p-3">IP address, browser type, device info</td>
                  <td className="border border-gray-300 p-3">Security, analytics</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Usage Data</td>
                  <td className="border border-gray-300 p-3">Pages visited, time spent, clicks</td>
                  <td className="border border-gray-300 p-3">Service improvement, analytics</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Marketing Data</td>
                  <td className="border border-gray-300 p-3">Preferences, communication choices</td>
                  <td className="border border-gray-300 p-3">Personalized marketing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">4.2 Data Collected Automatically</h3>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Cookies & Similar Technologies:</strong> Session cookies, persistent cookies, web beacons</li>
            <li><strong>Log Data:</strong> Access times, browser type, referring URLs</li>
            <li><strong>Location Data:</strong> Approximate location based on IP address (or precise location with consent)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">4.3 Data from Third Parties</h3>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li>Social media platforms (if you link your account)</li>
            <li>Payment processors</li>
            <li>Analytics providers</li>
            <li>Publicly available sources</li>
          </ul>
        </section>

        {/* Section 5: How We Use Your Data */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            5. How We Use Your Data
          </h2>
          <p className="mb-4 text-gray-800 text-justify">We use your personal data for the following purposes:</p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
            <li><strong>Account Management:</strong> To create and manage your account</li>
            <li><strong>Transaction Processing:</strong> To process payments and complete orders</li>
            <li><strong>Customer Support:</strong> To respond to inquiries and provide assistance</li>
            <li><strong>Communication:</strong> To send service updates, notifications, and marketing (with consent)</li>
            <li><strong>Personalization:</strong> To customize your experience and recommend relevant content</li>
            <li><strong>Security & Fraud Prevention:</strong> To detect, prevent, and address security issues or fraudulent activity</li>
            <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
            <li><strong>Analytics & Research:</strong> To analyze trends, usage patterns, and improve our services</li>
          </ul>
        </section>

        {/* Section 6: Data Sharing */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            6. Data Sharing & Disclosure
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">6.1 Service Providers</h3>
          <p className="mb-4 text-gray-800 text-justify">We may share your data with third-party service providers who perform services on our behalf:</p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li>Payment processors (Stripe, Razorpay, PayPal)</li>
            <li>Cloud hosting providers (AWS, Google Cloud)</li>
            <li>Email and communication services</li>
            <li>Analytics providers (Google Analytics)</li>
            <li>Marketing platforms</li>
          </ul>
          <p className="mt-3 text-gray-800 text-justify">
            <strong>Data Processing Agreements:</strong> All service providers are bound by data processing agreements and are prohibited from using your data for purposes other than those we specify.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">6.2 Legal Requirements</h3>
          <p className="mb-4 text-gray-800 text-justify">We may disclose your data if required by law or in response to:</p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li>Court orders or legal processes</li>
            <li>Requests from government or regulatory authorities</li>
            <li>Protection of our rights, property, or safety</li>
            <li>Prevention of fraud or illegal activity</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">6.3 Business Transfers</h3>
          <p className="mb-4 text-gray-800 text-justify">
            In case of merger, acquisition, or sale of assets, your data may be transferred (you will be notified).
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">6.4 International Data Transfers</h3>
          <div className="bg-[#e7f3ff] p-5 rounded-lg my-5">
            <p className="text-gray-800 mb-3">
              <strong>Cross-Border Transfers:</strong> Your data may be transferred to countries outside the EU/India. We ensure such transfers comply with:
            </p>
            <ul className="ml-6 space-y-2 text-gray-700">
              <li><strong>GDPR:</strong> Standard Contractual Clauses (SCCs), adequacy decisions</li>
              <li><strong>DPDPA:</strong> Transfer to approved countries or with explicit consent</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Your Data Rights */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            7. Your Data Rights
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">7.1 GDPR Rights (EU Data Subjects)</h3>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Right to Access (Article 15):</strong> Obtain confirmation and copy of your data</li>
            <li><strong>Right to Rectification (Article 16):</strong> Correct inaccurate data</li>
            <li><strong>Right to Erasure (Article 17):</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
            <li><strong>Right to Restriction (Article 18):</strong> Limit how we use your data</li>
            <li><strong>Right to Data Portability (Article 20):</strong> Receive your data in a structured format</li>
            <li><strong>Right to Object (Article 21):</strong> Object to processing based on legitimate interests</li>
            <li><strong>Right to Withdraw Consent (Article 7):</strong> Withdraw consent at any time</li>
            <li><strong>Right to Lodge a Complaint:</strong> File a complaint with a supervisory authority</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">7.2 DPDPA Rights (Indian Data Subjects)</h3>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Right to Access (Section 11):</strong> Summary of processing activities and data held</li>
            <li><strong>Right to Correction (Section 12):</strong> Update or correct incomplete/inaccurate data</li>
            <li><strong>Right to Erasure (Section 13):</strong> Request deletion (subject to legal obligations)</li>
            <li><strong>Right to Grievance Redressal (Section 14):</strong> File complaints with Grievance Officer</li>
            <li><strong>Right to Nominate (Section 15):</strong> Nominate another individual to exercise rights in case of death/incapacity</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 my-6">7.3 How to Exercise Your Rights</h3>
          <p className="mb-4 text-gray-800 text-justify">To exercise any of the above rights, contact us at:</p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Email:</strong> privacy@saubh.tech</li>
            <li><strong>Subject Line:</strong> &quot;Data Rights Request - [Your Name]&quot;</li>
            <li><strong>Required Info:</strong> Full name, email, type of request, identity verification</li>
          </ul>
          <p className="mt-3 text-gray-800">
            <strong>Response Time:</strong> We will respond within 30 days (GDPR: 1 month; DPDPA: as soon as reasonably practicable).
          </p>
        </section>

        {/* Section 8: Data Retention */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            8. Data Retention
          </h2>
          <p className="mb-4 text-gray-800 text-justify">
            We retain your personal data only as long as necessary for the purposes stated in this policy:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-5">
              <thead>
                <tr className="bg-[#007bff] text-white">
                  <th className="border border-gray-300 p-3 text-left">Data Type</th>
                  <th className="border border-gray-300 p-3 text-left">Retention Period</th>
                  <th className="border border-gray-300 p-3 text-left">Reason</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 p-3">Account Data</td>
                  <td className="border border-gray-300 p-3">Until account deletion + 90 days</td>
                  <td className="border border-gray-300 p-3">Service delivery, legal obligations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Transaction Records</td>
                  <td className="border border-gray-300 p-3">7 years</td>
                  <td className="border border-gray-300 p-3">Tax, accounting, legal requirements</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Marketing Data</td>
                  <td className="border border-gray-300 p-3">Until consent withdrawal + 30 days</td>
                  <td className="border border-gray-300 p-3">Marketing communications</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Log Files</td>
                  <td className="border border-gray-300 p-3">12 months</td>
                  <td className="border border-gray-300 p-3">Security, fraud prevention</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 9: Data Security */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            9. Data Security
          </h2>
          <p className="mb-4 text-gray-800 text-justify">
            We implement appropriate technical and organizational measures to protect your data:
          </p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Encryption:</strong> Data in transit (TLS/SSL) and at rest (AES-256)</li>
            <li><strong>Access Controls:</strong> Role-based access, multi-factor authentication</li>
            <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
            <li><strong>Employee Training:</strong> Regular data protection training for staff</li>
            <li><strong>Incident Response:</strong> Data breach notification procedures (GDPR: 72 hours; DPDPA: as prescribed)</li>
          </ul>

          <div className="bg-[#fff3cd] p-4 border-l-4 border-[#ffc107] my-5">
            <p className="text-gray-800">
              <strong>Data Breach Notification:</strong> In case of a data breach likely to result in high risk to your rights, we will notify you and relevant authorities within the required timeframe.
            </p>
          </div>
        </section>

        {/* Section 10: Cookies */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            10. Cookies & Tracking Technologies
          </h2>
          <p className="mb-4 text-gray-800 text-justify">We use cookies and similar technologies for:</p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Performance Cookies:</strong> Analytics and site improvement</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences</li>
            <li><strong>Targeting Cookies:</strong> Personalized advertising (with consent)</li>
          </ul>
          <p className="mt-4 text-gray-800">
            <strong>Cookie Management:</strong> You can control cookies through your browser settings or our cookie consent tool.
          </p>
        </section>

        {/* Section 11: Children's Privacy */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            11. Children&apos;s Privacy
          </h2>
          <div className="bg-[#e7f3ff] p-5 rounded-lg my-5">
            <p className="text-gray-800 mb-3">
              <strong>Age Restriction:</strong> Our services are not intended for children under 18 years (DPDPA) / 16 years (GDPR). We do not knowingly collect data from children.
            </p>
            <p className="text-gray-800 mb-3">
              <strong>Parental Consent:</strong> If you are under 18 in India or under 16 in the EU, you may only use our services with verifiable parental consent.
            </p>
            <p className="text-gray-800">
              If we discover we have collected data from a child without proper consent, we will delete it immediately.
            </p>
          </div>
        </section>

        {/* Section 12: Third-Party Links */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            12. Third-Party Links
          </h2>
          <p className="mb-4 text-gray-800 text-justify">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. Please review their privacy policies before providing any information.
          </p>
        </section>

        {/* Section 13: Automated Decision-Making */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            13. Automated Decision-Making & Profiling
          </h2>
          <p className="mb-4 text-gray-800"><strong>GDPR Article 22 / DPDPA Compliance:</strong></p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li>We may use automated decision-making or profiling for service personalization.</li>
            <li>If applicable: We will inform you of the logic involved and obtain your explicit consent.</li>
            <li>You have the right to human intervention, to express your view, and to contest decisions.</li>
          </ul>
        </section>

        {/* Section 14: Marketing Communications */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            14. Marketing Communications
          </h2>
          <p className="mb-4 text-gray-800 text-justify">
            With your consent, we may send promotional emails, SMS, or push notifications.
          </p>
          <p className="mb-4 text-gray-800"><strong>Opt-Out:</strong> You can unsubscribe at any time by:</p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li>Clicking &quot;Unsubscribe&quot; in our emails</li>
            <li>Updating your account preferences</li>
            <li>Contacting support@saubh.tech</li>
          </ul>
        </section>

        {/* Section 15: Updates to This Policy */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            15. Updates to This Policy
          </h2>
          <p className="mb-4 text-gray-800 text-justify">
            We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will:
          </p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li>Notify you via email or prominent website notice</li>
            <li>Update the &quot;Last Updated&quot; date</li>
            <li>Obtain fresh consent if required by law</li>
          </ul>
          <p className="mt-4 text-gray-800 text-justify">
            Continued use after changes constitutes acceptance. Please review this policy periodically.
          </p>
        </section>

        {/* Section 16: Grievance Redressal */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            16. Grievance Redressal (DPDPA Requirement)
          </h2>
          <div className="bg-gray-50 p-5 border-2 border-[#007bff] rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Grievance Officer (India):</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Name:</strong> RP Singh<br />
              <strong>Email:</strong> support@saubh.tech<br />
              <strong>Phone:</strong> 918800607598<br />
              <strong>Address:</strong> 01 Tola-Tari, Sarha, Dahiawan, Chapra, Saran, Bihar - 841301<br />
              <strong>Response Time:</strong> We aim to resolve grievances within 7-15 days.
            </p>
            <p className="text-gray-700 mt-4">
              <strong>If unsatisfied, you may file a complaint with:</strong><br />
              Data Protection Board of India<br />
              <em>(Visit official website)</em>
            </p>
          </div>
        </section>

        {/* Section 17: Supervisory Authority */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            17. Supervisory Authority (GDPR)
          </h2>
          <p className="mb-4 text-gray-800 text-justify">
            EU Data Subjects have the right to lodge a complaint with a supervisory authority:
          </p>
          <ul className="ml-8 space-y-2 text-gray-700">
            <li><strong>Lead Supervisory Authority:</strong> IT Cell, Saubh Tech</li>
            <li><strong>Contact:</strong> support@saubh.tech</li>
            <li><strong>Website:</strong> www.saubh.tech</li>
          </ul>
        </section>

        {/* Section 18: Contact Us */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#007bff] my-8 border-l-4 border-[#007bff] pl-4">
            18. Contact Us
          </h2>
          <div className="bg-gray-50 p-5 border-2 border-[#007bff] rounded-lg">
            <p className="text-gray-800 mb-4">
              For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> support@saubh.tech<br />
              <strong>Phone:</strong> 918800607598<br />
              <strong>Address:</strong> 01 Tola-Tari, Sarha, Dahiawan, Chapra, Saran, Bihar - 841301<br />
              <strong>Website:</strong> www.saubh.tech
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-5 border-t-2 border-gray-300 text-center text-gray-600 text-sm">
          <p>© 2025 Saubh Tech. All Rights Reserved.</p>
          <p className="mt-2">GSTIN: 10AAUPS8603H1ZH</p>
          <p className="mt-2">This Privacy Policy is legally binding and enforceable.</p>
        </div>
      </div>
    </div>
  );
}