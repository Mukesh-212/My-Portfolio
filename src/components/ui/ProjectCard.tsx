"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { EASE_PREMIUM } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE_PREMIUM }}
      className="group relative flex flex-col rounded-xl border p-6 h-full transition-colors duration-300"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              borderColor: "var(--color-accent-dim)",
              y: -3,
              transition: { duration: 0.2 },
            }
      }
    >
      {/* Accent top bar */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(to right, var(--color-accent), transparent)" }}
      />

      {/* Title */}
      <h3
        className="text-base font-semibold mb-2 transition-colors duration-200 group-hover:text-[#ffffff]"
        style={{ color: "var(--color-text)" }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1 mb-4"
        style={{ color: "var(--color-muted)" }}
      >
        {project.description}
      </p>

      {/* Technologies */}
      {project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md border"
              style={{
                background: "var(--color-accent-glow)",
                borderColor: "var(--color-accent-dim)",
                color: "var(--color-accent)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors duration-200 hover:text-[var(--color-text)]"
            style={{ color: "var(--color-muted)" }}
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors duration-200 hover:text-[var(--color-text)]"
            style={{ color: "var(--color-muted)" }}
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
