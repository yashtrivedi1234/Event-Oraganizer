import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ContactModal from "../components/ContactModal";
import CustomQR from "../components/CustomQR";

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
    category: "Social",
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
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    }
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-24 mt-6">
        <h1 className="mb-6 text-white">Productions</h1>

        <div className="flex gap-3 mb-10">
          {["All", "Corporate", "Social"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                filter === cat
                  ? "bg-[#88ab32] text-black"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const qrUrl = `${
                import.meta.env.VITE_APP_URL
              }/portfolio?project=${project.id}`;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl bg-[#0c0c0e] p-6"
                >
                  {/* Card header */}
                  <div className="mb-4">
                    <span className="text-xs font-medium tracking-widest uppercase text-[#88ab32] mb-1 block">
                      {project.category}
                    </span>
                    <h2 className="text-white text-xl font-semibold leading-tight">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-white/40">{project.desc}</p>
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-4 mb-5 text-xs text-white/30">
                    <span>
                      <span className="text-white/60 font-medium">
                        {project.guests}
                      </span>{" "}
                      guests
                    </span>
                    <span>
                      <span className="text-white/60 font-medium">
                        {project.days}
                      </span>{" "}
                      {project.days === "1" ? "day" : "days"}
                    </span>
                    <span>
                      <span className="text-white/60 font-medium">
                        {project.vendors}
                      </span>{" "}
                      vendors
                    </span>
                  </div>

                  {/* Custom QR Code */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="relative group"
                  >
                    {/* Glow border */}
                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-[#88ab32] via-[#b8d56a] to-[#88ab32] opacity-40 group-hover:opacity-80 transition-opacity duration-500 blur-[1px]" />

                    {/* QR wrapper */}
                    <div className="relative rounded-[20px] overflow-hidden bg-white p-3">
                      <CustomQR url={qrUrl} logoText="CC" size={300} />
                    </div>

                    {/* Scan label */}
                    <p className="mt-2 text-center text-[10px] tracking-[0.2em] uppercase text-white/20 group-hover:text-[#88ab32]/60 transition-colors duration-300">
                      Scan to view
                    </p>
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