"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2, PlayCircle } from "lucide-react";
import { LivePhoneMockup } from "@/components/LivePhoneMockup";
import { APP_DOWNLOAD_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-x-visible bg-grid-pattern px-4 pb-8 pt-24 md:min-h-[108vh] md:pt-24">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.08] blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.08] blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-24">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-semibold rounded-full bg-[var(--bg-surface-alt)] border border-[var(--border)] text-[var(--text-secondary)] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]"></span>
            </span>
            v1.0 Available Now
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-7xl lg:text-8xl">
            Finance <br />
            <span className="text-gradient-premium">
              Automated.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:text-xl lg:mx-0">
            The privacy-first expense tracker that parses your SMS notifications
            to automate your financial life. Zero manual entry. 100% Secure.
          </p>

          <div className="mb-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: "spring", stiffness: 360, damping: 28, mass: 0.8 }}
              href={APP_DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-14 w-full min-w-[212px] items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)]/70 bg-white/[0.06] px-5 text-[var(--text-primary)] shadow-[0_10px_28px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-200 ease-out hover:border-[var(--primary)]/45 hover:bg-white/[0.1] hover:shadow-[0_14px_30px_-22px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-main)] sm:w-auto"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] translate-x-[-140%] transition-transform duration-500 ease-out group-hover:translate-x-[140%]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02)_48%,rgba(255,255,255,0.09))]"
              />
              <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/70 to-transparent opacity-75" />

              <span className="relative z-10 flex w-full items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                    <Download className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:-rotate-3" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-sm font-semibold tracking-[0.01em]">
                      Download App
                    </span>
                    <span className="text-[11px] font-medium text-[var(--text-secondary)]">
                      Play Store
                    </span>
                  </span>
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-[var(--text-primary)]">
                  Free
                </span>
              </span>
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: "spring", stiffness: 360, damping: 28, mass: 0.8 }}
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative flex h-14 w-full min-w-[212px] items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)]/70 bg-white/[0.045] px-5 text-[var(--text-primary)] shadow-[0_10px_28px_-22px_rgba(0,0,0,0.5)] backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-200 ease-out hover:border-[var(--accent)]/45 hover:bg-white/[0.085] hover:shadow-[0_14px_30px_-24px_var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-main)] sm:w-auto"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.16),transparent)] translate-x-[-130%] transition-transform duration-500 ease-out group-hover:translate-x-[130%]" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.015)_48%,rgba(255,255,255,0.08))]"
              />
              <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/65 to-transparent opacity-70" />

              <span className="relative z-10 flex w-full items-center justify-between gap-4">
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-sm font-semibold tracking-wide">
                    Watch Demo
                  </span>
                  <span className="text-[11px] font-medium text-[var(--text-secondary)]">
                    2 min walkthrough
                  </span>
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 transition-colors duration-200 group-hover:bg-white/14">
                  <PlayCircle className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105" />
                </span>
              </span>
            </motion.button>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-sm font-medium text-[var(--text-muted)] sm:flex-row sm:gap-8 lg:justify-start">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
              <span>No Data Collection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
              <span>On-Device Parsing</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Dynamic Visuals */}
        <div className="relative flex overflow-visible justify-center lg:justify-end">
          {/* The Floating Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative z-20"
          >
            <div className="relative z-30 h-[588px] w-[288px] sm:h-[661px] sm:w-[324px] md:h-[735px] md:w-[360px]">
              <div className="origin-top-left scale-[0.8] sm:scale-[0.9] md:scale-100">
                <LivePhoneMockup />
              </div>
            </div>

            {/* Floating Elements around phone */}
            {/* <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pointer-events-none absolute md:-right-12 lg:-right-40 top-8 z-20 hidden md:block md:w-[240px] lg:w-[290px] rotate-[-1deg]"
            >
              <div className="rounded-[1.2rem] border border-[var(--border)] bg-[var(--bg-main)] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.2)]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/15">
                      <Bell className="h-3.5 w-3.5 text-[var(--primary)]" />
                    </span>
                    SMS Alert
                  </span>
                  <span className="text-[10px] font-medium text-[var(--text-muted)]">
                    2m ago
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
                  A/c XX89 debited by INR 450.00 at Starbucks.
                </p>
                <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-2">
                  <p className="text-[9px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Amount
                  </p>
                  <p className="text-lg font-bold leading-none tracking-tight text-[var(--text-primary)]">
                    INR 450.00
                  </p>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <p className="text-[10px] text-[var(--text-muted)]">
                    Merchant: Starbucks
                  </p>
                  <p className="text-[9px] font-semibold text-[var(--primary)]">
                    Auto-tagged
                  </p>
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="pointer-events-none absolute md:-left-10 lg:-left-24 bottom-28 z-20 hidden md:flex items-center gap-3"
            >
              <div className="bg-[var(--bg-surface)] border border-[var(--border)] p-3 pr-5 rounded-2xl shadow-[0_10px_26px_rgba(0,0,0,0.16)] flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[var(--bg-main)] rounded-full p-0.5">
                    <div className="w-3 h-3 rounded-full bg-[var(--success)] animate-pulse" />
                  </div>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-[var(--primary)] uppercase tracking-wider mb-0.5">
                    Smart Category
                  </p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">
                    Food & Dining
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent z-10 pointer-events-none lg:hidden" />
        </div>
      </div>
    </section>
  );
}
