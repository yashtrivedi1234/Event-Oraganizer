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
    <section className="section-padding bg-[#02040b] px-6 text-white md:px-10" data-scroll-section>
      <div className="mx-auto max-w-7xl">

        <div className="mb-6 text-center">
          {/* h2 global base style: Montserrat, uppercase, 700 weight */}
          <h2 className="text-white">
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
                <div className="mb-5 flex h-24 w-24 items-center justify-center text-accent drop-shadow-[0_0_10px_rgba(136,171,50,0.45)]">
                  <Icon size={68} strokeWidth={1.5} />
                </div>

                {/* h3 global base style: Montserrat, uppercase, 600 weight */}
                <h3 className="mb-3 text-white">
                  {item.title}
                </h3>

                {/* p global base style: Inter, 1.7 line-height — color override for white */}
                <p className="max-w-[260px] text-white/90">
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