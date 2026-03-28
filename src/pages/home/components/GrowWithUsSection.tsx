import React from 'react';
import { motion } from 'motion/react';
import { Compass, GraduationCap, Network, BriefcaseBusiness } from 'lucide-react';

const items = [
  {
    icon: Compass,
    title: 'Publishing',
    description: 'Showcase your event story, brand moments, and signature productions with polished presentation.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Career',
    description: 'Work with a team that values precision, creativity, and unforgettable guest experiences.',
  },
  {
    icon: Network,
    title: 'Education',
    description: 'Learn modern event strategy, creative direction, and production systems that scale beautifully.',
  },
  {
    icon: GraduationCap,
    title: 'Meeting',
    description: 'Collaborate on corporate events, private celebrations, and destination experiences with ease.',
  },
];

const GrowWithUsSection: React.FC = () => {
  return (
    <section className="bg-[#02040b] px-6 py-20 text-white md:px-10 md:py-24" data-scroll-section>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-sans text-4xl font-light tracking-tight text-white md:text-6xl">
            Grow With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex h-24 w-24 items-center justify-center text-white/90">
                  <Icon size={68} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-sans text-3xl font-normal tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="max-w-[260px] text-lg leading-9 text-white/90">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowWithUsSection;
