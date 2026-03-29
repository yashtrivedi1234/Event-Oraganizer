import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ContactModal from '../components/ContactModal';

const projects = [
  { id: 1, title: 'The Crystal Gala',   category: 'Corporate', desc: 'A high-end corporate gala for 500+ guests with immersive lighting and world-class production.', year: '2025', guests: '500+', days: '3', vendors: '12' },
  { id: 2, title: 'Midnight Soiree',    category: 'Private',   desc: 'An exclusive private birthday celebration in a hidden rooftop venue.', year: '2024', guests: '80',   days: '1', vendors: '6'  },
  { id: 3, title: 'Nexus Tech Launch',  category: 'Corporate', desc: 'A futuristic product launch featuring holographic displays.', year: '2025', guests: '300+', days: '2', vendors: '9'  },
  { id: 4, title: 'Summer Solstice',    category: 'Private',   desc: 'A bohemian-chic outdoor wedding with custom floral installations.', year: '2024', guests: '200',  days: '1', vendors: '14' },
  { id: 5, title: 'Global Summit 2025', category: 'Corporate', desc: 'A three-day international conference with complex multi-track logistics.', year: '2025', guests: '1000+', days: '3', vendors: '20' },
  { id: 6, title: 'Artisan Gala',       category: 'Private',   desc: 'A curated dinner experience for art collectors and patrons.', year: '2024', guests: '120',  days: '1', vendors: '8'  },
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

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        .pf-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 8vw, 2.8rem);
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
          margin: 0 0 10px;
        }

        .pf-num-badge {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.18);
        }

        .pf-qr-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 0.1em;
          color: #88ab32;
          line-height: 1;
        }

        .pf-stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: #fff;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .pf-scan-line {
          position: absolute;
          left: 14px;
          right: 14px;
          height: 2.5px;
          background: linear-gradient(90deg, transparent, #88ab32cc, #b8d56a, #88ab32cc, transparent);
          pointer-events: none;
          animation: pfScan 2.6s ease-in-out infinite;
          z-index: 10;
        }

        @keyframes pfScan {
          0%   { top: 14px;               opacity: 0; }
          8%   { opacity: 0.85; }
          92%  { opacity: 0.85; }
          100% { top: calc(100% - 14px);  opacity: 0; }
        }
      `}</style>

      <div className="bg-transparent px-4 pb-28 pt-28 md:px-8">
        <div className="mx-auto max-w-xl">

          {/* Page Header */}
          <header className="mb-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-label mb-3"
            >
              Our Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.07 }}
              className="mb-7 leading-none"
            >
              Productions
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="flex flex-wrap gap-2.5"
            >
              {['All', 'Corporate', 'Private'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`heading rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 ${
                    filter === cat
                      ? 'bg-accent text-black shadow-[0_4px_18px_rgba(136,171,50,0.38)]'
                      : 'bg-white/6 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </header>

          {/* Cards */}
          <motion.div layout className="flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => {
                const qrUrl = `${import.meta.env.VITE_APP_URL}/portfolio?project=${project.id}`;
                const index = String(i + 1).padStart(2, '0');
                const total = String(filteredProjects.length).padStart(2, '0');

                const corners = [
                  { top: 10,         left: 10,         borderWidth: '3px 0 0 3px', borderRadius: '5px 0 0 0'  },
                  { top: 10,         right: 10,        borderWidth: '3px 3px 0 0', borderRadius: '0 5px 0 0'  },
                  { bottom: 10,      left: 10,         borderWidth: '0 0 3px 3px', borderRadius: '0 0 0 5px'  },
                  { bottom: 10,      right: 10,        borderWidth: '0 3px 3px 0', borderRadius: '0 0 5px 0'  },
                ];

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16, scale: 0.97 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="overflow-hidden rounded-[28px]"
                    style={{ background: '#0c0c0e', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {/* TOP ZONE */}
                    <div className="p-6 pb-5">
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="heading text-[9.5px] font-bold tracking-[0.22em] px-3 py-[5px] rounded-full"
                          style={{
                            color: '#b8d56a',
                            background: 'rgba(136,171,50,0.1)',
                            border: '1px solid rgba(136,171,50,0.25)',
                          }}
                        >
                          {project.category}
                        </span>
                        <span className="pf-num-badge">{index} / {total}</span>
                      </div>

                      <h2 className="pf-card-title">{project.title}</h2>

                      <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.38)', fontWeight: 300, lineHeight: 1.65 }}>
                        {project.desc}
                      </p>

                      {/* Separator */}
                      <div className="flex items-center gap-2 mt-5">
                        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
                        <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
                      </div>
                    </div>

                    {/* BOTTOM ZONE — QR hero */}
                    <div
                      className="px-6 pb-6"
                      style={{ background: '#111113', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '22px' }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="pf-qr-label">Scan Me</span>
                        <span
                          className="heading text-[9.5px] tracking-[0.15em]"
                          style={{ color: 'rgba(255,255,255,0.28)' }}
                        >
                          NO APP NEEDED
                        </span>
                      </div>

                      {/* Full-width QR */}
                      <div
                        className="relative w-full overflow-hidden"
                        style={{
                          background: '#fff',
                          borderRadius: '20px',
                          padding: '14px',
                          aspectRatio: '1 / 1',
                        }}
                      >
                        {corners.map((c, ci) => (
                          <div
                            key={ci}
                            className="absolute w-6 h-6"
                            style={{
                              top: c.top,
                              left: c.left,
                              right: (c as { right?: number }).right,
                              bottom: (c as { bottom?: number }).bottom,
                              borderColor: '#88ab32',
                              borderStyle: 'solid',
                              borderWidth: c.borderWidth,
                              borderRadius: c.borderRadius,
                            }}
                          />
                        ))}

                        <div className="pf-scan-line" />

                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=400&data=${encodeURIComponent(qrUrl)}&color=0c0c0e&bgcolor=ffffff&margin=2`}
                          alt={`QR code for ${project.title}`}
                          className="w-full h-full block"
                          style={{ borderRadius: '8px' }}
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Open strip */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col gap-0.5">
                          <span style={{ fontSize: '12.5px', fontWeight: 500, color: 'rgba(255,255,255,0.75)' }}>
                            Open on your phone
                          </span>
                          <span style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.3)' }}>
                            Point camera · tap link · done
                          </span>
                        </div>

                        <div
                          className="flex items-center gap-1.5 rounded-full"
                          style={{ background: '#88ab32', padding: '9px 18px' }}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c0c0e" strokeWidth="2.5" strokeLinecap="round">
                            <rect x="5" y="2" width="14" height="20" rx="3" />
                            <circle cx="12" cy="17" r="1" fill="#0c0c0e" />
                          </svg>
                          <span
                            className="heading"
                            style={{ fontSize: '10.5px', fontWeight: 700, color: '#0c0c0e', letterSpacing: '0.1em' }}
                          >
                            Open
                          </span>
                        </div>
                      </div>

                      {/* Stats chips */}
                      <div className="grid grid-cols-4 gap-2.5 mt-4">
                        {[
                          { v: project.guests,  l: 'Guests'  },
                          { v: project.days,    l: 'Days'    },
                          { v: project.vendors, l: 'Vendors' },
                          { v: project.year,    l: 'Year'    },
                        ].map(({ v, l }) => (
                          <div
                            key={l}
                            className="flex flex-col items-center justify-center py-2.5 rounded-2xl"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.07)',
                            }}
                          >
                            <span className="pf-stat-value">{v}</span>
                            <span
                              className="heading mt-0.5"
                              style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em' }}
                            >
                              {l}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 heading text-xs tracking-widest"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              No projects found
            </motion.p>
          )}

        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectTitle={selectedProject?.title || 'Our Project'}
      />
    </>
  );
};

export default Portfolio;