'use client';

import Image from 'next/image';
import { LOGO_SRC } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

const socials = [
  { href: '#', label: 'Facebook', icon: 'fab fa-facebook-f' },
  { href: '#', label: 'Instagram', icon: 'fab fa-instagram' },
  { href: '#', label: 'X', icon: 'fab fa-x-twitter' },
  { href: '#', label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
  { href: '#', label: 'YouTube', icon: 'fab fa-youtube' },
  { href: '#', label: 'Pinterest', icon: 'fab fa-pinterest-p' },
];

const communityKeys = ['footer.community.about', 'footer.community.founders', 'footer.community.advisor', 'footer.community.team', 'footer.community.earnings'] as const;
const businessKeys = ['footer.business.comm', 'footer.business.marketing', 'footer.business.hr', 'footer.business.counselling'] as const;
const legalKeys = ['footer.legal.privacy', 'footer.legal.terms', 'footer.legal.escrow', 'footer.legal.refund', 'footer.legal.payment'] as const;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src={LOGO_SRC} alt="Saubh.Tech" width={36} height={36} />
              <span>
                Saubh<span className="dot" style={{ color: 'var(--green)' }}>.</span>Tech
              </span>
            </div>
            <div className="footer-info">
              <div className="footer-info-item">
                <i className="fas fa-id-card"></i> {t('footer.gstn')}
              </div>
              <div className="footer-info-item">
                <i className="fas fa-building"></i> {t('footer.udyam')}
              </div>
              <div className="footer-info-item">
                <i className="fas fa-envelope"></i>{' '}
                <a href="mailto:support@saubh.tech">support@saubh.tech</a>
              </div>
              <div className="footer-info-item">
                <i className="fas fa-phone"></i>{' '}
                <a href="tel:918800607598">918800607598</a>
              </div>
              <div className="footer-info-item">
                <i className="fab fa-whatsapp"></i>{' '}
                <a href="https://wa.me/918800607598">918800607598</a>
              </div>
            </div>
            <div className="footer-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="footer-col">
            <h4>{t('footer.community')}</h4>
            {communityKeys.map((key) => (
              <a key={key} href="#">{t(key)}</a>
            ))}
          </div>

          {/* Business */}
          <div className="footer-col">
            <h4>{t('footer.business')}</h4>
            {businessKeys.map((key) => (
              <a key={key} href="#">{t(key)}</a>
            ))}
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>{t('footer.legal')}</h4>
            {legalKeys.map((key) => (
              <a key={key} href="#">{t(key)}</a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-addresses">
            <div className="footer-addr">
              <i className="fas fa-location-dot"></i>
              <span>{t('footer.addr1')}</span>
            </div>
            <div className="footer-addr">
              <i className="fas fa-location-dot"></i>
              <span>{t('footer.addr2')}</span>
            </div>
          </div>
          <p className="tagline">
            <span className="gradient-text">{t('footer.tagline')}</span>
          </p>
          <p>
            {t('footer.credit')} &nbsp;|&nbsp; {t('footer.copyright')} &nbsp;|&nbsp; {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
