"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Code, ShieldCheck, ChevronLeft, ChevronRight, Link2 } from "lucide-react";

const achievements = [
  {
    title: "Winner at GDG event",
    org: "JSSATE",
    date: "2026",
    link: "https://www.linkedin.com/posts/srushti-s-130752281_gdg-innovation-techcommunity-ugcPost-7437185200700145664-zD_0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEShxzQBJNG49vhQ0pTL7nLitHQXZ6GD_kE",
    desc: "Finalist and winner in Selenite tech event conducted by GDG.",
    icon: Trophy,
    color: "from-amber-400 to-yellow-600",
  },
  {
    title: "WebWizards 2nd Runner Up",
    org: "JSSATE",
    date: "2025",
    link: "https://www.linkedin.com/posts/srushti-s-130752281_techjourney-webdevelopment-hackathonexperience-share-7321578414052724736-ULd9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEShxzQBJNG49vhQ0pTL7nLitHQXZ6GD_kE",
    desc: "Participated in WebWizards tech event and built a sleek web app to support small businesses.",
    icon: Award,
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Leetcode 50 days Badge",
    org: "Leetcode",
    date: "2025",
    link: "https://leetcode.com/medal/?showImg=0&id=7552119&isLevel=false",
    desc: "Consistently solved 100+ DSA problems on the Leetcode platform.",
    icon: Code,
    color: "from-orange-400 to-red-600",
  },
  {
    title: "Python Certificate",
    org: "Hackerrank",
    date: "2024",
    link: "https://www.hackerrank.com/certificates/iframe/7d6ea4a26696",
    desc: "Achieved Python certification after passing rigorous algorithmic coding assessments.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-600",
  },
  {
    title: "API Fundamental Student Expert",
    org: "Postman",
    date: "2024",
    link: "https://www.linkedin.com/posts/srushti-s-130752281_postman-api-certificate-activity-7256148370484862976-U-Fl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEShxzQBJNG49vhQ0pTL7nLitHQXZ6GD_kE",
    desc: "Learnt RESTful APIs structure, handled automated HTTP requests, and mastered Postman collections.",
    icon: Award,
    color: "from-purple-400 to-violet-600",
  },
];

export default function Achievements() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && carouselRef.current) {
        setWidth(trackRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="achievements" className="py-20 relative bg-card/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card shadow-lg overflow-hidden flex flex-col"
        >
          {/* Window Header */}
          <div className="flex items-center justify-between bg-muted/10 border-b border-border/50 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-3">Achievements</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-1.5 rounded-lg border border-border bg-card text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Previous items"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-1.5 rounded-lg border border-border bg-card text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Next items"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-8">
            
            <div
              ref={carouselRef}
              className="overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar flex cursor-grab active:cursor-grabbing"
              style={{ scrollBehavior: "smooth" }}
            >
              <motion.div
                ref={trackRef}
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="flex gap-6"
              >
                {achievements.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="min-w-67.5 sm:min-w-[320px] max-w-[320px] snap-start p-6 rounded-2xl border border-border bg-muted/5 shadow-sm hover:border-primary/20 flex flex-col justify-between select-none relative overflow-hidden group"
                    >
                      <div>
                        {/* Badge Date */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded-md border border-border bg-muted/10 text-muted-foreground">
                            {item.date}
                          </span>
                          <div className={`p-2 rounded-xl bg-linear-to-br ${item.color} text-white shadow-sm`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <h3 className="text-base font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-accent mb-3">
                          {item.org}
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed italic">
                          &ldquo;{item.desc}&rdquo;
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-border/30">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                        >
                          <Link2 className="w-3 h-3" />
                          Verify Credentials
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            
            <p className="text-center text-muted-foreground text-[10px] mt-2 italic">
              Drag horizontally or use arrow buttons to navigate
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}