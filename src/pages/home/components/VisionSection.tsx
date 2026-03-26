import React from 'react';
import { motion } from 'motion/react';

const VisionSection: React.FC = () => {
  return (
    <section className="py-48 px-6 md:px-12 relative overflow-hidden" data-scroll-section>
      {/* Pulsing Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[100px]"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-8 block">Our Philosophy</span>
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[1.1] mb-12">
            WE DON'T JUST PLAN EVENTS. <br />
            <span className="text-white/20 outline-text">WE DESIGN LEGACIES.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto font-light">
            At Bamboo Groves, we believe every celebration is an opportunity to tell a story that resonates across generations. Our approach blends architectural precision with cinematic emotion, ensuring your most important moments are etched in time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
