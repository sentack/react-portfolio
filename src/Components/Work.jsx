"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Work({ position, company, location, type, duration, details }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDetails = details && details.length > 0;

  const typeBadgeClass = () => {
    const t = type.toLowerCase();
    if (t === "fulltime" || t === "full-time")
      return "border-zinc-600 text-zinc-400";
    if (t === "part-time") return "border-zinc-700 text-zinc-500";
    if (t === "internship") return "border-zinc-700 text-zinc-500";
    if (t === "freelance") return "border-zinc-700 text-zinc-500";
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
      <div className="absolute left-0 top-[1.1rem] flex items-center justify-center">
        <div
          className={`w-2 h-2 rounded-full border bg-black -ml-[3px] transition-colors duration-300 ${
            isOpen ? "border-white" : "border-zinc-600"
          }`}
        />
      </div>

      <div
        className={`border border-zinc-900 bg-zinc-950/50 transition-all duration-300 ${
          hasDetails
            ? "cursor-pointer hover:border-zinc-700 hover:bg-zinc-950"
            : ""
        } ${isOpen ? "border-zinc-700 bg-zinc-950" : ""}`}
        onClick={() => hasDetails && setIsOpen(!isOpen)}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 p-5">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="text-sm font-semibold text-white leading-snug">
                {position}
              </h3>
              <span
                className={`text-xs border px-2 py-0.5 shrink-0 ${typeBadgeClass()}`}
              >
                {type}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-3 h-3 text-zinc-700"
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
                  className="w-3 h-3 text-zinc-700"
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
                  className="w-3 h-3 text-zinc-700"
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

          {/* Chevron */}
          {hasDetails && (
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0 mt-0.5"
            >
              <svg
                className="w-4 h-4 text-zinc-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {isOpen && hasDetails && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0 border-t border-zinc-900">
                <ul className="space-y-2 pt-4">
                  {details.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <span className="text-zinc-700 shrink-0 mt-0.5">—</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default Work;
