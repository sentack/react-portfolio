"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStackDetails } from "../Details";
import Skill from "../Components/skill";

const categories = [
  { id: "webdev", label: "Web Dev" },
  { id: "mobile", label: "Mobile" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" },
];

const expertiseSummary = [
  { category: "Frontend", skills: ["React", "JavaScript", "HTML/CSS", "Tailwind"] },
  { category: "Backend", skills: ["Node.js", "PHP", "MySQL", "MongoDB"] },
  { category: "Mobile", skills: ["Flutter", "Dart"] },
  { category: "Tools", skills: ["Git", "VSCode", "Figma", "Vercel"] },
];

function Skills() {
  const [selected, setSelected] = useState("webdev");

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
                <Skill name={skill.name} image={skill.image} type={skill.type} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Expertise overview */}
        <motion.div
          className="mt-24 border-t border-zinc-900 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-10">
            <span className="section-label">Overview</span>
            <h3 className="text-2xl font-bold mt-2">Expertise Areas</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900">
            {expertiseSummary.map((area, i) => (
              <motion.div
                key={area.category}
                className="bg-black p-6 hover:bg-zinc-950 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="text-xs text-zinc-700 mb-4 font-mono">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  {area.category}
                </h4>
                <div className="space-y-1.5">
                  {area.skills.map((s) => (
                    <div key={s} className="text-xs text-zinc-500">
                      — {s}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-zinc-900 p-8"
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
