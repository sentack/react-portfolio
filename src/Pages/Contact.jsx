"use client";

import { motion } from "framer-motion";
import Form from "../Components/Form";
import { contactDetails, socialMediaUrl } from "../Details";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function Contact() {
  const { email, phone } = contactDetails;
  const { linkdein, github, twitter } = socialMediaUrl;

  const faqs = [
    {
      q: "What's your typical response time?",
      a: "Usually within 24 hours on business days.",
    },
    {
      q: "Do you work on weekends?",
      a: "I'm flexible — I can accommodate urgent projects.",
    },
    {
      q: "Preferred communication?",
      a: "Email for detailed discussions, calls for quick clarifications.",
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes, I provide post-launch support and maintenance.",
    },
  ];

  const socials = [
    { href: twitter, Icon: TwitterIcon, label: "Twitter" },
    { href: linkdein, Icon: LinkedInIcon, label: "LinkedIn" },
    { href: github, Icon: GitHubIcon, label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-32">
      <div className="site-container">
        {/* Header */}
        <motion.div className="mb-16" {...fadeUp}>
          <span className="section-label">04 / Contact</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
            Let's Work
            <span className="italic font-light text-zinc-400"> Together.</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md">
            Ready to start your next project? I'm always excited to work on
            new challenges and bring ideas to life.
          </p>
        </motion.div>

        {/* Large email CTA */}
        <motion.div
          className="mb-16 py-10 border-t border-b border-zinc-900"
          {...fadeUp}
        >
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-end gap-4 hover:opacity-70 transition-opacity"
          >
            <span className="text-2xl md:text-4xl font-bold text-white leading-none">
              {email}
            </span>
            <svg
              className="w-6 h-6 text-zinc-600 group-hover:text-white mb-1 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Send a Message</h3>
              <p className="text-sm text-zinc-500 mt-1">
                Fill in the form and I'll be in touch.
              </p>
            </div>
            <Form />
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Contact details */}
            <div className="border border-zinc-900 p-6 space-y-5">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                Contact Details
              </h4>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-zinc-600 block mb-1">Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-white hover:text-zinc-300 transition-colors"
                  >
                    {email}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-zinc-600 block mb-1">Phone</span>
                  <a
                    href={`tel:${phone}`}
                    className="text-sm text-white hover:text-zinc-300 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-zinc-600 block mb-1">Location</span>
                  <span className="text-sm text-white">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="border border-zinc-900 p-6">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                Social
              </h4>
              <div className="flex gap-3">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="w-9 h-9 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 flex items-center justify-center transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="border border-zinc-900 p-6">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Available for Projects
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Currently accepting new opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          className="mt-20 border-t border-zinc-900 pt-16"
          {...fadeUp}
        >
          <div className="mb-10">
            <span className="section-label">FAQ</span>
            <h3 className="text-2xl font-bold mt-2">Common Questions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-black p-6 hover:bg-zinc-950 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-semibold text-white mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
