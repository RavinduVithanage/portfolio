"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, MoveRight } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/RavinduVithanage",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/ravindu-vithanage",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:ravindu@example.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0f]"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-40 w-150 h-150 rounded-full bg-indigo-500/8 dark:bg-indigo-500/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-125 h-125 rounded-full bg-violet-500/8 dark:bg-violet-500/12 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-75 rounded-full bg-indigo-400/5 dark:bg-indigo-400/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-black dark:text-white mb-3 leading-[1.05]"
        >
          Ravindu
          <br />
          <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
            Vithanage
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mt-6 font-medium"
        >
          Full Stack Web Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-zinc-400 dark:text-zinc-500 mt-4 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          I build scalable web applications — from robust Laravel backends and
          REST APIs to polished React frontends.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/30"
          >
            View Projects
            <MoveRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-black/12 dark:border-white/12 hover:border-black/25 dark:hover:border-white/25 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-black/10 dark:border-white/10 text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 dark:text-zinc-600"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
