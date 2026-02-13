'use client';

import { useEffect, useRef } from 'react';

export default function TrustSection() {
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
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll('.anim-up').forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="trust-section section-pad" aria-labelledby="rp-title">
      <div className="trust-bg" />
      <div className="trust-overlay" />
      <div className="container trust-container">
        <div className="trust-header">
          <span className="trust-tag anim-up">
            <i className="fas fa-bolt"></i> Real People. Real Work. Real Trust.
          </span>
          <h2 className="trust-heading anim-up" id="rp-title">
            We Connect <span className="trust-shimmer">Real People</span> with <span className="trust-shimmer">Real Work</span>
          </h2>
        </div>
        <div className="trust-grid">
          <div className="trust-card anim-up">
            <div className="trust-card-top">
              <div className="trust-icon trust-icon--green"><i className="fas fa-briefcase"></i></div>
              <h3>Verified Providers</h3>
            </div>
            <ul>
              <li><span className="chk chk-green">✓</span> List offerings across multiple sectors and territories.</li>
              <li><span className="chk chk-green">✓</span> Bid on assignments, procure prepaid demand.</li>
              <li><span className="chk chk-green">✓</span> Complete work, get escrow-guaranteed payments.</li>
            </ul>
          </div>
          <div className="trust-card anim-up" style={{ transitionDelay: '.15s' }}>
            <div className="trust-card-top">
              <div className="trust-icon trust-icon--coral"><i className="fas fa-user-tie"></i></div>
              <h3>Verified Clients</h3>
            </div>
            <ul>
              <li><span className="chk chk-coral">✓</span> Post assignments to outsource requirements.</li>
              <li><span className="chk chk-coral">✓</span> Call or chat with verified providers.</li>
              <li><span className="chk chk-coral">✓</span> Compare bids, and hire with escrow protection.</li>
            </ul>
          </div>
        </div>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <a href="#offer" className="btn btn-outline"><i className="fas fa-hand-holding-heart"></i> Offer Service/Product</a>
          <a href="#post" className="btn btn-outline"><i className="fas fa-plus-circle"></i> Post Requirements</a>
          <a href="#demo" className="btn btn-ghost"><i className="fas fa-calendar-check"></i> Schedule a Demo</a>
        </div>
      </div>
      <style jsx>{`
        .trust-section { position: relative; overflow: hidden; background: #050705; }
        .trust-bg { position: absolute; inset: 0; z-index: 0; background-image: url('/red2 (1).png'); background-size: cover; background-position: center; background-repeat: no-repeat; opacity: 0.25; pointer-events: none; }
        .trust-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg, rgba(5,7,5,0.88) 0%, rgba(5,7,5,0.5) 35%, rgba(5,7,5,0.5) 65%, rgba(5,7,5,0.88) 100%); pointer-events: none; }
        .trust-container { position: relative; z-index: 2; }
        .trust-header { text-align: center; margin-bottom: 56px; }
        .trust-tag { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; border-radius: 100px; font-family: var(--font-display); font-size: .8rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #8FD45E; margin-bottom: 20px; }
        .trust-heading { font-family: var(--font-display); font-weight: 900; font-size: clamp(2rem, 4.5vw, 3.2rem); line-height: 1.12; color: #ffffff; margin-top: 16px; }
        .trust-heading.visible { animation: headReveal 1s cubic-bezier(.4,0,.2,1) forwards; }
        .trust-shimmer { background: linear-gradient(135deg, #8FD45E 0%, #F0960E 35%, #E8553A 65%, #8FD45E 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }
        .trust-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; margin-bottom: 40px; }
        .trust-card { padding: 40px 36px; border-radius: 24px; background: rgba(10, 13, 8, 0.92); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 32px rgba(0,0,0,0.4); transition: all .4s ease; }
        .trust-card:hover { transform: translateY(-6px); border-color: rgba(109,179,63,0.4); box-shadow: 0 0 60px rgba(109,179,63,0.12); }
        .trust-card:hover .trust-icon { transform: scale(1.1) rotate(-5deg); }
        .trust-card-top { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
        .trust-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; transition: transform .3s ease; }
        .trust-icon--green { background: rgba(109,179,63,0.15); color: #8FD45E; }
        .trust-icon--coral { background: rgba(232,85,58,0.15); color: #E8553A; }
        .trust-card h3 { font-family: var(--font-display); font-size: 1.35rem; font-weight: 700; color: #ffffff; }
        .trust-card ul { display: flex; flex-direction: column; gap: 14px; list-style: none; padding: 0; margin: 0; }
        .trust-card li { display: flex; align-items: flex-start; gap: 10px; font-size: 1rem; color: #b0b7b0; line-height: 1.6; opacity: 0; }
        .trust-card.visible li:nth-child(1) { animation: fadeUp .5s .2s ease forwards; }
        .trust-card.visible li:nth-child(2) { animation: fadeUp .5s .35s ease forwards; }
        .trust-card.visible li:nth-child(3) { animation: fadeUp .5s .5s ease forwards; }
        .chk { display: inline-flex; align-items: center; justify-content: center; min-width: 24px; height: 24px; border-radius: 50%; font-size: .7rem; font-weight: 700; margin-top: 2px; flex-shrink: 0; }
        .chk-green { background: rgba(109,179,63,0.2); color: #8FD45E; }
        .chk-coral { background: rgba(232,85,58,0.2); color: #E8553A; }
        @keyframes headReveal { 0% { opacity:0; transform:translateY(40px) scale(.95); filter:blur(8px); } 60% { opacity:1; filter:blur(0); } 100% { opacity:1; transform:translateY(0) scale(1); filter:blur(0); } }
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width: 768px) { .trust-grid { grid-template-columns: 1fr; } .trust-card { padding: 28px 24px; } }
      `}</style>
    </section>
  );
}
