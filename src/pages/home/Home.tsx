import React from 'react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import SpecializationsSection from './components/SpecializationsSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import VisionSection from './components/VisionSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FeaturedWorkSection from './components/FeaturedWorkSection';
import ClientsMarqueeSection from './components/ClientsMarqueeSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import AwardsRecognitionSection from './components/AwardsRecognitionSection';
import CreativeLeadershipSection from './components/CreativeLeadershipSection';
import LatestInsightsSection from './components/LatestInsightsSection';
import NewsletterSection from './components/NewsletterSection';
import FinalCTASection from './components/FinalCTASection';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <SpecializationsSection />
      <ServicesSection />
      <ProcessSection />
      <VisionSection />
      <WhyChooseUsSection />
      <FeaturedWorkSection />
      <ClientsMarqueeSection />
      <FAQSection />
      <TestimonialsSection />
      <AwardsRecognitionSection />
      <CreativeLeadershipSection />
      <LatestInsightsSection />
      <NewsletterSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;
