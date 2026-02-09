"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import {
  LivePhoneMockup,
  LivePhoneMockupHandle,
} from "@/components/LivePhoneMockup";

type DemoScenario = {
  label: string;
  message: string;
};

const SAMPLE_MESSAGES: DemoScenario[] = [
  { label: "Coffee", message: "Paid Rs 450 at Starbucks for Coffee" },
  { label: "Transport", message: "Debited Rs 1200 for Uber Ride" },
  { label: "Groceries", message: "Spent Rs 3500 on Groceries at Blinkit" },
  { label: "Subscription", message: "Acct XX89 debited for Rs 899 at Netflix" },
  { label: "Salary", message: "Salary credited INR 50000 to your account" },
];

type NoticeTone = "neutral" | "success" | "info";
const DEMO_INPUT_STORAGE_KEY = "mudra_demo_sms_input";

export function InteractiveDemo() {
  const phoneRef = useRef<LivePhoneMockupHandle>(null);
  const [input, setInput] = useState(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem(DEMO_INPUT_STORAGE_KEY) ?? "";
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [mockupNotice, setMockupNotice] = useState<{
    text: string;
    tone: NoticeTone;
  } | null>({
    text: "Parser ready on device",
    tone: "info",
  });

  const showNotice = (text: string, tone: NoticeTone = "neutral") => {
    setMockupNotice({ text, tone });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(DEMO_INPUT_STORAGE_KEY, input);
  }, [input]);

  useEffect(() => {
    if (!mockupNotice) return;
    const timer = setTimeout(() => setMockupNotice(null), 2200);
    return () => clearTimeout(timer);
  }, [mockupNotice]);

  const processMessage = (text: string) => {
    setIsProcessing(true);

    setTimeout(() => {
      const amountMatch =
        text.match(/(?:rs\.?|inr)\s*([\d,]+(?:\.\d+)?)/i) ||
        text.match(/([\d,]+(?:\.\d+)?)/);
      const amount = amountMatch ? amountMatch[1].replace(/,/g, "") : "0";
      const parsedAmount = Math.max(0, Number(amount) || 0);

      let merchant = "Unknown";
      let type: "expense" | "income" = "expense";

      const lower = text.toLowerCase();
      if (lower.includes("starbucks") || lower.includes("coffee")) {
        merchant = "Starbucks";
      } else if (
        lower.includes("uber") ||
        lower.includes("ola") ||
        lower.includes("ride")
      ) {
        merchant = "Uber";
      } else if (
        lower.includes("blinkit") ||
        lower.includes("groceries") ||
        lower.includes("basket")
      ) {
        merchant = "Blinkit";
      } else if (lower.includes("netflix") || lower.includes("movie")) {
        merchant = "Netflix";
      }

      if (
        lower.includes("credited") ||
        lower.includes("salary") ||
        lower.includes("refund") ||
        lower.includes("received") ||
        lower.includes("deposit")
      ) {
        type = "income";
      }

      phoneRef.current?.applyTransaction({ amount: parsedAmount, type });

      showNotice(
        `${type === "income" ? "+" : "-"}INR ${parsedAmount.toLocaleString("en-IN")} • ${merchant}`,
        type === "income" ? "success" : "neutral",
      );

      setIsProcessing(false);
    }, 640);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    processMessage(input);
  };

  return (
    <section
      id="demo"
      className="scroll-mt-28 relative overflow-hidden bg-[var(--bg-surface-alt)]/20 px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-main)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--primary)]" />
            Interactive Demo
          </span>
          <h2 className="mx-auto mb-4 max-w-5xl text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
            See Mudra work live.
            <span className="block text-[var(--text-secondary)] opacity-60">
              Inside the real app mockup.
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            Parse a sample SMS and watch the device update with top notifications in real time.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:sticky lg:top-24 lg:h-[740px]"
          >
            <div className="relative h-[588px] w-[288px] sm:h-[661px] sm:w-[324px] md:h-[735px] md:w-[360px]">
              <div className="relative origin-top-left scale-[0.8] sm:scale-[0.9] md:scale-100">
                <LivePhoneMockup ref={phoneRef} />

                <div className="pointer-events-none absolute inset-[8px] z-30 overflow-hidden rounded-[2.55rem]">
                  <AnimatePresence mode="wait">
                    {mockupNotice && (
                      <motion.div
                        key={mockupNotice.text}
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className={`absolute left-4 right-4 top-4 rounded-xl px-3 py-2 backdrop-blur-sm ${
                          mockupNotice.tone === "success"
                            ? "bg-[var(--success)]/20"
                            : mockupNotice.tone === "info"
                              ? "bg-[var(--primary)]/18"
                              : "bg-[var(--bg-main)]/82"
                        }`}
                      >
                        <p className="text-[11px] font-semibold text-[var(--text-primary)]">
                          {mockupNotice.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {isProcessing && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--bg-main)]/42 backdrop-blur-[1px]"
                      >
                        <div className="h-10 w-10 rounded-full border-2 border-[var(--primary)] border-t-transparent animate-spin" />
                        <p className="text-xs font-semibold text-[var(--primary)]">Parsing SMS...</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-main)]/65 p-6 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8"
            >
              <p className="mb-4 text-sm font-semibold text-[var(--text-primary)]">Try a transaction SMS</p>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-4">
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Simulate SMS
                </label>
                <div className="flex flex-col gap-3">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. Paid Rs 450 at Starbucks..."
                    className="h-24 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--bg-main)] px-3 py-2 font-mono text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)]/60 focus:border-[var(--primary)]"
                  />

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isProcessing}
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 text-sm font-semibold text-[var(--bg-main)] transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Send className={`h-4 w-4 ${isProcessing ? "animate-pulse" : ""}`} />
                      Parse SMS
                    </button>
                    <button
                      onClick={() => setInput("")}
                      disabled={isProcessing}
                      className="h-11 rounded-xl border border-[var(--border)] bg-[var(--bg-main)] px-4 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--primary)] hover:text-[var(--text-primary)] disabled:opacity-50"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Quick Samples
                </p>
                <div className="flex flex-wrap gap-2">
                  {SAMPLE_MESSAGES.map((scenario) => (
                    <button
                      key={scenario.label}
                      onClick={() => {
                        setInput(scenario.message);
                        processMessage(scenario.message);
                      }}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--primary)] hover:text-[var(--text-primary)]"
                    >
                      {scenario.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
