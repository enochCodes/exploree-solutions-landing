import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsExploreeSection from "@/components/WhatIsExploreeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformsSection from "@/components/PlatformsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="what-is">
          <WhatIsExploreeSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="who-we-help">
          <PlatformsSection />
        </section>
        <section id="cta">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
