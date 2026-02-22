import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquareText } from "lucide-react";
import { ContactFormCard } from "@/components/ContactFormCard";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | HoldMint",
  description: "Contact HoldMint support and send your message quickly.",
};

export default function ContactPage() {
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
              <MessageSquareText className="h-3.5 w-3.5 text-[var(--primary)]" />
              Contact HoldMint
            </div>

            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
              Let&apos;s talk.
              <span className="block text-[var(--text-secondary)] opacity-70">
                We read every message.
              </span>
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              Send your support request, feedback, bug report, or partnership
              note. All contact requests go to{" "}
              <span className="font-semibold text-[var(--primary)]">
                {CONTACT_EMAIL}
              </span>
              .
            </p>
          </header>

          <section className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactFormCard />

            <aside className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/45 p-6 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-main)]/65">
                <Mail className="h-5 w-5 text-[var(--primary)]" />
              </div>

              <h2 className="mt-4 text-xl font-semibold">Contact Details</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Messages from this form are sent directly from this website to:
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-flex rounded-xl border border-[var(--border)] bg-[var(--bg-main)]/60 px-3 py-2 text-sm font-medium text-[var(--primary)] transition-colors hover:border-[var(--primary)]"
              >
                {CONTACT_EMAIL}
              </a>

              <div className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
                <p>What we include in the outgoing email:</p>
                <p>- Name</p>
                <p>- Email</p>
                <p>- Subject</p>
                <p>- Topic</p>
                <p>- Full message</p>
                <p>- Timestamp and page source</p>
              </div>
            </aside>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
