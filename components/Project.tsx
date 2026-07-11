"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

type ProjectCategory = "All" | "AI/ML" | "Web Apps";

const projectData = [
  {
    title: "AI App Compiler",
    desc: "A multi-stage AI pipeline for converting Natural Language prompts into complete, validated, executable application schemas including UI, API, database, and auth layers.",
    tags: ["LangGraph", "Groq LLM", "FastAPI", "Pydantic v2" , "Render"],
    github: "https://github.com/SSrushti-s/ai-app-compiler",
    demo: "https://ai-app-compiler-3usm.onrender.com/ui",
    category: "AI/ML" as ProjectCategory
  },
  {
    title: "AI Resume Reviewer",
    desc: "An AI-powered web application tool extracts content from a user's PDF resume, analyzes it against a target job description, and provides a structured JSON evaluation including a match percentage score, identified skill gaps, and critical recommendations.",
    tags: ["Streamlit", "LangChain", "Groq Cloud", "pypdf" , "Vercel"],
    github: "https://github.com/SSrushti-s/ai-resume-reviewer",
    demo: "https://ai-resume-reviewer-7mdbo4mgsvcg6mqklvgpph.streamlit.app/",
    category: "AI/ML" as ProjectCategory
  },
  {
    title: "Recruiting CRM",
    desc: "A highly optimized, full-stack Candidate Relationship Management (CRM) platform designed for tech professionals to manage high-volume job search pipelines in real-time.",
    tags: ["Next.js", "Prisma", "TypeScript", "Supabase PostgreSQL", "TailwindCSS"],
    github: "https://github.com/SSrushti-s/Recruit_CRM",
    demo: "https://recruit-crm.vercel.app/",
    category: "Web Apps" as ProjectCategory
  },
  {
    title: "FoodDel",
    desc: "A full-stack food delivery web application that allows users to place orders, manage their cart and track delivery status in real time.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/SSrushti-s/FoodDel",
    demo: "https://fooddel-frontend-f4wo.onrender.com/",
    category: "Web Apps" as ProjectCategory
  }
  
];

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const categories: { label: ProjectCategory; file: string }[] = [
  { label: "All", file: "All projects" },
  { label: "AI/ML", file: "AI/ML" },
  { label: "Web Apps", file: "Web Apps" }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("All");

  const filteredProjects = activeTab === "All"
    ? projectData
    : projectData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card shadow-lg overflow-hidden flex flex-col"
        >
          {/* Window Header with IDE tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-muted/10 border-b border-border/50">
            {/* Dots + Section Label */}
            <div className="flex items-center gap-2 px-6 py-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-3">Projects</span>
            </div>

            {/* IDE-style open tabs */}
            <div className="flex flex-wrap overflow-x-auto self-end">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(cat.label)}
                  className={`px-4 py-2 text-xs font-mono border-t-2 transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === cat.label
                      ? "bg-card border-t-primary text-foreground border-r border-l border-border/60"
                      : "border-t-transparent text-muted-foreground hover:text-foreground hover:bg-muted/5 border-b border-border/30"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    cat.file.endsWith("projects") ? "bg-amber-400" :
                    cat.file.endsWith("ML") ? "bg-blue-400" :
                    cat.file.endsWith("Apps") ? "bg-cyan-400" : "bg-emerald-400"
                  }`} />
                  {cat.file}
                </button>
              ))}
            </div>
          </div>

          {/* Window Body */}
          <div className="p-8">            
            <motion.div
              layout
              className="grid md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={project.title}
                    className="p-6 rounded-2xl border border-border bg-muted/5 shadow-sm hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Category Badge */}
                      <span className="text-[10px] font-mono font-semibold text-primary/80 uppercase tracking-wider">
                        {project.category}
                      </span>
                      
                      <h3 className="text-xl font-bold mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                        {project.desc}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] bg-muted/15 border border-border text-muted-foreground rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-6 pt-4 border-t border-border/30">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}