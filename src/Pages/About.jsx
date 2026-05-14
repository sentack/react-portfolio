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
    { icon: "✦", title: "Design", desc: "UI/UX & Graphics" },
    { icon: "✦", title: "Development", desc: "Full-stack Solutions" },
    { icon: "✦", title: "Mobile", desc: "Flutter & Dart" },
    { icon: "✦", title: "Performance", desc: "Optimized & Fast" },
  ];

  return (
    <section id="about" className="py-32">
      <div className="site-container">
        {/* Section header */}
        <motion.div className="mb-20" {...fadeUp}>
          <span className="section-label">01 / About</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
            About
            <span className="italic font-light text-zinc-400"> Me.</span>
          </h2>
        </motion.div>

        {/* Bio + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28">
          <motion.div className="space-y-6" {...fadeUp}>
            <p className="text-zinc-300 leading-relaxed text-base">
              {personalDetails.about1}
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="border border-zinc-900 hover:border-zinc-700 p-4 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="text-zinc-600 text-xs mb-2 block">
                    {h.icon}
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    {h.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full border border-zinc-900" />
              <div className="w-64 h-72 sm:w-72 sm:h-80 overflow-hidden border border-zinc-800">
                <img
                  src={personalDetails.img}
                  alt="Sena Takele"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-black border border-zinc-800 px-4 py-2">
                <span className="text-xs text-zinc-500 block">BSc</span>
                <span className="text-xs text-white font-medium">
                  Software Engineering
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.div className="mb-10" {...fadeUp}>
            <span className="section-label">Experience</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-2">
              Work History
            </h3>
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
