'use client';

import { useEffect, useRef } from 'react';

const cards = [
  { icon: 'fa-layer-group', tag: 'Aggregation', title: 'User Generated Content (UGC) Hub', desc: 'Users create authentic content including reviews, testimonials, and videos that resonate with your audience.', color: '#6DB33F', colorLight: '#8FD45E', colorBg: 'rgba(109,179,63,0.12)' },
  { icon: 'fa-tower-broadcast', tag: 'Amplification', title: 'Social Media Amplification (SMA) Network', desc: 'Multi-channel people-to-people content distribution that multiplies reach, drives engagement and visibility.', color: '#F0960E', colorLight: '#F0960E', colorBg: 'rgba(240,150,14,0.12)' },
  { icon: 'fa-gears', tag: 'Automation', title: 'Organic Leads Generation (OLG) Engine', desc: 'Unified multi-channel campaigns, landing pages, and sign-ups delivering pre-qualified leads directly to your CRM sales funnel.', color: '#E8553A', colorLight: '#E8553A', colorBg: 'rgba(232,85,58,0.12)' },
];

export default function BrandingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); },
      { threshold: 0.1 }
    );
    const section = sectionRef.current;
    if (section) { section.querySelectorAll('.anim-up, .brand-card').forEach((el) => observer.observe(el)); }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="brand-section section-pad" id="branding" aria-labelledby="branding-title">
      <div className="brand-bg" />
      <div className="brand-overlay" />
      <div className="container brand-container">
        <div className="brand-header anim-up">
          <span className="brand-tag"><i className="fas fa-bullhorn"></i> Branding</span>
          <h2 className="brand-title" id="branding-title">No Business Without a <span className="brand-shimmer">Brand.</span></h2>
          <p className="brand-sub anim-up">No Brand Without <span className="brand-shimmer">Social Proof.</span></p>
        </div>
        <div className="brand-grid">
          {cards.map((card, i) => (
            <div key={card.tag} className="brand-card" style={{ animationDelay: `${i * 0.15}s`, ['--card-color' as string]: card.color, ['--card-light' as string]: card.colorLight, ['--card-bg' as string]: card.colorBg }}>
              <div className="brand-card-bar" />
              <div className="brand-card-icon"><i className={`fas ${card.icon}`}></i></div>
              <h3 className="brand-card-tag">{card.tag}</h3>
              <h4 className="brand-card-title">{card.title}</h4>
              <p className="brand-card-desc">{card.desc}</p>
              <div className="brand-card-glow" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .brand-section { position: relative; overflow: hidden; background: #050705; color: var(--text-light, #F0EDE8); }
        .brand-bg { position: absolute; inset: 0; z-index: 0; background-image: url('/images/Saubh-branding.png'); background-size: cover; background-position: center; opacity: 0.25; pointer-events: none; }
        .brand-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg, rgba(5,7,5,0.88) 0%, rgba(5,7,5,0.45) 35%, rgba(5,7,5,0.45) 65%, rgba(5,7,5,0.88) 100%); pointer-events: none; }
        .brand-container { position: relative; z-index: 2; }
        .brand-header { text-align: center; margin-bottom: 56px; }
        .brand-tag { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; border-radius: 100px; font-family: var(--font-display); font-size: .8rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #8FD45E; margin-bottom: 20px; }
        .brand-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.6rem, 3.5vw, 2.4rem); line-height: 1.2; color: #ffffff; margin-top: 16px; margin-bottom: 8px; }
        .brand-sub { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.3rem, 2.5vw, 1.8rem); color: #ffffff; margin-top: 0; }
        .brand-shimmer { background: linear-gradient(135deg, #8FD45E 0%, #F0960E 35%, #E8553A 65%, #8FD45E 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }
        .brand-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .brand-card { position: relative; padding: 36px 28px; border-radius: 24px; background: rgba(10, 13, 8, 0.88); border: 1px solid rgba(255,255,255,0.08); text-align: center; overflow: hidden; transition: all .5s cubic-bezier(.4,0,.2,1); cursor: default; opacity: 0; transform: translateY(30px); }
        .brand-card.visible { animation: cardReveal .7s ease forwards; }
        .brand-card:hover { transform: translateY(-8px) scale(1.02); border-color: var(--card-color); box-shadow: 0 0 40px color-mix(in srgb, var(--card-color) 20%, transparent), 0 20px 50px rgba(0,0,0,0.4); }
        .brand-card-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--card-color); border-radius: 3px 3px 0 0; transition: height .4s ease; }
        .brand-card:hover .brand-card-bar { height: 4px; box-shadow: 0 0 20px var(--card-color); }
        .brand-card-icon { position: relative; width: 68px; height: 68px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 18px; background: var(--card-bg); color: var(--card-light); transition: all .4s ease; z-index: 1; }
        .brand-card:hover .brand-card-icon { transform: scale(1.15) rotate(-8deg); box-shadow: 0 0 30px var(--card-bg); }
        .brand-card-tag { font-family: var(--font-display); font-size: .82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--card-light); margin-bottom: 6px; }
        .brand-card-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 600; color: #ffffff; margin-bottom: 14px; }
        .brand-card-desc { font-size: .92rem; color: #9CA39C; line-height: 1.65; transition: color .3s ease; }
        .brand-card:hover .brand-card-desc { color: #b8bfb8; }
        .brand-card-glow { position: absolute; inset: 0; border-radius: inherit; background: radial-gradient(circle at 50% 0%, var(--card-bg), transparent 70%); opacity: 0; transition: opacity .5s ease; pointer-events: none; z-index: 0; }
        .brand-card:hover .brand-card-glow { opacity: 1; }
        @keyframes cardReveal { 0% { opacity: 0; transform: translateY(30px) scale(0.96); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        @media (max-width: 768px) { .brand-grid { grid-template-columns: 1fr; } .brand-card { padding: 28px 22px; } }
      `}</style>
    </section>
  );
}
