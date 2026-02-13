"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, LoaderCircle, Shield, ScanText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

type SyncPhase = "idle" | "syncing" | "review" | "done";

type MockTransaction = {
  id: string;
  bank: string;
  merchant: string;
  amount: number;
  type: "expense" | "income";
  time: string;
  selected: boolean;
};

const BASE_TRANSACTIONS: MockTransaction[] = [
  {
    id: "txn-1",
    bank: "HDFC",
    merchant: "Starbucks",
    amount: 450,
    type: "expense",
    time: "09:14",
    selected: true,
  },
  {
    id: "txn-2",
    bank: "SBI",
    merchant: "Uber",
    amount: 1200,
    type: "expense",
    time: "10:02",
    selected: true,
  },
  {
    id: "txn-3",
    bank: "ICICI",
    merchant: "Blinkit",
    amount: 3500,
    type: "expense",
    time: "12:37",
    selected: true,
  },
  {
    id: "txn-4",
    bank: "HDFC",
    merchant: "Netflix",
    amount: 899,
    type: "expense",
    time: "20:11",
    selected: false,
  },
  {
    id: "txn-5",
    bank: "HDFC",
    merchant: "Salary",
    amount: 50000,
    type: "income",
    time: "22:00",
    selected: true,
  },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const SYNC_SIM_STORAGE_KEY = "mudra_sms_sync_sim_state";

type PersistedSyncState = {
  phase: SyncPhase;
  selectedIds: string[];
};

export function SmsSyncSimulator() {
  const [phase, setPhase] = useState<SyncPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [transactions, setTransactions] =
    useState<MockTransaction[]>(BASE_TRANSACTIONS);
  const [hasRestoredState, setHasRestoredState] = useState(false);

  const selected = useMemo(
    () => transactions.filter((txn) => txn.selected),
    [transactions],
  );

  const discoveredBanks = useMemo(
    () => new Set(transactions.map((txn) => txn.bank)).size,
    [transactions],
  );

  const selectedTotal = useMemo(
    () =>
      selected.reduce(
        (sum, txn) => sum + (txn.type === "expense" ? txn.amount : 0),
        0,
      ),
    [selected],
  );

  useEffect(() => {
    const raw = window.localStorage.getItem(SYNC_SIM_STORAGE_KEY);
    if (!raw) {
      setHasRestoredState(true);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as PersistedSyncState;
      const safePhase: SyncPhase =
        parsed.phase === "review" || parsed.phase === "done"
          ? parsed.phase
          : "idle";
      const selectedIds = new Set(
        Array.isArray(parsed.selectedIds) ? parsed.selectedIds : [],
      );

      setPhase(safePhase);
      setProgress(safePhase === "idle" ? 0 : 100);
      setTransactions(
        BASE_TRANSACTIONS.map((txn) => ({
          ...txn,
          selected: selectedIds.size ? selectedIds.has(txn.id) : txn.selected,
        })),
      );
    } catch {
      window.localStorage.removeItem(SYNC_SIM_STORAGE_KEY);
    } finally {
      setHasRestoredState(true);
    }
  }, []);

  useEffect(() => {
    if (!hasRestoredState) return;
    if (phase === "syncing") return;

    const state: PersistedSyncState = {
      phase,
      selectedIds: transactions
        .filter((txn) => txn.selected)
        .map((txn) => txn.id),
    };
    window.localStorage.setItem(SYNC_SIM_STORAGE_KEY, JSON.stringify(state));
  }, [phase, transactions, hasRestoredState]);

  const startScan = async () => {
    setPhase("syncing");
    setProgress(0);

    for (const checkpoint of [18, 39, 62, 81, 100]) {
      await wait(240);
      setProgress(checkpoint);
    }

    setPhase("review");
  };

  const toggleTxn = (id: string) => {
    if (phase !== "review") return;
    setTransactions((prev) =>
      prev.map((txn) =>
        txn.id === id ? { ...txn, selected: !txn.selected } : txn,
      ),
    );
  };

  const importSelected = () => {
    if (!selected.length) return;
    setPhase("done");
  };

  const reset = () => {
    setPhase("idle");
    setProgress(0);
    setTransactions(BASE_TRANSACTIONS);
  };

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--primary)]/6 via-transparent to-[var(--accent)]/6" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-main)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
              <ScanText className="h-3.5 w-3.5 text-[var(--primary)]" />
              SMS Sync Simulator
            </span>
          }
          title="Scan, review, and import."
          subtitle="Just like in the app."
          description="Simulates the real SMS sync flow: scan transactions, choose entries, and import only what you approve."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-main)]/65 p-6 shadow-[0_20px_55px_-32px_rgba(0,0,0,0.55)] backdrop-blur-lg"
          >
            <p className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
              Sync Controls
            </p>

            <div className="mb-4 flex items-center gap-2 text-xs font-medium">
              {(
                [
                  ["idle", "Idle"],
                  ["syncing", "Scanning"],
                  ["review", "Review"],
                  ["done", "Imported"],
                ] as Array<[SyncPhase, string]>
              ).map(([value, label]) => (
                <span
                  key={value}
                  className={`rounded-full px-3 py-1 ${
                    phase === value
                      ? "bg-[var(--primary)]/18 text-[var(--primary)]"
                      : "bg-[var(--bg-surface)] text-[var(--text-muted)]"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="rounded-xl bg-[var(--bg-surface)] p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Scan Progress
              </p>
              <div className="h-2.5 overflow-hidden rounded-full bg-[var(--bg-main)]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 140, damping: 24 }}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
                {phase === "syncing"
                  ? `Scanning messages... ${progress}%`
                  : phase === "review"
                    ? `${transactions.length} transactions found`
                    : phase === "done"
                      ? `${selected.length} transactions imported`
                      : "Ready to scan SMS history"}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[var(--bg-surface)] p-3">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Banks
                </p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                  {discoveredBanks}
                </p>
              </div>
              <div className="rounded-xl bg-[var(--bg-surface)] p-3">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Selected
                </p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                  {selected.length}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {phase === "idle" && (
                <button
                  onClick={startScan}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 text-sm font-semibold text-[var(--bg-main)] transition-opacity hover:opacity-90"
                >
                  <ScanText className="h-4 w-4" />
                  Start Scanning
                </button>
              )}

              {phase === "syncing" && (
                <button
                  disabled
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--bg-surface)] px-4 text-sm font-semibold text-[var(--text-secondary)]"
                >
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Scanning SMS...
                </button>
              )}

              {phase === "review" && (
                <button
                  onClick={importSelected}
                  disabled={!selected.length}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 text-sm font-semibold text-[var(--bg-main)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Import Selected
                </button>
              )}

              {phase === "done" && (
                <button
                  onClick={reset}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--primary)]"
                >
                  Run Again
                </button>
              )}
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
                Confirm Import
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Total Expense: INR {selectedTotal.toLocaleString("en-IN")}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {phase === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-surface)]/80 p-8 text-center"
                >
                  <Shield className="mx-auto mb-3 h-8 w-8 text-[var(--primary)]" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Ready to scan securely
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    100% on-device processing. You always choose what gets
                    added.
                  </p>
                </motion.div>
              )}

              {phase === "syncing" && (
                <motion.div
                  key="syncing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/80 p-8 text-center"
                >
                  <LoaderCircle className="mx-auto mb-3 h-8 w-8 animate-spin text-[var(--primary)]" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Scanning messages
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    Detecting banks, amounts, and merchants from SMS alerts.
                  </p>
                </motion.div>
              )}

              {(phase === "review" || phase === "done") && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="space-y-2"
                >
                  {transactions.map((txn) => (
                    <button
                      key={txn.id}
                      onClick={() => toggleTxn(txn.id)}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                        txn.selected
                          ? "border-[var(--primary)]/45 bg-[var(--primary)]/10"
                          : "border-[var(--border)] bg-[var(--bg-surface)]"
                      } ${phase === "done" ? "pointer-events-none" : ""}`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">
                          {txn.merchant}
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          {txn.bank} • {txn.time}
                        </p>
                      </div>

                      <div className="text-right">
                        <p
                          className={`text-sm font-semibold ${
                            txn.type === "income"
                              ? "text-[var(--success)]"
                              : "text-[var(--text-primary)]"
                          }`}
                        >
                          {txn.type === "income" ? "+" : "-"}INR{" "}
                          {txn.amount.toLocaleString("en-IN")}
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          {txn.selected ? "Selected" : "Skipped"}
                        </p>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
