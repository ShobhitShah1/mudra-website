"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LivePhoneMockup } from "@/components/LivePhoneMockup";
import { Check, Palette } from "lucide-react";

// Simplified theme definitions based on app/src/constants/colors.ts
const THEMES = [
  {
    id: "dark",
    name: "Midnight Pro",
    colors: {
      "--bg-main": "#0A0E14",
      "--bg-surface": "#0D1117",
      "--bg-surface-alt": "#161B22",
      "--primary": "#00D4FF",
      "--primary-dim": "rgba(0, 212, 255, 0.6)",
      "--text-primary": "#FFFFFF",
      "--text-secondary": "#94A3B8",
      "--text-muted": "#64748B",
      "--border": "rgba(255, 255, 255, 0.1)",
      "--success": "#00E676",
      "--danger": "#FF5252",
      "--level1": "#0E4429",
      "--level2": "#006D32",
      "--level3": "#26A641",
    },
    accentColor: "#00D4FF",
  },
  {
    id: "coffee",
    name: "Espresso",
    colors: {
      "--bg-main": "#1C1917",
      "--bg-surface": "#292524",
      "--bg-surface-alt": "#443E38",
      "--primary": "#D6D3D1",
      "--primary-dim": "rgba(214, 211, 209, 0.6)",
      "--text-primary": "#FAFAF9",
      "--text-secondary": "#D6D3D1",
      "--text-muted": "#78716C",
      "--border": "#443E38",
      "--success": "#A7F3D0",
      "--danger": "#FECACA",
      "--level1": "#443E38",
      "--level2": "#78716C",
      "--level3": "#A8A29E",
    },
    accentColor: "#D6D3D1",
  },
  {
    id: "cyberneon",
    name: "Cyberpunk",
    colors: {
      "--bg-main": "#050510",
      "--bg-surface": "#0D0D2B",
      "--bg-surface-alt": "#1A1A54",
      "--primary": "#00FFF2",
      "--primary-dim": "rgba(0, 255, 242, 0.6)",
      "--text-primary": "#F5F5FF",
      "--text-secondary": "#00FFF2",
      "--text-muted": "#9D4EDD",
      "--border": "#1A1A54",
      "--success": "#00FF66",
      "--danger": "#FF0055",
      "--level1": "#1A1A54",
      "--level2": "#2D2D7F",
      "--level3": "#FF00E5",
    },
    accentColor: "#00FFF2",
  },
  {
    id: "sunset",
    name: "Sunset",
    colors: {
      "--bg-main": "#1E0E2E",
      "--bg-surface": "#2A1540",
      "--bg-surface-alt": "#3A1F5E",
      "--primary": "#FF6B9D",
      "--primary-dim": "rgba(255, 107, 157, 0.6)",
      "--text-primary": "#FFF5FF",
      "--text-secondary": "#FFB3D9",
      "--text-muted": "#B88FCE",
      "--border": "#5A2F7E",
      "--success": "#7AFFC7",
      "--danger": "#FF5C8A",
      "--level1": "#3A1F5E",
      "--level2": "#5A2F7E",
      "--level3": "#9D6FCC",
    },
    accentColor: "#FF6B9D",
  },
  {
    id: "neomint",
    name: "Neo Mint",
    colors: {
      "--bg-main": "#0D1B1E",
      "--bg-surface": "#1A2F35",
      "--bg-surface-alt": "#1F3A42",
      "--primary": "#00FFAA",
      "--primary-dim": "rgba(0, 255, 170, 0.6)",
      "--text-primary": "#F0FFFA",
      "--text-secondary": "#A8FFE5",
      "--text-muted": "#5C9AAA",
      "--border": "#2E5A68",
      "--success": "#52FFB8",
      "--danger": "#FF6B9D",
      "--level1": "#2E5A68",
      "--level2": "#3D7A8E",
      "--level3": "#5CDDC3",
    },
    accentColor: "#00FFAA",
  },
  {
    id: "royal",
    name: "Royal Bharat",
    colors: {
      "--bg-main": "#0F172A",
      "--bg-surface": "#1E293B",
      "--bg-surface-alt": "#334155",
      "--primary": "#F59E0B",
      "--primary-dim": "rgba(245, 158, 11, 0.6)",
      "--text-primary": "#F8FAFC",
      "--text-secondary": "#94A3B8",
      "--text-muted": "#64748B",
      "--border": "#334155",
      "--success": "#10B981",
      "--danger": "#EF4444",
      "--level1": "#334155",
      "--level2": "#475569",
      "--level3": "#F59E0B",
    },
    accentColor: "#F59E0B",
  },
];

export function ThemeShowcase() {
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-[var(--bg-main)] md:py-20">
      {/* Background Glow matching active theme */}
      <motion.div
        animate={{ backgroundColor: activeTheme.accentColor }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none transition-colors duration-1000"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text & Controls */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Personalization
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              Your Money. <br />
              <span
                style={{ color: activeTheme.accentColor }}
                className="transition-colors duration-500"
              >
                Your Vibe.
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 leading-relaxed max-w-md">
              HoldMint adapts to your style. Choose from over 15+ professionally
              crafted themes or create your own. Dark mode included.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className={`group relative p-4 rounded-xl border text-left transition-all duration-300 overflow-hidden ${
                    activeTheme.id === theme.id
                      ? "border-[var(--primary)] bg-[var(--bg-surface)] ring-1 ring-[var(--primary)]"
                      : "border-[var(--border)] bg-[var(--bg-surface)]/50 hover:border-[var(--text-secondary)]"
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div
                      className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: theme.colors["--bg-main"],
                        border: `2px solid ${theme.colors["--border"]}`,
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: theme.accentColor }}
                      />
                    </div>
                    <span
                      className={`font-medium transition-colors ${activeTheme.id === theme.id ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"}`}
                    >
                      {theme.name}
                    </span>
                    {activeTheme.id === theme.id && (
                      <motion.div layoutId="check" className="ml-auto">
                        <Check className="w-4 h-4 text-[var(--primary)]" />
                      </motion.div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Phone */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div
            className="relative transition-all duration-700 ease-in-out"
            // Apply the theme variables to this wrapper
            style={activeTheme.colors as React.CSSProperties}
          >
            <div className="scale-[0.85] sm:scale-100 transform-gpu origin-top-center">
              <LivePhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
