'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [period, setPeriod] = useState('Quarterly');
  const periods = ['Quarterly', 'Half-Yearly', 'Annual'];

  const plans = [
    {
      tier: 'STARTER', tierColor: 'text-saubh-green', name: 'Visibility', grad: 'card-grad-green',
      icon: 'fa-eye', iconColor: 'text-saubh-green',
      desc: 'Solo entrepreneurs, very small, local businesses for maintaining minimal presence.',
      price: '\u20B915,999',
      features: ['8 image posts per month', '4 reels/carousels/shorts per month', '2 LinkedIn posts/blogs per month'],
      btnClass: 'border-[1.5px] border-saubh-green text-saubh-green bg-transparent',
      popular: false,
    },
    {
      tier: 'GROWTH', tierColor: 'text-saubh-orange', name: 'Accelerator', grad: 'card-grad-orange',
      icon: 'fa-bolt', iconColor: 'text-saubh-orange',
      desc: 'Small & Medium Businesses, service providers for driving engagement and organic leads.',
      price: '\u20B935,999',
      features: ['20 image posts per month', '10 reels/carousels/shorts per month', '4 LinkedIn posts/blogs per month'],
      btnClass: 'btn-gradient-green text-white border-none',
      popular: true,
    },
    {
      tier: 'PRO', tierColor: 'text-saubh-red', name: 'Branding', grad: 'card-grad-red',
      icon: 'fa-gem', iconColor: 'text-saubh-red',
      desc: 'SMEs and e-commerce businesses for high-impact social presence, rapid scaling and strong branding.',
      price: '\u20B974,999',
      features: ['50 image posts per month', '20 reels/carousels/shorts/testimonials per month', '10 LinkedIn posts/blogs per month', '20 X posts per month'],
      btnClass: 'border-[1.5px] border-saubh-red text-saubh-red bg-transparent',
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-saubh-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 anim-up">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-saubh-card border border-saubh-border rounded-full font-heading text-[0.82rem] font-medium tracking-wider uppercase">
            <i className="fas fa-tag text-saubh-yellow" />
            <span className="text-saubh-yellow">Branding Subscription</span>
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-5 text-saubh-text">
            Integrate the Power of <span className="text-saubh-orange">People</span> with the Intelligence of <span className="text-saubh-green">Technology</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex gap-0 bg-saubh-card border border-saubh-border rounded-full p-1 w-fit mx-auto mb-12 anim-up">
          {periods.map((p) => (
            <button key={p} onClick={() => setPeriod(p)} className={`px-7 py-2.5 rounded-full font-heading text-sm font-semibold cursor-pointer border-none transition-all ${
              period === p ? 'btn-gradient-green text-white' : 'bg-transparent text-saubh-muted'
            }`}>{p}</button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {plans.map((plan) => (
            <div key={plan.tier} className={`card-grad ${plan.grad} relative bg-saubh-card border border-saubh-border rounded-card p-10 hover:border-white/20 transition-all anim-up`}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full btn-gradient-red font-heading text-[0.75rem] font-bold tracking-wider uppercase text-white whitespace-nowrap">Most Popular</div>
              )}
              <div className={`w-14 h-14 rounded-2xl bg-saubh-card border border-saubh-border flex items-center justify-center text-xl ${plan.iconColor} mb-5`}>
                <i className={`fas ${plan.icon}`} />
              </div>
              <div className={`font-heading font-bold text-[0.8rem] tracking-[2px] uppercase mb-1.5 ${plan.tierColor}`}>{plan.tier}</div>
              <div className="font-heading text-2xl font-bold text-saubh-text mb-3">{plan.name}</div>
              <p className="text-saubh-muted text-[0.88rem] mb-6 leading-relaxed">{plan.desc}</p>
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-saubh-border">
                <span className="text-saubh-muted text-sm">Price</span>
                <span className="font-heading text-3xl font-extrabold text-saubh-text">{plan.price}</span>
              </div>
              <ul className="flex flex-col gap-3.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-saubh-muted text-sm">
                    <i className="fas fa-check-circle text-saubh-green text-[0.85rem]" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center py-3.5 rounded-btn font-heading font-semibold text-[0.95rem] no-underline hover:-translate-y-0.5 transition-transform ${plan.btnClass}`}>Get Started</a>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 anim-up">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn border-[1.5px] border-saubh-orange text-saubh-orange font-heading font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform bg-transparent"><i className="fas fa-plus-circle" /> Post Requirement</a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn border-[1.5px] border-white/25 text-saubh-text font-heading font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform bg-transparent"><i className="fas fa-calendar-check" /> Schedule a Demo</a>
        </div>
      </div>
    </section>
  );
}
