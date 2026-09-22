"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Award, Calendar, CheckCircle2, FileCheck, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Certification() {
  const { certification } = profileData;

  return (
    <section id="certification" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Certification
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Intensive, practical industry curriculum focused on real-world analytical execution.
          </p>
        </div>

        {/* Highlight Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="dashboard-card rounded-3xl p-8 sm:p-10 border-2 border-sky-600/20 bg-linear-to-b from-white to-slate-50/60 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Background Accent */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Card Top Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-600/25 shrink-0">
                <FileCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-md">
                    {certification.status}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">•</span>
                  <span className="text-xs font-semibold text-slate-500">{certification.institution}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {certification.title}
                </h3>
              </div>
            </div>

            {/* Timeline Period Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold self-start md:self-center shadow-2xs">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>{certification.period}</span>
            </div>
          </div>

          {/* Certification Description */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
            {certification.description}
          </p>

          {/* Two-Column Grid: Tools Covered & Core Learning Outcomes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            {/* Tools Covered (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-sky-600" />
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Hands-On Tools Covered
                </h4>
              </div>
              <div className="space-y-2.5">
                {certification.toolsCovered.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                  >
                    <span>{tool}</span>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Practical Lab
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Learning Outcomes (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Verified Learning Outcomes
                </h4>
              </div>
              <ul className="space-y-3">
                {certification.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
