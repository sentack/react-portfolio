"use client";

import { motion } from "framer-motion";

function Work({ position, company, location, type, duration }) {
  const typeBadgeClass = () => {
    const t = type.toLowerCase();
    if (t === "fulltime" || t === "full time")
      return "border-zinc-600 text-zinc-400";
    if (t === "part-time") return "border-zinc-700 text-zinc-500";
    if (t === "internship") return "border-zinc-700 text-zinc-500";
    return "border-zinc-800 text-zinc-600";
  };

  return (
    <motion.article
      className="relative pl-8 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-900 group-last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-px h-5 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full border border-zinc-600 bg-black -ml-[3px]" />
      </div>

      <div className="border border-zinc-900 hover:border-zinc-700 bg-zinc-950/50 p-5 transition-colors duration-300 group-hover:bg-zinc-950">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <h3 className="text-sm font-semibold text-white leading-snug">
            {position}
          </h3>
          <span
            className={`text-xs border px-2 py-0.5 shrink-0 ${typeBadgeClass()}`}
          >
            {type}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-x-5 gap-y-1 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 text-zinc-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              />
            </svg>
            {company}
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 text-zinc-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {location}
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 text-zinc-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {duration}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default Work;
