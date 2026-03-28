import React from 'react';
import { motion } from 'motion/react';
import {
  CalendarCheck2,
  LampDesk,
  ShieldCheck,
  Clock3,
  Smartphone,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: CalendarCheck2,
    title: 'Smart Planning',
    description:
      'Manage timelines, vendors, guest flow, and execution checkpoints with a streamlined planning process.',
  },
  {
    icon: LampDesk,
    title: 'Comfort & Convenience',
    description:
      'Control ambiance, décor, hospitality, and entertainment details to shape a seamless guest experience.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Styling',
    description:
      'Signature décor concepts, immersive staging, and curated aesthetics bring every celebration to life.',
  },
  {
    icon: Clock3,
    title: 'Automation & Scheduling',
    description:
      'Precise run sheets, coordinated transitions, and time-perfect execution keep every moment on track.',
  },
  {
    icon: ShieldCheck,
    title: 'Enhanced Security',
    description:
      'Guest management, venue control, and on-ground coordination help keep every event safe and stress-free.',
  },
  {
    icon: Smartphone,
    title: 'Control Devices',
    description:
      'Real-time communication and command-ready coordination keep your event team connected throughout.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-black px-4 text-white md:px-8" data-scroll-section>
      <div className="mx-auto max-w-7xl">

        {/* h2 base styles handle karte hain: Montserrat, uppercase, weight, size */}
        <div className="mb-6 text-center">
          <h2 className="text-white">
            Event Planning Features
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-start gap-4 md:gap-5"
              >
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-accent/35 bg-black shadow-[0_0_22px_rgba(136,171,50,0.28)]">
                  <Icon
                    size={50}
                    strokeWidth={1.6}
                    className="text-accent drop-shadow-[0_0_12px_rgba(136,171,50,0.85)]"
                  />
                </div>

                <div className="pt-1">
                  {/* h4 base styles: Montserrat, uppercase, 600 weight */}
                  <h4 className="mb-3 text-white">
                    {feature.title}
                  </h4>

                  {/* p base styles: Inter, 1.7 line-height, muted color — text-white/88 se override */}
                  <p className="max-w-xl text-white/80">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;