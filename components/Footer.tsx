"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

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
  {
    icon: Mail,
    href: "mailto:ravindu@example.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-8 border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo */}
        <a href="#" className="text-base font-bold">
          <span className="text-black dark:text-white">Ravindu</span>
          <span className="text-indigo-500">.</span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-zinc-500 dark:text-zinc-600 order-last sm:order-0 text-center">
          © {new Date().getFullYear()} Ravindu Vithanage · Built with Next.js
          &amp; Tailwind CSS
        </p>

        {/* Socials + Back to top */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full border border-black/10 dark:border-white/10 text-zinc-500 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all hover:scale-110 ml-1"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
