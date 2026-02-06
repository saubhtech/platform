'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 6.9, suffix: 'x', decimal: true, text: 'higher conversion rates from UGC vs traditional ads' },
  { end: 65, suffix: '%', decimal: false, text: 'lower customer acquisition costs vs paid advertising' },
  { end: 82, suffix: '%', decimal: false, text: 'more engagement, trust, and conversion through organic leads' },
  { end: 40, suffix: '%', decimal: false, text: 'increase in repeat orders due to peer recommendations' },
];

/* ── Animated counter hook ── */
function useCounter(end: number, dur: number, go: boolean, dec: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    let s: number | null = null;
    let r: number;
    const tick = (t: number) => {
      if (!s) s = t;
      const p = Math.min((t - s) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setV(dec ? Math.round(e * end * 10) / 10 : Math.round(e * end));
      if (p < 1) r = requestAnimationFrame(tick);
    };
    r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, [go, end, dur, dec]);
  return v;
}

function StatCard({ s, i, go }: { s: typeof stats[0]; i: number; go: boolean }) {
  const count = useCounter(s.end, 2000, go, s.decimal);

  return (
    <div className="proven-card anim-up" style={{ transitionDelay: `${i * 0.1}s` }}>
      <div className="proven-num">
        {s.decimal ? count.toFixed(1) : count}
        {s.suffix}
      </div>
      <p><span className="check">✓</span> {s.text}</p>
    </div>
  );
}

export default function ProvenResultsSection() {
  const ref = useRef<HTMLElement>(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setGo(true);
            e.target.querySelectorAll('.anim-up').forEach((el) =>
              el.classList.add('visible')
            );
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="proven section-pad" aria-labelledby="proven-title">
      <div className="container">
        <div className="proven-header anim-up">
          <span className="section-tag"><i className="fas fa-chart-line"></i> Proven Results</span>
        </div>
        <div className="proven-grid">
          {stats.map((s, i) => (
            <StatCard key={s.end} s={s} i={i} go={go} />
          ))}
        </div>
        <div className="btn-group" style={{ justifyContent: 'center', marginTop: 48 }}>
          <a href="#register" className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Register for Gig-Work
          </a>
          <a href="#post" className="btn btn-outline">
            <i className="fas fa-plus-circle"></i> Post Requirements
          </a>
          <a href="#demo" className="btn btn-ghost">
            <i className="fas fa-calendar-check"></i> Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}