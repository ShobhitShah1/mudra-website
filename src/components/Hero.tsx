"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2, PlayCircle } from "lucide-react";
import { LivePhoneMockup } from "@/components/LivePhoneMockup";
import { APP_DOWNLOAD_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-hidden px-4 pb-8 pt-24 md:min-h-[108vh] md:pt-24">
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--text-secondary)]">
              Automated.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:text-xl lg:mx-0">
            The privacy-first expense tracker that parses your SMS notifications
            to automate your financial life. Zero manual entry. 100% Secure.
          </p>

          <div className="mb-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={APP_DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--text-primary)] px-8 text-[var(--bg-main)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-[var(--bg-main)] sm:w-auto"
            >
              <Download className="w-6 h-6 transition-transform duration-300" />
              <div className="flex flex-col items-start leading-none ml-1 mt-1.5">
                <span className="text-[10px] opacity-80 uppercase font-bold tracking-wider">
                  Get it on
                </span>
                <span className="text-lg font-bold">Google Play</span>
              </div>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/40 px-8 text-[var(--text-primary)] backdrop-blur-md transition-all duration-300 hover:border-[var(--primary)]/50 hover:bg-[var(--bg-surface)] hover:shadow-lg hover:shadow-[var(--primary)]/10 sm:w-auto"
            >
              <span className="text-base font-medium sm:text-lg">See How It Works</span>
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform fill-[var(--text-primary)]/10" />
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
        <div className="relative flex justify-center lg:justify-end">
          {/* The Floating Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative z-20"
          >
            <div className="relative h-[588px] w-[288px] sm:h-[661px] sm:w-[324px] md:h-[735px] md:w-[360px]">
              <div className="origin-top-left scale-[0.8] sm:scale-[0.9] md:scale-100">
                <LivePhoneMockup />
              </div>
            </div>

            {/* Floating Elements around phone */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -right-36 top-12 z-0 hidden md:flex items-start gap-3"
            >
              <div className="bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[var(--border)] p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[170px]">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">
                      ✉️
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
                      SMS
                    </span>
                  </div>
                  <span className="text-[9px] text-[var(--text-muted)]">
                    Now
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    A/c XX89 debited for
                  </p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">
                    ₹ 350.00
                  </p>
                  <p className="text-[10px] text-[var(--text-muted)] truncate">
                    at Starbucks...
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -left-32 bottom-32 z-0 hidden md:flex items-center gap-3"
            >
              <div className="bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[var(--border)] p-3 pr-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3">
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
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent z-10 pointer-events-none lg:hidden" />
        </div>
      </div>
    </section>
  );
}
