import React from 'react';
import { motion } from 'motion/react';

const AboutHeroSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 mb-32">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-[12vw] font-display font-bold uppercase leading-[0.8] tracking-tighter mb-12"
        >
          THE ART <br /> OF THE <br /> <span className="text-accent">EXPERIENCE.</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src="https://picsum.photos/seed/event-planner/800/1000" 
              alt="Event Planner" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-serif italic text-white/80 leading-relaxed">
              "We don't just plan events; we design atmospheres that resonate and memories that endure."
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Bamboo Groves Events was founded on the belief that every gathering is an opportunity for storytelling. With a background in theater production and luxury hospitality, our team brings a unique theatricality and precision to every project.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Based In</h4>
                <p className="text-white">Los Angeles, CA</p>
              </div>
              <div>
                <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Events Produced</h4>
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
