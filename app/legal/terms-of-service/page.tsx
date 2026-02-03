"use client";

import { useState } from "react";
import { LegalPageLayout } from "@/app/components/legal-page-layout";
import { CheckCircle } from "lucide-react";

export default function TermsOfServicePage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="These Terms of Service govern your access to and use of Saubh.Tech’s platforms, products, and services."
    >
      {/* SECTION */}
      <Section
        title="1. Acceptance of Terms"
        content="By accessing, browsing, or using Saubh.Tech, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service, along with our Privacy Policy and applicable laws. If you do not agree, you must not use our services."
      />

      <Section
        title="2. About Saubh.Tech"
        content="Saubh.Tech is a technology-enabled platform providing digital services, consulting, business solutions, unified communications, and advisory offerings. Our services are designed for individuals, businesses, and enterprises across India and globally."
      />

      <Section
        title="3. Eligibility"
        content="You must be at least 18 years old and legally capable of entering into binding contracts to use our services. By using Saubh.Tech, you represent and warrant that you meet these requirements."
      />

      <Section
        title="4. User Responsibilities"
        content="You agree to use our services only for lawful purposes. You shall not misuse, reverse engineer, copy, scrape, interfere with, or disrupt the platform or its security mechanisms. Any violation may result in suspension or termination of access."
      />

      <Section
        title="5. Payments & Transactions"
        content="Certain services offered by Saubh.Tech may require payment. All payments are subject to applicable taxes, fees, and regulations. Payments once made are governed by our Refund Policy and applicable laws."
      />

      <Section
        title="6. Intellectual Property"
        content="All content, branding, logos, software, designs, and materials available on Saubh.Tech are the intellectual property of Saubh.Tech or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited."
      />

      <Section
        title="7. Confidentiality"
        content="Any non-public, proprietary, or confidential information shared during service engagement shall be treated as confidential and shall not be disclosed without prior written consent, except as required by law."
      />

      <Section
        title="8. Limitation of Liability"
        content="To the maximum extent permitted by law, Saubh.Tech shall not be liable for any indirect, incidental, consequential, or special damages arising from the use or inability to use our services."
      />

      <Section
        title="9. Termination"
        content="We reserve the right to suspend or terminate access to our services at any time, without notice, if you violate these terms or engage in activities that harm Saubh.Tech or its users."
      />

      <Section
        title="10. Governing Law"
        content="These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in New Delhi, India."
      />

      <Section
        title="11. Changes to Terms"
        content="Saubh.Tech may update these Terms from time to time. Continued use of the platform after changes constitutes acceptance of the revised terms."
      />

      {/* AGREEMENT BOX */}
      <div className="mt-12 rounded-xl border border-border/40 bg-secondary/20 p-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1 h-4 w-4 accent-primary"
          />
          <span className="text-sm text-muted-foreground">
            I have read, understood, and agree to the Terms of Service of
            Saubh.Tech.
          </span>
        </label>

        <button
          disabled={!agreed}
          className={`mt-5 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all
            ${
              agreed
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
        >
          <CheckCircle className="h-4 w-4" />
          Continue
        </button>
      </div>
    </LegalPageLayout>
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
