"use client";

import { motion } from "framer-motion";
import { Banknote, Lock, MessageSquareText, ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    label: "50+ banks",
    detail: "Built for Indian transaction SMS formats.",
    icon: Banknote,
  },
  {
    label: "Local-first",
    detail: "No default cloud dependency for core tracking.",
    icon: ShieldCheck,
  },
  {
    label: "Optional SMS",
    detail: "Works with manual entry if permission is off.",
    icon: MessageSquareText,
  },
  {
    label: "Private by design",
    detail: "Clear permission flow and local data controls.",
    icon: Lock,
  },
];

export function TrustProofStrip() {
  return (
    <section className="px-4 pb-8 pt-2 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/55 p-4 backdrop-blur-lg"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-main)]">
                <Icon className="h-4 w-4 text-[var(--primary)]" />
              </div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{item.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                {item.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
