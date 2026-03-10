"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Dev",
    desc: "Laravel & PHP expert building robust REST APIs and scalable server-side solutions.",
  },
  {
    icon: Globe,
    title: "Frontend Dev",
    desc: "React, Next.js & Tailwind CSS for clean, responsive user interfaces.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "OOP, MVC & Domain Driven Design for maintainable, testable software.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimizing for speed, scalability, and reliability from day one.",
  },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "20+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-zinc-50 dark:bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-500 text-sm font-mono tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Passionate about{" "}
            <span className="text-indigo-500">scalable software</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold shadow-2xl shadow-indigo-500/25">
                <span className="text-8xl tracking-tight">RV</span>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-3xl border-2 border-indigo-500/25 dark:border-indigo-500/20 -z-10" />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-4 -right-8 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-xl rounded-2xl px-4 py-2 text-sm font-semibold text-black dark:text-white"
              >
                🚀 Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-5">
              Hi, I&apos;m Ravindu — a Full Stack Web Developer
            </h3>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a passionate full-stack developer with hands-on
                experience building and deploying scalable web applications. My
                journey started with PHP and Laravel, which became the
                foundation of my backend expertise.
              </p>
              <p>
                I specialize in building robust REST APIs with Laravel,
                developing responsive frontends with React and modern CSS
                frameworks, and integrating WordPress/WooCommerce solutions for
                e-commerce businesses. I believe in clean architecture, Domain
                Driven Design, and writing maintainable code.
              </p>
              <p>
                Currently an Associate Software Engineer, I&apos;ve contributed
                to multi-branch sports ERP systems, e-commerce platforms, and
                enterprise web applications.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-full font-medium transition-colors"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#"
                className="px-6 py-2.5 border border-black/12 dark:border-white/12 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white text-sm rounded-full font-medium transition-colors hover:border-black/25 dark:hover:border-white/25"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10"
            >
              <div className="text-4xl font-bold text-black dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={20} />
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
