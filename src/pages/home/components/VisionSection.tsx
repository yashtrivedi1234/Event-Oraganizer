import React from 'react';
import { motion } from 'motion/react';

const VisionSection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden px-6 md:px-12" data-scroll-section>
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
            ease: 'easeInOut',
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
            ease: 'easeInOut',
            delay: 1,
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
          {/* section-label global utility: accent color, uppercase, tracking, small size */}
          <span className="section-label">Our Philosophy</span>

          {/* h2 global base style handles: Montserrat, uppercase, 700 weight, clamp size */}
          {/* outline-text global utility: transparent fill with accent stroke */}
          <h2 className="mb-2">
            WE DON'T JUST PLAN EVENTS. <br />
            <span className="outline-text">WE DESIGN LEGACIES.</span>
          </h2>

          {/* p global base style: Inter, 1.7 line-height, muted color */}
          <p className="mx-auto max-w-3xl font-light md:text-2xl">
            At Bamboo Groves, we believe every celebration is an opportunity to tell a story that
            resonates across generations. Our approach blends architectural precision with cinematic
            emotion, ensuring your most important moments are etched in time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;