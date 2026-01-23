"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* ================= Background ================= */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-illustration1.png')",
          backgroundPosition: "center",
        }}
      >
        {/* DARK overlay – premium feel maintained */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060c18]/70 via-[#0a1628]/65 to-background/95" />

        {/* soft mid glow – image khulti hai, light nahi hoti */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_65%)]" />

        {/* corner vignette – depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

        {/* minimal network dots */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="network-grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="1.3"
                  fill="currentColor"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-grid)" />
          </svg>
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-28 w-full text-center">
        {/* ===== Badge ===== */}
        <div className="relative mb-14 flex justify-center">
          {/* dark glow */}
          <div className="absolute -top-6 h-24 w-[420px] rounded-full bg-primary/18 blur-3xl opacity-70" />

          <div
            className="
              relative z-10
              inline-flex items-center gap-3
              px-8 py-3.5 rounded-full
              bg-primary/85 text-primary-foreground
              ring-2 ring-primary/40
              shadow-[0_0_35px_rgba(16,185,129,0.35)]
            "
          >
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-bold tracking-widest uppercase">
              Community-Verified Marketplace
            </span>
          </div>
        </div>

        {/* ===== Heading ===== */}
        <h1 className="font-bold tracking-tight text-foreground mb-8">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Phygital Gig-Work
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mt-2">
            Marketplace
          </span>
        </h1>

        {/* ===== Subtext ===== */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Connect with trusted, verified professionals across India’s fastest-growing
          sectors — blending{" "}
          <span className="text-foreground font-medium">physical trust</span> with{" "}
          <span className="text-foreground font-medium">digital scalability</span>.
        </p>

        {/* ===== CTAs ===== */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground px-10 py-7 text-lg font-bold shadow-xl shadow-primary/35 hover:scale-[1.03] transition"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border border-foreground/25 text-foreground px-10 py-7 text-lg font-semibold backdrop-blur-sm hover:bg-foreground/10"
          >
            Learn More
          </Button>
        </div>

        {/* ===== Trust ===== */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 text-sm text-muted-foreground">
          <span>● Escrow Protected</span>
          <span>● Verified Professionals</span>
          <span>● Pan-India Network</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
