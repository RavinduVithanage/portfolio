"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ravindu@example.com",
    href: "mailto:ravindu@example.com",
    color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ravindu Vithanage",
    href: "https://linkedin.com/in/ravindu-vithanage",
    color: "text-blue-500 bg-blue-50 dark:bg-blue-500/10",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-32 bg-zinc-50 dark:bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 text-sm font-mono tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-zinc-500 mt-4 max-w-md mx-auto">
            Have a project in mind or want to chat? I&apos;m currently open to
            new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              Say hello 👋
            </h3>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              I&apos;m available for freelance projects, full-time roles, and
              collaborative work. Drop me a message and I&apos;ll get back to
              you as soon as possible.
            </p>

            <div className="space-y-3 mb-8">
              {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform shrink-0`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-black dark:text-white">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-linear-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                🌍 Based in{" "}
                <strong className="text-black dark:text-white">
                  Sri Lanka
                </strong>
                , open to remote work worldwide. Typical response time:{" "}
                <strong className="text-black dark:text-white">
                  within 24 hours
                </strong>
                .
              </p>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-indigo-500/25"
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-emerald-600 dark:text-emerald-400 mt-4"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon. ✨
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
