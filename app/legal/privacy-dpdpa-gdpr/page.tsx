"use client";

import { LegalPageLayout } from "@/app/components/legal-page-layout";
import { ShieldCheck, Lock, Globe, Database } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy, DPDPA & GDPR"
      subtitle="Your privacy matters to us. This policy explains how Saubh.Tech collects, uses, stores, and protects your personal data."
    >
      <IntroHighlights />

      <Section
        title="1. Introduction"
        content="Saubh.Tech is committed to protecting your personal data and respecting your privacy. This Privacy Policy describes how we handle information collected from users in accordance with the Digital Personal Data Protection Act, 2023 (India) and the General Data Protection Regulation (GDPR)."
      />

      <Section
        title="2. Information We Collect"
        content="We may collect personal information including but not limited to your name, email address, phone number, business details, payment information, IP address, device information, and usage data when you interact with our platform or services."
      />

      <Section
        title="3. Purpose of Data Collection"
        content="Your data is collected solely for legitimate purposes such as providing services, customer support, onboarding, communication, compliance with legal obligations, service improvement, analytics, and fraud prevention."
      />

      <Section
        title="4. Legal Basis for Processing"
        content="We process personal data based on one or more lawful grounds, including your consent, contractual necessity, legal compliance, or legitimate business interests, as permitted under DPDPA and GDPR."
      />

      <Section
        title="5. Consent"
        content="By using Saubh.Tech, you provide explicit consent for the collection and processing of your personal data. You may withdraw your consent at any time, subject to legal and contractual limitations."
      />

      <Section
        title="6. Data Storage & Security"
        content="We implement appropriate technical and organizational security measures to protect your data from unauthorized access, loss, misuse, or alteration. However, no system can be guaranteed to be 100% secure."
      />

      <Section
        title="7. Data Sharing & Disclosure"
        content="We do not sell your personal data. Data may be shared only with trusted service providers, legal authorities (if required), or partners strictly for service delivery, compliance, or operational purposes."
      />

      <Section
        title="8. Data Retention"
        content="Personal data is retained only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable laws and regulations."
      />

      <Section
        title="9. Your Rights Under DPDPA & GDPR"
        content="You have the right to access, correct, delete, restrict, or object to the processing of your personal data. You may also request data portability where applicable."
      />

      <Section
        title="10. International Data Transfers"
        content="Where required, your data may be transferred outside India or the European Economic Area with adequate safeguards in place to ensure lawful and secure processing."
      />

      <Section
        title="11. Cookies & Tracking"
        content="We may use cookies and similar technologies to enhance user experience, analyze traffic, and improve our services. You can control cookie preferences through your browser settings."
      />

      <Section
        title="12. Children’s Privacy"
        content="Saubh.Tech does not knowingly collect personal data from individuals under the age of 18. If such data is identified, it will be promptly deleted."
      />

      <Section
        title="13. Policy Updates"
        content="We may update this Privacy Policy periodically to reflect changes in legal, technical, or business requirements. Continued use of our services constitutes acceptance of the updated policy."
      />

      <Section
        title="14. Contact & Grievance Redressal"
        content="If you have questions, concerns, or requests regarding your data or this policy, you may contact us at mail@saubh.in. We are committed to resolving grievances in a timely and lawful manner."
      />
    </LegalPageLayout>
  );
}

/* ---------- Components ---------- */

function IntroHighlights() {
  const items = [
    {
      icon: ShieldCheck,
      title: "DPDPA & GDPR Aligned",
      desc: "Designed to comply with Indian and European data protection laws.",
    },
    {
      icon: Lock,
      title: "Strong Data Security",
      desc: "Industry-standard safeguards to protect your personal data.",
    },
    {
      icon: Database,
      title: "Minimal Data Collection",
      desc: "We collect only what is necessary to provide our services.",
    },
    {
      icon: Globe,
      title: "Global Compliance",
      desc: "Built for users and businesses across regions.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex gap-4 rounded-xl border border-border/40 bg-secondary/20 p-5"
        >
          <item.icon className="h-6 w-6 text-primary" />
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </section>
  );
}
