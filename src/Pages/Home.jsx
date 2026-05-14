"use client";

import { motion } from "framer-motion";
import { personalDetails, socialMediaUrl } from "../Details";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

function Home() {
  const { name, tagline, img } = personalDetails;
  const { linkdein, github, twitter } = socialMediaUrl;

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "5+", label: "Projects Shipped" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="site-container relative z-10 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Label */}
            <motion.div {...fadeUp(0.1)}>
              <span className="section-label">Full-Stack Developer</span>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.2)}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
                Hi, I'm
                <br />
                <span className="italic font-light text-zinc-300">{name}</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-zinc-500 text-base leading-relaxed max-w-md"
              {...fadeUp(0.3)}
            >
              {tagline}
            </motion.p>

            {/* Bio snippet */}
            <motion.p
              className="text-zinc-400 text-sm leading-relaxed max-w-md border-l border-zinc-700 pl-4"
              {...fadeUp(0.35)}
            >
              Full-stack engineer building scalable, user-friendly web
              applications with the MERN stack.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              {...fadeUp(0.4)}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors duration-200"
              >
                View My Work
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
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-white hover:text-white transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-8 pt-4 border-t border-zinc-900"
              {...fadeUp(0.5)}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-600 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div className="flex items-center gap-4" {...fadeUp(0.55)}>
              {[
                { href: twitter, label: "TW" },
                { href: linkdein, label: "LI" },
                { href: github, label: "GH" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-zinc-600 hover:text-white tracking-widest uppercase transition-colors"
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Offset border decoration */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-zinc-800" />
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-zinc-900" />

              {/* Photo */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden border border-zinc-800">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-black border border-zinc-800 px-4 py-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs text-zinc-400 tracking-widest uppercase">
                  Available for work
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                  <span className="text-xs text-white font-medium">
                    Open to Opportunities
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="section-label">Scroll</span>
          <motion.div
            className="w-px h-10 bg-zinc-800"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
