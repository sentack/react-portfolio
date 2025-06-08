"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Auto-hide disclaimer after 5 seconds
  useEffect(() => {
    if (showDisclaimer) {
      const timer = setTimeout(() => {
        setShowDisclaimer(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showDisclaimer]);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
  ];

  // Filter projects based on the selected category comparing with project.category value
  const filteredProjects =
    filter === "all"
      ? projectDetails
      : projectDetails.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.main
      className="container mx-auto max-width pt-24 pb-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating Disclaimer */}
      <AnimatePresence>
        {showDisclaimer && (
          <motion.div
            className="fixed bottom-4 left-4 right-4 z-50 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-amber-400/30 rounded-xl p-4 shadow-2xl">
              <div className="flex items-start justify-between space-x-3">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-amber-300 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-amber-200">
                      Portfolio Disclaimer
                    </h3>
                    <p className="text-sm text-amber-100 mt-1">
                      This portfolio showcases a selection of my work, excluding
                      projects that contain private client information, which
                      prevents me from sharing the corresponding GitHub
                      repositories.
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setShowDisclaimer(false)}
                  className="flex-shrink-0 p-1 rounded-lg text-amber-200 hover:text-white hover:bg-amber-400/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          A showcase of my work, featuring web applications, mobile apps, and
          design projects
        </p>
      </motion.section>

      {/* Filter Buttons */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="no-projects"
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  No Projects Found
                </h3>
                <p className="text-gray-300 mb-6">
                  No projects match the selected category. Try selecting a
                  different filter or check back later for new projects.
                </p>
                <motion.button
                  onClick={() => setFilter("all")}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={filter}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${filter}`}
                  variants={itemVariants}
                  layout
                >
                  <Project project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Project Statistics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "5+", label: "Projects Completed", icon: "🚀" },
              { number: "10+", label: "Technologies Used", icon: "⚡" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" },
              { number: "3+", label: "Years Experience", icon: "📅" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <motion.div
                  className="text-3xl font-bold text-purple-300 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss how we can bring your ideas to life with cutting-edge
            technology
          </p>
          <Link to="/contact">
            <motion.button
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}

export default Projects;
