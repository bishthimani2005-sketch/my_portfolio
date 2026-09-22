"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Award, Layers, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const { personal, stats } = profileData;

  const statIcons = [Award, Layers, GraduationCap, CheckCircle2];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Career Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About &amp; Career Objective
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A numbers-forward, detail-oriented approach to understanding business challenges.
          </p>
        </div>

        {/* Narrative & Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
              Bridging Raw Data &amp; Business Clarity
            </h3>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
              {personal.bio}
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Equipped with a Bachelor of Science degree and rigorous industry training from the{" "}
              <strong className="text-slate-900 font-semibold">
                CBITSS Data Analytics Certification
              </strong>
              , I specialize in the foundational pillars of analytics: data cleaning, structured SQL queries, dynamic Excel modeling, and intuitive Power BI dashboarding. My objective is to bring discipline, analytical accuracy, and a strong drive for learning to a forward-thinking, data-driven organization.
            </p>

            {/* Core Values / Principles */}
            <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Data Accuracy
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">Zero tolerance for unverified numbers</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Structured Logic
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">Clear models and documented queries</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Continuous Learner
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">Quick to adapt to new toolchains</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Profile Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-lg mb-4">
              HB
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{personal.name}</h3>
            <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider mb-4">
              {personal.role} ({personal.badge})
            </p>

            <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Location</span>
                <span className="font-semibold text-white">{personal.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Education</span>
                <span className="font-semibold text-white">B.Sc. (2022–2025)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Training</span>
                <span className="font-semibold text-white">CBITSS Analytics</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Status</span>
                <span className="font-semibold text-emerald-400">Ready to Interview</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Factual Stats Row (Real Numbers Only) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="dashboard-card rounded-xl p-5 border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-800 leading-snug">{item.label}</div>
                <div className="text-xs text-slate-500 mt-1">{item.subtext}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
