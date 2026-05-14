"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function Project({ project, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.article
        className="group relative border border-zinc-900 hover:border-zinc-700 bg-zinc-950/50 cursor-pointer transition-all duration-300 hover:bg-zinc-950"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Project number */}
        <div className="absolute top-4 left-4 z-10 text-xs font-mono text-zinc-700">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="border border-white/40 text-white text-sm px-5 py-2 font-medium">
              View Details
            </div>
          </div>

          {/* Category tag */}
          <div className="absolute bottom-3 right-3">
            <span className="text-xs bg-black/70 border border-zinc-700 text-zinc-400 px-2 py-0.5">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-sm font-semibold text-white group-hover:text-zinc-200 leading-snug">
              {project.title}
            </h3>
            <svg
              className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 shrink-0 transition-colors mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>

          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="text-xs border border-zinc-900 text-zinc-600 px-2 py-0.5"
              >
                {t.trim()}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-zinc-700 px-2 py-0.5">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </motion.article>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Project;
