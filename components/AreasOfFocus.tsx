"use client";

import React from "react";
import { profileData, FocusArea } from "@/data/profile";
import {
  Sparkles,
  Database,
  LayoutDashboard,
  FileSpreadsheet,
  TrendingUp,
  Target,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const focusIcons = {
  Sparkles: Sparkles,
  Database: Database,
  LayoutDashboard: LayoutDashboard,
  FileSpreadsheet: FileSpreadsheet,
  TrendingUp: TrendingUp,
};

export default function AreasOfFocus() {
  const { focusAreas } = profileData;

  return (
    <section id="focus" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5 text-sky-600" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Areas of Learning &amp; Focus
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Specific analytical workflows practiced and executed across projects and training modules.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area: FocusArea, index: number) => {
            const IconComponent = focusIcons[area.iconName] || Database;
            const isWide = index === 3 || index === 4; // layout styling

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`dashboard-card rounded-2xl p-6 border border-slate-200 flex flex-col justify-between ${
                  isWide ? "lg:col-span-1.5" : ""
                }`}
              >
                <div>
                  {/* Top Pill & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {area.toolPill}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>

                {/* Key Activities List */}
                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Execution Focus:
                  </span>
                  {area.keyActivities.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <ArrowRight className="w-3 h-3 text-sky-500 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
