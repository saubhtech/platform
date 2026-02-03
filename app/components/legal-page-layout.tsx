"use client";

import { motion } from "framer-motion";

export function LegalPageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-5xl px-4 py-20"
    >
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">{title}</h1>
        <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
      </div>

      <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur p-8 md:p-10 space-y-10 shadow-sm">
        {children}
      </div>
    </motion.main>
  );
}
