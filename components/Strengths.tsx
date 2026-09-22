"use client";

import React from "react";
import { profileData, StrengthItem } from "@/data/profile";
import { Zap, Languages, ShieldCheck, Users2, Star } from "lucide-react";
import { motion } from "framer-motion";

const strengthIcons = {
  Zap: Zap,
  Languages: Languages,
  ShieldCheck: ShieldCheck,
  Users2: Users2,
};

export default function Strengths() {
  const { strengths } = profileData;

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 text-amber-500" />
            <span>Work Ethic &amp; Attributes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Personal Strengths
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((item: StrengthItem, idx: number) => {
            const IconComponent = strengthIcons[item.iconName] || Star;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="dashboard-card rounded-xl p-5 border border-slate-200 bg-white"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-3.5">
                  <IconComponent className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
