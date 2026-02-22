"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Link from "next/link";
import { APP_DOWNLOAD_URL } from "@/lib/site";

const LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export function LandingTopNav() {
  const [isElevated, setIsElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsElevated(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3">
      <div
        className={`mx-auto flex h-14 w-full max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all sm:px-5 ${
          isElevated
            ? "border-[var(--border)] bg-[var(--bg-main)]/88 shadow-[0_14px_35px_-28px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="text-sm font-bold tracking-wide text-[var(--text-primary)]">
          HoldMint
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={APP_DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-main)] px-3 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--primary)] sm:px-4"
        >
          <Download className="h-3.5 w-3.5 text-[var(--primary)]" />
          Install
        </a>
      </div>
    </header>
  );
}
