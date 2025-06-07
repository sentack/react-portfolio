"use client";
import { motion } from "framer-motion";

function Work({ position, company, location, type, duration }) {
  const getTypeStyle = (type) => {
    switch (type.toLowerCase()) {
      case "fulltime":
      case "full time":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "part-time":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "internship":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <motion.article
      className="relative group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 opacity-30" />

      {/* Timeline dot */}
      <motion.div
        className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full" />
      </motion.div>

      <motion.div
        className="ml-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-purple-300 dark:group-hover:border-purple-600"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <motion.h1
            className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {position}
          </motion.h1>

          <motion.div
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeStyle(
              type
            )} mt-2 md:mt-0`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            {type}
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <motion.svg
                className="w-4 h-4 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </motion.svg>
              <span className="font-medium">{company}</span>
            </div>

            <div className="flex items-center space-x-2">
              <motion.svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </motion.svg>
              <span>{location}</span>
            </div>
          </div>

          <motion.div
            className="flex items-center space-x-2 mt-2 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">{duration}</span>
          </motion.div>
        </motion.div>

        {/* Decorative gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.div>
    </motion.article>
  );
}

export default Work;
