"use client";

import { motion } from "framer-motion";

function Skill({ name, image }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative w-16 h-16 border border-zinc-800 group-hover:border-zinc-500 bg-zinc-950 flex items-center justify-center transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img
          className="w-9 h-9 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          src={image}
          alt={name}
        />
      </motion.div>
      <span className="text-xs text-zinc-600 group-hover:text-zinc-300 text-center transition-colors duration-200 tracking-wide">
        {name}
      </span>
    </motion.div>
  );
}

export default Skill;
