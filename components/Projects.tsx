"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github: string;
  demo: string | null;
  gradient: string;
  hoverBorder: string;
  techColor: string;
};

const projects: Project[] = [
  {
    title: "Aspire Badminton ERP",
    description:
      "Multi-branch sports center management system featuring court booking, membership management, and payment processing. Built comprehensive REST APIs using Laravel to handle complex business logic across multiple branches.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "React"],
    category: "Laravel",
    github: "https://github.com/RavinduVithanage",
    demo: null,
    gradient: "from-indigo-500/10 to-violet-500/10",
    hoverBorder: "hover:border-indigo-500/30",
    techColor:
      "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20",
  },
  {
    title: "Promate E-Commerce Platform",
    description:
      "Laravel backend development for a feature-rich e-commerce platform. Implemented new product management features, resolved critical bugs, and improved system performance and code quality.",
    tech: ["Laravel", "PHP", "MySQL", "jQuery", "Bootstrap"],
    category: "Laravel",
    github: "https://github.com/RavinduVithanage",
    demo: null,
    gradient: "from-violet-500/10 to-purple-500/10",
    hoverBorder: "hover:border-violet-500/30",
    techColor:
      "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20",
  },
  {
    title: "OfficeBox E-Commerce Website",
    description:
      "Full-featured WordPress/WooCommerce website with a custom customer registration and approval workflow, enabling controlled B2B purchasing access and streamlined order management.",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS", "JavaScript"],
    category: "WordPress",
    github: "https://github.com/RavinduVithanage",
    demo: null,
    gradient: "from-blue-500/10 to-cyan-500/10",
    hoverBorder: "hover:border-blue-500/30",
    techColor:
      "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with Next.js, Tailwind CSS v4, and Framer Motion. Features dark/light mode, scroll animations, responsive design, and SEO optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "React",
    github: "https://github.com/RavinduVithanage/portfolio",
    demo: null,
    gradient: "from-emerald-500/10 to-teal-500/10",
    hoverBorder: "hover:border-emerald-500/30",
    techColor:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20",
  },
];

const filters = ["All", "Laravel", "WordPress", "React"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-32 bg-zinc-50 dark:bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-indigo-500 text-sm font-mono tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Featured Projects
          </h2>
          <p className="text-zinc-500 mt-4 max-w-md mx-auto text-sm">
            From enterprise ERPs to e-commerce platforms — built with care and
            shipped with confidence.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === filter
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:border-indigo-500/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={`group flex flex-col p-7 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 ${project.hoverBorder} bg-linear-to-br ${project.gradient} transition-all hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 text-zinc-400 dark:text-zinc-500 shrink-0 ml-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
                      >
                        <Github size={17} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${project.techColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/RavinduVithanage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 px-6 py-2.5 rounded-full transition-all"
          >
            <Github size={15} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
