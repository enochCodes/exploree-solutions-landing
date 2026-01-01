import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlatformsSection from "@/components/PlatformsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionNav from "@/components/SectionNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <SectionNav />
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="platforms">
          <PlatformsSection />
        </section>
        <section id="features">
          <FeaturesSection />
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
