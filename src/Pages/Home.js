"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.main
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced 3D Background Elements with more particles */}
      <div className="absolute inset-0">
        {/* Main floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Additional smaller particles */}
        <motion.div
          className="absolute top-32 left-1/3 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/3 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg opacity-15"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-16 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-10"
          animate={{
            x: [0, -20, 0],
            rotate: [0, 45, 90],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-15"
          animate={{
            y: [0, 18, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Tiny floating dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 20 - 10, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto max-width px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        style={{ y, opacity }}
      >
        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              👋 Welcome to my portfolio
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm</span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {name}
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {tagline}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Full-stack Developer passionate about creating beautiful,
            functional, and user-friendly applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              onTap={() => (window.location.href = "/projects")}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              onTap={() => (window.location.href = "/contact")}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Stats */}
          <motion.div
            className="flex items-center space-x-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { number: "5+", label: "Projects" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-2xl font-bold text-purple-600 dark:text-purple-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative">
            {/* Animated background rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-4 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 opacity-10"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Profile image */}
            <motion.div
              className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={img}
                alt={name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
            </motion.div>

            {/* Floating elements around image */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
              animate={{
                x: [0, -5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

export default Home;
