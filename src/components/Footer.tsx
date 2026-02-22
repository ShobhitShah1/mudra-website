import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]/20 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">HoldMint</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            (c) 2026 HoldMint Inc. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-[var(--text-secondary)]">
          <Link href="/privacy" className="transition-colors hover:text-[var(--primary)]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-[var(--primary)]">
            Terms of Service
          </Link>
          <a
            href="mailto:privacy@holdmint.app"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
