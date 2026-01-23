"use client";

import Image from "next/image";
import { TrendingUp, Building2, Briefcase, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "6.9x", description: "higher conversion rates from UGC vs traditional ads" },
  { value: "65%", description: "lower customer acquisition costs compared to paid advertising" },
  { value: "82%", description: "more engagement, trust, and conversion through organic leads" },
  { value: "40%", description: "increase in repeat orders due to peer recommendations" },
];

const beneficiaries = [
  {
    icon: Building2,
    title: "For Organisations",
    description:
      "Organisations can build iconic brands, generate organic leads, outsource requirements, and streamline operations to become sector leaders and multiply revenue.",
  },
  {
    icon: Briefcase,
    title: "For Professionals",
    description:
      "Professionals can procure pre-paid demand, bid on assignments, complete work for instant, escrow-protected payments, creating sustainable, multiple sources of income.",
  },
];

export function ProvenResultsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* ================= Background ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/proven-results-bg.png"
          alt="Professionals celebrating growth and success"
          fill
          priority
          className="object-cover object-center"
        />

        {/* primary dark overlay (lighter than before) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/65 to-background/90" />

        {/* soft center light to open image */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)]" />

        {/* subtle vignette for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

        {/* very subtle dots */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="dots" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle
                  cx="50"
                  cy="50"
                  r="1.3"
                  fill="currentColor"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/70 border border-border/50 mb-6 backdrop-blur">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Data-Driven Success
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proven Results
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real metrics that demonstrate the power of community-driven growth
          </p>
        </div>

        {/* ================= Stats ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="
                bg-card/70 backdrop-blur-md
                border border-border/50
                rounded-2xl
                hover:-translate-y-2
                hover:border-primary/60
                hover:shadow-xl hover:shadow-primary/20
                transition-all duration-300
              "
            >
              <CardContent className="p-7 text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {stat.value}
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ================= Beneficiaries ================= */}
        <div className="grid md:grid-cols-2 gap-6">
          {beneficiaries.map((item, index) => (
            <Card
              key={index}
              className="
                bg-card/70 backdrop-blur-md
                border border-border/50
                rounded-2xl
                hover:-translate-y-2
                hover:border-primary/60
                hover:shadow-xl hover:shadow-primary/20
                transition-all duration-300
              "
            >
              <CardContent className="p-8 flex gap-5">
                <div className="p-4 rounded-xl bg-primary/15 border border-primary/25 shadow-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
