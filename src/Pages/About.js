"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section className="mb-20" variants={itemVariants}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h1>

            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-gray-200">{personalDetails.about1}</p>
              <p className="text-gray-300">{personalDetails.about2}</p>
              <p className="text-gray-300">{personalDetails.about3}</p>
              <p className="text-gray-300">{personalDetails.about4}</p>
            </motion.div>

            {/* Skills highlight */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { icon: "🎨", title: "Design", desc: "UI/UX & Graphics" },
                {
                  icon: "💻",
                  title: "Development",
                  desc: "Full-stack Solutions",
                },
                { icon: "📱", title: "Mobile", desc: "iOS & Android" },
                { icon: "🚀", title: "Performance", desc: "Optimized & Fast" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <h3 className="font-semibold text-white">{skill.title}</h3>
                  <p className="text-sm text-gray-300">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image with decorative elements */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-20 transform rotate-6"
                animate={{
                  rotate: [6, -6, 6],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.img
                src={personalDetails.img}
                alt="Profile"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                5+ Years
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Full-stack
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section className="mb-20" variants={itemVariants} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {workDetails.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Work
                  position={work.Position}
                  company={work.Company}
                  location={work.Location}
                  type={work.Type}
                  duration={work.Duration}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section variants={itemVariants}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {eduDetails.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Work
                  position={edu.Position}
                  company={edu.Company}
                  location={edu.Location}
                  type={edu.Type}
                  duration={edu.Duration}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Work Together
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Ready to bring your ideas to life? Let's create something amazing
            together.
          </p>
          <Link to="/contact">
            <motion.button
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}

export default About;
