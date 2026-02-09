"use client";

import { motion } from "framer-motion";
import { Check, ShieldAlert, ShieldCheck, Sparkles } from "lucide-react";

const OBJECTIONS = [
  {
    concern: "I do not want to grant SMS access.",
    response:
      "You can still use Mudra manually. SMS sync is optional and can be enabled later.",
    icon: ShieldAlert,
  },
  {
    concern: "What if auto parsing gets something wrong?",
    response:
      "Every sync goes through a review screen so you approve what gets imported.",
    icon: Check,
  },
  {
    concern: "Will my data be uploaded somewhere?",
    response:
      "Core tracking is local-first, with explicit privacy controls and no required cloud account.",
    icon: ShieldCheck,
  },
];

export function ObjectionHandling() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/6 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 w-full text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-main)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--primary)]" />
            Still Deciding?
          </span>
          <h2 className="mx-auto mb-4 max-w-5xl text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
            Common concerns.
            <span className="block text-[var(--text-secondary)] opacity-60">
              Clear answers.
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            Designed for control-first users who do not want black-box finance tools.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {OBJECTIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.concern}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--bg-main)]/72 p-5 backdrop-blur-xl"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]">
                  <Icon className="h-4.5 w-4.5 text-[var(--primary)]" />
                </div>
                <p className="text-sm font-semibold leading-relaxed text-[var(--text-primary)]">
                  {item.concern}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.response}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
