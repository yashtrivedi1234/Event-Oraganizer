import React from 'react';
import { motion } from 'motion/react';

const locations = [
  {
    city: 'New Delhi',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Lucknow',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Patna',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Ranchi',
    image:
      'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Kolkata',
    image:
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Bhubaneswar',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Jaipur',
    image:
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Vadodara',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Mumbai',
    image:
      'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Visakhapatnam',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Hyderabad',
    image:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Bangalore',
    image:
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Chennai',
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Goa',
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Chandigarh',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Noida',
    image:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Gurugram',
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Ludhiana',
    image:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Indore',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Raipur',
    image:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
  },
];

const OurPresenceSection: React.FC = () => {
  return (
    <section className="section-padding bg-black px-4 text-white md:px-8" data-scroll-section>
      <div className="mx-auto max-w-[1280px]">

        <div className="mb-6 text-center">
          {/* h2 global base style: Montserrat, uppercase, 700 weight */}
          <h2 className="text-white">
            Our Presence
          </h2>
          {/* p global base style: Inter, 1.7 line-height — color override for white */}
          <p className="mt-2 text-white/80">
            Experience the Power of Smart Products
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.02 }}
              className="group mx-auto w-full max-w-[150px] text-center sm:max-w-[160px] lg:max-w-[172px]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-[0_18px_40px_rgba(0,0,0,0.42),0_6px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500 before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_24%,rgba(255,255,255,0)_100%)] before:opacity-70 before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-20 after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)] after:opacity-80 after:transition-opacity after:duration-500 group-hover:-translate-y-2 group-hover:border-white/20 group-hover:shadow-[0_28px_60px_rgba(0,0,0,0.58),0_12px_28px_rgba(0,0,0,0.38),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.18)] group-hover:before:opacity-100 group-hover:after:opacity-100">
                <img
                  src={location.image}
                  alt={location.city}
                  className="aspect-[1.06/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  referrerPolicy="no-referrer"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_42%)] opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              </div>
              {/* heading utility: Montserrat, uppercase, tracking */}
              <p className="heading mt-3 text-sm font-semibold tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-white/90">
                {location.city}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresenceSection;  
