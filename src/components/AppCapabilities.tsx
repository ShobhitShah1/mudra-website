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
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--primary)]/7 via-transparent to-[var(--bg-surface)]/25" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          title="More than SMS parsing."
          subtitle="Built for full money management."
          description="These features are already in the app and designed to work together without adding clutter."
        />

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
