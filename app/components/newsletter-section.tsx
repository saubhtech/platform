'use client';

import { useEffect, useRef, useState } from 'react';

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.anim-up').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={sectionRef} className="nl-sec" id="newsletter">

      {/* Animated BG particles */}
      <div className="nl-particle nl-p1" />
      <div className="nl-particle nl-p2" />
      <div className="nl-particle nl-p3" />
      <div className="nl-particle nl-p4" />
      <div className="nl-particle nl-p5" />

      <div className="container nl-wrap">
        <div className="nl-inner anim-up">

          {/* Decorative corner glows */}
          <div className="nl-corner nl-corner-tl" />
          <div className="nl-corner nl-corner-br" />

          {/* Left side */}
          <div className="nl-left">
            <div className="nl-icon-wrap">
              <div className="nl-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="nl-ring" />
              <div className="nl-ring nl-ring-2" />
            </div>
            <div>
              <h3 className="nl-title">
                Stay in the <span className="nl-grad">Loop</span>
              </h3>
              <p className="nl-sub">Get the latest updates, tips &amp; opportunities from Saubh.Tech</p>
            </div>
          </div>

          {/* Form */}
          <form className="nl-form" onSubmit={handleSubmit}>
            <div className={`nl-input-wrap ${focused === 'name' ? 'nl-focused' : ''}`}>
              <i className="fas fa-user nl-input-icon"></i>
              <input
                type="text"
                placeholder="Name"
                aria-label="Name"
                required
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div className={`nl-input-wrap ${focused === 'whatsapp' ? 'nl-focused' : ''}`}>
              <i className="fab fa-whatsapp nl-input-icon"></i>
              <input
                type="tel"
                placeholder="WhatsApp"
                aria-label="WhatsApp number"
                required
                onFocus={() => setFocused('whatsapp')}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div className={`nl-input-wrap ${focused === 'email' ? 'nl-focused' : ''}`}>
              <i className="fas fa-at nl-input-icon"></i>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email address"
                required
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
            </div>
            <button type="submit" className={`nl-btn ${submitted ? 'nl-btn-done' : ''}`}>
              {submitted ? (
                <><i className="fas fa-check"></i> Subscribed!</>
              ) : (
                <><i className="fas fa-paper-plane"></i> Subscribe</>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        /* ━━ SECTION ━━ */
        .nl-sec {
          background: var(--bg-dark, #0C0F0A);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .nl-wrap { position: relative; z-index: 1; }

        /* ━━ FLOATING PARTICLES ━━ */
        .nl-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .nl-p1 {
          width: 6px; height: 6px;
          background: rgba(143,212,94,0.4);
          top: 20%; left: 8%;
          animation: nlFloat 6s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(143,212,94,0.3);
        }
        .nl-p2 {
          width: 4px; height: 4px;
          background: rgba(240,150,14,0.4);
          top: 60%; right: 12%;
          animation: nlFloat 8s ease-in-out infinite 1s;
          box-shadow: 0 0 8px rgba(240,150,14,0.3);
        }
        .nl-p3 {
          width: 5px; height: 5px;
          background: rgba(232,85,58,0.3);
          bottom: 25%; left: 25%;
          animation: nlFloat 7s ease-in-out infinite 2s;
          box-shadow: 0 0 8px rgba(232,85,58,0.25);
        }
        .nl-p4 {
          width: 3px; height: 3px;
          background: rgba(143,212,94,0.35);
          top: 35%; right: 30%;
          animation: nlFloat 9s ease-in-out infinite 3s;
        }
        .nl-p5 {
          width: 4px; height: 4px;
          background: rgba(240,150,14,0.3);
          bottom: 40%; left: 60%;
          animation: nlFloat 7s ease-in-out infinite 4s;
        }

        /* ━━ INNER CARD ━━ */
        .nl-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 40px 44px;
          border-radius: 24px;
          background: rgba(10,13,8,0.92);
          border: 1px solid rgba(255,255,255,0.08);
          position: relative;
          overflow: hidden;
          flex-wrap: wrap;
          transition: all .5s cubic-bezier(.4,0,.2,1);
        }

        .nl-inner:hover {
          border-color: rgba(109,179,63,0.25);
          box-shadow:
            0 0 60px rgba(109,179,63,0.06),
            0 20px 40px rgba(0,0,0,0.3);
        }

        /* Corner glows */
        .nl-corner {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.6;
          transition: opacity .5s ease;
        }
        .nl-corner-tl {
          top: -80px; left: -60px;
          background: rgba(109,179,63,0.08);
        }
        .nl-corner-br {
          bottom: -80px; right: -60px;
          background: rgba(240,150,14,0.06);
        }
        .nl-inner:hover .nl-corner { opacity: 1; }

        /* Top accent bar */
        .nl-inner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8FD45E, #F0960E, #E8553A);
          border-radius: 3px 3px 0 0;
          transition: height .35s ease, box-shadow .35s ease;
        }
        .nl-inner:hover::before {
          height: 4px;
          box-shadow: 0 0 18px rgba(109,179,63,0.35);
        }

        /* ━━ LEFT SIDE ━━ */
        .nl-left {
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        /* Animated icon */
        .nl-icon-wrap {
          position: relative;
          width: 56px;
          height: 56px;
          flex-shrink: 0;
        }

        .nl-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(109,179,63,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: #8FD45E;
          position: relative;
          z-index: 1;
          animation: nlIconBob 3s ease-in-out infinite;
        }

        /* Pulse rings around icon */
        .nl-ring {
          position: absolute;
          inset: -6px;
          border-radius: 20px;
          border: 1.5px solid rgba(109,179,63,0.2);
          animation: nlPulse 2.5s ease-in-out infinite;
        }
        .nl-ring-2 {
          inset: -12px;
          border-radius: 24px;
          animation-delay: .8s;
          border-color: rgba(109,179,63,0.1);
        }

        .nl-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 4px;
        }

        .nl-grad {
          background: linear-gradient(135deg, #8FD45E, #F0960E);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: nlShim 3s linear infinite;
        }

        .nl-sub {
          font-size: .88rem;
          color: var(--text-muted, #9CA39C);
          line-height: 1.5;
        }

        /* ━━ FORM ━━ */
        .nl-form {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          flex: 1;
          max-width: 620px;
          position: relative;
          z-index: 1;
        }

        /* Input wrapper */
        .nl-input-wrap {
          flex: 1;
          min-width: 140px;
          position: relative;
          border-radius: 12px;
          background: #ffffff;
          border: 1.5px solid rgba(0,0,0,0.15);
          transition: all .4s cubic-bezier(.4,0,.2,1);
          overflow: hidden;
        }

        .nl-input-wrap::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%; right: 50%;
          height: 2px;
          background: linear-gradient(90deg, #8FD45E, #F0960E);
          transition: all .4s ease;
          border-radius: 0 0 2px 2px;
        }

        .nl-input-wrap.nl-focused {
          border-color: #6DB33F;
          background: #ffffff;
          box-shadow: 0 0 16px rgba(109,179,63,0.2);
        }

        .nl-input-wrap.nl-focused::after {
          left: 0;
          right: 0;
        }

        .nl-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: .85rem;
          color: rgba(0,0,0,0.5);
          transition: all .3s ease;
          z-index: 2;
        }

        .nl-input-wrap.nl-focused .nl-input-icon {
          color: #4A8C1F;
          filter: drop-shadow(0 0 4px rgba(109,179,63,0.2));
        }

        .nl-input-wrap input {
          width: 100%;
          padding: 13px 16px 13px 38px;
          border: none;
          background: transparent;
          font-family: var(--font-body);
          font-size: .88rem;
          color: #1a1a1a;
          outline: none;
        }

        .nl-input-wrap input::placeholder {
          color: rgba(0,0,0,0.55);
          font-weight: 500;
        }

        /* ━━ BUTTON ━━ */
        .nl-btn {
          padding: 13px 28px;
          border-radius: 12px;
          border: none;
          font-family: var(--font-display);
          font-size: .88rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #6DB33F, #4A8C1F);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          transition: all .4s ease;
          white-space: nowrap;
        }

        .nl-btn::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, #6DB33F, #4A8C1F);
          opacity: 0;
          z-index: -1;
          filter: blur(12px);
          transition: opacity .4s ease;
        }

        .nl-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 24px rgba(109,179,63,0.3);
        }
        .nl-btn:hover::before { opacity: 0.5; }

        .nl-btn:active { transform: translateY(0) scale(0.98); }

        .nl-btn i {
          transition: transform .3s ease;
        }
        .nl-btn:hover i {
          transform: translateX(3px) rotate(-15deg);
        }

        /* Success state */
        .nl-btn-done {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          pointer-events: none;
        }
        .nl-btn-done i {
          animation: nlCheck .5s ease forwards;
        }

        /* ━━ ANIMATIONS ━━ */
        @keyframes nlFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          25%      { transform: translateY(-18px) translateX(8px); opacity: 0.8; }
          50%      { transform: translateY(-8px) translateX(-6px); opacity: 0.5; }
          75%      { transform: translateY(-22px) translateX(12px); opacity: 0.7; }
        }

        @keyframes nlIconBob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        @keyframes nlPulse {
          0%, 100% { transform: scale(1);   opacity: 0.3; }
          50%      { transform: scale(1.1); opacity: 0.1; }
        }

        @keyframes nlShim {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @keyframes nlCheck {
          0%   { transform: scale(0) rotate(0); }
          50%  { transform: scale(1.3) rotate(-10deg); }
          100% { transform: scale(1) rotate(0); }
        }

        /* ━━ RESPONSIVE ━━ */
        @media (max-width: 768px) {
          .nl-inner {
            flex-direction: column;
            text-align: center;
            padding: 32px 24px;
          }
          .nl-left { flex-direction: column; }
          .nl-form { max-width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}