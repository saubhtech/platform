"use client";

import { LegalPageLayout } from "@/app/components/legal-page-layout";
import { Shield, Lock, CheckCircle2, ArrowRight } from "lucide-react";

export default function EscrowSystemPage() {
  return (
    <LegalPageLayout
      title="Escrow System"
      subtitle="Our escrow mechanism ensures secure, transparent, and fair transactions between all parties involved."
    >
      <EscrowHighlights />

      <Section
        title="1. What is an Escrow System?"
        content="An escrow system is a secure arrangement where payments are held by Saubh.Tech as a neutral third party until predefined conditions are fulfilled. This protects both service providers and customers from fraud, non-performance, or disputes."
      />

      <Section
        title="2. How Saubh.Tech Escrow Works"
        content="When a transaction qualifies for escrow, the payment is securely held and released only after successful completion of agreed milestones or service delivery confirmation, as per mutually agreed terms."
      />

      <Section
        title="3. When Escrow is Applicable"
        content="Escrow may be applied to high-value services, long-term engagements, customized solutions, enterprise contracts, or any transaction where added protection is deemed necessary by Saubh.Tech."
      />

      <Section
        title="4. Responsibilities of Parties"
        content="Customers are required to clearly define service requirements, timelines, and acceptance criteria. Service providers must deliver services as agreed. Saubh.Tech acts solely as an impartial escrow facilitator."
      />

      <Section
        title="5. Release of Funds"
        content="Funds are released upon confirmation of successful service completion or milestone approval. In case of non-response within a reasonable period, Saubh.Tech reserves the right to take a fair decision based on available evidence."
      />

      <Section
        title="6. Dispute Resolution"
        content="In case of disputes, both parties may submit relevant documentation. Saubh.Tech will conduct an internal review and attempt to resolve disputes fairly and transparently. Decisions taken under escrow review are final unless otherwise required by law."
      />

      <Section
        title="7. Escrow Fees"
        content="Saubh.Tech may charge an escrow facilitation or processing fee. Applicable fees, if any, will be transparently disclosed prior to transaction confirmation."
      />

      <Section
        title="8. Limitations"
        content="Saubh.Tech does not guarantee the quality, legality, or outcome of services provided by third parties. Our role is limited to escrow facilitation and dispute mediation within defined terms."
      />

      <Section
        title="9. Termination of Escrow"
        content="Escrow arrangements may be terminated upon mutual agreement, legal obligation, or policy violation. In such cases, funds will be handled in accordance with applicable laws and contractual obligations."
      />

      <Section
        title="10. Legal Compliance"
        content="All escrow transactions are handled in compliance with applicable financial, contractual, and consumer protection laws of India."
      />
    </LegalPageLayout>
  );
}

/* ---------- Components ---------- */

function EscrowHighlights() {
  const items = [
    {
      icon: Shield,
      title: "Trust & Protection",
      desc: "Safeguards payments for all parties involved.",
    },
    {
      icon: Lock,
      title: "Secure Holding",
      desc: "Funds are securely held until conditions are met.",
    },
    {
      icon: CheckCircle2,
      title: "Fair Resolution",
      desc: "Transparent handling of disputes and milestones.",
    },
    {
      icon: ArrowRight,
      title: "Clear Flow",
      desc: "Well-defined release and approval process.",
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
