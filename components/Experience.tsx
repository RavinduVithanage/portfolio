"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Absterco Digital Solution (PVT) LTD",
    location: "Sri Lanka",
    period: "2024 – Present",
    type: "Full-time",
    description: [
      "Building and maintaining multi-branch ERP systems for sports centers, handling complex booking and financial workflows.",
      "Designing and implementing RESTful APIs with Laravel following clean architecture and DDD principles.",
      "Developing responsive frontend interfaces and integrating third-party payment and notification services.",
      "Collaborating with cross-functional teams using agile methodologies to deliver high-quality software on time.",
    ],
    tech: ["Laravel", "PHP", "React", "MySQL", "REST API", "Git"],
    current: true,
  },
  {
    title: "Software Engineer Trainee",
    company: "Sanmark Solutions (PVT) LTD",
    location: "Sri Lanka",
    period: "2023 – 2024",
    type: "Internship",
    description: [
      "Developed and maintained e-commerce platforms using Laravel, implementing new features and resolving production bugs.",
      "Built WordPress/WooCommerce solutions with custom plugin functionality and payment gateway integrations.",
      "Implemented customer registration and approval workflows for B2B e-commerce platforms.",
      "Gained hands-on experience with MVC architecture, OOP principles, and agile development practices.",
    ],
    tech: ["Laravel", "WordPress", "WooCommerce", "PHP", "MySQL", "jQuery"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 text-sm font-mono tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Work Experience
          </h2>
          <p className="text-zinc-500 mt-4 max-w-md mx-auto text-sm">
            Building real-world experience through impactful software projects.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-6 bottom-6 w-px bg-linear-to-b from-indigo-500 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-7 -translate-x-1/2 items-center justify-center">
                  <div
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-colors ${
                      exp.current
                        ? "border-indigo-500 bg-indigo-500/10"
                        : "border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900"
                    }`}
                  >
                    <Briefcase
                      size={14}
                      className={
                        exp.current ? "text-indigo-500" : "text-zinc-500"
                      }
                    />
                  </div>
                </div>

                <div
                  className={`p-7 rounded-3xl border transition-all hover:shadow-lg ${
                    exp.current
                      ? "border-indigo-500/25 bg-indigo-50/50 dark:bg-indigo-500/5 hover:border-indigo-500/40"
                      : "border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-white/5 hover:border-indigo-500/25 dark:hover:border-indigo-500/25"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-lg font-bold text-black dark:text-white">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 text-xs bg-indigo-500 text-white rounded-full font-medium">
                            Current
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 text-xs bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-zinc-500">
                        <MapPin size={11} />
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-zinc-500 shrink-0 bg-zinc-100 dark:bg-white/5 px-3 py-1.5 rounded-full">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((point, pi) => (
                      <li
                        key={pi}
                        className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-white dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
