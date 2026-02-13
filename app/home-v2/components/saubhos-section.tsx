export default function SaubhosSection() {
  const cards = [
    { icon: 'fa-chart-bar', color: 'text-saubh-green', grad: 'card-grad-green', title: 'Data & Marketing', desc: 'Upload or extract targeted data. Generate leads through multichannel campaigns Email, WhatsApp, RCM, Call, Virtual Meeting, Social-media, and In-person Visits.' },
    { icon: 'fa-headset', color: 'text-saubh-orange', grad: 'card-grad-orange', title: 'Sales & Support', desc: 'No more guessing or missing opportunities. Using unified communication system (UCS) connect with your leads, set follow-up reminders and close the deals faster.' },
    { icon: 'fa-users', color: 'text-saubh-red', grad: 'card-grad-red', title: 'HR & Recruitment', desc: 'Automate your HR Management. Post requirements, let interested candidates contact you and get the best talents to turn your vision into reality.' },
    { icon: 'fa-compass', color: 'text-saubh-yellow', grad: 'card-grad-multi', title: 'Career Choice', desc: '1500 occupations, based on Ability, Activity, Industry, Interest, Knowledge, Outlook, Pathway, Preference, Sector, Skills, STEM, Technology, Traits, and Zone.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1A0A] via-[#112211] to-[#1A1206]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 anim-up">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-saubh-card border border-saubh-border rounded-full font-heading text-[0.82rem] font-medium tracking-wider uppercase">
            <i className="fas fa-gear text-saubh-green" />
            <span className="text-saubh-green">SaubhOS \u2013 Operating System</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card) => (
            <div key={card.title} className={`card-grad ${card.grad} bg-saubh-card border border-saubh-border rounded-card p-9 hover:border-white/20 transition-all anim-up`}>
              <div className="flex items-center gap-3.5 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-saubh-card border border-saubh-border flex items-center justify-center text-xl ${card.color}`}>
                  <i className={`fas ${card.icon}`} />
                </div>
                <h3 className="font-heading font-bold text-lg text-saubh-text">{card.title}</h3>
              </div>
              <p className="text-saubh-muted text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 anim-up">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn btn-gradient-green text-white font-heading font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform"><i className="fas fa-download" /> Get Free SaubhOS</a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn border-[1.5px] border-white/25 text-saubh-text font-heading font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform bg-transparent"><i className="fas fa-calendar-check" /> Schedule a Demo</a>
        </div>
      </div>
    </section>
  );
}
