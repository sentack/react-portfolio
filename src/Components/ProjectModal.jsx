"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isOpen && project?.images?.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 5000);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [isOpen, project]);

  useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen, project]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!project) return null;

  const images = project.images;
  const next = () => setCurrentImageIndex((p) => (p + 1) % images.length);
  const prev = () => setCurrentImageIndex((p) => (p - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-zinc-800 overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto flex-1">
              {/* Image Gallery */}
              <div className="relative h-64 md:h-80 bg-zinc-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                {/* Project title overlay */}
                <div className="absolute bottom-5 left-6 right-16">
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.technologies.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-xs border border-zinc-700 text-zinc-400 px-2 py-0.5">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nav arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 border border-zinc-700 text-white flex items-center justify-center hover:bg-black transition-colors z-10"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 border border-zinc-700 text-white flex items-center justify-center hover:bg-black transition-colors z-10"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 right-6 flex gap-1.5">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(i); }}
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            i === currentImageIndex ? "bg-white" : "bg-zinc-600 hover:bg-zinc-400"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                        About This Project
                      </h3>
                      <p className="text-zinc-300 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((f, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-zinc-400 border border-zinc-900 p-2.5"
                          >
                            <span className="text-zinc-600 mt-0.5 shrink-0">—</span>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                        Challenges Faced
                      </h3>
                      <div className="space-y-2">
                        {project.challenges.map((c, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-sm text-zinc-400 border-l border-zinc-800 pl-3 py-1"
                          >
                            <span className="text-zinc-700 font-mono text-xs shrink-0 mt-0.5">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Project info */}
                    <div className="border border-zinc-900 p-5">
                      <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                        Project Info
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: "Duration", value: project.duration },
                          { label: "Team", value: project.team },
                          { label: "Role", value: project.role },
                        ].map(({ label, value }) => (
                          <div key={label}>
                            <span className="text-xs text-zinc-600 uppercase tracking-wider">
                              {label}
                            </span>
                            <p className="text-sm text-white font-medium mt-0.5">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="border border-zinc-900 p-5">
                      <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs border border-zinc-800 text-zinc-400 px-2.5 py-1 hover:border-zinc-600 hover:text-zinc-200 transition-colors"
                          >
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-2">
                      {project.previewLink && (
                        <a
                          href={project.previewLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-zinc-700 text-zinc-300 text-sm hover:border-zinc-500 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
