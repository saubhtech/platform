'use client';

import { useEffect, useRef } from 'react';

export default function SaubhOSSection() {
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
    <section ref={sectionRef} className="saubhos saubhos-dark section-pad" id="saubhos" aria-labelledby="saubhos-title">
      <div className="container">
        <div className="saubhos-header anim-up">
          <span className="section-tag"><i className="fas fa-microchip"></i> SaubhOS – Operating System</span>
        </div>
        <div className="saubhos-grid">
          <div className="saubhos-card anim-up">
            <div className="saubhos-card-icon"><i className="fas fa-chart-pie"></i></div>
            <h3>Data &amp; Marketing</h3>
            <p>Upload or extract targeted data. Generate leads through multichannel campaigns Email, WhatsApp, RCM, Call, Virtual Meeting, Social-media, and In-person Visits.</p>
          </div>
          <div className="saubhos-card anim-up" style={{ transitionDelay: '.1s' }}>
            <div className="saubhos-card-icon"><i className="fas fa-headset"></i></div>
            <h3>Sales &amp; Support</h3>
            <p>No more guessing or missing opportunities. Using unified communication system (UCS) connect with your leads, set follow-up reminders and close the deals faster.</p>
          </div>
          <div className="saubhos-card anim-up" style={{ transitionDelay: '.2s' }}>
            <div className="saubhos-card-icon"><i className="fas fa-users-gear"></i></div>
            <h3>HR &amp; Recruitment</h3>
            <p>Automate your HR Management. Post requirements, let interested candidates contact you and get the best talents to turn your vision into reality.</p>
          </div>
          <div className="saubhos-card anim-up" style={{ transitionDelay: '.3s' }}>
            <div className="saubhos-card-icon"><i className="fas fa-route"></i></div>
            <h3>Career Choice</h3>
            <p>1500 occupations, based on Ability, Activity, Industry, Interest, Knowledge, Outlook, Pathway, Preference, Sector, Skills, STEM, Technology, Traits, and Zone.</p>
          </div>
        </div>
        <div className="btn-group" style={{ justifyContent: 'center', marginTop: 48 }}>
          <a href="#saubhos-free" className="btn btn-outline"><i className="fas fa-download"></i> Get Free SaubhOS</a>
          <a href="#demo" className="btn btn-ghost"><i className="fas fa-calendar-check"></i> Schedule a Demo</a>
        </div>
      </div>
    </section>
  );
}