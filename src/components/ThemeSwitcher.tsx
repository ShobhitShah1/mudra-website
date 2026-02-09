"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check } from "lucide-react";
import { THEMES } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none">
      <div className="relative pointer-events-auto">
        {/* Expanded Grid Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
              animate={{ opacity: 1, scale: 1, y: -16, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
              className="absolute bottom-full right-0 mb-4 p-5 rounded-3xl bg-[var(--bg-surface)]/95 backdrop-blur-xl border border-[var(--border)] shadow-2xl w-[340px] md:w-[460px] origin-bottom-right"
            >
              <div className="flex justify-between items-center mb-4 px-1">
                <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  Select Theme
                </span>
                <span className="text-[10px] text-[var(--text-muted)] bg-[var(--bg-main)] px-2 py-0.5 rounded-full border border-[var(--border)]">
                  {Object.keys(THEMES).length} Presets
                </span>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-5 gap-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-hide py-4">
                {Object.entries(THEMES).map(([key, theme], i) => (
                  <motion.button
                    key={key}
                    layoutId={`theme-${key}`}
                    onClick={() => setTheme(key)}
                    className={cn(
                      "relative group flex flex-col items-center gap-2",
                      themeName === key
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100",
                    )}
                  >
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl shadow-sm border transition-all duration-300 relative overflow-hidden flex flex-col",
                        themeName === key
                          ? "border-[var(--primary)] scale-110 shadow-lg ring-2 ring-[var(--primary)] ring-offset-2 ring-offset-[var(--bg-surface)]"
                          : "border-transparent hover:scale-105",
                      )}
                      style={{ background: theme.background }}
                    >
                      {/* Cleaner Preview: Mini UI representation */}
                      <div className="h-1/3 w-full opacity-20 bg-black/5" />
                      <div className="flex-1 p-1.5 flex flex-col justify-end gap-1">
                        <div
                          className="h-1.5 w-3/4 rounded-full opacity-30 bg-current"
                          style={{ color: theme.textSecondary }}
                        />
                        <div className="flex gap-1">
                          <div
                            className="h-3 w-3 rounded-md"
                            style={{ backgroundColor: theme.primary }}
                          />
                          <div
                            className="h-1.5 w-1/2 rounded-full self-center opacity-50 bg-current"
                            style={{ color: theme.text }}
                          />
                        </div>
                      </div>

                      {themeName === key && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                          <div className="bg-white rounded-full p-0.5 shadow-sm">
                            <Check className="w-3 h-3 text-black stroke-[3]" />
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] font-medium text-[var(--text-secondary)] truncate max-w-full capitalize leading-tight">
                      {theme.name || key}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Trigger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[var(--bg-main)] border border-[var(--border)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center relative z-50 group hover:border-[var(--primary)] transition-colors"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[var(--text-primary)]" />
            ) : (
              <Palette className="w-6 h-6 text-[var(--text-primary)]" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
