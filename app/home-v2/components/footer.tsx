export default function Footer() {
  const community = ['About Saubh Global', 'Founding Co-owners', 'Be a Certified Advisor', 'Team Saubh', 'Calculate Earnings'];
  const business = ['Unified Communication', 'Marketing & Sales', 'HR & Recruitment', 'Counselling & Admission'];
  const legal = ['Data Privacy, DPDPA & GDPR', 'Terms of Service', 'Escrow System', 'Refund Policy', 'Online Payment'];
  const socials = [
    { icon: 'fa-facebook-f' }, { icon: 'fa-instagram' }, { icon: 'fa-x-twitter' },
    { icon: 'fa-linkedin-in' }, { icon: 'fa-youtube' }, { icon: 'fa-pinterest-p' },
  ];

  return (
    <footer className="bg-saubh-dark border-t border-saubh-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg btn-gradient-primary flex items-center justify-center font-heading font-extrabold text-white text-xl">S</div>
              <span className="font-heading font-bold text-xl text-saubh-text">Saubh.Tech</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-saubh-muted text-[0.88rem]"><i className="fas fa-building w-4" /> GSTN: 10AAUPS8603H1ZH</div>
              <div className="flex items-center gap-2.5 text-saubh-muted text-[0.88rem]"><i className="fas fa-id-badge w-4" /> UDYAM-BR-31-0056281</div>
              <div className="flex items-center gap-2.5 text-saubh-muted text-[0.88rem]"><i className="fas fa-envelope w-4" /> hello@saubh.tech</div>
              <div className="flex items-center gap-2.5 text-saubh-muted text-[0.88rem]"><i className="fas fa-phone w-4" /> 918800607598</div>
              <div className="flex items-center gap-2.5 text-saubh-muted text-[0.88rem]"><i className="fab fa-whatsapp w-4" /> 918800607598</div>
            </div>
            <div className="flex gap-2.5 mt-5">
              {socials.map((s, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-saubh-card border border-saubh-border flex items-center justify-center text-saubh-muted text-sm no-underline hover:border-saubh-green hover:text-saubh-green transition-all">
                  <i className={`fab ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-bold tracking-[2px] uppercase text-saubh-text mb-5">Community</h4>
            {community.map((link) => (<a key={link} href="#" className="block text-saubh-muted text-[0.88rem] no-underline mb-3 hover:text-saubh-green transition-colors">{link}</a>))}
          </div>

          {/* Business */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-bold tracking-[2px] uppercase text-saubh-text mb-5">Business</h4>
            {business.map((link) => (<a key={link} href="#" className="block text-saubh-muted text-[0.88rem] no-underline mb-3 hover:text-saubh-green transition-colors">{link}</a>))}
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-bold tracking-[2px] uppercase text-saubh-text mb-5">Legal</h4>
            {legal.map((link) => (<a key={link} href="#" className="block text-saubh-muted text-[0.88rem] no-underline mb-3 hover:text-saubh-green transition-colors">{link}</a>))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-saubh-border pt-7 text-center">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-5">
            <div className="flex items-start gap-2 text-saubh-muted text-[0.82rem]"><i className="fas fa-map-marker-alt text-saubh-green mt-0.5" /> 01 Tola-Tari, Sarha, Dahiawan, Chapra, Saran, Bihar {'\u2013'} 841301</div>
            <div className="flex items-start gap-2 text-saubh-muted text-[0.82rem]"><i className="fas fa-map-marker-alt text-saubh-green mt-0.5" /> Fellow Ship of India, 811/92 Nehru Place, South East Delhi, New Delhi {'\u2013'} 110019</div>
          </div>
          <div className="font-heading font-bold text-base mb-2">
            <span className="text-saubh-green">Gig Work.</span>{' '}
            <span className="text-saubh-orange">Verified People.</span>{' '}
            <span className="text-saubh-red">Secured Income</span>
          </div>
          <div className="text-saubh-muted text-[0.82rem]">Envisioned by Mani, a jewel of the earth. &nbsp;|&nbsp; {'\u00A9'}2026 Saubh.Tech &nbsp;|&nbsp; All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
