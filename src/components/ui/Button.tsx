"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const variantStyles = {
      primary:
        "bg-[var(--primary)] text-[var(--bg-main)] shadow-lg hover:brightness-110",
      secondary:
        "bg-[var(--bg-surface)] text-[var(--primary)] border border-[var(--border)] hover:bg-[var(--border)]",
      outline:
        "bg-transparent border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-main)]",
      ghost:
        "bg-transparent text-[var(--primary)] hover:bg-[var(--primary-glow)]",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export { Button };
