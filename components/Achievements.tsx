"use client";
import { motion } from "framer-motion";

const achievements = [
   {
    title: "Winner at GDG event",
    org: "JSSATE",
    date: "2026",
    Link: "https://www.linkedin.com/posts/srushti-s-130752281_gdg-innovation-techcommunity-ugcPost-7437185200700145664-zD_0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEShxzQBJNG49vhQ0pTL7nLitHQXZ6GD_kE",
    desc: "Finalist in Selenite tech event conducted by GDG."
  },
  {
    title: "WebWizards 2nd Runner Up",
    org: "JSSATE",
    date: "2025",
    Link: "https://www.linkedin.com/posts/srushti-s-130752281_techjourney-webdevelopment-hackathonexperience-share-7321578414052724736-ULd9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEShxzQBJNG49vhQ0pTL7nLitHQXZ6GD_kE",
    desc: "Participated in WebWizards tech event and built a sleek web app to support small businesses"
  },
  {
    title: "Leetcode 50 days Badge",
    org: "Leetcode",
    date: "2025",
    Link: "https://leetcode.com/medal/?showImg=0&id=7552119&isLevel=false",
    desc: "Consistently solved 100+ DSA problems in Leetcode."
  },
  {
    title: "Python Certificate",
    org: "Hackerrank",
    date: "2024",
    Link: "https://www.hackerrank.com/certificates/iframe/7d6ea4a26696",
    desc: "Acheived a Python certificate after passing through some tough coding assessments in Python."
  },
  {
    title: "API Fundamental Student Expert",
    org: "Postman",
    date: "2024",
    Link: "https://www.linkedin.com/posts/srushti-s-130752281_postman-api-certificate-activity-7256148370484862976-U-Fl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEShxzQBJNG49vhQ0pTL7nLitHQXZ6GD_kE",
    desc: "Learnt about RESTful APIs and how to handle HTTP requests and Postman."
  }
];

export default function Achievements() {
  return (
    <section className="py-24 bg-slate-900/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Achievements & Recognition</h2>
        
        {/* Carousel Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-75 md:min-w-100 snap-center bg-slate-950 p-8 rounded-3xl border border-slate-800"
            >
              <span className="text-blue-500 font-mono text-sm uppercase tracking-widest">{item.date}</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">{item.title}</h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">{item.org}</p>
              <p className="text-slate-400 leading-relaxed italic">"{item.desc}"</p>
              <p className="text-purple-500 leading-relaxed italic"><a href={item.Link}>View here</a></p>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-slate-500 text-sm mt-4 italic">
          Scroll horizontally to view more →
        </p>
      </div>
    </section>
  );
}