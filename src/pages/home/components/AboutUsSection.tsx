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
          className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

          <div className="relative z-10 flex min-h-[560px] items-center justify-end p-6 md:p-10 lg:p-18">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="w-full max-w-[560px] rounded-[26px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl md:p-10"
            >
              <span className="mb-5 block text-sm font-medium text-white/90 md:text-base">
                About Bamboo Groves
              </span>
              <h2 className="h2 mb-6 text-white">
                A New Standard
                <br />
                Of Celebration
              </h2>
              <p className="p mb-8 max-w-xl text-white/85">
                Bamboo Groves crafts luxury events that feel cinematic, precise, and deeply personal.
                From corporate galas to private milestone celebrations, we blend storytelling, design,
                and flawless execution to create experiences that leave a lasting impression.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 text-white/80">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="font-semibold text-white">500+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em]">Events Produced</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="font-semibold text-white">24</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em]">Countries Reached</p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-accent hover:text-black"
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
