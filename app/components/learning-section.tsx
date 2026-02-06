'use client';

import { useEffect, useRef } from 'react';

export default function LearningSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.anim-up').forEach((el) =>
              el.classList.add('visible')
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="learning section-pad" id="learning" aria-labelledby="learning-title" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG Image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/learning1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.25,
      }} />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse at center, rgba(12,15,10,0.4) 0%, rgba(12,15,10,0.88) 85%)',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="learning-header anim-up">
          <span className="section-tag"><i className="fas fa-graduation-cap"></i> Learning &amp; Skilling</span>
          <h2 className="section-title">Invest in Your Future</h2>
        </div>
        <div className="learning-features">
          <div className="learning-feat anim-up">
            <i className="fas fa-book-open"></i>
            <p>Study with contents and videos</p>
          </div>
          <div className="learning-feat anim-up" style={{ transitionDelay: '.1s' }}>
            <i className="fas fa-chalkboard-user"></i>
            <p>Interactive trainer-led online classes</p>
          </div>
          <div className="learning-feat anim-up" style={{ transitionDelay: '.2s' }}>
            <i className="fas fa-certificate"></i>
            <p>Certification to boost credibility</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: 20 }}>Training Programs</p>
        </div>
        <div className="training-row">
          <div className="training-badge"><i className="fas fa-heart-pulse"></i> Life Counselling Professional (LCP)</div>
          <div className="training-badge"><i className="fas fa-chart-column"></i> Business Consulting Professional (BCP)</div>
        </div>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <a href="#training" className="btn btn-primary"><i className="fas fa-play-circle"></i> Join Free Training Session</a>
          <a href="#meeting" className="btn btn-outline"><i className="fas fa-calendar-check"></i> Schedule a Meeting</a>
        </div>
      </div>
    </section>
  );
}