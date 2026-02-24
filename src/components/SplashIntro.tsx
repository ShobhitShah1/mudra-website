"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SPLASH_HOLD_MS = 900;
const SPLASH_HOLD_REDUCED_MS = 250;

export function SplashIntro({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const holdMs = prefersReducedMotion ? SPLASH_HOLD_REDUCED_MS : SPLASH_HOLD_MS;
    const timer = window.setTimeout(() => setShowSplash(false), holdMs);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <>
      {children}

      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.12 : 0.22, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: prefersReducedMotion ? 0.14 : 0.3, ease: "easeOut" }}
            >
              <Image
                src="/icons/splash-logo.png"
                alt="EverySpend logo"
                width={180}
                height={180}
                priority
                className="h-[180px] w-[180px] object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
