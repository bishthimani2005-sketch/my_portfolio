"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { motion } from "framer-motion";

export default function Contact() {
  const { personal } = profileData;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    /*
     * FRONTEND-ONLY DEMO IMPLEMENTATION:
     * To wire this form to a live backend email receiver, integrate with:
     * 1. Formspree (https://formspree.io)
     * 2. EmailJS (https://www.emailjs.com)
     * 3. Next.js Server Action / Resend API route
     */
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Open to entry-level Data Analyst roles, internships, and data-driven discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-slate-900 text-white rounded-2xl p-7 shadow-lg border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Reach Out Directly</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Feel free to email me, call me directly, or view my repositories on GitHub. I typically respond promptly.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Email Address
                    </span>
                    <span className="text-sm font-medium text-white break-all">{personal.email}</span>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Phone Number
                    </span>
                    <span className="text-sm font-medium text-white">{personal.phoneFormatted}</span>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      GitHub Profile
                    </span>
                    <span className="text-sm font-medium text-white">
                      github.com/{personal.githubUsername}
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/50 border border-slate-700/40">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Current Location
                    </span>
                    <span className="text-sm font-medium text-white">{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form UI (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 dashboard-card rounded-2xl p-7 sm:p-8 border border-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Message</h3>
            <p className="text-xs text-slate-500 mb-6">
              Have an opening or a query? Drop a message and I will get back to you shortly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900 mb-1">Message Received!</h4>
                <p className="text-xs text-emerald-700 mb-4">
                  Thank you for reaching out. I will respond to your email as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Entry-Level Data Analyst Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hi Himani, we reviewed your profile and would love to connect..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    * Directly triggers front-end confirmation demo.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 disabled:bg-slate-400 rounded-xl shadow-md shadow-sky-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
