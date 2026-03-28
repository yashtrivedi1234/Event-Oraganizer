import React from 'react';
import { motion } from 'motion/react';

const AboutHeroSection: React.FC = () => {
  return (
    <section className="section-padding px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* h1 global base style: Montserrat, uppercase, 800 weight, clamp size */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 leading-[0.8]"
        >
          THE ART  OF THE  <span className="text-accent">EXPERIENCE.</span>
        </motion.h1>

        <div className="grid grid-cols-1 gap-20 items-start md:grid-cols-2 md:items-stretch">
          <div className="overflow-hidden md:h-full">
            <img
              src="https://picsum.photos/seed/event-planner/800/1000"
              alt="Event Planner"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8">
            {/* Italic quote — no global utility, keeping as-is */}
            <p className="font-serif italic text-white/80 leading-relaxed">
              "We don't just plan events; we design atmospheres that resonate and memories that endure."
            </p>

            {/* p global base style: Inter, 1.7 line-height, muted color */}
            <p>
              Bamboo Groves Events was founded on the belief that every gathering is an opportunity
              for storytelling. With a background in theater production and luxury hospitality, our
              team brings a unique theatricality and precision to every project.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                {/* section-label: accent color, uppercase, tracking, small size */}
                <span className="section-label">Based In</span>
                <p className="text-white">Los Angeles, CA</p>
              </div>
              <div>
                <span className="section-label">Events Produced</span>
                <p className="text-white">500+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
