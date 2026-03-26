import React from 'react';
import { motion } from 'motion/react';

const TimelineSection: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white/90 backdrop-blur-md text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="h2 font-display font-bold uppercase tracking-tighter mb-20">Our Milestones</h2>
        <div className="space-y-20">
          {[
            { year: '2025', title: 'Global Expansion', company: 'International Galas', desc: 'Successfully produced our first multi-city European tour for a major tech brand.' },
            { year: '2022', title: 'Award for Innovation', company: 'Event Excellence Awards', desc: 'Recognized for our pioneering use of immersive AR in live event spaces.' },
            { year: '2019', title: 'The Beginning', company: 'Bamboo Groves Launch', desc: 'Started as a boutique agency focusing on high-end private celebrations in LA.' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start border-b border-black/10 pb-12"
            >
              <span className="text-accent font-mono font-bold">{item.year}</span>
              <div className="col-span-2">
                <h3 className="text-3xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-black/60">{item.company}</p>
              </div>
              <p className="text-black/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
