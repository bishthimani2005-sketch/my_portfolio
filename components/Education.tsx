"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const { education } = profileData;

  return (
    <section id="education" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education Timeline
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A strong scientific discipline and analytical foundation rooted in quantitative academics.
          </p>
        </div>

        {/* Vertical Timeline with Animated Line */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-sky-600 shadow-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              </div>

              {/* Education Card */}
              <div className="dashboard-card rounded-2xl p-6 sm:p-7 border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 flex items-center gap-1.5 mb-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {item.institution}
                      {item.boardOrStream && ` • ${item.boardOrStream}`}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{item.degree}</h3>
                  </div>

                  {/* Score & Period Badge */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.score}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
