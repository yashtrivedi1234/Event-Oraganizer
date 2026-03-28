import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import OurPresenceSection from "./components/OurPresenceSection";
import StatsSection from "./components/StatsSection";
import SpecializationsSection from "./components/SpecializationsSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import GrowWithUsSection from "./components/GrowWithUsSection";
import ExploreExperiencesSection from "./components/ExploreExperiencesSection";
import HomeCTASection from "./components/HomeCTASection";
import ProcessSection from "./components/ProcessSection";
import VisionSection from "./components/VisionSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import ClientsMarqueeSection from "./components/ClientsMarqueeSection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AwardsRecognitionSection from "./components/AwardsRecognitionSection";
import CreativeLeadershipSection from "./components/CreativeLeadershipSection";
import LatestInsightsSection from "./components/LatestInsightsSection";
import NewsletterSection from "./components/NewsletterSection";
import FinalCTASection from "./components/FinalCTASection";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutUsSection />
      <FeaturesSection />
      <OurPresenceSection />
      <GrowWithUsSection />
      <ExploreExperiencesSection />
      <HomeCTASection />
      <VisionSection />
      {/* <SpecializationsSection /> */}
      {/* <ServicesSection /> */}
      {/* <StatsSection /> */}
      {/* <ProcessSection /> */}
      {/* <WhyChooseUsSection /> */}
      {/* <FeaturedWorkSection /> */}
      {/* <ClientsMarqueeSection /> */}
      {/* <FAQSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <AwardsRecognitionSection /> */}
      {/* <CreativeLeadershipSection /> */}
      {/* <LatestInsightsSection /> */}
      {/* <NewsletterSection /> */}
      {/* <FinalCTASection /> */}
    </div>
  );
};

export default Home;
