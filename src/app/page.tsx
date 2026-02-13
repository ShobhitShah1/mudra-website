import { Hero } from "@/components/Hero";
import { LandingTopNav } from "@/components/LandingTopNav";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { OnboardingPreview } from "@/components/OnboardingPreview";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { SmsSyncSimulator } from "@/components/SmsSyncSimulator";
import { AnalyticsPlayground } from "@/components/AnalyticsPlayground";
import { AppCapabilities } from "@/components/AppCapabilities";
import { UserOutcomes } from "@/components/UserOutcomes";
import { WhoItsFor } from "@/components/WhoItsFor";
import { ObjectionHandling } from "@/components/ObjectionHandling";
import { FaqSection } from "@/components/FaqSection";
import { StickyInstallBar } from "@/components/StickyInstallBar";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { QrQuickAccess } from "@/components/QrQuickAccess";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faq";
import { APP_DOWNLOAD_URL } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] selection:bg-[var(--primary)] selection:text-[var(--bg-main)]">
      <LandingTopNav />
      <ThemeSwitcher />

      <div id="top" className="scroll-mt-20">
        <Hero />
      </div>
      <Showcase />
      <OnboardingPreview />
      <div id="feature-grid" className="scroll-mt-20">
        <Features />
      </div>
      {/* <ThemeShowcase /> */}
      <InteractiveDemo />
      <SmsSyncSimulator />
      <AnalyticsPlayground />
      <div id="app-features" className="scroll-mt-20">
        <AppCapabilities />
      </div>
      {/* <UserOutcomes /> */}
      <WhoItsFor />
      <ObjectionHandling />
      <div id="faq" className="scroll-mt-20">
        <FaqSection />
      </div>

      <section className="py-16 text-center bg-gradient-to-t from-[var(--bg-surface)] to-[var(--bg-main)] md:py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[var(--text-primary)] tracking-tight">
          Ready to take control?
          <br />
          <span className="text-[var(--text-secondary)] opacity-60">
            Track smarter. Save better.
          </span>
        </h2>
        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-300 hover:scale-105 active:scale-95">
          <a
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="group px-10 py-4 rounded-full bg-[var(--bg-main)] text-[var(--text-primary)] font-bold text-lg hover:bg-transparent hover:text-[var(--bg-main)] transition-all duration-300 flex items-center gap-3"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Google Play
          </a>
        </div>
      </section>

      <StickyInstallBar />
      <QrQuickAccess />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </main>
  );
}
