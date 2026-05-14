"use client";

import { motion } from "framer-motion";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

function About() {
  const highlights = [
    { label: "Frontend", desc: "React, JavaScript, HTML/CSS" },
    { label: "Backend", desc: "Node.js, PHP, Django, Express" },
    { label: "Databases", desc: "MongoDB, MySQL, PostgreSQL" },
    { label: "DevOps", desc: "Docker, GCP, AWS, Git" },
  ];

  return (
    <section id="about" className="py-32">
      <div className="site-container">
        {/* Section header */}
        <motion.div className="mb-16" {...fadeUp}>
          <span className="section-label">01 / About</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
            About
            <span className="italic font-light text-zinc-400"> Me.</span>
          </h2>
        </motion.div>

        {/* Bio + skill summary */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-28">
          {/* Bio */}
          <motion.div className="lg:col-span-3 space-y-6" {...fadeUp}>
            <p className="text-zinc-300 leading-relaxed text-base">
              {personalDetails.about1}
            </p>

            {/* Soft skills / languages row */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Problem Solving",
                "Creative Thinking",
                "Adaptability",
                "Communication",
                "Teamwork",
              ].map((s) => (
                <span
                  key={s}
                  className="text-xs border border-zinc-800 text-zinc-500 px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div className="flex flex-wrap gap-3">
              {[
                "English (Fluent)",
                "Amharic (Native)",
                "Afan Oromo (Native)",
              ].map((l) => (
                <span
                  key={l}
                  className="text-xs text-zinc-600"
                >
                  {l}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skill summary cards */}
          <motion.div className="lg:col-span-2 grid grid-cols-2 gap-px bg-zinc-900" {...fadeUp}>
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="bg-black p-5 hover:bg-zinc-950 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <div className="text-xs text-zinc-700 font-mono mb-2">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {h.label}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="section-label">Experience</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-2">
              Work History
            </h3>
            <p className="text-xs text-zinc-600 mt-2">
              Click any role to expand details
            </p>
          </motion.div>
          <div className="max-w-3xl space-y-4">
            {workDetails.map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <Work
                  position={work.Position}
                  company={work.Company}
                  location={work.Location}
                  type={work.Type}
                  duration={work.Duration}
                  details={work.details}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div className="mb-10" {...fadeUp}>
            <span className="section-label">Education</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-2">Academic</h3>
          </motion.div>
          <div className="max-w-3xl space-y-4">
            {eduDetails.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <Work
                  position={edu.Position}
                  company={edu.Company}
                  location={edu.Location}
                  type={edu.Type}
                  duration={edu.Duration}
                  details={edu.details}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 border border-zinc-900 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          {...fadeUp}
        >
          <div>
            <h4 className="text-lg font-semibold text-white">
              Let's Work Together
            </h4>
            <p className="text-sm text-zinc-500 mt-1">
              Ready to bring your ideas to life.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors"
          >
            Get In Touch
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
