"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { APP_DOWNLOAD_URL } from "@/lib/site";

const SHOW_AFTER_SCROLL_Y = 220;

export function StickyInstallBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-x-3 bottom-3 z-40 md:hidden"
        >
          <a
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-main)]/92 px-4 text-xs font-semibold text-[var(--text-primary)] shadow-[0_18px_35px_-24px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:text-sm"
          >
            <Download className="h-4 w-4 text-[var(--primary)]" />
            Install HoldMint
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
