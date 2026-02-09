"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "1. Receive SMS",
    desc: "You get a transaction alert from your bank like 'Acct XX89 debited for Rs 350'.",
    color: "var(--primary)",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "2. Instant Parse",
    desc: "Mudra's local engine wakes up, extracts the amount and merchant in <10ms.",
    color: "var(--accent)",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "3. Secure & Done",
    desc: "The transaction is categorized and stored in your encrypted local database.",
    color: "var(--success)",
  },
];

export function Showcase() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-28 py-24 px-4 overflow-hidden relative bg-[var(--bg-surface-alt)]/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          className="w-full mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-4 block">
            How it Works
          </span>
          <h2 className="mx-auto max-w-5xl text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)] mb-6 tracking-tight">
            Magic in your message inbox.
            <br />
            <span className="text-[var(--text-secondary)] opacity-60">
              No manual entry needed.
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg text-[var(--text-muted)] leading-relaxed">
            No manual entry. No bank login required. Mudra listens to your SMS
            notifications and does the heavy lifting instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[var(--border)] via-[var(--primary)] to-[var(--border)] opacity-30 z-0" />

          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-[var(--bg-main)] border-4 border-[var(--bg-surface)] shadow-xl flex items-center justify-center mb-6 relative group">
                <div
                  className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: item.color, filter: "blur(10px)" }}
                />
                <div
                  className="text-[var(--text-primary)] relative z-10"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm px-6 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
