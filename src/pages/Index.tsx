import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import EngagementSection from "@/components/EngagementSection";
import TechnologySection from "@/components/TechnologySection";
import ROISection from "@/components/ROISection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { usePageTracking } from "@/hooks/usePageTracking";

const Index = () => {
  usePageTracking("Homepage");
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TrustSection />
        <EngagementSection />
        <TechnologySection />
        <ROISection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
