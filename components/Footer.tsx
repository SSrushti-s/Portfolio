"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "ssrushti1609@gmail.com",
    href: "mailto:ssrushti1609@gmail.com",
    desc: "Drop me an email for project inquiries, freelance work, or open source collaborations.",
    color: "group-hover:text-red-500",
    bg: "group-hover:bg-red-500/10",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "srushti-s-130752281",
    href: "https://www.linkedin.com/in/srushti-s-130752281/",
    desc: "Connect with me professionally, read my tech posts, or check my career progress.",
    color: "group-hover:text-blue-500",
    bg: "group-hover:bg-blue-500/10",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "SSrushti-s",
    href: "https://github.com/SSrushti-s",
    desc: "Check out my repositories, open source contributions, and automation experiments.",
    color: "group-hover:text-purple-500",
    bg: "group-hover:bg-purple-500/10",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    value: "@srushti_s",
    href: "https://twitter.com/yourhandle",
    desc: "Follow my developer journey, tweets about AI agents, and web dev updates.",
    color: "group-hover:text-sky-500",
    bg: "group-hover:bg-sky-500/10",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="connect" className="py-20 relative bg-card/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card shadow-lg overflow-hidden flex flex-col"
        >
          {/* Window Header */}
          <div className="flex items-center bg-muted/10 border-b border-border/50 px-6 py-4">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-3">Connect with me</span>
          </div>

          {/* Window Body */}
          <div className="p-8">
            
            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl border border-border bg-muted/5 shadow-sm hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className={`p-2.5 rounded-xl bg-muted/10 w-fit text-muted-foreground ${card.bg} ${card.color} transition-all duration-300`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      
                      <h3 className="text-base font-bold mt-3 text-foreground">
                        {card.label}
                      </h3>
                      
                      <p className="text-muted-foreground text-[11px] leading-relaxed mt-1">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between pt-3 border-t border-border/20 text-[11px] font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                      <span className="truncate max-w-30 font-mono">{card.value}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Contact & Info Details */}
            <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-border/30 text-xs text-muted-foreground gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  +91 9916310976
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Bengaluru, India
                </span>
              </div>

              <div className="text-center md:text-right">
                <p>© {currentYear} Srushti All rights reserved.</p>
                <p className="text-[10px] text-muted-foreground/60 mt-0.5">
                  Built with Next.js, Tailwind CSS v4, & Framer Motion.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}