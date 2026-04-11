"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me & Experience</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-slate-300 space-y-4">
            <p>
              I'm a passionate full-stack developer who love to contribute to open source projects. I love exploring different tools , frameworks and try to be upto date with the technical world.
              When I'm not coding, you'll find me volunteering for events , participating in hackathons or lurking in Hackerrank.
            </p>
            <p>
              Currently, I'm focused on building AI agents and automation which is a whole new world for exploring than the full-stack domain. I'm trying to learn more about frameworks like GADK , Langgraph and LlamaIndex.
            </p>
          </div>
          
          <div className="border-l-2 border-blue-500 pl-6 space-y-8">

            <div>
              <h3 className="text-xl font-bold">Front End Web Development Intern</h3>
              <p className="text-sm text-slate-500">Sep 2025- Oct 2025</p>
              <p className="text-slate-400 mt-2">Edunet Foundation</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Machine Learning Intern</h3>
              <p className="text-sm text-slate-500">Jul 2025-Sep 2025</p>
              <p className="text-slate-400 mt-2">Prinston Smart Engineers</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold">Solutions Architect Job Simulation</h3>
              <p className="text-sm text-slate-500">Jun 2025 - Jun 2025</p>
              <p className="text-slate-400 mt-2">Amazon Web Services (AWS)</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Open Source Contributor</h3>
              <p className="text-sm text-slate-500">Jan 2025 - Mar 2025</p>
              <p className="text-slate-400 mt-2">Social Winter of Code</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Open Source Contributor</h3>
              <p className="text-sm text-slate-500">Oct 2024 - Nov 2024</p>
              <p className="text-slate-400 mt-2">Girlscript Summer of Code</p>
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}