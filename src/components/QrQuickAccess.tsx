"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QrCode, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { APP_DOWNLOAD_URL } from "@/lib/site";

const AUTO_CLOSE_MS = 5000;

const SURPRISE_NOTES = [
  {
    title: "Quick access unlocked",
    description: "Scan this to open EverySpend download page quickly.",
  },
  {
    title: "Pocket shortcut",
    description: "One scan and you can jump straight to install.",
  },
  {
    title: "Quick scan corner",
    description: "A clean little QR drop for fast app access.",
  },
];

export function QrQuickAccess() {
  const [isOpen, setIsOpen] = useState(false);
  const noteIndex = APP_DOWNLOAD_URL.length % SURPRISE_NOTES.length;

  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => setIsOpen(false), AUTO_CLOSE_MS);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  const qrSrc = useMemo(
    () =>
      `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(APP_DOWNLOAD_URL)}`,
    [],
  );

  const note = SURPRISE_NOTES[noteIndex];

  return (
    <div className="pointer-events-none fixed bottom-24 left-4 z-50 sm:bottom-6 sm:left-6">
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="qr-card"
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.94 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="pointer-events-auto mb-3 w-[min(86vw,245px)] rounded-2xl border border-[var(--border)] bg-[var(--bg-main)]/90 p-3 shadow-[0_20px_45px_-28px_rgba(0,0,0,0.75)] backdrop-blur-xl"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--text-secondary)]">
                <Sparkles className="h-3 w-3 text-[var(--primary)]" />
                Quick Scan
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                aria-label="Close QR card"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-2.5">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-white p-2">
                <Image
                  src={qrSrc}
                  alt="QR code to open EverySpend download page"
                  fill
                  sizes="220px"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">{note.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
              {note.description}
            </p>

            <div className="mt-3 flex items-center gap-2">
              <a
                href={APP_DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 flex-1 items-center justify-center rounded-lg bg-[var(--primary)] px-2 text-xs font-semibold text-[var(--bg-main)] transition-opacity hover:opacity-90"
              >
                Open Link
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        key="qr-pill"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close QR quick access" : "Open QR quick access"}
        className="pointer-events-auto inline-flex h-10 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-main)]/88 px-3 text-xs font-semibold text-[var(--text-primary)] shadow-[0_14px_35px_-24px_rgba(0,0,0,0.65)] backdrop-blur-md transition-colors hover:border-[var(--primary)]/50"
      >
        <QrCode className="h-4 w-4 text-[var(--primary)]" />
        Open QR
      </motion.button>
    </div>
  );
}
