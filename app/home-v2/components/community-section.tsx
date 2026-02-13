'use client';

import { useEffect, useRef } from 'react';

const voices = [
  { text: "The escrow payment system gives me complete peace of mind. I've completed over 50 assignments and always received payment on time.", author: 'Priya Sharma', role: 'Business Associate \u2022 Mumbai', rating: 5, thumb: 'linear-gradient(135deg,#2d5016,#1a3a0a)' },
  { text: "The UGC quality is outstanding! Real customers sharing genuine experiences has increased our social engagement by 180%.", author: 'Rajesh Kumar', role: 'Restaurant Owner \u2022 Bangalore', rating: 5, thumb: 'linear-gradient(135deg,#3a4010,#1a2a06)' },
  { text: 'The phygital model is brilliant. I can work remotely while building strong local connections.', author: 'Aisha Patel', role: 'Digital Marketing Specialist \u2022 Delhi', rating: 5, thumb: 'linear-gradient(135deg,#1a3040,#0a1a2a)' },
  { text: "The phygital approach works perfectly for our business. We've expanded to 12 cities with consistent quality.", author: 'Vikram Gupta', role: 'Regional Manager \u2022 Chennai', rating: 4, thumb: 'linear-gradient(135deg,#3a2020,#1a0a0a)' },
  { text: "Organic leads from Saubh.Tech convert 4x better than our paid campaigns. We've reduced CAC by 60%.", author: 'Sneha Kulkarni', role: 'Marketing Head, EduTech Pro \u2022 Pune', rating: 5, thumb: 'linear-gradient(135deg,#2a1a3a,#100a1a)' },
  { text: "Saubh Tech has given me financial stability. My income increased from \u20b915k to \u20b955k monthly.", author: 'Deepak Verma', role: 'Freelance Marketer \u2022 Ranchi', rating: 5, thumb: 'linear-gradient(135deg,#1a3020,#0a1a10)' },
];

const allVoices = [...voices, ...voices];

function Stars({ count }: { count: number }) {
  return (
    <span className="cv-stars">
      {[1,2,3,4,5].map((s) => (
        <i key={s} className={`fas fa-star`} style={{ color: s <= count ? '#F59E0B' : 'rgba(255,255,255,0.1)', fontSize: '.65rem', filter: s <= count ? 'drop-shadow(0 0 3px rgba(245,158,11,0.4))' : 'none' }} />
      ))}
      <span style={{ color: '#F59E0B', fontSize: '.65rem', fontWeight: 700, marginLeft: 4, fontFamily: 'var(--font-display)' }}>{count}/5</span>
    </span>
  );
}

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.querySelectorAll('.anim-up').forEach((el) => el.classList.add('visible')); } }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cv-sec section-pad" id="community" aria-labelledby="community-title">
      <div className="container">
        <div className="cv-hdr anim-up" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="cv-tag"><i className="fas fa-comments"></i> What People Say</span>
          <h2 className="cv-title" id="community-title"><span className="cv-grad">Community Voice</span></h2>
        </div>
      </div>
      <div className="cv-marquee-wrap">
        <div className="cv-fade cv-fade-l" />
        <div className="cv-fade cv-fade-r" />
        <div className="cv-track">
          {allVoices.map((v, idx) => (
            <div key={`${v.author}-${idx}`} className="cv-card">
              <div className="cv-thumb" style={{ background: v.thumb }}>
                <div className="cv-play"><i className="fas fa-play"></i></div>
              </div>
              <div className="cv-body">
                <Stars count={v.rating} />
                <p className="cv-txt">{v.text}</p>
                <p className="cv-name">{v.author}</p>
                <p className="cv-role">{v.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .cv-sec { background: var(--bg-dark, #0C0F0A); color: var(--text-light, #F0EDE8); overflow: hidden; }
        .cv-tag { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; border-radius: 100px; font-family: var(--font-display); font-size: .8rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #8FD45E; margin-bottom: 16px; }
        .cv-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.6rem, 3.5vw, 2.4rem); line-height: 1.2; margin-top: 12px; }
        .cv-grad { background: linear-gradient(135deg, #8FD45E 0%, #F0960E 35%, #E8553A 65%, #8FD45E 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: cvShim 3s linear infinite; }
        .cv-marquee-wrap { position: relative; width: 100%; overflow: hidden; padding: 10px 0 20px; }
        .cv-fade { position: absolute; top: 0; bottom: 0; width: 80px; z-index: 5; pointer-events: none; }
        .cv-fade-l { left: 0; background: linear-gradient(90deg, var(--bg-dark, #0C0F0A) 0%, transparent 100%); }
        .cv-fade-r { right: 0; background: linear-gradient(270deg, var(--bg-dark, #0C0F0A) 0%, transparent 100%); }
        .cv-track { display: flex; gap: 20px; width: max-content; animation: cvScroll 30s linear infinite; }
        .cv-marquee-wrap:hover .cv-track { animation-play-state: paused; }
        .cv-card { min-width: 280px; max-width: 280px; border-radius: 16px; background: rgba(10,13,8,0.92); border: 1px solid rgba(255,255,255,0.08); overflow: hidden; flex-shrink: 0; position: relative; transition: all .45s cubic-bezier(.4,0,.2,1); }
        .cv-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--green, #6DB33F), var(--amber, #F0960E)); z-index: 3; transition: height .3s ease; }
        .cv-card:hover::before { height: 3px; box-shadow: 0 0 12px rgba(109,179,63,0.4); }
        .cv-card:hover { transform: translateY(-6px); border-color: rgba(109,179,63,0.3); box-shadow: 0 0 36px rgba(109,179,63,0.08), 0 14px 28px rgba(0,0,0,0.3); }
        .cv-thumb { height: 160px; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .cv-play { width: 48px; height: 48px; border-radius: 50%; background: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center; font-size: 1rem; color: var(--green, #6DB33F); box-shadow: 0 4px 20px rgba(0,0,0,0.2); transition: all .35s ease; z-index: 2; }
        .cv-card:hover .cv-play { transform: scale(1.12); background: rgba(109,179,63,0.9); color: #fff; }
        .cv-body { padding: 14px 16px 16px; position: relative; z-index: 1; }
        .cv-stars { display: flex; align-items: center; gap: 2px; margin-bottom: 8px; }
        .cv-txt { font-size: .82rem; color: #9CA39C; line-height: 1.55; font-style: italic; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .cv-name { font-family: var(--font-display); font-size: .82rem; font-weight: 700; color: #fff; margin: 0; }
        .cv-role { font-size: .72rem; color: rgba(255,255,255,0.4); margin: 2px 0 0; }
        @keyframes cvShim { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        @keyframes cvScroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-50% - 10px)); } }
      `}</style>
    </section>
  );
}
