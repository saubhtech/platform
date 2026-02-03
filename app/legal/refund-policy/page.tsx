"use client";

import { LegalPageLayout } from "@/app/components/legal-page-layout";
import { RefreshCcw, CreditCard, AlertTriangle } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="This Refund Policy outlines the terms under which refunds, cancellations, and disputes are handled at Saubh.Tech."
    >
      <PolicyHighlights />

      <Section
        title="1. General Policy"
        content="All payments made to Saubh.Tech are considered final unless explicitly stated otherwise. By making a payment, you acknowledge and agree to the terms outlined in this Refund Policy."
      />

      <Section
        title="2. Eligible Refund Scenarios"
        content="Refunds may be considered only in cases where a service has not been delivered due to a verified technical failure or operational error solely attributable to Saubh.Tech."
      />

      <Section
        title="3. Non-Refundable Services"
        content="Fees paid for consulting, advisory services, digital products, onboarding, subscriptions, platform usage, or any customized services are non-refundable once the service has commenced or access has been provided."
      />

      <Section
        title="4. Refund Request Process"
        content="To request a refund, you must contact our support team at mail@saubh.in within seven (7) days of the transaction. Requests must include payment proof and a clear explanation of the issue."
      />

      <Section
        title="5. Review & Approval"
        content="All refund requests are subject to internal review. Saubh.Tech reserves the sole discretion to approve or reject any refund request based on the nature of the service and compliance with this policy."
      />

      <Section
        title="6. Refund Timelines"
        content="If approved, refunds will be processed within 7–10 business days and credited to the original payment method used during the transaction."
      />

      <Section
        title="7. Chargebacks & Disputes"
        content="Initiating chargebacks without contacting Saubh.Tech support may result in account suspension and restriction of future services. We encourage users to resolve disputes amicably through our official support channels."
      />

      <Section
        title="8. Taxes & Processing Fees"
        content="Any applicable taxes, payment gateway charges, or processing fees deducted during the transaction are non-refundable unless required by law."
      />

      <Section
        title="9. Changes to Refund Policy"
        content="Saubh.Tech reserves the right to modify this Refund Policy at any time. Updated versions will be published on this page, and continued use of services constitutes acceptance of the revised policy."
      />

      <Section
        title="10. Contact Information"
        content="For any questions regarding refunds or cancellations, please contact us at mail@saubh.in. We aim to resolve all genuine concerns in a fair and timely manner."
      />

      <Disclaimer />
    </LegalPageLayout>
  );
}

/* ---------- Components ---------- */

function PolicyHighlights() {
  const items = [
    {
      icon: RefreshCcw,
      title: "Transparent Process",
      desc: "Clearly defined refund eligibility and timelines.",
    },
    {
      icon: CreditCard,
      title: "Original Payment Method",
      desc: "Refunds are credited back to the source account only.",
    },
    {
      icon: AlertTriangle,
      title: "Strict Policy",
      desc: "Prevents misuse, fraud, and payment disputes.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-border/40 bg-secondary/20 p-5"
        >
          <item.icon className="h-6 w-6 text-primary mb-3" />
          <h3 className="font-semibold mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
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

function Disclaimer() {
  return (
    <div className="mt-10 rounded-xl border border-destructive/30 bg-destructive/5 p-6">
      <p className="text-sm text-muted-foreground">
        <strong className="text-foreground">Disclaimer:</strong> This Refund
        Policy does not override statutory rights under applicable consumer
        protection laws. Where legally required, refunds will be processed in
        compliance with such laws.
      </p>
    </div>
  );
}
