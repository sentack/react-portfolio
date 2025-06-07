"use client";

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { logos, socialMediaUrl } from "../Details";

function Header({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#8b5cf6",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto md:flex justify-between  pt-4 max-width">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <motion.img
              className="w-14 h-14 rounded-full border-2 border-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              src={logos.logogradient}
              alt="logo"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </NavLink>

          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            {/* <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.div>
            </motion.button> */}

            <motion.div
              onClick={toggleClass}
              className="cursor-pointer md:hidden p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="stroke-gray-700 dark:stroke-white"
                width="25"
                height="20"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              >
                <path
                  d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          <nav className={`${!isOpen ? "hidden" : "block"} md:block`}>
            <motion.ul
              className="dark:text-light-content font-medium md:flex items-center md:space-x-8 md:mr-10 text-center md:text-left"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.1 }}
            >
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/Skills", label: "Skills" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.to}
                  className="pb-2 md:pb-0"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <NavLink
                    to={link.to}
                    onClick={toggleClass}
                    className={({ isActive }) =>
                      `relative px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-purple-600 dark:text-purple-400 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm"
                          : "hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                className="pb-2 md:pb-0"
                variants={linkVariants}
                whileHover="hover"
              >
                <a
                  href="resume.pdf"
                  download="resume.pdf"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  Resume
                </a>
              </motion.li>
            </motion.ul>

            <motion.ul
              className="flex justify-center md:justify-end items-center my-5 md:my-0 md:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { href: twitter, icon: "twitter" },
                { href: linkdein, icon: "linkedin" },
                { href: github, icon: "github" },
              ].map((social, index) => (
                <motion.li key={social.icon}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-2 rounded-full backdrop-blur-sm hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon === "twitter" && (
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      )}
                      {social.icon === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                      {social.icon === "github" && (
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      )}
                    </svg>
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
