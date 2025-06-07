"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { techStackDetails } from "../Details";
import Skill from "../Components/skill";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("webdev");

  const categories = [
    { id: "webdev", label: "Web Development", icon: "🌐" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "databases", label: "Databases", icon: "🗄️" },
    { id: "tools", label: "Tools", icon: "🛠️" },
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredSkills = techStackDetails.filter(
    ({ type }) => selectedCategory === type || selectedCategory === ""
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.main
      className="container mx-auto max-width pt-24 pb-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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
            Skills
          </span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I use to bring
          ideas to life
        </p>
      </motion.section>

      {/* Category Filter */}
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
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Skills Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${selectedCategory}`}
                variants={itemVariants}
                layout
              >
                <Skill
                  name={skill.name}
                  image={skill.image}
                  type={skill.type}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Skills Summary */}
      <motion.section
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Expertise Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Frontend",
                skills: ["React", "JavaScript", "CSS", "HTML"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                category: "Backend",
                skills: ["Node.js", "Python", "PHP", "Django"],
                color: "from-green-500 to-emerald-500",
              },
              {
                category: "Mobile",
                skills: ["Flutter", "Dart", "React Native"],
                color: "from-purple-500 to-pink-500",
              },
              {
                category: "Tools",
                skills: ["Git", "VSCode", "Figma", "Vercel"],
                color: "from-orange-500 to-red-500",
              },
            ].map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}
                >
                  <div className="w-6 h-6 bg-white rounded opacity-80" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      • {skill}
                    </motion.div>
                  ))}
                </div>
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
            Ready to Build Something Amazing?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's combine these skills to create your next project
          </p>
          <Link to="/contact">
            <motion.button
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}

export default Skills;
