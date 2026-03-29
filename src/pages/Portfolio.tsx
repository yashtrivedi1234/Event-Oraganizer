import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ContactModal from "../components/ContactModal";
import ccLogo from "../assets/cc-logo.png";

const projects = [
  {
    id: 1,
    title: "The Crystal Gala",
    category: "Corporate",
    desc: "A high-end corporate gala for 500+ guests with immersive lighting and world-class production.",
    year: "2025",
    guests: "500+",
    days: "3",
    vendors: "12",
  },
  {
    id: 2,
    title: "Midnight Soiree",
    category: "Private",
    desc: "An exclusive private birthday celebration in a hidden rooftop venue.",
    year: "2024",
    guests: "80",
    days: "1",
    vendors: "6",
  },
  {
    id: 3,
    title: "Nexus Tech Launch",
    category: "Corporate",
    desc: "A futuristic product launch featuring holographic displays.",
    year: "2025",
    guests: "300+",
    days: "2",
    vendors: "9",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project");

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
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-24 mt-6">
        <h1 className="mb-6 text-white">Productions</h1>

        <div className=" flex gap-3">
          {["All", "Corporate", "Private"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm ${
                filter === cat
                  ? "bg-[#88ab32] text-black"
                  : "bg-white/10 text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const qrUrl = `${import.meta.env.VITE_APP_URL}/portfolio?project=${project.id}`;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl bg-[#0c0c0e] p-6"
                >
                  <h2 className="pf-card-title">{project.title}</h2>
                  <p className="mb-6 text-sm text-white/40">{project.desc}</p>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 0.5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="qr-glow"
                  >
                    <div className="group relative w-full">
                      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-[#88ab32] via-[#b8d56a] to-[#88ab32] p-[2px] opacity-70 transition duration-500 group-hover:opacity-100" />

                      <div className="relative aspect-square overflow-hidden rounded-[20px] bg-white/90 p-[14px] backdrop-blur-md">
                        <img
                          src={`https://quickchart.io/qr?text=${encodeURIComponent(qrUrl)}&size=400&dark=0c0c0e&light=ffffff`}
                          alt={`QR code for ${project.title}`}
                          className="h-full w-full rounded-[10px]"
                        />

                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <div className="pf-qr-logo">
                            <img src={ccLogo} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
                          </div>
                        </div>

                        <div className="pf-scan-line absolute left-4 right-4 h-[2px]" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          projectTitle={selectedProject?.title || "Our Project"}
        />
      </div>
    </>
  );
};

export default Portfolio;
