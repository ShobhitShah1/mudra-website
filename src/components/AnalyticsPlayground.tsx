"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, CalendarRange, Landmark } from "lucide-react";

type Period = "Day" | "Week" | "Month" | "All";
type Bank = "All" | "HDFC" | "SBI" | "ICICI";

type Point = {
  label: string;
  total: number;
  byBank: Record<Exclude<Bank, "All">, number>;
};

const PERIODS: Period[] = ["Day", "Week", "Month", "All"];
const BANKS: Bank[] = ["All", "HDFC", "SBI", "ICICI"];
const ANALYTICS_FILTER_STORAGE_KEY = "mudra_analytics_playground_filters";

const ANALYTICS_POINTS: Record<Period, Point[]> = {
  Day: [
    { label: "06", total: 450, byBank: { HDFC: 220, SBI: 80, ICICI: 150 } },
    { label: "09", total: 1200, byBank: { HDFC: 900, SBI: 200, ICICI: 100 } },
    { label: "12", total: 900, byBank: { HDFC: 300, SBI: 250, ICICI: 350 } },
    { label: "15", total: 2500, byBank: { HDFC: 1600, SBI: 500, ICICI: 400 } },
    { label: "18", total: 1700, byBank: { HDFC: 600, SBI: 700, ICICI: 400 } },
    { label: "21", total: 800, byBank: { HDFC: 250, SBI: 300, ICICI: 250 } },
  ],
  Week: [
    { label: "Mon", total: 4200, byBank: { HDFC: 2100, SBI: 1200, ICICI: 900 } },
    { label: "Tue", total: 3600, byBank: { HDFC: 1700, SBI: 800, ICICI: 1100 } },
    { label: "Wed", total: 5300, byBank: { HDFC: 2600, SBI: 1200, ICICI: 1500 } },
    { label: "Thu", total: 4100, byBank: { HDFC: 1800, SBI: 1400, ICICI: 900 } },
    { label: "Fri", total: 6200, byBank: { HDFC: 3000, SBI: 1400, ICICI: 1800 } },
    { label: "Sat", total: 5100, byBank: { HDFC: 2100, SBI: 1600, ICICI: 1400 } },
    { label: "Sun", total: 2900, byBank: { HDFC: 900, SBI: 1100, ICICI: 900 } },
  ],
  Month: [
    { label: "W1", total: 22400, byBank: { HDFC: 10300, SBI: 6700, ICICI: 5400 } },
    { label: "W2", total: 19700, byBank: { HDFC: 9200, SBI: 5200, ICICI: 5300 } },
    { label: "W3", total: 24100, byBank: { HDFC: 11100, SBI: 6500, ICICI: 6500 } },
    { label: "W4", total: 21600, byBank: { HDFC: 9800, SBI: 6200, ICICI: 5600 } },
  ],
  All: [
    { label: "Jan", total: 82400, byBank: { HDFC: 35100, SBI: 23900, ICICI: 23400 } },
    { label: "Feb", total: 76700, byBank: { HDFC: 32800, SBI: 22400, ICICI: 21500 } },
    { label: "Mar", total: 81200, byBank: { HDFC: 34400, SBI: 23200, ICICI: 23600 } },
    { label: "Apr", total: 88900, byBank: { HDFC: 37600, SBI: 25800, ICICI: 25500 } },
    { label: "May", total: 84600, byBank: { HDFC: 35800, SBI: 24600, ICICI: 24200 } },
    { label: "Jun", total: 90300, byBank: { HDFC: 39000, SBI: 26200, ICICI: 25100 } },
  ],
};

export function AnalyticsPlayground() {
  const [period, setPeriod] = useState<Period>(() => {
    if (typeof window === "undefined") return "Week";
    try {
      const raw = window.localStorage.getItem(ANALYTICS_FILTER_STORAGE_KEY);
      if (!raw) return "Week";
      const parsed = JSON.parse(raw) as { period?: Period };
      return parsed.period && PERIODS.includes(parsed.period)
        ? parsed.period
        : "Week";
    } catch {
      return "Week";
    }
  });
  const [bank, setBank] = useState<Bank>(() => {
    if (typeof window === "undefined") return "All";
    try {
      const raw = window.localStorage.getItem(ANALYTICS_FILTER_STORAGE_KEY);
      if (!raw) return "All";
      const parsed = JSON.parse(raw) as { bank?: Bank };
      return parsed.bank && BANKS.includes(parsed.bank) ? parsed.bank : "All";
    } catch {
      return "All";
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(
      ANALYTICS_FILTER_STORAGE_KEY,
      JSON.stringify({ period, bank }),
    );
  }, [period, bank]);

  const points = useMemo(() => {
    const source = ANALYTICS_POINTS[period];
    return source.map((point) => ({
      ...point,
      value: bank === "All" ? point.total : point.byBank[bank],
    }));
  }, [period, bank]);

  const total = useMemo(
    () => points.reduce((sum, point) => sum + point.value, 0),
    [points],
  );

  const avg = useMemo(
    () => Math.round(total / Math.max(points.length, 1)),
    [total, points.length],
  );

  const peak = useMemo(
    () => points.reduce((max, point) => (point.value > max.value ? point : max), points[0]),
    [points],
  );

  const max = Math.max(...points.map((point) => point.value), 1);

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)]/20 via-transparent to-[var(--primary)]/8" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-main)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
            <BarChart3 className="h-3.5 w-3.5 text-[var(--primary)]" />
            Analytics Playground
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
            Filter by period and bank.
            <span className="block text-[var(--text-secondary)] opacity-60">
              See the trend change live.
            </span>
          </h2>
          <p className="text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            This mirrors the app analytics controls with period selection,
            bank filtering, and instant trend updates.
          </p>
        </motion.div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-main)]/68 p-6 shadow-[0_24px_64px_-35px_rgba(0,0,0,0.55)] backdrop-blur-lg md:p-8">
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                <CalendarRange className="h-3.5 w-3.5" />
                Period
              </p>
              <div className="flex flex-wrap gap-2">
                {PERIODS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setPeriod(option)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                      option === period
                        ? "bg-[var(--primary)] text-[var(--bg-main)]"
                        : "border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                <Landmark className="h-3.5 w-3.5" />
                Bank
              </p>
              <div className="flex flex-wrap gap-2">
                {BANKS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setBank(option)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                      option === bank
                        ? "bg-[var(--primary)] text-[var(--bg-main)]"
                        : "border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-[var(--bg-surface)] p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Total Spend
              </p>
              <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                INR {total.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="rounded-xl bg-[var(--bg-surface)] p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Average
              </p>
              <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                INR {avg.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="rounded-xl bg-[var(--bg-surface)] p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Peak
              </p>
              <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                {peak.label}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--bg-surface)]/75 p-4">
            <div className="flex h-64 items-end gap-3">
              {points.map((point) => (
                <div
                  key={point.label}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <div className="flex h-[210px] w-full items-end rounded-md bg-[var(--bg-main)]/35">
                    <motion.div
                      className="w-full rounded-t-md bg-gradient-to-t from-[var(--primary)] to-[var(--accent)]"
                      initial={{ height: 0, opacity: 0.5 }}
                      animate={{
                        height: Math.max(10, (point.value / max) * 210),
                        opacity: 1,
                      }}
                      transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    />
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
