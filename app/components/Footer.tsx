export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-5 gap-10 text-sm text-gray-400">

        {/* BRAND */}
        <div className="col-span-2">
          <h4 className="font-medium text-white mb-2">Saubh.Tech</h4>
          <p className="leading-relaxed">
            Community-Verified Marketplace for Work, Learning & Opportunity.
          </p>
        </div>

        {/* COMMUNITY */}
        <div>
          <h4 className="font-medium text-white mb-2">Community</h4>
          <ul className="space-y-1">
            <li>Success Stories</li>
            <li>Work From Anywhere</li>
            <li>Phygital Workplace</li>
            <li>Escrow System</li>
          </ul>
        </div>

        {/* BUSINESS */}
        <div>
          <h4 className="font-medium text-white mb-2">Business</h4>
          <ul className="space-y-1">
            <li>Branding & Leads</li>
            <li>Outsource Requirements</li>
            <li>Calculate Earnings</li>
            <li>Subscription</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="font-medium text-white mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>DPDPA & GDPR Compliance</li>
          </ul>
        </div>
      </div>

      {/* LOWER ROW — About */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-4 gap-10 text-sm text-gray-400">
          <div>
            <h4 className="font-medium text-white mb-2">About Us</h4>
            <ul className="space-y-1">
              <li>How It Works</li>
              <li>Certification</li>
              <li>Owners Team</li>
              <li>Be an Advisor</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-2">Team Support</h4>
            <ul className="space-y-1">
              <li>Country → State → District → Pincode</li>
              <li>Support & Ticket</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-2">Get Started</h4>
            <ul className="space-y-1">
              <li>Register</li>
              <li>Login</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-medium text-white mb-2">Contact</h4>
            <ul className="space-y-1">
              <li>Call</li>
              <li>WhatsApp</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-4 text-gray-400 text-sm">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>LinkedIn</span>
          <span>X</span>
          <span>YouTube</span>
        </div>
      </div>

      {/* ADDRESS + COPYRIGHT */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-500 space-y-1">
          <div>Address (Put here)</div>
          <div>GSTN (Put here)</div>
          <div className="pt-2">© {year} Saubh.Tech, All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
