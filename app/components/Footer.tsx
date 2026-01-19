"use client";

import {
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube
} from "react-icons/fi";
import { BsWhatsapp, BsPinterest, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-gray-300 mt-32 relative overflow-hidden">

      <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />

      {/* TABLE SECTION */}
      <section className="w-full bg-[#06172F] border-t border-white/10 py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-[0.10]" />

        <div className="relative max-w-6xl mx-auto px-6 text-sm">

          {/* TABLE */}
          <div className="grid grid-cols-4 border border-white/10 rounded-lg overflow-hidden">

            <div className="px-4 py-3 font-semibold text-white border-b border-white/10">Saubh.Tech</div>
            <div className="px-4 py-3 font-semibold text-white border-b border-white/10">Community</div>
            <div className="px-4 py-3 font-semibold text-white border-b border-white/10">Business</div>
            <div className="px-4 py-3 font-semibold text-white border-b border-white/10">Legal</div>

            <div className="px-4 py-3 border-b border-white/10">About Us</div>
            <div className="px-4 py-3 border-b border-white/10">Be an Advisor</div>
            <div className="px-4 py-3 border-b border-white/10">Branding & Leads</div>
            <div className="px-4 py-3 border-b border-white/10">Privacy Policy</div>

            <div className="px-4 py-3 border-b border-white/10">How It Works</div>
            <div className="px-4 py-3 border-b border-white/10">Certification</div>
            <div className="px-4 py-3 border-b border-white/10">Outsource Requirements</div>
            <div className="px-4 py-3 border-b border-white/10">Terms of Service</div>

            <div className="px-4 py-3 border-b border-white/10">Success Stories</div>
            <div className="px-4 py-3 border-b border-white/10">Work from Anywhere</div>
            <div className="px-4 py-3 border-b border-white/10">Phygital Workplace</div>
            <div className="px-4 py-3 border-b border-white/10">Escrow System</div>

            <div className="px-4 py-3 border-b border-white/10">Owners Team</div>
            <div className="px-4 py-3 border-b border-white/10">Calculate Earnings</div>
            <div className="px-4 py-3 border-b border-white/10">Subscription</div>
            <div className="px-4 py-3 border-b border-white/10">Refund Policy</div>

            <div className="col-span-3 border-b border-white/10" />
            <div className="px-4 py-3 text-[13px] text-gray-300">
              DPDPA & GDPR Compliance
            </div>

          </div>

          {/* SOCIAL — CLICKABLE */}
          <div className="border-t border-white/10 mt-10 pt-8 flex flex-wrap justify-center gap-8 text-[15px]">

            <a href="tel:+918800607598" className="flex items-center gap-2 hover:text-sky-300"><FiPhone size={16}/>Call</a>
            <a href="https://wa.me/918800607598" target="_blank" className="flex items-center gap-2 hover:text-sky-300"><BsWhatsapp size={16}/>WhatsApp</a>
            <a href="mailto:saubhtech@gmail.com" className="flex items-center gap-2 hover:text-sky-300"><FiMail size={16}/>Email</a>
            <a href="https://facebook.com" target="_blank" className="flex items-center gap-2 hover:text-sky-300"><FiFacebook size={16}/>Facebook</a>
            <a href="https://instagram.com" target="_blank" className="flex items-center gap-2 hover:text-sky-300"><FiInstagram size={16}/>Instagram</a>
            <a href="https://pinterest.com" target="_blank" className="flex items-center gap-2 hover:text-sky-300"><BsPinterest size={16}/>Pinterest</a>
            <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 hover:text-sky-300"><FiLinkedin size={16}/>LinkedIn</a>
          </div>

          <div className="flex justify-center gap-8 mt-3 text-[15px]">
            <a className="flex items-center gap-2 hover:text-sky-300" href="https://x.com" target="_blank"><BsTwitterX size={15}/>X</a>
            <a className="flex items-center gap-2 hover:text-sky-300" href="https://youtube.com" target="_blank"><FiYoutube size={16}/>YouTube</a>
          </div>

          {/* ADDRESS + COPYRIGHT */}
          <div className="border-t border-white/10 mt-10 pt-8 text-center text-xs text-gray-400 space-y-2">
            <div className="text-gray-300 font-semibold text-sm">Saubh.Tech</div>
            <div>GSTIN: 07AAECS1234F1Z5</div>
            <div>Support- saubhtech@gmail.com</div>
            <div className="pt-1">© {year} Saubh.Tech — All Rights Reserved.</div>
          </div>

        </div>
      </section>
    </footer>
  );
}
