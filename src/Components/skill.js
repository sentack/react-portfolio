"use client";
import { motion } from "framer-motion";

function Skill({ name, image, type }) {
  const getTypeColor = (type) => {
    switch (type) {
      case "webdev":
        return "from-blue-500 to-cyan-500";
      case "mobile":
        return "from-green-500 to-emerald-500";
      case "databases":
        return "from-orange-500 to-red-500";
      case "tools":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <motion.div
      className="group flex flex-col items-center space-y-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`relative p-4 rounded-2xl bg-gradient-to-br ${getTypeColor(
          type
        )} shadow-lg group-hover:shadow-xl transition-all duration-300`}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getTypeColor(
            type
          )} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
        />

        <motion.img
          className="w-12 h-12 object-contain relative z-10 filter brightness-0 invert"
          src={image}
          alt={name}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, -10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, -8, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
      </motion.div>

      <motion.h6
        className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {name}
      </motion.h6>

      {/* Skill level indicator */}
      <motion.div
        className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className={`h-full bg-gradient-to-r ${getTypeColor(
            type
          )} rounded-full`}
          initial={{ width: "0%" }}
          whileInView={{ width: "85%" }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Skill;
