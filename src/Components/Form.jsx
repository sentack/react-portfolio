"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactDetails } from "../Details";

function Form() {
  const { email, phone } = contactDetails;
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1800);
  };

  const inputClass =
    "w-full bg-transparent border border-zinc-800 text-white text-sm px-4 py-3 placeholder-zinc-700 focus:border-zinc-500 transition-colors duration-200 outline-none";

  return (
    <div>
      {submitted && (
        <motion.div
          className="mb-5 border border-zinc-700 p-4 text-sm text-zinc-300 flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Message sent successfully. I'll get back to you soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className={`${inputClass} resize-none`}
            placeholder="Tell me about your project or just say hello..."
          />
        </div>

        <div className="flex items-center justify-between pt-2 gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="w-4 h-4 spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone}`}
              title="Call"
              className="w-9 h-9 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <a
              href={`mailto:${email}`}
              title="Email"
              className="w-9 h-9 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
