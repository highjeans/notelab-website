import { FeatureGrid2026 } from "@/components/marketing/FeatureGrid2026";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Navbar } from "@/components/marketing/Navbar";
import { VisualShowcase } from "@/components/marketing/VisualShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid2026 />
        <VisualShowcase />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
