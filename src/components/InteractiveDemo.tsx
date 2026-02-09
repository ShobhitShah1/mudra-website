"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Smartphone,
  CreditCard,
  ShoppingBag,
  Coffee,
  Car,
  Film,
  Zap,
  Check,
} from "lucide-react";

const SAMPLE_MESSAGES = [
  "Paid Rs 450 at Starbucks for Coffee",
  "Debited Rs 1200 for Uber Ride",
  "Spent Rs 3500 on Groceries at Blinkit",
  "Acct XX89 debited for Rs 899 at Netflix",
];

export function InteractiveDemo() {
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{
    amount: string;
    merchant: string;
    category: string;
    icon: any;
  } | null>(null);

  const processMessage = (text: string) => {
    setIsProcessing(true);
    setResult(null);

    // Simulate AI processing delay
    setTimeout(() => {
      const amountMatch = text.match(/Rs\s+(\d+)/i) || text.match(/(\d+)/);
      const amount = amountMatch ? amountMatch[1] : "0";

      let merchant = "Unknown";
      let category = "General";
      let Icon = CreditCard;

      const lower = text.toLowerCase();
      if (lower.includes("starbucks") || lower.includes("coffee")) {
        merchant = "Starbucks";
        category = "Food & Drink";
        Icon = Coffee;
      } else if (
        lower.includes("uber") ||
        lower.includes("ola") ||
        lower.includes("ride")
      ) {
        merchant = "Uber";
        category = "Transport";
        Icon = Car;
      } else if (
        lower.includes("blinkit") ||
        lower.includes("groceries") ||
        lower.includes("basket")
      ) {
        merchant = "Blinkit";
        category = "Groceries";
        Icon = ShoppingBag;
      } else if (lower.includes("netflix") || lower.includes("movie")) {
        merchant = "Netflix";
        category = "Entertainment";
        Icon = Film;
      }

      setResult({ amount, merchant, category, icon: Icon });
      setIsProcessing(false);
    }, 600);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    processMessage(input);
  };

  return (
    <section className="py-32 px-4 bg-[var(--bg-surface-alt)]/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Input Area */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wider">
                Live Demo
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              See the magic <br />
              <span className="text-[var(--primary)]">in real-time.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 leading-relaxed max-w-md">
              Mudra's local AI instantly turns messy SMS alerts into structured,
              actionable financial data. Try it yourself.
            </p>

            <div className="space-y-6">
              {/* Chat Bubble Input */}
              <div className="bg-[var(--bg-main)] border border-[var(--border)] rounded-2xl p-4 shadow-xl relative overflow-hidden group focus-within:border-[var(--primary)] focus-within:ring-1 focus-within:ring-[var(--primary)] transition-all">
                <label className="text-xs text-[var(--text-muted)] font-medium mb-2 block uppercase tracking-wider">
                  Simulate SMS
                </label>
                <div className="flex gap-4">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. Paid Rs 450 at Starbucks..."
                    className="w-full bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 resize-none outline-none h-12 py-1 font-mono text-sm"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isProcessing}
                    className="bg-[var(--primary)] text-[var(--bg-main)] rounded-xl w-12 h-12 flex items-center justify-center hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Send
                      className={`w-5 h-5 ${isProcessing ? "animate-pulse" : ""}`}
                    />
                  </button>
                </div>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap gap-2">
                {SAMPLE_MESSAGES.map((msg, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInput(msg);
                      processMessage(msg);
                    }}
                    className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] text-xs hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                  >
                    {msg.split(" at ")[1] || msg.split(" for ")[1] || "Sample"}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Visualizer */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative min-h-[400px]">
          {/* Phone Outline */}
          <div className="relative w-[320px] h-[400px] bg-[var(--bg-main)] rounded-[3rem] border-8 border-[var(--level1)] shadow-2xl p-6 flex flex-col items-center justify-center overflow-hidden">
            {/* Dynamic Content */}
            <AnimatePresence mode="wait">
              {!result && !isProcessing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-[var(--bg-surface)] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Smartphone className="w-8 h-8 text-[var(--text-muted)]" />
                  </div>
                  <p className="text-[var(--text-muted)] text-sm">
                    Waiting for SMS...
                  </p>
                </motion.div>
              )}

              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[var(--bg-main)]/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center"
                >
                  <div className="w-12 h-12 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin mb-3" />
                  <p className="text-[var(--primary)] font-bold text-xs tracking-[0.2em] animate-pulse">
                    PARSING
                  </p>
                </motion.div>
              )}

              {result && !isProcessing && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-full"
                >
                  <div className="w-full bg-[var(--bg-surface)] rounded-[2.5rem] p-8 border border-[var(--border)] shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--bg-main)] flex items-center justify-center border border-[var(--border)] shadow-sm">
                        <result.icon className="w-7 h-7 text-[var(--primary)]" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--success)]/10 border border-[var(--success)]/20">
                        <Check className="w-3.5 h-3.5 text-[var(--success)]" />
                        <span className="text-[var(--success)] text-[10px] font-bold uppercase tracking-wider">
                          Recorded
                        </span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-widest font-medium mb-2">
                        Total Spent
                      </p>
                      <p className="text-5xl font-bold text-[var(--text-primary)] tracking-tighter">
                        ₹{result.amount}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[var(--bg-main)]/60 border border-[var(--border)]/50">
                      <div>
                        <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider mb-1">
                          Merchant
                        </p>
                        <p className="text-[var(--text-primary)] font-semibold text-sm truncate">
                          {result.merchant}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider mb-1">
                          Category
                        </p>
                        <p className="text-[var(--text-primary)] font-semibold text-sm truncate flex justify-end items-center gap-2">
                          {result.category}
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                        </p>
                      </div>
                    </div>

                    <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 flex items-center justify-center gap-2 text-[var(--text-muted)] text-[10px] font-medium uppercase tracking-widest opacity-60"
                  >
                    <Zap className="w-3 h-3 text-[var(--warning)] fill-[var(--warning)]" />
                    <span>Processed on-device</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Decoration */}
          <div className="absolute -z-10 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[100px] animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}
