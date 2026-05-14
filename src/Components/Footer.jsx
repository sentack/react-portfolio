"use client";

import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-zinc-900 py-8"
    >
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600 tracking-wide">
          © 2025 Sena Takele. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">
          Designed &amp; built by{" "}
          <a
            href="https://sentack-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Sentack
          </a>
        </p>
        <div className="flex items-center gap-2 text-xs text-zinc-700">
          <span>Love</span>
          <span>·</span>
          <span>Coffee</span>
          <span>·</span>
          <span>Code</span>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
