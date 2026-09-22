"use client";

import React from "react";
import { profileData, TechnicalSkill } from "@/data/profile";
import {
  FileSpreadsheet,
  Database,
  BarChart3,
  Code2,
  Check,
  Languages,
  Sparkles,
  Zap,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";

const toolIcons = {
  FileSpreadsheet: FileSpreadsheet,
  Database: Database,
  BarChart3: BarChart3,
  Code2: Code2,
};

export default function Skills() {
  const { technicalSkills, softSkills, languages } = profileData;

  return (
    <section id="skills" className="py-20 bg-slate-50 relative data-dots-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Technical &amp; Professional Skills
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Categorized qualitatively based on verified competencies and practical training.
          </p>
        </div>

        {/* 3 Columns / Cards: Technical, Soft Skills, Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Technical Stack (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-sky-600" />
                <h3 className="text-lg font-bold text-slate-900">Technical Tools &amp; Methodologies</h3>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Core Tools vs Growing Skills
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {technicalSkills.map((skill: TechnicalSkill, idx: number) => {
                const IconComponent = toolIcons[skill.iconName] || Database;
                const isCore = skill.category === "Core Tools";

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="dashboard-card rounded-xl p-5 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              isCore ? "bg-sky-50 text-sky-700" : "bg-teal-50 text-teal-700"
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 leading-tight">
                              {skill.name}
                            </h4>
                            <span className="text-xs text-slate-500">{skill.summary}</span>
                          </div>
                        </div>
                      </div>

                      {/* Qualitative Badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider ${
                            isCore
                              ? "bg-sky-100 text-sky-800 border border-sky-200"
                              : "bg-teal-100 text-teal-800 border border-teal-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isCore ? "bg-sky-600" : "bg-teal-600"
                            }`}
                          />
                          {skill.category}
                        </span>
                      </div>

                      {/* Topic Tags / Pills */}
                      <ul className="space-y-1.5">
                        {skill.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100"
                          >
                            <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Soft Skills & Languages (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card: Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="dashboard-card rounded-2xl p-6 border border-slate-200"
            >
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                <Zap className="w-4 h-4 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900">Soft Skills</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card: Languages */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="dashboard-card rounded-2xl p-6 border border-slate-200"
            >
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                <Languages className="w-4 h-4 text-sky-600" />
                <h3 className="text-base font-bold text-slate-900">Languages</h3>
              </div>

              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{lang.name}</h4>
                      <p className="text-xs text-slate-500">{lang.level}</p>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                      Fluent
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Verification Notice */}
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-1">
                Data Transparency Note:
              </strong>
              Skill representations reflect verified coursework, lab practice, and portfolio-ready training. No unverified years of experience or arbitrary percentages are used.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
