"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "10+", label: "Technologies Used" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "3+", label: "Years Experience" },
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    if (showDisclaimer) {
      const t = setTimeout(() => setShowDisclaimer(false), 5000);
      return () => clearTimeout(t);
    }
  }, [showDisclaimer]);

  const filtered =
    filter === "all"
      ? projectDetails
      : projectDetails.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32">
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">03 / Projects</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
            Selected
            <span className="italic font-light text-zinc-400"> Work.</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md">
            A showcase of projects — web applications and digital experiences.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex items-center gap-0 mb-12 border border-zinc-900 w-fit"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 text-sm transition-all duration-200 border-r border-zinc-900 last:border-r-0 ${
                filter === cat.id
                  ? "bg-white text-black font-medium"
                  : "text-zinc-500 hover:text-white hover:bg-zinc-950"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              className="py-24 text-center border border-zinc-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-zinc-600 text-sm mb-4">
                No projects in this category yet.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="text-sm text-white border border-zinc-700 px-5 py-2 hover:bg-white hover:text-black transition-all"
              >
                View All
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={filter}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((project, i) => (
                <div key={`${project.title}-${filter}`} className="bg-black">
                  <Project project={project} index={i} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-black p-8 text-center hover:bg-zinc-950 transition-colors">
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-xs text-zinc-600 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 border border-zinc-900 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-lg font-semibold">Have a Project in Mind?</h4>
            <p className="text-sm text-zinc-500 mt-1">
              Let's build something great together.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors"
          >
            Start a Conversation
          </a>
        </motion.div>

        {/* Disclaimer */}
        <AnimatePresence>
          {showDisclaimer && (
            <motion.div
              className="fixed bottom-5 left-4 right-4 max-w-lg mx-auto z-40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-zinc-950 border border-zinc-800 p-4 flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-zinc-400">
                    Some projects with private client data are excluded from
                    public repositories.
                  </p>
                </div>
                <button
                  onClick={() => setShowDisclaimer(false)}
                  className="text-zinc-600 hover:text-white transition-colors shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
