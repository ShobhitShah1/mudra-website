"use client";

import { useEffect, useRef } from "react";
import { useSpring, useMotionValue, useTransform, motion } from "framer-motion";

export function AnimatedCounter({
  value,
  prefix = "",
  className,
}: {
  value: number;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 200 });
  const rounded = useTransform(springValue, (latest) => latest.toFixed(2)); // Format to 2 decimals

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        // Format with commas for currency
        const [int, dec] = latest.split(".");
        const formatted = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + dec;
        ref.current.textContent = prefix + formatted;
      }
    });
    return () => unsubscribe();
  }, [rounded, prefix]);

  return (
    <span ref={ref} className={className}>
      {prefix + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
}
