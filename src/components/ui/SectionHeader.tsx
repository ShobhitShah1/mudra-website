"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description: React.ReactNode;
  className?: string;
  badge?: React.ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
  badge,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mx-auto mb-16 w-full text-center ${className}`}
    >
      {badge && <div className="mb-4">{badge}</div>}
      <h2 className="mx-auto mb-4 max-w-5xl text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
        {title}
        {subtitle && (
          <span className="block text-[var(--text-secondary)] opacity-60">
            {subtitle}
          </span>
        )}
      </h2>
      <p className="mx-auto max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
