"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const USER_NOTES = [
  {
    quote:
      "Setup took less than 10 minutes. I finally stopped logging expenses manually every night.",
    profile: "Working professional",
  },
  {
    quote:
      "The review step before import is exactly what I needed. I stay in control and still save time.",
    profile: "Privacy-conscious user",
  },
  {
    quote:
      "My reminders and subscriptions are now in one place, so no more last-minute payment surprises.",
    profile: "Freelancer",
  },
];

const WEEK_FLOW = [
  { day: "Day 1", note: "Connect banks and set starting balances." },
  {
    day: "Day 2",
    note: "Review first SMS sync and clean transaction history.",
  },
  {
    day: "Day 4",
    note: "Set reminder rules for recurring bills and subscriptions.",
  },
  { day: "Day 7", note: "Check analytics trends and update budget decisions." },
];

export function UserOutcomes() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)]/18 via-transparent to-[var(--primary)]/7" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          title="Better flow, less friction."
          subtitle="Real outcomes after setup."
          description="Built to reduce mental load, not add another dashboard you forget."
        />

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {USER_NOTES.map((item, index) => (
              <motion.article
                key={item.profile}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--bg-main)]/72 p-5 backdrop-blur-xl"
              >
                <Quote className="mb-3 h-5 w-5 text-[var(--primary)]" />
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {item.quote}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {item.profile}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.article
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--bg-main)]/78 p-6 shadow-[0_20px_50px_-32px_rgba(0,0,0,0.65)] backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--text-muted)]">
              Week-One Snapshot
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
              From setup to weekly insight.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              A realistic first-week flow used by new users to get value without
              changing their routine.
            </p>

            <div className="mt-6 space-y-3">
              {WEEK_FLOW.map((step) => (
                <div
                  key={step.day}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/70 p-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--primary)]">
                    {step.day}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {step.note}
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
