"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      className="mt-0"
      style={{ borderTop: "1px solid var(--color-border)" }}
      role="contentinfo"
    >
      <div className="container-portfolio py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Name + year */}
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            <span style={{ color: "var(--color-text)" }}>{personalInfo.name}</span>
            {" "}— {year}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <motion.a
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded transition-colors duration-200 hover:text-[var(--color-text)]"
              style={{ color: "var(--color-muted)" }}
              aria-label="GitHub profile"
            >
              <Github size={16} />
            </motion.a>
            <motion.a
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded transition-colors duration-200 hover:text-[var(--color-text)]"
              style={{ color: "var(--color-muted)" }}
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
            </motion.a>
            <motion.a
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.email}`}
              className="p-1 rounded transition-colors duration-200 hover:text-[var(--color-text)]"
              style={{ color: "var(--color-muted)" }}
              aria-label="Send email"
            >
              <Mail size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
