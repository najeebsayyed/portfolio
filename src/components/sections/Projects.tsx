import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaPlay, FaXmark, FaWandMagicSparkles, FaCheck, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SpotlightCard from "../ui/SpotlightCard";
import { projects } from "../../data/projects";

const categories = ["All", "Mobile Apps", "AI Powered", "Websites"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState<{ title: string; src: string } | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <Section id="projects" className="relative overflow-hidden py-20 lg:py-28">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <FaWandMagicSparkles className="text-secondary" /> Featured Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-text sm:text-5xl lg:text-6xl"
          >
            Crafted for <span className="text-primary">Impact</span> & <span className="text-secondary">Performance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-muted"
          >
            A showcase of cross-platform mobile applications and AI-powered products engineered with clean architecture.
          </motion.p>
        </div>

        {/* Swipeable Filter Pills on Mobile */}
        <div className="mt-10 flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto no-scrollbar pb-2 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "border border-slate-800 bg-slate-900 text-muted hover:border-slate-700 hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
              >
                <SpotlightCard className="flex flex-col h-full p-0 overflow-hidden group">
                  {/* Project Image Banner */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Play Video Demo Trigger Overlay */}
                    {project.demo && (
                      <button
                        onClick={() => setActiveVideo({ title: project.title, src: project.demo! })}
                        className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-90 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-label="Play App Demo"
                      >
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform duration-300 hover:scale-110">
                          <FaPlay className="ml-1 text-base sm:text-lg" />
                        </div>
                      </button>
                    )}

                    {/* Top Category Badge */}
                    <span className="absolute top-3 left-3 rounded-full bg-slate-900/90 border border-slate-700 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-primary shadow-md">
                      {project.categories[0]}
                    </span>

                    {/* Top Hackathon Badge */}
                    {project.title.includes("TeachMate") && (
                      <span className="absolute top-3 right-3 rounded-full bg-amber-500/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-slate-950 shadow-md">
                        🏆 Top 50 Hackathon
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-text group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-secondary">{project.subtitle}</p>

                    <p className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    {/* Feature Highlights */}
                    <ul className="mt-4 space-y-1">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                          <FaCheck className="text-emerald-400 text-[10px] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-4">
                      {project.demo ? (
                        <button
                          onClick={() => setActiveVideo({ title: project.title, src: project.demo! })}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-secondary"
                        >
                          <FaPlay size={11} /> Watch Demo
                        </button>
                      ) : project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-secondary"
                        >
                          <FaArrowUpRightFromSquare size={11} /> Live Site
                        </a>
                      ) : (
                        <span className="text-xs text-muted">Preview Available</span>
                      )}

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-text transition-all hover:border-primary hover:bg-slate-800 hover:text-primary"
                        >
                          <FaGithub size={13} /> Source Code
                        </a>
                      ) : project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-text transition-all hover:border-primary hover:bg-slate-800 hover:text-primary"
                        >
                          <FaArrowUpRightFromSquare size={11} /> Live Site
                        </a>
                      ) : null}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      {/* Video Modal Player (Responsive Popup) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950 p-3 sm:p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 px-1">
                <h4 className="text-sm sm:text-lg font-bold text-text flex items-center gap-2 truncate">
                  <FaPlay className="text-primary text-xs sm:text-sm shrink-0" /> Demo: {activeVideo.title}
                </h4>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="rounded-full p-2 text-muted transition hover:bg-slate-900 hover:text-white"
                  aria-label="Close modal"
                >
                  <FaXmark size={18} />
                </button>
              </div>

              <div className="mt-3 aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black">
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
