"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStackDetails } from "../Details";
import Skill from "../Components/skill";

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" },
];

function Skills() {
  const [selected, setSelected] = useState("frontend");

  const filtered = techStackDetails.filter(({ type }) => type === selected);

  return (
    <section id="skills" className="py-32">
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">02 / Skills</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
            Tech
            <span className="italic font-light text-zinc-400"> Stack.</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-0 mb-12 border border-zinc-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className={`px-6 py-3 text-sm transition-all duration-200 border-r border-zinc-900 last:border-r-0 ${
                selected === cat.id
                  ? "bg-white text-black font-medium"
                  : "text-zinc-500 hover:text-white hover:bg-zinc-950"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((skill, i) => (
              <motion.div
                key={`${skill.name}-${selected}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Skill name={skill.name} icon={skill.icon} label={skill.label} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-zinc-900 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-lg font-semibold">
              Ready to Build Something Amazing?
            </h4>
            <p className="text-sm text-zinc-500 mt-1">
              Let's combine these skills to create your next project.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
