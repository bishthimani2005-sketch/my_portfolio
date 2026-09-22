"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { ArrowUp, BarChart2, Mail, Phone } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  const { personal, navLinks } = profileData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-bold text-white block">{personal.name}</span>
              <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider">
                {personal.role} ({personal.badge})
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Contact Mini Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="hover:text-sky-400 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          <div>
            Built with <span className="text-slate-300 font-medium">Next.js, Tailwind CSS &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
