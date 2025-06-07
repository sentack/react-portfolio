"use client";
import { motion } from "framer-motion";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) {
  return (
    <motion.article
      className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform-gpu border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -15, scale: 1.02 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
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
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content overlay that slides up on hover */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6 text-white"
          initial={{ y: "100%", opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl font-bold mb-3"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-sm text-gray-200 mb-4 line-clamp-3"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Tech stack tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
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
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex space-x-3"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            {previewLink && (
              <motion.a
                href={previewLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center space-x-2 px-4 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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

            <motion.a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900/90 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Code</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4">
          <motion.div
            className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100"
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
      </div>

      {/* Bottom section - always visible */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h2>
          <motion.div
            className="text-gray-400 group-hover:text-purple-500 transition-colors"
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

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Hover to explore this project
        </p>

        {/* Tech stack preview */}
        <div className="flex flex-wrap gap-1 mt-3">
          {techstack
            .split(", ")
            .slice(0, 2)
            .map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
              >
                {tech.trim()}
              </span>
            ))}
          {techstack.split(", ").length > 2 && (
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-md">
              +{techstack.split(", ").length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
      />
    </motion.article>
  );
}

export default Project;
