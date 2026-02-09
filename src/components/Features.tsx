"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Smartphone,
  Zap,
  BarChart3,
  Palette,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-[var(--primary)]" />,
    title: "Instant Automation",
    description:
      "Parses bank SMS alerts locally to track expenses instantly without manual entry.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[var(--success)]" />,
    title: "Privacy First",
    description:
      "Zero data leaves your phone. Everything is processed and stored locally on-device.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[var(--accent)]" />,
    title: "Visual Analytics",
    description:
      "Interactive charts and deep category breakdowns to truly understand spending habits.",
  },
  {
    icon: <Palette className="w-6 h-6 text-[var(--warning)]" />,
    title: "Dynamic Themes",
    description:
      "Switch between Coffee, Neon, Dark, and more to perfectly match your personal vibe.",
  },
  {
    icon: <Lock className="w-6 h-6 text-[var(--danger)]" />,
    title: "Secure Access",
    description:
      "Biometric authentication (FaceID/TouchID) ensures your financial data stays yours.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[var(--text-primary)]" />,
    title: "Offline Ready",
    description:
      "Works perfectly without internet. Your financial data is always available instantly.",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-32">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--text-primary)] tracking-tight">
            Everything you need. <br />
            <span className="text-[var(--text-secondary)] opacity-60">
              Nothing you don&apos;t.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-xl">
            Packed with powerful automated features to help you master your
            finances while staying completely private.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-[2.2rem] border border-[var(--border)]/60 bg-[var(--bg-surface)]/60 p-7 backdrop-blur-lg transition-all duration-300 hover:border-[var(--primary)]/30 hover:bg-[var(--bg-surface)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] sm:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-main)] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--primary)]/30 sm:mb-8 sm:h-16 sm:w-16">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary)] sm:mb-4 sm:text-2xl">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)] sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
