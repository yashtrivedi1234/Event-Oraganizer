import React from 'react';
import AboutHeroSection from './components/AboutHeroSection';
import TimelineSection from './components/TimelineSection';
import ToolkitSection from './components/ToolkitSection';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <AboutHeroSection />
      <TimelineSection />
      <ToolkitSection />
    </div>
  );
};

export default About;
