import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import OurPresenceSection from "./components/OurPresenceSection";
import FeaturesSection from "./components/FeaturesSection";
import GrowWithUsSection from "./components/GrowWithUsSection";
import ExploreExperiencesSection from "./components/ExploreExperiencesSection";
import VisionSection from "./components/VisionSection";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutUsSection />
       <GrowWithUsSection />
      <FeaturesSection />
      <OurPresenceSection />
      {/* <ExploreExperiencesSection /> */}
      <VisionSection />
    </div>
  );
};

export default Home;
