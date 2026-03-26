import React from 'react';
import { motion } from 'motion/react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-black" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Our Promise</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">WHY CHOOSE <br /> <span className="text-accent">BAMBOO GROVES</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: '⭐', title: 'Unmatched Expertise', desc: '15+ years in luxury event production with a portfolio spanning 500+ successful events worldwide.' },
            { icon: '🎯', title: 'Precision & Innovation', desc: 'We combine meticulous planning with cutting-edge technology and creative storytelling.' },
            { icon: '👥', title: 'Dedicated Partnership', desc: 'Your vision becomes our mission. We provide white-glove service from conceptization to execution.' },
            { icon: '🌍', title: 'Global Reach', desc: 'With partners in 24 countries, we seamlessly execute destination events at any scale.' },
            { icon: '💎', title: 'Luxury Standards', desc: 'We specialize exclusively in high-end productions, ensuring premium quality in every detail.' },
            { icon: '🏆', title: 'Award-Winning Team', desc: 'Our creative leadership has been recognized with 15+ industry awards for excellence.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-black/10 rounded-2xl hover:border-accent hover:shadow-lg transition-all duration-500"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">{item.title}</h3>
              <p className="text-black/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
