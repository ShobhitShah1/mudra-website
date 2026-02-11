"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/faq";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)]/15 via-transparent to-[var(--primary)]/8" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-main)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
              <HelpCircle className="h-3.5 w-3.5 text-[var(--primary)]" />
              FAQ
            </span>
          }
          title="Everything you need."
          subtitle="Nothing you do not."
          description="Straight answers about privacy, permissions, and how Mudra works."
        />

        <div className="mx-auto max-w-4xl space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-main)]/70 backdrop-blur-xl"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[var(--text-secondary)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[var(--border)] px-5 py-4">
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
          Need more details? Read our{" "}
          <Link
            href="/privacy"
            className="text-[var(--primary)] hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-[var(--primary)] hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
