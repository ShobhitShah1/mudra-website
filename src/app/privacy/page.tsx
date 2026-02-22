import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Database,
  EyeOff,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/site";

type PrivacySection = {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

const TRUST_PILLARS = [
  { label: "No Cloud", value: "0 servers involved in transaction parsing" },
  { label: "Local Only", value: "Data is processed and stored on your phone" },
  { label: "No Tracking", value: "No ads, no third-party behavior analytics" },
];

const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "collection",
    title: "What We Collect",
    description: "Only the data you provide or choose to import is used.",
    details: [
      "Bank accounts, balances, expenses, and reminders you add inside the app",
      "Optional imported SMS transactions that you explicitly approve",
      "Preference settings such as themes and onboarding state",
    ],
    icon: Database,
  },
  {
    id: "storage",
    title: "Where Data Lives",
    description: "HoldMint follows a local-first storage model.",
    details: [
      "Transaction parsing runs on-device",
      "Data is stored locally using app-private storage",
      "No cloud account is required to use core features",
    ],
    icon: LockKeyhole,
  },
  {
    id: "sms",
    title: "SMS Permission",
    description: "SMS access is optional and focused on transaction detection.",
    details: [
      "SMS content is parsed locally for financial entries only",
      "You review and confirm detected records before import",
      "Messages are not uploaded or sold",
    ],
    icon: MessageSquareText,
  },
  {
    id: "tracking",
    title: "Tracking and Sharing",
    description: "Your activity is not monetized.",
    details: [
      "No ad network profiling",
      "No selling of personal data",
      "No hidden behavior tracking layer",
    ],
    icon: EyeOff,
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | HoldMint",
  description:
    "HoldMint privacy policy: local-first processing, optional SMS access, and no tracking.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
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
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--success)]" />
              Privacy Policy
            </div>

            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
              Your data stays yours.
              <span className="block text-[var(--text-secondary)] opacity-60">
                Private by design.
              </span>
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              HoldMint is built as a local-first expense tracker. We process your
              records on your device and keep permission access explicit,
              minimal, and transparent.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {TRUST_PILLARS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-main)]/55 px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </header>

          <section className="mt-10 grid gap-4 md:grid-cols-2">
            {PRIVACY_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.id}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/45 p-6 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl"
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
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {section.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]/70" />
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                          {detail}
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
              Contact and Updates
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
              If you have questions about how HoldMint handles your data, contact
              us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . We publish policy updates directly in the app and on this page.
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
