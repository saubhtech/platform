'use client';

import { useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { LOGO_SRC } from '@/lib/constants';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.saubh.tech';
const RTL_LOCALES = ['ur-in', 'ks-in', 'sd-in'];

export default function LoginPage() {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const isRtl = RTL_LOCALES.includes(locale);

  const [activeTab, setActiveTab] = useState<'register' | 'signin'>('register');

  // Register state
  const [regName, setRegName] = useState('');

  // Sign-in state
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState<'otp' | 'login' | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const otpRef = useRef<HTMLInputElement>(null);

  // Build WhatsApp registration link
  const waLink = `https://wa.me/918800607598?text=Register%20${encodeURIComponent(regName || 'Your Name')}`;

  // Request OTP
  const handleRequestOtp = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const trimmed = phone.trim();
    if (!trimmed) {
      setError('Please enter your WhatsApp number.');
      return;
    }

    setLoading('otp');
    try {
      const res = await fetch(`${API_BASE}/auth/whatsapp/request-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ whatsapp: trimmed }),
      });

      const data = await res.json();

      if (res.status === 404) {
        setError('This number is not registered. Please register first.');
        return;
      }
      if (res.status === 429) {
        setError('Too many attempts. Please try again later.');
        return;
      }
      if (!res.ok) {
        setError(data.message || 'Something went wrong.');
        return;
      }

      setOtpSent(true);
      setSuccess('OTP sent to your WhatsApp!');
      setTimeout(() => otpRef.current?.focus(), 100);
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(null);
    }
  };

  // Verify OTP + Login
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const trimmedOtp = otp.trim();
    if (!trimmedOtp || trimmedOtp.length !== 4) {
      setError('Please enter the 4-digit passcode.');
      return;
    }

    setLoading('login');
    try {
      const res = await fetch(`${API_BASE}/auth/whatsapp/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ whatsapp: phone.trim(), passcode: trimmedOtp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Invalid or expired OTP. Please try again.');
        return;
      }

      // Save JWT to cookie (24hr)
      document.cookie = `saubh_token=${data.token}; path=/; max-age=86400; SameSite=Lax`;
      document.cookie = `saubh_user=${encodeURIComponent(JSON.stringify(data.user))}; path=/; max-age=86400; SameSite=Lax`;

      // Redirect to dashboard
      router.push(`/${locale}/dashboard`);
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="lg-page" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* BG */}
      <div className="lg-bg"></div>
      <div className="lg-overlay"></div>

      {/* Particles */}
      <div className="lg-p lg-p1"></div>
      <div className="lg-p lg-p2"></div>
      <div className="lg-p lg-p3"></div>
      <div className="lg-p lg-p4"></div>

      {/* Header */}
      <header className="lg-header">
        <a href={`/${locale}`} className="lg-logo">
          <Image src={LOGO_SRC} alt="Saubh.Tech" width={36} height={36} className="lg-logo-img" />
          <span className="lg-logo-text">
            Saubh<span className="lg-dot">.</span>Tech
          </span>
        </a>
      </header>

      {/* Main */}
      <div className="lg-center">
        {/* Tabs */}
        <div className="lg-tabs" id="lgTabs">
          <button
            className={`lg-tab${activeTab === 'register' ? ' lg-tab-on' : ''}`}
            onClick={() => { setActiveTab('register'); setError(''); setSuccess(''); }}
          >
            <i className="fas fa-user-plus"></i> Register
          </button>
          <button
            className={`lg-tab${activeTab === 'signin' ? ' lg-tab-on' : ''}`}
            onClick={() => { setActiveTab('signin'); setError(''); setSuccess(''); }}
          >
            <i className="fas fa-right-to-bracket"></i> Sign In
          </button>
        </div>

        <div className="lg-cards">
          {/* REGISTER */}
          <div
            className={`lg-card lg-card-register${activeTab !== 'register' ? ' lg-hide' : ''}`}
            id="cardRegister"
          >
            <div className="lg-card-head">
              <div className="lg-card-icon lg-icon-green">
                <i className="fas fa-user"></i>
              </div>
              <h2 className="lg-card-title">Join Saubh via WhatsApp</h2>
            </div>

            <div className="lg-steps">
              <div className="lg-step">
                <span className="lg-bullet lg-bullet-green">1</span>
                <span>
                  Open your WhatsApp <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
                </span>
              </div>
              <div className="lg-step">
                <span className="lg-bullet lg-bullet-green">2</span>
                <span>
                  Send: <code className="lg-code lg-code-green">Register Your Name</code>
                </span>
              </div>
              <div className="lg-step">
                <span className="lg-bullet lg-bullet-green">3</span>
                <span>
                  To: <strong className="lg-nums">+918800607598</strong>
                </span>
              </div>
            </div>

            <div className="lg-form">
              <div className="lg-field">
                <label>Your Name:</label>
                <div className="lg-input-wrap">
                  <i className="fas fa-user lg-input-icon"></i>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                  />
                </div>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lg-btn lg-btn-green"
                style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
              >
                <i className="fab fa-whatsapp"></i> Open WhatsApp to Register
              </a>
            </div>
          </div>

          {/* SIGN IN */}
          <div
            className={`lg-card lg-card-signin${activeTab !== 'signin' ? ' lg-hide' : ''}`}
            id="cardSignin"
          >
            <div className="lg-card-head">
              <div className="lg-card-icon lg-icon-amber">
                <i className="fas fa-lock"></i>
              </div>
              <h2 className="lg-card-title">Sign In</h2>
            </div>

            {/* Error / Success messages */}
            {error && (
              <div style={{
                background: '#fef2f2', color: '#dc2626', padding: '10px 14px',
                borderRadius: '8px', marginBottom: '12px', fontSize: '14px',
              }}>
                {error}
              </div>
            )}
            {success && (
              <div style={{
                background: '#f0fdf4', color: '#16a34a', padding: '10px 14px',
                borderRadius: '8px', marginBottom: '12px', fontSize: '14px',
              }}>
                {success}
              </div>
            )}

            {/* Step 1: Enter number + Send OTP */}
            {!otpSent && (
              <form className="lg-form" onSubmit={handleRequestOtp}>
                <div className="lg-field">
                  <label>WhatsApp Number:</label>
                  <div className="lg-input-wrap">
                    <i className="fab fa-whatsapp lg-input-icon" style={{ color: '#25D366' }}></i>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="lg-btn lg-btn-amber"
                  disabled={loading === 'otp'}
                >
                  {loading === 'otp' ? (
                    <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane"></i> Send OTP</>
                  )}
                </button>
              </form>
            )}

            {/* Step 2: Enter OTP + Login */}
            {otpSent && (
              <form className="lg-form" onSubmit={handleLogin}>
                <div className="lg-field">
                  <label>WhatsApp Number:</label>
                  <div className="lg-input-wrap">
                    <i className="fab fa-whatsapp lg-input-icon" style={{ color: '#25D366' }}></i>
                    <input type="tel" value={phone} disabled />
                  </div>
                </div>
                <div className="lg-field">
                  <label>Enter 4-digit Passcode:</label>
                  <div className="lg-input-wrap">
                    <i className="fas fa-lock lg-input-icon lg-icon-amber-i"></i>
                    <input
                      ref={otpRef}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{4}"
                      maxLength={4}
                      placeholder="••••"
                      autoComplete="one-time-code"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="lg-btn lg-btn-amber"
                  disabled={loading === 'login'}
                >
                  {loading === 'login' ? (
                    <><i className="fas fa-spinner fa-spin"></i> Verifying...</>
                  ) : (
                    <><i className="fas fa-check"></i> Login</>
                  )}
                </button>
                <button
                  type="button"
                  className="lg-btn"
                  style={{ marginTop: '8px', background: 'transparent', color: '#aaa', fontSize: '13px' }}
                  onClick={() => { setOtpSent(false); setOtp(''); setError(''); setSuccess(''); }}
                >
                  ← Change number / Resend OTP
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
