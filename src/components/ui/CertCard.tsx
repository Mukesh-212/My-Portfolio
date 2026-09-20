"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import type { Certification } from "@/types";
import { EASE_PREMIUM } from "@/lib/motion";

interface CertCardProps {
  cert: Certification;
  index: number;
}

export default function CertCard({ cert, index }: CertCardProps) {
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
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105"
        style={{
          background: "var(--color-accent-glow)",
          color: "var(--color-accent)",
          border: "1px solid var(--color-accent-dim)",
        }}
      >
        <Award size={16} />
      </div>

      {/* Name */}
      <h3
        className="text-sm font-semibold mb-1 transition-colors duration-200 group-hover:text-[#ffffff]"
        style={{ color: "var(--color-text)" }}
      >
        {cert.name}
      </h3>

      {/* Org + Year */}
      <p className="text-sm" style={{ color: "var(--color-muted)" }}>
        {cert.organization}
      </p>
      <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
        {cert.year}
      </p>

      {/* Credential link */}
      {cert.credential && (
        <a
          href={cert.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs mt-4 transition-colors duration-200 hover:underline"
          style={{ color: "var(--color-accent)" }}
          aria-label={`View credential for ${cert.name}`}
        >
          <ExternalLink size={12} />
          <span>View Credential</span>
        </a>
      )}
    </motion.div>
  );
}
