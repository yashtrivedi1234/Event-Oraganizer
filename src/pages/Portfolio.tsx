import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ContactModal from '../components/ContactModal';

const projects = [
  { id: 1, title: 'The Crystal Gala', category: 'Corporate', img: 'https://picsum.photos/seed/gala1/800/600', desc: 'A high-end corporate gala for 500+ guests with immersive lighting.' },
  { id: 2, title: 'Midnight Soiree', category: 'Private', img: 'https://picsum.photos/seed/party1/800/600', desc: 'An exclusive private birthday celebration in a hidden rooftop venue.' },
  { id: 3, title: 'Nexus Tech Launch', category: 'Corporate', img: 'https://picsum.photos/seed/launch1/800/600', desc: 'A futuristic product launch featuring holographic displays.' },
  { id: 4, title: 'Summer Solstice', category: 'Private', img: 'https://picsum.photos/seed/party2/800/600', desc: 'A bohemian-chic outdoor wedding with custom floral installations.' },
  { id: 5, title: 'Global Summit 2025', category: 'Corporate', img: 'https://picsum.photos/seed/summit1/800/600', desc: 'A three-day international conference with complex multi-track logistics.' },
  { id: 6, title: 'Artisan Gala', category: 'Private', img: 'https://picsum.photos/seed/party3/800/600', desc: 'A curated dinner experience for art collectors and patrons.' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');

    if (projectId) {
      const project = projects.find((p) => p.id === parseInt(projectId, 10));
      if (project) {
        setSelectedProject(project);
        setModalOpen(true);
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-transparent px-6 pb-20 pt-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20">
          <h1 className="mb-8">Productions</h1>

          <div className="flex flex-wrap gap-4">
            {['All', 'Corporate', 'Private'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`heading rounded-full px-8 py-3 text-sm font-bold transition-all ${
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
          className="grid grid-cols-1 gap-8 perspective-2000 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
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
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.03]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    style={{ transform: 'translateZ(20px)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="grid gap-5 p-5" style={{ transform: 'translateZ(30px)' }}>
                  <div>
                    <span className="section-label">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <div className="portfolio-qr-panel">
                    <div className="portfolio-qr-copy">
                      <span className="section-label mb-2">Instant Preview</span>
                      <p className="heading text-[0.7rem] tracking-[0.28em] text-accent/90">
                        Scan To Open
                      </p>
                    </div>

                    <div className="portfolio-qr-frame shrink-0">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=160&data=${encodeURIComponent(import.meta.env.VITE_APP_URL + `/portfolio?project=${project.id}`)}`}
                        alt={`QR code for ${project.title}`}
                        className="h-full w-full rounded-[1rem]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          projectTitle={selectedProject?.title || 'Our Project'}
        />
      </div>
    </div>
  );
};

export default Portfolio;
