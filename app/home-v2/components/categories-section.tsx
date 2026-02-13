'use client';

import { useEffect, useRef } from 'react';

const sectors = [
  { emoji: '🌾', name: 'Agriculture, Food & Nutrition' },
  { emoji: '📢', name: 'Branding, Marketing & Sales' },
  { emoji: '💻', name: 'Computing, Data & Digital Technology' },
  { emoji: '🎓', name: 'Education, Skilling & Career' },
  { emoji: '💰', name: 'Finance, Banking & Insurance' },
  { emoji: '🏛️', name: 'Government, Public Sector & Welfare' },
  { emoji: '🩺', name: 'Health, Wellness & Personal Care' },
  { emoji: '👥', name: 'HR, Employment & GigWork' },
  { emoji: '🛠️', name: 'Installation, Repair & Tech Support' },
  { emoji: '⚖️', name: 'Legal, Police & Protection' },
  { emoji: '🏭', name: 'Manufacturing, Procurement & Production' },
  { emoji: '❤️', name: 'Matchmaking, Relationships & Guidance' },
  { emoji: '🎬', name: 'Media, Entertainment & Sports' },
  { emoji: '🏠', name: 'Real Estate, Infra & Construction' },
  { emoji: '🚚', name: 'Transport, Logistics & Storage' },
  { emoji: '✈️', name: 'Travel, Tourism & Hospitality' },
];

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll('.anim-up, .cat-chip').forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cat-section section-pad" id="sectors" aria-labelledby="sectors-title">
      <div className="container">
        <div className="cat-header anim-up">
          <span className="section-tag">
            <i className="fas fa-compass"></i> Explore Opportunities
          </span>
          <h2 className="cat-title" id="sectors-title">
            Explore Opportunities and Offerings<br />
            <span>across <span className="cat-gradient">16 sectors</span></span>
          </h2>
        </div>
        <div className="cat-grid">
          {sectors.map((sector, i) => (
            <div key={sector.name} className="cat-chip" style={{ animationDelay: `${i * 0.06}s` }}>
              <span className="cat-emoji">{sector.emoji}</span>
              <span className="cat-name">{sector.name}</span>
              <i className="fas fa-arrow-right cat-arrow"></i>
            </div>
          ))}
        </div>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <a href="#offer" className="btn btn-primary"><i className="fas fa-hand-holding-heart"></i> Offer Service/Product</a>
          <a href="#post" className="btn btn-outline"><i className="fas fa-plus-circle"></i> Post Requirements</a>
          <a href="#demo" className="btn btn-ghost"><i className="fas fa-calendar-check"></i> Schedule a Demo</a>
        </div>
      </div>
      <style jsx>{`
        .cat-section { background: var(--bg-dark, #0C0F0A); color: var(--text-light, #F0EDE8); overflow: hidden; }
        .cat-header { text-align: center; margin-bottom: 56px; }
        .cat-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.6rem, 3.5vw, 2.4rem); line-height: 1.2; color: #ffffff; margin-top: 16px; }
        .cat-gradient { background: linear-gradient(135deg, #8FD45E 0%, #F0960E 50%, #E8553A 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }
        .cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 48px; }
        .cat-chip { position: relative; display: flex; align-items: center; gap: 12px; padding: 20px 22px; border-radius: var(--radius, 16px); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); font-family: var(--font-display); font-size: .88rem; font-weight: 500; color: var(--text-light, #F0EDE8); cursor: pointer; overflow: hidden; transition: all .4s cubic-bezier(.4,0,.2,1); opacity: 0; transform: translateY(24px); }
        .cat-chip.visible { animation: chipIn .6s ease forwards; }
        .cat-chip::before { content: ''; position: absolute; left: 0; top: 50%; width: 3px; height: 0; transform: translateY(-50%); border-radius: 0 3px 3px 0; background: linear-gradient(180deg, #6DB33F, #F0960E); transition: height .35s ease; }
        .cat-chip:hover { transform: translateY(-4px) scale(1.02); border-color: rgba(109,179,63,0.4); box-shadow: 0 8px 32px rgba(109,179,63,0.15); background: rgba(255,255,255,0.07); }
        .cat-chip:hover::before { height: 60%; }
        .cat-emoji { font-size: 1.5rem; flex-shrink: 0; transition: transform .4s ease; position: relative; z-index: 1; }
        .cat-chip:hover .cat-emoji { transform: scale(1.25) rotate(-8deg); }
        .cat-name { flex: 1; line-height: 1.4; position: relative; z-index: 1; transition: color .3s ease; }
        .cat-chip:hover .cat-name { color: #ffffff; }
        .cat-arrow { font-size: .7rem; color: var(--green-light, #8FD45E); opacity: 0; transform: translateX(-8px); transition: all .35s ease; position: relative; z-index: 1; }
        .cat-chip:hover .cat-arrow { opacity: 1; transform: translateX(0); }
        @keyframes chipIn { 0% { opacity: 0; transform: translateY(24px) scale(0.96); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        @media (max-width: 1024px) { .cat-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px) { .cat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .cat-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
