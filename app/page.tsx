"use client";

import About from "../components/About";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import Projects from "../components/Project";
import Navbar from "../components/Navbar";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-28 pb-16 px-6">
        {/* Background Grid Pattern & Ambient Glows */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70" />
        
        {/* Animated ambient light blobs */}
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[120px] -z-10 animate-pulse duration-[10s]" />
        <div className="absolute top-[40%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-accent/10 blur-[100px] -z-10 animate-pulse duration-[8s]" />

        {/* Hero Dashboard Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: About/Terminal Card */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-8 rounded-3xl border border-border bg-card shadow-lg relative flex flex-col justify-between overflow-hidden"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center gap-2 px-6 py-4 bg-muted/10 border-b border-border/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-3">About</span>
            </div>

            {/* Terminal Window Body */}
            <div className="p-8 grow flex flex-col justify-between gap-6">
              <div className="space-y-4">
                
                {/* Reduced weight: font-black -> font-bold. Text color comes from `text-foreground` utility class. */}
                <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground">
                  Srushti
                </h1>
                
                <p className="text-base md:text-lg font-bold text-emerald-500 dark:text-emerald-400">
                  Computer Science Student & AI Developer
                </p>
                
                {/* Command Line Input */}
                 <div className="text-xs md:text-sm font-mono text-muted-foreground bg-muted/5 border border-border/30 rounded-xl px-4 py-3 flex items-center gap-2 flex-wrap">
                    <span className="text-accent inline-block">&quot;I am interested in </span>
                   <span className="text-accent inline-block">
                     <Typewriter
                       options={{
                         strings: ["Conversational AI", "Full Stack Development", "Agentic AI"],
                         autoStart: true,
                         loop: true,
                         delay: 75,
                         deleteSpeed: 50,
                         cursor: "█",
                         wrapperClassName: "text-accent",
                         cursorClassName: "text-emerald-400 animate-pulse",
                       }}
                     />
                   </span>
                   <span>&quot;</span>
                 </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4">
                  Motivated and detail-oriented computer science student with hands-on experience in building scalable web applications, designing intelligent agentic pipelines, and implementing workflow automations. Skilled in React, Next.js, Python, and frameworks like LangGraph and the Google Antigravity SDK. Passionate about solving complex architecture challenges and learning new automation frameworks.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="#projects"
                  className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-1.5"
                >
                  view-projects
                  <ArrowDownRight className="w-4 h-4" />
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 border border-border bg-muted/5 hover:bg-muted/10 text-foreground rounded-xl text-sm font-medium transition-all duration-300"
                >
                  About Me
                </a>
                <a
                  href="#achievements"
                  className="px-6 py-3 border border-border bg-muted/5 hover:bg-muted/10 text-foreground rounded-xl text-sm font-medium transition-all duration-300"
                >
                  Certificates
                </a>
              </div>
            </div>
          </motion.section>

          {/* Right Column: Avatar/Profile Card */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-4 rounded-3xl border border-border bg-card shadow-lg relative flex flex-col justify-center items-center p-8 min-h-87.5"
          >
            {/* Terminal Window Header */}
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-6 py-4 bg-muted/10 border-b border-border/50">
              <div className="flex gap-1.5">
                
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-3">Profile</span>
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-center justify-center mt-6">
              <div className="w-44 h-44 rounded-full border-4 border-primary/20 overflow-hidden relative shadow-md">
                <img
                  src="/avatar.jpg"
                  alt="Srushti profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-lg font-mono font-bold text-foreground mt-6">
                Srushti | AI Developer
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                CSE Student
              </p>
            </div>
          </motion.section>
        </div>

        {/* Page Sections wrapped as IDE components */}
        <About />
        <Projects />
        <Achievements />
        <Footer />
      </main>
    </>
  );
}