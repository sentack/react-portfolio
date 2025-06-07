"use client";

import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="relative mt-20 py-2 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>

      <div className="relative container mx-auto max-width">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-white/90 text-sm md:text-base">
            Designed and Coded with{" "}
            <motion.span
              className="text-red-400 inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              ❤️
            </motion.span>{" "}
            by{" "}
            <motion.a
              className="font-semibold text-purple-100 hover:text-white transition-colors"
              href="https://sentack-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ scale: 1.05 }}
            >
              Sentack
            </motion.a>
          </p>

          <motion.div
            className="mt-2 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-purple-100">Love</span>
            <span className="text-white/60">•</span>
            <span className="text-blue-100">Coffee</span>
            <span className="text-white/60">•</span>
            <span className="text-indigo-100">Code</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
