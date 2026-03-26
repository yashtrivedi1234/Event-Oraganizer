import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
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

      {/* Timeline */}
      <section className="py-32 px-6 md:px-12 bg-white/90 backdrop-blur-md text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-20">Our Milestones</h2>
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

      {/* Skills */}
      <section className="py-32 px-6 md:px-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-20 text-center">Our Toolkit</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 perspective-1000">
            {['Creative Direction', 'Logistics Management', 'Technical Production', 'Vendor Curation', 'Spatial Design', 'Guest Experience', 'Brand Integration', 'Budget Strategy'].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, rotateY: 45, z: -100 }}
                whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 15, 
                  rotateX: -10,
                  z: 50,
                  borderColor: '#f27d26',
                  boxShadow: "0 20px 40px rgba(242, 125, 38, 0.2)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  delay: i * 0.05 
                }}
                className="p-10 border border-white/10 rounded-2xl flex items-center justify-center text-center text-sm font-bold uppercase tracking-widest transition-colors bg-background/50 backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span style={{ transform: "translateZ(20px)" }}>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
