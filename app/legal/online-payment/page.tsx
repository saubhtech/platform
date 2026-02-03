"use client";

import { LegalPageLayout } from "@/app/components/legal-page-layout";
import {
  CreditCard,
  ShieldCheck,
  AlertCircle,
  Lock,
} from "lucide-react";

export default function OnlinePaymentPolicyPage() {
  return (
    <LegalPageLayout
      title="Online Payment Policy"
      subtitle="This policy explains how online payments, processing, and security are handled at Saubh.Tech."
    >
      <PaymentHighlights />

      <Section
        title="1. Accepted Payment Methods"
        content="Saubh.Tech accepts payments through authorized payment gateways, including debit cards, credit cards, UPI, net banking, and other digital payment methods as supported by our payment partners."
      />

      <Section
        title="2. Payment Authorization"
        content="By initiating a payment, you authorize Saubh.Tech and its payment partners to process the transaction. All payments are subject to verification and approval by the respective financial institutions."
      />

      <Section
        title="3. Transaction Security"
        content="We use industry-standard encryption, secure servers, and trusted payment gateways to protect transaction data. Saubh.Tech does not store sensitive card details on its servers."
      />

      <Section
        title="4. Payment Confirmation"
        content="Upon successful payment, a confirmation receipt or acknowledgment will be provided electronically. Users are advised to retain transaction details for future reference."
      />

      <Section
        title="5. Failed or Declined Transactions"
        content="In case of failed or declined transactions, the amount may be reversed by the bank or payment provider as per their policies. Saubh.Tech is not responsible for delays caused by banking networks."
      />

      <Section
        title="6. Pricing & Taxes"
        content="All prices displayed are exclusive of applicable taxes unless stated otherwise. Taxes and charges are calculated in accordance with prevailing laws and may vary based on location."
      />

      <Section
        title="7. Refunds & Cancellations"
        content="Refunds and cancellations are governed by our Refund Policy. Users are encouraged to review the policy before making any payments."
      />

      <Section
        title="8. Chargebacks & Fraud Prevention"
        content="Saubh.Tech actively monitors transactions to prevent fraud. Unauthorized chargebacks or misuse of payment systems may result in account suspension and legal action where applicable."
      />

      <Section
        title="9. Third-Party Payment Gateways"
        content="Payments are processed through third-party gateways. Saubh.Tech is not responsible for issues arising due to gateway downtime, technical failures, or banking network disruptions."
      />

      <Section
        title="10. Policy Updates"
        content="This Online Payment Policy may be updated periodically. Continued use of our payment services constitutes acceptance of the revised policy."
      />

      <Section
        title="11. Contact & Support"
        content="For payment-related queries or assistance, please contact us at mail@saubh.in. Our support team will assist you promptly."
      />
    </LegalPageLayout>
  );
}

/* ---------- Components ---------- */

function PaymentHighlights() {
  const items = [
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      desc: "UPI, cards, net banking, and digital wallets.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Transactions",
      desc: "Payments processed via trusted gateways.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      desc: "Sensitive payment data is never stored.",
    },
    {
      icon: AlertCircle,
      title: "Fraud Prevention",
      desc: "Continuous monitoring to prevent misuse.",
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
