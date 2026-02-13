"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const GOOD_FIT = [
  "You get frequent bank SMS alerts and want less manual entry.",
  "You care about privacy and prefer local-first finance tracking.",
  "You want review control before transactions are imported.",
  "You need one app for expenses, reminders, and weekly insights.",
];

const NOT_A_GOOD_FIT = [
  "You want automatic bank API sync without SMS permissions.",
  "You prefer fully cloud-based finance tools with shared accounts.",
  "You do not want to review or categorize transactions at all.",
  "You only need a simple notes-style expense log.",
];

export function WhoItsFor() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)]/20 via-transparent to-[var(--primary)]/8" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          title="Who Mudra is for."
          subtitle="And who it is not for."
          description="A quick filter so you can decide fast whether Mudra matches how you already manage money."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--bg-main)]/74 p-6 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-secondary)]">
              <CheckCircle2 className="h-4 w-4 text-[var(--success)]" />
              Great Fit
            </div>

            <div className="space-y-3">
              {GOOD_FIT.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]/75 p-3"
                >
                  <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--bg-main)]/74 p-6 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-secondary)]">
              <XCircle className="h-4 w-4 text-[var(--danger)]" />
              Not Ideal
            </div>

            <div className="space-y-3">
              {NOT_A_GOOD_FIT.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]/75 p-3"
                >
                  <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
