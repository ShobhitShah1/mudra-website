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
import { SectionHeader } from "@/components/ui/SectionHeader";

// Feature data
const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Instant Automation",
    description: "Parses bank SMS alerts locally. No manual entry required.",
    color: "decoration-amber-500",
    hoverBg: "hover:bg-amber-500/5",
    iconColor: "text-amber-500",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Privacy First",
    description:
      "Zero data leaves your phone. Everything is processed locally.",
    color: "decoration-emerald-500",
    hoverBg: "hover:bg-emerald-500/5",
    iconColor: "text-emerald-500",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Visual Analytics",
    description: "Interactive charts and deep category breakdowns.",
    color: "decoration-blue-500",
    hoverBg: "hover:bg-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Dynamic Themes",
    description: "Switch between Coffee, Neon, and Dark to match your vibe.",
    color: "decoration-purple-500",
    hoverBg: "hover:bg-purple-500/5",
    iconColor: "text-purple-500",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Secure Access",
    description: "Biometric authentication (FaceID/TouchID) included.",
    color: "decoration-rose-500",
    hoverBg: "hover:bg-rose-500/5",
    iconColor: "text-rose-500",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Offline Ready",
    description: "Works perfectly without internet. Data is always available.",
    color: "decoration-gray-500",
    hoverBg: "hover:bg-gray-500/5",
    iconColor: "text-gray-500",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-16">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          title="Everything you need."
          subtitle="Nothing you don't."
          description="Powerful features, zero clutter."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`group flex items-start gap-4 p-4 rounded-2xl transition-colors duration-300 ${feature.hoverBg}`}
            >
              <div
                className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold text-[var(--text-primary)] mb-1 decoration-2 underline-offset-4 group-hover:underline ${feature.color}`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
