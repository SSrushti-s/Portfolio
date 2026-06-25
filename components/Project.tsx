"use client";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "AI App Compiler",
    desc: "A multi-stage AI pipeline for converting Natural Language prompts into complete, validated, executable application schemas including UI, API, database, and auth layers.",
    tags: ["LangGraph", "Groq LLM (llama-3.3-70b) ", "FastAPI", "Pydantic v2" , "Render"],
    github: "https://github.com/SSrushti-s/ai-app-compiler",
    demo: "https://ai-app-compiler-3usm.onrender.com/ui"
  },
  {
    title: "AI Resume Reviewer",
    desc: "An AI-powered web application tool extracts content from a user's PDF resume, analyzes it against a target job description, and provides a structured JSON evaluation including a match percentage score, identified skill gaps, and critical recommendations.",
    tags: ["LangGraph", "Groq LLM (llama-3.3-70b) ", "FastAPI", "Pydantic v2" , "Render"],
    github: "https://github.com/SSrushti-s/ai-resume-reviewer",
    demo: "https://ai-resume-reviewer-7mdbo4mgsvcg6mqklvgpph.streamlit.app/"
  },
  {
    title: "Recruiting CRM",
    desc: "A highly optimized, full-stack Candidate Relationship Management (CRM) platform designed for tech professionals to manage high-volume job search pipelines in real-time.",
    tags: ["Next.js","Prisma", "TypeScript", "Supabase PostgreSQL", "TailwindCSS"],
    github: "https://github.com/SSrushti-s/Recruit-CRM",
    demo: "https://recruit-crm.vercel.app/"
  },
  {
    title: "Email Triage OpenEnv",
    desc: "A standardized AI environment for evaluating email management agents.",
    tags: ["FastAPI", "Docker", "OpenEnv", "Python"],
    github: "https://github.com/SSrushti-s/OpenEnv",
    demo: "https://huggingface.co/spaces/srushtis16/mywork"
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400">{project.title}</h3>
              <p className="text-slate-400 mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a href={project.demo} className="text-blue-400 font-medium hover:text-blue-300 transition-colors">Live Demo →</a>
                <a href={project.github} className="text-slate-500 hover:text-white transition-colors">Source Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}