import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto w-full relative z-10 perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span 
            className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block ml-9"
            style={{ transform: "translateZ(120px)" }}
          >
            Luxury Event Production Studio
          </motion.span>
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-display font-bold uppercase tracking-tighter mb-8">
            <motion.span style={{ display: "inline-block", transform: "translateZ(240px)" }}>CRAFTING</motion.span> <br />
            <motion.span 
              className="text-white/20 outline-text inline-block" 
              style={{ transform: "translateZ(180px)" }}
            >
              UNFORGETTABLE
            </motion.span> <br />
            <motion.span style={{ display: "inline-block", transform: "translateZ(320px)" }}>MOMENTS</motion.span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-12">
            <motion.button
              whileHover={{ scale: 1.05, transform: "translateZ(100px)", rotateY: 8, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest flex items-center gap-3 group shadow-[0_30px_60px_rgba(255,255,255,0.15)]"
            >
              Explore Events <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <motion.div 
              className="flex items-center gap-4 cursor-pointer group"
              style={{ transform: "translateZ(80px)" }}
              whileHover={{ transform: "translateZ(120px)" }}
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                <Play size={16} fill="white" className="group-hover:fill-accent transition-colors" />
              </div>
              <span className="text-sm uppercase tracking-widest font-medium group-hover:text-accent transition-colors">Watch Showreel</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
