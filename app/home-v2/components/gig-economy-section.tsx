export default function GigEconomySection() {
  const articles = [
    { tag: 'Gig Economy & Phygital Work', tagType: 'gig', date: '2025-01-15', title: "What Is Phygital Work and Why It\u2019s the Future of India\u2019s Gig Economy", desc: "Discover how phygital work combines physical trust with digital scalability to revolutionize India\u2019s gig economy." },
    { tag: 'Gig Economy & Phygital Work', tagType: 'gig', date: '2025-01-14', title: "The Rise of India\u2019s Gig Economy: Opportunities, Challenges & Trends", desc: "Explore the explosive growth of India\u2019s gig economy and what it means for workers and businesses." },
    { tag: 'Gig Economy & Phygital Work', tagType: 'gig', date: '2025-01-13', title: 'Why Digital-Only Platforms Are No Longer Enough', desc: 'Learn why successful platforms need to integrate physical touchpoints with digital infrastructure.' },
    { tag: 'Branding, UGC & Trust', tagType: 'brand', date: '2025-01-07', title: 'Why User-Generated Content (UGC) Converts Better Than Paid Ads', desc: 'Data-driven insights into why UGC outperforms traditional advertising.' },
    { tag: 'Branding, UGC & Trust', tagType: 'brand', date: '2025-01-06', title: 'How UGC Builds Trust Faster Than Traditional Advertising', desc: 'The psychology behind why consumers trust peer-generated content.' },
    { tag: 'Branding, UGC & Trust', tagType: 'brand', date: '2025-01-05', title: 'UGC vs Influencer Marketing: What Works Better for Indian SMEs?', desc: 'A practical comparison for small and medium businesses in India.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1A0A] via-[#112211] to-[#1A1206]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 anim-up">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-saubh-card border border-saubh-border rounded-full font-heading text-[0.82rem] font-medium tracking-wider uppercase">
            <i className="fas fa-newspaper text-saubh-green" />
            <span className="text-saubh-green">Gig Economy</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {articles.map((a, i) => (
            <div key={i} className="bg-saubh-card border border-saubh-border rounded-card p-7 flex flex-col hover:border-white/20 transition-all anim-up">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit ${
                a.tagType === 'gig' ? 'bg-[rgba(143,212,94,0.12)] text-saubh-green' : 'bg-[rgba(240,150,14,0.12)] text-saubh-orange'
              }`}>{a.tag}</span>
              <div className="text-xs text-saubh-muted mb-2.5">{a.date}</div>
              <h4 className="font-heading font-semibold text-base text-saubh-text mb-2.5 leading-snug">{a.title}</h4>
              <p className="text-saubh-muted text-[0.85rem] flex-1">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center anim-up">
          <a href="#" className="text-saubh-green font-semibold text-sm no-underline hover:underline">View All Articles <i className="fas fa-arrow-right" /></a>
        </div>
      </div>
    </section>
  );
}
