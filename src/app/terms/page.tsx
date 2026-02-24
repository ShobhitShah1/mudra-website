import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CircleAlert,
  FileText,
  MessageSquareText,
  Scale,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/site";

type TermsSection = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  icon: LucideIcon;
};

const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "use",
    title: "Use of the App",
    summary: "EverySpend is provided for personal finance tracking and insights.",
    points: [
      "You can use EverySpend to record expenses, review analytics, and manage reminders",
      "You agree to use the app lawfully and not misuse platform permissions",
      "Core features are designed for individual and household finance use",
    ],
    icon: FileText,
  },
  {
    id: "permissions",
    title: "Permissions and Access",
    summary: "Sensitive permissions are optional and purpose-specific.",
    points: [
      "SMS access is optional and used for transaction detection only",
      "Notification permissions are used for reminders you configure",
      "You can revoke permissions any time from device settings",
    ],
    icon: MessageSquareText,
  },
  {
    id: "ownership",
    title: "Data Ownership",
    summary: "You retain control of the data stored in your app.",
    points: [
      "EverySpend stores data locally on-device as part of a local-first architecture",
      "You are responsible for backup and restore decisions",
      "Deleting the app or local data may remove stored records",
    ],
    icon: BadgeCheck,
  },
  {
    id: "disclaimer",
    title: "Financial Disclaimer",
    summary: "EverySpend supports financial tracking but is not financial advice.",
    points: [
      "Auto-parsed transactions should be reviewed by you before relying on them",
      "EverySpend does not provide investment, tax, or legal advice",
      "You remain responsible for financial decisions and compliance obligations",
    ],
    icon: CircleAlert,
  },
  {
    id: "liability",
    title: "Limits of Liability",
    summary: "We aim for reliability but cannot guarantee uninterrupted service.",
    points: [
      "Features may change, improve, or be discontinued over time",
      "We are not liable for losses caused by device issues or third-party outages",
      "Always maintain your own backup practices for critical records",
    ],
    icon: Scale,
  },
];

export const metadata: Metadata = {
  title: "Terms of Service | EverySpend",
  description:
    "EverySpend terms of service: app usage terms, optional permissions, and user responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 right-1/4 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
          <div className="absolute bottom-0 left-8 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:pb-24 lg:pt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/75 px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <header className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-surface)]/55 p-7 backdrop-blur-xl sm:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-main)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]">
              <FileText className="h-3.5 w-3.5 text-[var(--primary)]" />
              Terms of Service
            </div>

            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
              Clear terms.
              <span className="block text-[var(--text-secondary)] opacity-60">
                No legal maze.
              </span>
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              These terms explain how EverySpend can be used, what you can expect
              from the product, and what responsibilities remain with you while
              managing financial records.
            </p>
          </header>

          <section className="mt-10 grid gap-4">
            {TERMS_SECTIONS.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.id}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/45 p-6 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-7"
                >
                  <div className="mb-4 flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-main)]/65">
                      <Icon className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        {section.title}
                      </h2>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        {section.summary}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {section.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]/70" />
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </section>

          <section className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/55 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Contact and Policy Links
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
              For legal or product terms questions, contact{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . For data handling details, review the{" "}
              <Link
                href="/privacy"
                className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Last updated: January 12, 2026
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
