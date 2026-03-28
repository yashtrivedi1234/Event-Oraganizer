import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const AboutUsSection: React.FC = () => {
  return (
    <section className="section-padding bg-background px-6 md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)] min-h-[600px] md:min-h-[700px]"
        >
          {/* Dummy background image */}
          <img
            src="https://picsum.photos/seed/bamboo-event/1600/900"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

          <div className="relative z-10 flex items-center justify-end p-4 md:p-6 h-full min-h-[inherit]">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="w-full max-w-[560px] rounded-[26px] border border-white/15 bg-white/10 p-4 backdrop-blur-xl md:p-6"
            >
              {/* Section Label — global .section-label utility */}
              <span className="section-label">
                About Bamboo Groves
              </span>

              {/* Heading — global h2 base styles */}
              <h2 className="mb-2 text-white">
                A New Standard Of Celebration
              </h2>

              {/* Body text — global p base styles override color for white */}
              <p className="mb-4 max-w-xl text-white/85 text-sm">
                Bamboo Groves crafts luxury events that feel cinematic, precise, and deeply personal.
                From corporate galas to private milestone celebrations, we blend storytelling, design,
                and flawless execution to create experiences that leave a lasting impression.
              </p>

              <div className="mb-4 grid grid-cols-2 gap-3 text-white/80">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  {/* heading utility for stat numbers */}
                  <p className="heading font-semibold text-white">500+</p>
                  <p className="section-label mt-0.5 mb-0 text-xs">Events Produced</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <p className="heading font-semibold text-white">24</p>
                  <p className="section-label mt-0.5 mb-0 text-xs">Countries Reached</p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-accent hover:text-black"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;