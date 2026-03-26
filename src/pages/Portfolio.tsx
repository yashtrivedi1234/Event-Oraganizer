import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  { id: 1, title: 'The Crystal Gala', category: 'Corporate', img: 'https://picsum.photos/seed/gala1/800/600', desc: 'A high-end corporate gala for 500+ guests with immersive lighting.' },
  { id: 2, title: 'Midnight Soirée', category: 'Private', img: 'https://picsum.photos/seed/party1/800/600', desc: 'An exclusive private birthday celebration in a hidden rooftop venue.' },
  { id: 3, title: 'Nexus Tech Launch', category: 'Corporate', img: 'https://picsum.photos/seed/launch1/800/600', desc: 'A futuristic product launch featuring holographic displays.' },
  { id: 4, title: 'Summer Solstice', category: 'Private', img: 'https://picsum.photos/seed/party2/800/600', desc: 'A bohemian-chic outdoor wedding with custom floral installations.' },
  { id: 5, title: 'Global Summit 2025', category: 'Corporate', img: 'https://picsum.photos/seed/summit1/800/600', desc: 'A three-day international conference with complex multi-track logistics.' },
  { id: 6, title: 'Artisan Gala', category: 'Private', img: 'https://picsum.photos/seed/party3/800/600', desc: 'A curated dinner experience for art collectors and patrons.' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="h1 font-display font-bold uppercase tracking-tighter mb-8">Productions</h1>
          <div className="flex flex-wrap gap-4">
            {['All', 'Corporate', 'Private'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  filter === cat ? 'bg-accent text-white' : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5, 
                  rotateX: -5,
                  z: 50,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
                }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer rounded-2xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="aspect-[4/3] overflow-hidden mb-6 relative" style={{ transformStyle: "preserve-3d" }}>
                  <motion.img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    style={{ transform: "translateZ(20px)" }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 text-center">
                    <p className="text-white text-sm leading-relaxed" style={{ transform: "translateZ(40px)" }}>{project.desc}</p>
                  </div>
                </div>
                <div className="px-2 pb-4" style={{ transform: "translateZ(30px)" }}>
                  <span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="h3 font-display font-bold uppercase">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
