"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    accent: "from-blue-500 to-cyan-500",
    barColor: "bg-blue-500",
    skills: [
      { name: "PHP", level: 90 },
      { name: "JavaScript", level: 82 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    title: "Frameworks",
    accent: "from-violet-500 to-purple-500",
    barColor: "bg-violet-500",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Tools",
    accent: "from-orange-500 to-amber-500",
    barColor: "bg-orange-500",
    skills: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 68 },
      { name: "Postman", level: 85 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    title: "Concepts",
    accent: "from-emerald-500 to-teal-500",
    barColor: "bg-emerald-500",
    skills: [
      { name: "OOP", level: 92 },
      { name: "MVC", level: 90 },
      { name: "REST API", level: 92 },
      { name: "Domain Driven Design", level: 78 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
  barColor,
}: {
  name: string;
  level: number;
  delay: number;
  barColor: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {name}
        </span>
        <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          className={`h-full ${barColor} rounded-full`}
        />
      </div>
    </div>
  );
}

const allSkillBadges = [
  "PHP",
  "JavaScript",
  "HTML",
  "CSS",
  "Laravel",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "Docker",
  "Postman",
  "MySQL",
  "OOP",
  "MVC",
  "REST API",
  "Domain Driven Design",
  "WordPress",
  "WooCommerce",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 text-sm font-mono tracking-widest uppercase mb-3">
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-zinc-500 mt-4 max-w-md mx-auto text-sm">
            A toolkit built through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="p-7 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-1.5 h-6 rounded-full bg-linear-to-b ${cat.accent}`}
                />
                <h3 className="font-bold text-lg text-black dark:text-white">
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    barColor={cat.barColor}
                    delay={catIndex * 0.1 + skillIndex * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10"
        >
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-500 text-center mb-5 uppercase tracking-widest font-mono">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {allSkillBadges.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 bg-white dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-full hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
