import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { ThemeShowcase } from "@/components/ThemeShowcase";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] selection:bg-[var(--primary)] selection:text-[var(--bg-main)]">
      <ThemeSwitcher />

      <Hero />
      <Showcase />
      <Features />
      {/* <ThemeShowcase /> */}
      <InteractiveDemo />

      <section className="py-32 text-center bg-gradient-to-t from-[var(--bg-surface)] to-[var(--bg-main)]">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--text-primary)]">
          Ready to take control?
        </h2>
        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-300 hover:scale-105 active:scale-95">
          <button className="group px-10 py-4 rounded-full bg-[var(--bg-main)] text-[var(--text-primary)] font-bold text-lg hover:bg-transparent hover:text-[var(--bg-main)] transition-all duration-300 flex items-center gap-3">
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Google Play
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
