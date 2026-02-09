"use client";

import { motion } from "framer-motion";
import {
  ArchiveRestore,
  BellRing,
  CircleCheckBig,
  Goal,
  ReceiptText,
  Smartphone,
  WalletCards,
} from "lucide-react";

const CAPABILITIES = [
  {
    title: "Bill Scan OCR",
    detail: "Scan receipts and convert totals to entries on-device.",
    icon: ReceiptText,
  },
  {
    title: "Reminders",
    detail: "Bill, EMI, and subscription reminders with notification support.",
    icon: BellRing,
  },
  {
    title: "Goals and Subscriptions",
    detail: "Track recurring costs and savings goals in one view.",
    icon: Goal,
  },
  {
    title: "Backup and Restore",
    detail: "Keep local backups and recover data when needed.",
    icon: ArchiveRestore,
  },
  {
    title: "Home Widgets",
    detail: "Quick balances and activity widgets on supported Android devices.",
    icon: Smartphone,
  },
  {
    title: "Multi-account Tracking",
    detail: "Manage multiple banks with unified analytics and balances.",
    icon: WalletCards,
  },
];

export function AppCapabilities() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--primary)]/7 via-transparent to-[var(--bg-surface)]/25" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 w-full text-center"
        >
          <h2 className="mx-auto mb-4 max-w-5xl text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
            More than SMS parsing.
            <span className="block text-[var(--text-secondary)] opacity-60">
              Built for full money management.
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            These features are already in the app and designed to work together
            without adding clutter.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--bg-main)]/72 p-5 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.65)] backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]">
                    <Icon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
                    <CircleCheckBig className="h-3 w-3 text-[var(--success)]" />
                    In App
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {capability.detail}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
