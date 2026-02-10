"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useSyncExternalStore,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Home,
  Wallet,
  BarChart2,
  Settings,
  Plus,
  Minus,
  Scan,
  Search,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export type LivePhoneMockupHandle = {
  applyTransaction: (transaction: {
    amount: number;
    type: "expense" | "income";
  }) => void;
};

export const LivePhoneMockup = forwardRef<LivePhoneMockupHandle>(
  function LivePhoneMockup(_props, ref) {
  const [balance, setBalance] = useState(504151.06);
  const [expense, setExpense] = useState(1590);
  const [transactions, setTransactions] = useState(6);

  // Handlers for "Real" interaction
  const handleAdd = () => {
    const amount = Math.floor(Math.random() * 5000) + 100;
    setBalance((prev) => prev + amount);
    setTransactions((prev) => prev + 1);
  };

  const handleSubtract = () => {
    const amount = Math.floor(Math.random() * 2000) + 50;
    setBalance((prev) => prev - amount);
    setExpense((prev) => prev + amount);
    setTransactions((prev) => prev + 1);
  };

  useImperativeHandle(ref, () => ({
    applyTransaction: ({ amount, type }) => {
      const safeAmount = Math.max(0, amount);
      if (safeAmount === 0) return;

      if (type === "income") {
        setBalance((prev) => prev + safeAmount);
      } else {
        setBalance((prev) => prev - safeAmount);
        setExpense((prev) => prev + safeAmount);
      }
      setTransactions((prev) => prev + 1);
    },
  }));

  const daySnapshot = useSyncExternalStore(
    () => () => {},
    () => {
      const now = new Date();
      return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    },
    () => "2026-0-1",
  );

  const dateInfo = useMemo(() => {
    const [yearRaw, monthRaw, dayRaw] = daySnapshot.split("-").map(Number);
    const hasValidParts = [yearRaw, monthRaw, dayRaw].every((value) =>
      Number.isFinite(value),
    );
    const resolved = hasValidParts
      ? new Date(yearRaw, monthRaw, dayRaw)
      : new Date(2026, 0, 1);

    const daysInMonth = new Date(
      resolved.getFullYear(),
      resolved.getMonth() + 1,
      0,
    ).getDate();

    return {
      day: resolved.getDate(),
      month: resolved.toLocaleString("default", { month: "long" }),
      year: resolved.getFullYear(),
      dateString: resolved.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      }),
      daysInMonth,
    };
  }, [daySnapshot]);

  const calendarData = useMemo(
    () =>
      Array.from({ length: dateInfo.daysInMonth }, (_, index) => {
        const signal = (index * 17 + 13) % 10;
        if (signal < 4) return null;
        const amount = ((signal + (index % 3) + 3) * 0.4).toFixed(1);
        return `${amount}k`;
      }),
    [dateInfo.daysInMonth],
  );

  return (
    <div className="relative mx-auto border-[8px] border-[var(--level1)] rounded-[3rem] overflow-hidden shadow-2xl bg-[var(--bg-main)] w-[360px] h-[735px] z-10 select-none flex flex-col">
      {/* 1. Status Bar & Header */}
      <div className="pt-6 px-6 flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold text-[var(--text-primary)]">
            Good evening
          </h2>
          <p className="text-[var(--text-muted)] text-[10px]">
            {dateInfo.dateString}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[var(--text-muted)] text-[10px]">TODAY</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--danger)] font-bold text-xs">
            <AnimatedCounter value={expense} prefix="-₹ " />
            <button className="w-5 h-5 rounded-md bg-[var(--bg-surface)] flex items-center justify-center border border-[var(--border)] text-[var(--text-primary)]">
              <Search className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Balance Area */}
      <div className="mt-4 pt-1 px-4 text-center">
        <div className="flex items-baseline justify-center text-[var(--text-primary)] font-bold tracking-tight overflow-hidden">
          <div className="whitespace-nowrap text-3xl sm:text-4xl">
            <AnimatedCounter value={balance} prefix="₹ " />
          </div>
        </div>
        <p className="text-[var(--text-muted)] text-[10px] mt-1 uppercase tracking-widest">
          You&apos;re doing fine
        </p>
      </div>

      {/* 3. Calendar / Activity Grid Mockup */}
      <div className="mt-8 px-6 flex-1">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[var(--text-primary)] text-xs font-bold uppercase tracking-wider">
            {dateInfo.month} {dateInfo.year}
          </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[var(--level2)]"></div>
            <div className="w-2 h-2 rounded-full bg-[var(--level3)]"></div>
            <div className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1.5 text-center text-xs text-[var(--text-muted)]">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={`${d}-${i}`} className="mb-1">
              {d}
            </div>
          ))}

          {/* Days Mockup */}
          {Array.from({ length: dateInfo.daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isSelected = day === dateInfo.day;
            const data = calendarData[i];
            const isActive = !!data;

            return (
              <div
                key={i}
                className={`h-9 rounded-lg flex flex-col items-center justify-center border transition-colors ${isSelected ? "border-[var(--text-primary)]" : "border-transparent"} ${isActive && !isSelected ? "bg-[var(--bg-surface)]" : ""}`}
              >
                <span
                  className={
                    isSelected ? "text-[var(--text-primary)] font-bold" : ""
                  }
                >
                  {day}
                </span>
                {data && (
                  <span className="text-[9px] opacity-60 scale-75 block text-[var(--text-secondary)]">
                    {data}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Stats Row */}
      <div className="mb-4 flex justify-between px-8 text-center">
        <div>
          <p className="text-[var(--text-primary)] font-bold text-lg">
            ₹14,490
          </p>
          <p className="text-[var(--text-muted)] text-[10px] mt-1">
            This Month
          </p>
        </div>
        <div>
          <div className="text-[var(--text-primary)] font-bold text-lg flex justify-center">
            <AnimatedCounter value={transactions} />
          </div>
          <p className="text-[var(--text-muted)] text-[10px] mt-1">
            Transactions
          </p>
        </div>
        <div>
          <p className="text-[var(--text-primary)] font-bold text-lg">₹1,610</p>
          <p className="text-[var(--text-muted)] text-[10px] mt-1">Daily Avg</p>
        </div>
      </div>

      {/* 5. Big Action Buttons */}
      <div className="flex justify-center items-center gap-6 mb-8 px-6">
        {/* Minus Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleSubtract}
          className="w-16 h-16 rounded-full bg-[var(--bg-surface)] border border-[var(--danger)]/30 flex items-center justify-center shadow-lg group hover:border-[var(--danger)] transition-colors"
        >
          <Minus className="w-8 h-8 text-[var(--danger)] group-hover:scale-110 transition-transform" />
        </motion.button>

        {/* Scan Button (Center) */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 rounded-full bg-[var(--text-primary)] flex items-center justify-center shadow-[0_0_30px_var(--primary-dim)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20" />
          <div className="absolute inset-0 rounded-full border-2 border-[var(--bg-main)] opacity-20 animate-ping" />
          <Scan className="w-8 h-8 text-[var(--bg-main)] stroke-[3] group-hover:scale-110 transition-transform" />
        </motion.button>

        {/* Plus Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleAdd}
          className="w-16 h-16 rounded-full bg-[var(--bg-surface)] border border-[var(--success)]/30 flex items-center justify-center shadow-lg group hover:border-[var(--success)] transition-colors"
        >
          <Plus className="w-8 h-8 text-[var(--success)] group-hover:scale-110 transition-transform" />
        </motion.button>
      </div>

      {/* 6. Footer Nav */}
      {/* 6. Footer Nav */}
      <div className="pb-5 pt-3 px-6 flex justify-between items-center text-[var(--text-muted)] border-t border-[var(--border)]/30 bg-[var(--bg-surface)]/30 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-1 text-[var(--text-primary)]">
          <Home className="w-5 h-5 stroke-[2]" />
          <span className="text-[9px] font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer">
          <Wallet className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[9px]">Accounts</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer">
          <BarChart2 className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[9px]">Analytics</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer">
          <Bell className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[9px]">Reminders</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer">
          <Settings className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[9px]">Settings</span>
        </div>
      </div>

      {/* Background Ambience inside phone */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[var(--primary)]/5 to-transparent pointer-events-none" />
    </div>
  );
});
