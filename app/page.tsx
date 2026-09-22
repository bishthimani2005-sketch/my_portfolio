import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certification from "@/components/Certification";
import AreasOfFocus from "@/components/AreasOfFocus";
import Strengths from "@/components/Strengths";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certification />
        <AreasOfFocus />
        <Strengths />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
