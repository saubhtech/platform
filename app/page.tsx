import Header from "./components/header";
import HeroSection from "./components/hero-section";
// import FeaturesSection from "./components/features-section";
import PhygitalSection from "./components/phygital-section";
import Steps from "./components/Steps";
import TrustSection from "./components/trust-section";
import CategoriesSection from "./components/categories-section";
import BrandingSection from "./components/branding-section";
import ProvenResultsSection from "./components/proven-results-section";
import SaubhosSection from "./components/saubhos-section";
import LearningSection from "./components/learning-section";
import GigEconomySection from "./components/gig-economy-section";
// import BlogsSection from "./components/blogs-section";
import FaqSection from "./components/faq-section";
import CommunitySection from "./components/community-section";
// import TestimonialsSection from "./components/testimonials-section";
import PricingSection from "./components/pricing-section";
import NewsletterSection from "./components/newsletter-section";
// import FeaturesSection from "./components/features-section";
// import CtaSection from "./components/cta-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
       <PhygitalSection />
      <Steps />
      <TrustSection />
      <CategoriesSection />
       <BrandingSection /> 
      <ProvenResultsSection />
      <SaubhosSection />
      <LearningSection />
       <GigEconomySection />
      {/* <BlogsSection /> */}
      <FaqSection />
      <CommunitySection />
     {/* <TestimonialsSection /> */}
      <PricingSection />
       {/* <CtaSection /> */}
      <NewsletterSection />
       <Footer /> 
    </>
  );
}