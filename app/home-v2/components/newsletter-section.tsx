export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0A1A0A] via-[#112211] to-[#1A1206] text-center anim-up">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-heading font-bold text-xl text-saubh-text mb-2">Stay in the Loop</h3>
        <p className="text-saubh-muted mb-7">Get the latest updates, tips & opportunities from Saubh.Tech</p>
        <div className="flex max-w-lg mx-auto rounded-btn overflow-hidden border border-saubh-border">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 bg-saubh-card border-none text-saubh-text font-body text-[0.95rem] outline-none placeholder:text-saubh-muted"
          />
          <button className="px-7 py-3.5 btn-gradient-green text-white border-none font-heading font-semibold text-[0.95rem] cursor-pointer hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
