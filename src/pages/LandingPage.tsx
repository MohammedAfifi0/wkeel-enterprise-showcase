import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import FeatureDeepDives from "@/components/FeatureDeepDives";
import SecurityCompliance from "@/components/SecurityCompliance";
import Integrations from "@/components/Integrations";
import UseCases from "@/components/UseCases";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import PricingCTA from "@/components/PricingCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const LandingPage = () => {
  useEffect(() => {
    // Skip-to-content accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wkeel-primary-bg text-wkeel-primary-text px-4 py-2 rounded-lg z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Analytics placeholder (commented for production)
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', 'page_view', {
    //     page_title: 'WKEEL Enterprise - AI for Legal Teams',
    //     page_location: window.location.href
    //   });
    // }

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-wkeel-bg text-wkeel-text antialiased">
      <Header />
      
      <main id="main-content">
        <Hero />
        <ValuePropositions />
        <FeatureDeepDives />
        <SecurityCompliance />
        <Integrations />
        <UseCases />
        <Metrics />
        <Testimonials />
        <PricingCTA />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;