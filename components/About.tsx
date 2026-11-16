"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Award, Terminal, Cpu, Database, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Automations",
    icon: Cpu,
    skills: ["Google Antigravity SDK", "LangGraph", "LangChain", "LlamaIndex", "Groq LLM"],
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Backend & Systems",
    icon: Database,
    skills: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "Prisma", "Docker"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Frontend & UI",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Languages",
    icon: Terminal,
    skills: ["Python", "TypeScript", "JavaScript", "C", "Java", "SQL"],
    color: "from-emerald-500 to-teal-600",
  },
];

const timelineData = [
  {
    role: "Software Intern",
    org: "Bharat Electronics Ltd",
    date: "Oct 2026 - Nov 2026",
    desc: "Built a real-time weapon detection system (0.89 mAP50) using Python, PyTorch, OpenCV, and YOLO11n, supported by an automated Pandas pipeline that cleaned and standardized 9,000+ images for rapid threat alerting.",
    icon: Code2,
    color: "bg-indigo-600",
  },
  {
    role: "AI Engineer Intern",
    org: "The AI Signal",
    date: "Jul 2026 - Sep 2026",
    desc: "Engineered a zero-cost Python pipeline that automates real-time data ingestion from 600+ RSS feeds and YouTube channels using yt-dlp, capturing traceable metadata for 300+ daily sources without paid APIs.",
    icon: Cpu,
    color: "bg-purple-600",
  },
  {
    role: "Front End Web Development Intern",
    org: "Edunet Foundation",
    date: "Sep 2025 - Oct 2025",
    desc: "Built responsive frontend user interfaces and integrated modular components for web tools.",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    role: "Machine Learning Intern",
    org: "Prinston Smart Engineers",
    date: "Jul 2025 - Sep 2025",
    desc: "Worked on ML algorithms, data pipelines, and trained prediction models.",
    icon: Cpu,
    color: "bg-purple-500",
  },
  {
    role: "Solutions Architect Job Simulation",
    org: "Amazon Web Services (AWS)",
    date: "Jun 2025",
    desc: "Designed highly available, fault-tolerant cloud architectures and explored serverless technologies.",
    icon: Award,
    color: "bg-amber-500",
  },
  {
    role: "Open Source Contributor",
    org: "Social Winter of Code",
    date: "Jan 2025 - Mar 2025",
    desc: "Contributed to community projects, reviewed code, and refined application logic.",
    icon: Code2,
    color: "bg-emerald-500",
  },
  {
    role: "Open Source Contributor",
    org: "Girlscript Summer of Code",
    date: "Oct 2024 - Nov 2024",
    desc: "Participated in open-source development, optimized UI modules, and fixed pipeline bugs.",
    icon: Code2,
    color: "bg-rose-500",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-card/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Bio & Skills matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl border border-border bg-card shadow-lg overflow-hidden flex flex-col justify-between"
          >
            {/* Window Header */}
            <div className="flex items-center gap-2 px-6 py-4 bg-muted/10 border-b border-border/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-3">Skills</span>
            </div>

            {/* Window Body */}
            <div className="p-8 space-y-10 grow">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">My Tech Stack & Background</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I am a passionate software engineer focused on building highly responsive, scalable web applications
                  and collaborating on open source projects. I am deeply interested in exploring new tools, backend architectures,
                  and staying aligned with modern tech standards.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently, I am diving deep into the world of AI agents and orchestration frameworks like the Google Antigravity SDK, LangGraph, and LlamaIndex.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Skills Matrix</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {skillCategories.map((category) => (
                    <div
                      key={category.title}
                      className="p-4 rounded-2xl border border-border bg-muted/5 shadow-sm group hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className={`p-1.5 rounded-lg bg-linear-to-br ${category.color} text-white`}>
                          <category.icon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="font-semibold text-sm text-foreground">{category.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[10px] rounded-md bg-muted/10 border border-border text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl border border-border bg-card shadow-lg overflow-hidden flex flex-col"
          >
            {/* Window Header */}
            <div className="flex items-center gap-2 px-6 py-4 bg-muted/10 border-b border-border/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-3">Experience</span>
            </div>

            {/* Window Body */}
            <div className="p-8 grow">
              <div className="relative border-l-2 border-border pl-6 ml-4 space-y-8">
                {timelineData.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-10 top-1 w-7 h-7 rounded-full border-4 border-background flex items-center justify-center text-white ${item.color} shadow-sm group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-2.5 h-2.5" />
                    </div>

                    {/* Card content */}
                    <div className="p-5 rounded-2xl border border-border bg-muted/5 shadow-sm hover:border-primary/20 transition-all duration-300">
                      <span className="text-[10px] font-mono font-semibold tracking-wider text-primary uppercase">
                        {item.date}
                      </span>
                      <h4 className="text-base font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-xs font-semibold text-muted-foreground">
                        {item.org}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}