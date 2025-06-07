"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate a random gradient for each project card
  const gradients = [
    "from-blue-400 to-indigo-400",
    "from-purple-400 to-pink-400",
    "from-green-400 to-teal-400",
    "from-yellow-400 to-orange-400",
    "from-pink-400 to-rose-400",
  ];

  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  const projectData = {
    title,
    image,
    description,
    techstack,
    previewLink,
    githubLink,
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.article
        className="group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform-gpu border border-white/20 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onClick={openModal}
      >
        {/* Image container with overlay */}
        <div className="relative overflow-hidden h-64">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Gradient overlay that appears on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${randomGradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
          />

          {/* Content overlay that slides up on hover */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              transform: "translateY(100%)",
            }}
          >
            <div className="group-hover:translate-y-0 transform transition-transform duration-500 delay-100">
              <h1 className="text-2xl font-bold mb-3">{title}</h1>

              <p className="text-sm text-white mb-4 line-clamp-3">
                {description}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {techstack
                  .split(", ")
                  .slice(0, 3)
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium"
                    >
                      {tech.trim()}
                    </span>
                  ))}
              </div>

              {/* View Details Button */}
              <div className="flex space-x-3">
                <motion.button
                  className="flex items-center space-x-2 px-4 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal();
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>View Details</span>
                </motion.button>

                {previewLink && (
                  <motion.a
                    href={previewLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-900/90 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Corner accent */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Click to view indicator */}
          <div className="absolute top-4 left-4">
            <motion.div
              className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            >
              Click to view details
            </motion.div>
          </div>
        </div>

        {/* Bottom section - always visible */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
              {title}
            </h2>
            <motion.div
              className="text-gray-400 group-hover:text-purple-400 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>

          {/* Project description - always visible */}
          <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech stack preview */}
          <div className="flex flex-wrap gap-1">
            {techstack
              .split(", ")
              .slice(0, 2)
              .map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/20"
                >
                  {tech.trim()}
                </span>
              ))}
            {techstack.split(", ").length > 2 && (
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-400/30">
                +{techstack.split(", ").length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${randomGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-3xl`}
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        />
      </motion.article>

      {/* Project Modal */}
      <ProjectModal
        project={projectData}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default Project;
