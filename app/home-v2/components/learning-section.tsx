export default function LearningSection() {
  const features = [
    { emoji: '\uD83D\uDCDA', text: 'Study with contents and videos' },
    { emoji: '\uD83D\uDC69\u200D\uD83C\uDFEB', text: 'Interactive trainer-led online classes' },
    { emoji: '\uD83C\uDFC6', text: 'Certification to boost credibility' },
  ];

  return (
    <section className="py-20 bg-saubh-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 anim-up">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-saubh-card border border-saubh-border rounded-full font-heading text-[0.82rem] font-medium tracking-wider uppercase">
            <i className="fas fa-graduation-cap text-saubh-orange" />
            <span className="text-saubh-orange">Learning & Skilling</span>
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-5 text-saubh-text">Invest in Your <span className="grad-text">Future</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feat) => (
            <div key={feat.text} className="bg-saubh-card border border-saubh-border rounded-card p-10 text-center hover:border-white/20 transition-all anim-up">
              <div className="text-4xl mb-4">{feat.emoji}</div>
              <p className="text-saubh-muted text-sm">{feat.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center anim-up">
          <h3 className="font-heading font-bold text-xl text-saubh-text mb-5">Training Programs</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-saubh-card border border-saubh-border rounded-full font-heading text-[0.82rem] font-medium tracking-wider uppercase text-saubh-muted">
              <i className="fas fa-brain text-saubh-green" /> Life Counselling Professional (LCP)
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-saubh-card border border-saubh-border rounded-full font-heading text-[0.82rem] font-medium tracking-wider uppercase text-saubh-muted">
              <i className="fas fa-chart-line text-saubh-orange" /> Business Consulting Professional (BCP)
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn btn-gradient-red text-white font-heading font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform"><i className="fas fa-play-circle" /> Join Free Training Session</a>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn border-[1.5px] border-saubh-green text-saubh-green font-heading font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform bg-transparent"><i className="fas fa-calendar-check" /> Schedule a Meeting</a>
          </div>
        </div>
      </div>
    </section>
  );
}
