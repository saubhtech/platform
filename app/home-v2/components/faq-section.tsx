'use client';

import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Is Saubh.Tech safe?', a: 'Yes, Saubh.Tech uses escrow protection and community verification to ensure safe transactions for all users.' },
    { q: 'Why use Saubh.Tech?', a: 'Saubh.Tech combines physical trust with digital scalability, offering verified providers, escrow payments, and a unique phygital marketplace model.' },
    { q: 'How does Saubh.Tech work?', a: 'Sign up, get verified, then either post requirements or bid on assignments. Payments are secured through our escrow system.' },
  ];

  return (
    <section className="py-20 bg-saubh-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 anim-up">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-saubh-card border border-saubh-border rounded-full font-heading text-[0.82rem] font-medium tracking-wider uppercase">
            <i className="fas fa-circle-question text-saubh-yellow" />
            <span className="text-saubh-yellow">Frequently Asked Questions</span>
          </span>
          <p className="text-saubh-muted mt-3">Find answers to common questions about Saubh.Tech</p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-saubh-card border border-saubh-border rounded-2xl px-6 py-5 cursor-pointer hover:border-white/20 transition-all anim-up"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center font-heading font-semibold text-base text-saubh-text">
                {faq.q}
                <i className={`fas fa-chevron-down text-saubh-muted transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48 mt-3.5' : 'max-h-0'}`}>
                <p className="text-saubh-muted text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center anim-up">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn border-[1.5px] border-saubh-green text-saubh-green font-heading font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform bg-transparent">
            <i className="fas fa-book-open" /> Go to FAQs & Knowledge Base
          </a>
        </div>
      </div>
    </section>
  );
}
