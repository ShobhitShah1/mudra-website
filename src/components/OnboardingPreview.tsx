"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Hand,
  Landmark,
  Wallet,
  ScanText,
  CheckCircle2,
} from "lucide-react";

type OnboardingStep = {
  key: string;
  title: string;
  subtitle: string;
  detail: string;
  icon: React.ElementType;
};

const STEPS: OnboardingStep[] = [
  {
    key: "welcome",
    title: "Welcome",
    subtitle: "Set expectations",
    detail: "Mudra explains privacy-first tracking before any sync starts.",
    icon: Hand,
  },
  {
    key: "banks",
    title: "Select Banks",
    subtitle: "Choose accounts",
    detail:
      "Pick the banks you use so imports map to the right accounts.",
    icon: Landmark,
  },
  {
    key: "balance",
    title: "Set Balance",
    subtitle: "Starting point",
    detail:
      "Set initial balances once to keep totals and analytics accurate.",
    icon: Wallet,
  },
  {
    key: "sync",
    title: "Sync SMS",
    subtitle: "Scan and review",
    detail:
      "Mudra scans SMS on-device and lets you confirm each transaction.",
    icon: ScanText,
  },
  {
    key: "complete",
    title: "Complete",
    subtitle: "Ready to track",
    detail: "Dashboard opens with balances, trends, and latest transactions.",
    icon: CheckCircle2,
  },
];

export function OnboardingPreview() {
  const [activeStep, setActiveStep] = useState(0);

  const progress = useMemo(
    () => Math.round(((activeStep + 1) / STEPS.length) * 100),
    [activeStep],
  );

  const step = STEPS[activeStep];
  const StepIcon = step.icon;

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)]/20 via-transparent to-[var(--primary)]/7" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12 text-center"
        >
          <h2 className="mx-auto mb-4 max-w-5xl text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
            Onboarding feels guided.
            <span className="block text-[var(--text-secondary)] opacity-60">
              Setup takes minutes, not hours.
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            This is the real app flow from welcome to first sync, designed to
            get users productive quickly.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-main)]/65 p-6 shadow-[0_20px_55px_-32px_rgba(0,0,0,0.55)] backdrop-blur-lg"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Onboarding Steps
            </p>
            <div className="space-y-2">
              {STEPS.map((item, index) => {
                const Icon = item.icon;
                const active = index === activeStep;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveStep(index)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-all ${
                      active
                        ? "bg-[var(--primary)]/18 ring-1 ring-[var(--primary)]/35"
                        : "bg-[var(--bg-surface)] hover:bg-[var(--bg-surface)]/80"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        active
                          ? "bg-[var(--primary)]/25 text-[var(--primary)]"
                          : "bg-[var(--bg-main)] text-[var(--text-secondary)]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-main)]/72 p-6 shadow-[0_20px_55px_-32px_rgba(0,0,0,0.55)] backdrop-blur-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Step {activeStep + 1} of {STEPS.length}
              </p>
              <p className="text-xs text-[var(--text-muted)]">{progress}% complete</p>
            </div>

            <div className="mb-5 h-2 overflow-hidden rounded-full bg-[var(--bg-surface)]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 130, damping: 20 }}
              />
            </div>

            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-[var(--bg-surface)] p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]/20 text-[var(--primary)]">
                  <StepIcon className="h-4.5 w-4.5" />
                </div>
                <p className="text-base font-semibold text-[var(--text-primary)]">
                  {step.title}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {step.detail}
              </p>

              <div className="mt-5 rounded-xl bg-[var(--bg-main)]/55 p-3">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  Preview Action
                </p>
                <p className="mt-1 text-sm text-[var(--text-primary)]">
                  Continue to <span className="font-semibold">{STEPS[Math.min(activeStep + 1, STEPS.length - 1)].title}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
