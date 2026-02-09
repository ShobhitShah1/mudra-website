export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border)] bg-[var(--bg-surface)]/20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Mudra
          </h3>
          <p className="text-[var(--text-muted)] text-sm mt-2">
            © 2026 Mudra Inc. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-[var(--text-secondary)] text-sm">
          <a href="#" className="hover:text-[var(--primary)] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[var(--primary)] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
