'use client';

import { useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.saubh.tech/api';

export default function LoginPage() {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');

  const [regName, setRegName] = useState('');
  const [phone, setPhone] = useState('');
  const [passcode, setPasscode] = useState('');
  const [loading, setLoading] = useState<'otp' | 'login' | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const passcodeRef = useRef<HTMLInputElement>(null);

  const waLink = `https://wa.me/918800607598?text=Register%20${encodeURIComponent(regName || 'Your Name')}`;

  const handleRequestOtp = async (e: FormEvent) => {
    e.preventDefault();
    setError(''); setSuccess('');
    const trimmed = phone.trim();
    if (!trimmed) { setError('Enter your WhatsApp number'); return; }
    setLoading('otp');
    try {
      const res = await fetch(`${API_BASE}/auth/whatsapp/request-otp`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ whatsapp: trimmed }),
      });
      const data = await res.json();
      if (res.status === 404) { setError('Number not registered. Register first →'); return; }
      if (res.status === 429) { setError('Too many attempts. Try later.'); return; }
      if (!res.ok) { setError(data.message || 'Something went wrong.'); return; }
      setOtpSent(true);
      setSuccess('Passcode sent to your WhatsApp!');
      setTimeout(() => passcodeRef.current?.focus(), 100);
    } catch { setError('Network error.'); }
    finally { setLoading(null); }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(''); setSuccess('');
    const pc = passcode.trim();
    if (!pc || pc.length !== 4) { setError('Enter the 4-digit passcode.'); return; }
    setLoading('login');
    try {
      const res = await fetch(`${API_BASE}/auth/whatsapp/verify-otp`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ whatsapp: phone.trim(), passcode: pc }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || 'Invalid passcode.'); return; }
      document.cookie = `saubh_token=${data.token}; path=/; max-age=86400; SameSite=Lax`;
      document.cookie = `saubh_user=${encodeURIComponent(JSON.stringify(data.user))}; path=/; max-age=86400; SameSite=Lax`;
      if (redirect) { window.location.href = redirect; } else { router.push(`/${locale}/dashboard`); }
    } catch { setError('Network error.'); }
    finally { setLoading(null); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        .lp { --g1:#22c55e; --g2:#84cc16; --g3:#f97316; --g4:#ef4444; --dark:#0b0f0d; --card:rgba(20,28,22,0.72); --card-b:rgba(34,197,94,0.12); --glass:rgba(255,255,255,0.04); --line:rgba(255,255,255,0.07); --t1:#f0fdf4; --t2:rgba(255,255,255,0.55); --t3:rgba(255,255,255,0.3); min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px; font-family:'DM Sans',system-ui,sans-serif; color:var(--t1); background:var(--dark); position:relative; overflow:hidden; }

        /* animated mesh bg */
        .lp::before { content:''; position:fixed; inset:0; background: radial-gradient(ellipse 80% 60% at 15% 20%, rgba(34,197,94,.18), transparent), radial-gradient(ellipse 60% 80% at 85% 25%, rgba(249,115,22,.15), transparent), radial-gradient(ellipse 70% 50% at 50% 90%, rgba(132,204,22,.10), transparent), radial-gradient(ellipse 40% 40% at 70% 70%, rgba(239,68,68,.08), transparent); z-index:0; animation: meshDrift 12s ease-in-out infinite alternate; }
        @keyframes meshDrift { 0%{filter:hue-rotate(0deg);} 100%{filter:hue-rotate(15deg);} }

        /* floating orbs */
        .lp-orb { position:fixed; border-radius:50%; filter:blur(80px); opacity:.35; z-index:0; animation: orbFloat 8s ease-in-out infinite alternate; }
        .lp-orb1 { width:300px; height:300px; top:-80px; left:-60px; background:var(--g1); }
        .lp-orb2 { width:250px; height:250px; bottom:-60px; right:-40px; background:var(--g3); animation-delay:-4s; animation-duration:10s; }
        .lp-orb3 { width:180px; height:180px; top:40%; left:55%; background:var(--g2); animation-delay:-2s; opacity:.2; }
        @keyframes orbFloat { 0%{transform:translate(0,0) scale(1);} 100%{transform:translate(20px,-15px) scale(1.08);} }

        .lp-inner { position:relative; z-index:1; width:100%; max-width:920px; }

        /* header */
        .lp-head { display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:20px; }
        .lp-logo { width:44px; height:44px; border-radius:14px; object-fit:cover; box-shadow: 0 4px 20px rgba(34,197,94,.3); }
        .lp-brand { font-family:'Outfit',sans-serif; font-weight:900; font-size:1.5rem; letter-spacing:-.5px; }
        .lp-brand-dot { background:linear-gradient(135deg,var(--g1),var(--g3)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }

        /* grid */
        .lp-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

        /* cards */
        .lp-card { background:var(--card); border:1px solid var(--line); border-radius:20px; padding:22px; position:relative; overflow:hidden; backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); }
        .lp-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; }
        .lp-card-reg::before { background:linear-gradient(90deg,var(--g1),var(--g2)); }
        .lp-card-login::before { background:linear-gradient(90deg,var(--g3),var(--g4)); }

        /* glow border on hover */
        .lp-card-reg:hover { border-color:rgba(34,197,94,.25); box-shadow:0 0 40px rgba(34,197,94,.08); }
        .lp-card-login:hover { border-color:rgba(249,115,22,.25); box-shadow:0 0 40px rgba(249,115,22,.08); }

        .lp-card-title { font-family:'Outfit',sans-serif; font-weight:800; font-size:1.15rem; margin:0 0 14px; display:flex; align-items:center; gap:8px; }

        /* steps */
        .lp-steps { display:grid; gap:8px; padding:12px; border-radius:14px; background:var(--glass); border:1px dashed var(--line); margin-bottom:14px; }
        .lp-step { display:flex; align-items:center; gap:10px; font-size:.88rem; color:var(--t2); }
        .lp-step-n { width:20px; height:20px; border-radius:50%; background:rgba(255,255,255,0.06); border:1px solid var(--line); display:grid; place-items:center; font-size:11px; font-weight:800; color:var(--t1); flex-shrink:0; }
        .lp-step-phone { font-weight:800; color:var(--t1); }
        .lp-step-hint { font-size:.78rem; color:var(--t3); padding-left:30px; margin-top:-2px; }

        /* form block */
        .lp-form-block { padding:14px; border-radius:14px; background:rgba(255,255,255,0.03); border:1px solid var(--line); }
        .lp-form-label { font-family:'Outfit',sans-serif; font-weight:700; font-size:.92rem; margin:0 0 10px; }
        .lp-form { display:grid; gap:10px; }
        .lp-input { height:44px; border-radius:12px; border:1px solid var(--line); background:rgba(255,255,255,0.05); padding:0 14px; font-size:.9rem; color:var(--t1); outline:none; width:100%; box-sizing:border-box; font-family:'DM Sans',sans-serif; transition:.2s; }
        .lp-input::placeholder { color:var(--t3); }
        .lp-input:focus { border-color:rgba(34,197,94,.4); box-shadow:0 0 0 3px rgba(34,197,94,.1); background:rgba(255,255,255,0.07); }
        .lp-input:disabled { opacity:.5; }

        /* buttons */
        .lp-btn { height:44px; border:none; border-radius:12px; font-weight:700; font-size:.9rem; cursor:pointer; width:100%; font-family:'Outfit',sans-serif; transition:.2s; letter-spacing:.2px; }
        .lp-btn:active { transform:scale(.98); }
        .lp-btn:disabled { opacity:.5; cursor:not-allowed; }
        .lp-btn-wa { color:#fff; background:linear-gradient(135deg,#25D366,#128C7E); box-shadow:0 6px 20px rgba(37,211,102,.25); display:block; text-align:center; text-decoration:none; line-height:44px; }
        .lp-btn-wa:hover { transform:translateY(-1px); box-shadow:0 10px 28px rgba(37,211,102,.35); }
        .lp-btn-go { color:#0b0f0d; background:linear-gradient(135deg,var(--g1),var(--g2)); box-shadow:0 6px 20px rgba(34,197,94,.2); }
        .lp-btn-go:hover { transform:translateY(-1px); box-shadow:0 10px 28px rgba(34,197,94,.3); }
        .lp-btn-fire { color:#fff; background:linear-gradient(135deg,var(--g3),var(--g4)); box-shadow:0 6px 20px rgba(249,115,22,.2); }
        .lp-btn-fire:hover { transform:translateY(-1px); box-shadow:0 10px 28px rgba(249,115,22,.3); }

        /* alerts */
        .lp-err { background:rgba(239,68,68,.12); color:#fca5a5; padding:8px 12px; border-radius:10px; font-size:.82rem; border:1px solid rgba(239,68,68,.2); }
        .lp-ok { background:rgba(34,197,94,.12); color:#86efac; padding:8px 12px; border-radius:10px; font-size:.82rem; border:1px solid rgba(34,197,94,.2); }

        .lp-back { background:none; border:none; color:var(--t3); font-size:.78rem; cursor:pointer; padding:4px 0; font-family:'DM Sans',sans-serif; }
        .lp-back:hover { color:var(--g1); }

        /* footer tagline */
        .lp-footer { text-align:center; margin-top:16px; font-size:.75rem; color:var(--t3); letter-spacing:.5px; }

        @media(max-width:720px){
          .lp { padding:12px; }
          .lp-grid { grid-template-columns:1fr; gap:12px; }
          .lp-brand { font-size:1.25rem; }
          .lp-card { padding:16px; }
        }
      `}</style>

      <div className="lp">
        <div className="lp-orb lp-orb1" />
        <div className="lp-orb lp-orb2" />
        <div className="lp-orb lp-orb3" />

        <div className="lp-inner">
          {/* Header */}
          <div className="lp-head">
            <Image src="/logo.jpg" alt="Saubh.Tech" width={44} height={44} className="lp-logo" />
            <div className="lp-brand">Saubh<span className="lp-brand-dot">.</span>Tech</div>
          </div>

          <div className="lp-grid">
            {/* REGISTER */}
            <div className="lp-card lp-card-reg">
              <div className="lp-card-title">👤 Register</div>

              <div className="lp-steps">
                <div className="lp-step"><div className="lp-step-n">1</div> Open your WhatsApp</div>
                <div className="lp-step"><div className="lp-step-n">2</div> Type: <strong style={{marginLeft:4}}>Register Your Name</strong></div>
                <div className="lp-step"><div className="lp-step-n">3</div> Send to: <span className="lp-step-phone" style={{marginLeft:4}}>+918800607598</span> or <span className="lp-step-phone">+918130960040</span></div>
                <div className="lp-step-hint">* Replace &quot;Your Name&quot; with your real name</div>
              </div>

              <div className="lp-form-block">
                <div className="lp-form-label">👤 Join Saubh.Tech</div>
                <div className="lp-form">
                  <input
                    className="lp-input"
                    type="text"
                    placeholder="Your name"
                    value={regName}
                    onChange={e => setRegName(e.target.value)}
                  />
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="lp-btn lp-btn-wa">
                    WhatsApp to Register
                  </a>
                </div>
              </div>
            </div>

            {/* SIGN IN */}
            <div className="lp-card lp-card-login">
              <div className="lp-card-title">🔐 Sign In</div>

              <div className="lp-steps">
                <div className="lp-step"><div className="lp-step-n">1</div> Open your WhatsApp</div>
                <div className="lp-step"><div className="lp-step-n">2</div> Type: <strong style={{marginLeft:4}}>Passcode</strong></div>
                <div className="lp-step"><div className="lp-step-n">3</div> Send to: <span className="lp-step-phone" style={{marginLeft:4}}>+918800607598</span> or <span className="lp-step-phone">+918130960040</span></div>
                <div className="lp-step-hint">You&apos;ll receive a 4-digit passcode on WhatsApp</div>
              </div>

              <div className="lp-form-block">
                <div className="lp-form-label">🔐 Login</div>

                {error && <div className="lp-err">{error}</div>}
                {success && <div className="lp-ok">{success}</div>}

                {!otpSent ? (
                  <form className="lp-form" onSubmit={handleRequestOtp}>
                    <input
                      className="lp-input"
                      type="tel"
                      inputMode="numeric"
                      placeholder="WhatsApp Number (e.g. 919876543210)"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                    <button className="lp-btn lp-btn-fire" type="submit" disabled={loading === 'otp'}>
                      {loading === 'otp' ? 'Sending...' : '📩 Send Passcode'}
                    </button>
                  </form>
                ) : (
                  <form className="lp-form" onSubmit={handleLogin}>
                    <input className="lp-input" type="tel" value={phone} disabled />
                    <input
                      ref={passcodeRef}
                      className="lp-input"
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="4-digit Passcode"
                      value={passcode}
                      onChange={e => setPasscode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    />
                    <button className="lp-btn lp-btn-fire" type="submit" disabled={loading === 'login'}>
                      {loading === 'login' ? 'Verifying...' : '🚀 Continue'}
                    </button>
                    <button type="button" className="lp-back" onClick={() => { setOtpSent(false); setPasscode(''); setError(''); setSuccess(''); }}>
                      ← Change number / Resend
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="lp-footer">PHYGITAL GIG MARKETPLACE</div>
        </div>
      </div>
    </>
  );
}
