export default function CommunitySection() {
  const testimonials = [
    { stars: 5, review: "The escrow payment system gives me complete peace of mind. I\u2019ve completed over 50 assignments and always received payment on time. My income has grown 3x in just 6 months!", name: 'Priya Sharma', role: 'Business Associate \u2022 Mumbai' },
    { stars: 5, review: 'The UGC quality is outstanding! Real customers sharing genuine experiences has increased our social engagement by 180%. Best investment we\u2019ve made for our brand.', name: 'Rajesh Kumar', role: 'Restaurant Owner \u2022 Bangalore' },
    { stars: 5, review: 'The phygital model is brilliant. I can work remotely while building strong local connections. The community support and training have been invaluable for my career growth.', name: 'Aisha Patel', role: 'Digital Marketing Specialist \u2022 Delhi' },
    { stars: 4, review: 'The phygital approach works perfectly for our business. We\u2019ve expanded to 12 cities with consistent quality. The associate network is reliable and professional.', name: 'Vikram Gupta', role: 'Regional Manager \u2022 Chennai' },
    { stars: 5, review: 'Organic leads from Saubh.Tech convert 4x better than our paid campaigns. We\u2019ve reduced CAC by 60% while improving lead quality. Absolutely worth it!', name: 'Sneha Kulkarni', role: 'Marketing Head, EduTech Pro \u2022 Pune' },
    { stars: 5, review: 'Saubh Tech has given me financial stability. The guaranteed payments and continuous training help me grow professionally. My income increased from \u20B915k to \u20B955k monthly.', name: 'Deepak Verma', role: 'Freelance Marketer \u2022 Ranchi' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1A0A] via-[#112211] to-[#1A1206]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 anim-up">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-saubh-card border border-saubh-border rounded-full font-heading text-[0.82rem] font-medium tracking-wider uppercase">
            <i className="fas fa-comments text-saubh-green" />
            <span className="text-saubh-green">What People Say</span>
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-5 text-saubh-text">Community Voice</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 testimonials-scroll anim-up">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[340px] max-w-[340px] flex-shrink-0 bg-saubh-card border border-saubh-border rounded-card p-7 scroll-snap-start">
              {/* Video Thumb */}
              <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-[rgba(109,179,63,0.15)] to-[rgba(232,85,58,0.1)] flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full btn-gradient-green flex items-center justify-center text-white text-lg">
                  <i className="fas fa-play" />
                </div>
              </div>
              {/* Stars */}
              <div className="text-saubh-yellow text-[0.85rem] mb-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <i key={s} className={`${s < t.stars ? 'fas' : 'far'} fa-star`} />
                ))}
              </div>
              <div className="text-saubh-muted text-[0.85rem] mb-3">{t.stars}/5</div>
              <div className="text-saubh-muted text-sm leading-relaxed mb-4">{t.review}</div>
              <div className="font-heading font-semibold text-[0.95rem] text-saubh-text">{t.name}</div>
              <div className="text-saubh-muted text-xs">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
