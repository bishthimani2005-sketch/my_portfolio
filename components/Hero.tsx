"use client";

import React from "react";
import { profileData } from "@/data/profile";
import {
  FileDown,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Sparkles,
  ArrowDown,
  Database,
  TableProperties,
  BarChart,
} from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal, stats } = profileData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden data-grid-bg">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>Available for Entry-Level Roles</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-slate-600 lowercase font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                {personal.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
              Hi, I&apos;m <span className="text-sky-600">{personal.name}</span>
            </h1>

            <div className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-700 mb-4">
              <span>{personal.role}</span>
              <span className="text-slate-300">|</span>
              <span className="text-sky-700 font-medium text-lg">Business Insight & Analytics</span>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {personal.careerObjective}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href={personal.resumeUrl}
                download="Himani_Bisht_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-md shadow-sky-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all hover:border-slate-400"
              >
                <Mail className="w-4 h-4 text-sky-600" />
                Get in Touch
              </a>
            </div>

            {/* Quick Contact & Profile Icons */}
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <span className="font-semibold text-slate-400 uppercase text-xs tracking-wider mr-1">
                Direct Links:
              </span>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email to Himani"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-2xs transition-colors"
                title={personal.email}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personal.phone}`}
                aria-label="Call Himani"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-2xs transition-colors"
                title={personal.phone}
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Himani's GitHub"
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-2xs transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800 text-white relative overflow-hidden">
              {/* Header inside simulated dashboard */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">analyst_overview.dashboard</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800/60">
                  LIVE STATUS
                </span>
              </div>

              {/* Data Visualization Widget: Simulated Interactive Sparkline */}
              <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Analytical Stack Efficiency</span>
                    <span className="text-2xl font-bold tracking-tight text-white">4 Core Technologies</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-800/50">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Industry Ready</span>
                  </div>
                </div>

                {/* Decorative SVG Trendline with Animated Stroke */}
                <div className="h-16 w-full flex items-end pt-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" fill="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 Q40,35 80,42 T160,25 T240,15 T300,8"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,50 Q40,35 80,42 T160,25 T240,15 T300,8 L300,60 L0,60 Z"
                      fill="url(#chartGradient)"
                    />
                    <circle cx="300" cy="8" r="4" fill="#38bdf8" className="animate-ping" />
                    <circle cx="300" cy="8" r="4" fill="#0284c7" />
                  </svg>
                </div>
              </div>

              {/* Verified Snapshot KPIs */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-sky-400 mb-1">
                    <TableProperties className="w-4 h-4" />
                    <span className="text-xs font-medium text-slate-300">Spreadsheet & SQL</span>
                  </div>
                  <div className="text-base font-bold text-white">Data Modeling</div>
                  <div className="text-[11px] text-slate-400">VLOOKUP, Pivot, Joins</div>
                </div>

                <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <BarChart className="w-4 h-4" />
                    <span className="text-xs font-medium text-slate-300">Power BI & Python</span>
                  </div>
                  <div className="text-base font-bold text-white">Visual BI & EDA</div>
                  <div className="text-[11px] text-slate-400">DAX, KPIs, Pandas</div>
                </div>
              </div>

              {/* Real Factual Badges Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  CBITSS Certified
                </span>
                <span>Chandigarh, IN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
