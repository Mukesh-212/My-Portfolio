"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT_FAST } from "@/lib/motion";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export default function SkillBadge({ label, className }: SkillBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -2,
              borderColor: "var(--color-accent)",
              backgroundColor: "rgba(74, 125, 255, 0.08)",
              color: "#ffffff",
            }
      }
      transition={{ duration: 0.2, ease: EASE_OUT_FAST }}
      className={cn(
        "inline-flex items-center px-3.5 py-1.5 rounded-md text-sm font-medium cursor-default select-none",
        "border transition-colors duration-200",
        className
      )}
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      {label}
    </motion.span>
  );
}
