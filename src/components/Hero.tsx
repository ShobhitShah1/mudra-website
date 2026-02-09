"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, CheckCircle2, PlayCircle } from "lucide-react";
import { LivePhoneMockup } from "@/components/LivePhoneMockup";

export function Hero() {
  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-start pt-20 md:pt-24 px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.08] blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.08] blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
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

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] mb-6 leading-[1.1]">
            Finance <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--text-secondary)]">
              Automated.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            The privacy-first expense tracker that parses your SMS notifications
            to automate your financial life. Zero manual entry. 100% Secure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group h-14 px-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-main)] flex items-center gap-3 transition-all duration-300 hover:bg-[var(--primary)] hover:text-[var(--bg-main)]"
            >
              <Download className="w-6 h-6 transition-transform duration-300" />
              <div className="flex flex-col items-start leading-none ml-1 mt-1.5">
                <span className="text-[10px] opacity-80 uppercase font-bold tracking-wider">
                  Get it on
                </span>
                <span className="text-lg font-bold">Google Play</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group h-14 px-8 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/40 backdrop-blur-md text-[var(--text-primary)] flex items-center gap-3 transition-all duration-300 hover:bg-[var(--bg-surface)] hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/10"
            >
              <span className="text-lg font-medium">See How It Works</span>
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform fill-[var(--text-primary)]/10" />
            </motion.button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 text-[var(--text-muted)] text-sm font-medium">
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
            <LivePhoneMockup />

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
