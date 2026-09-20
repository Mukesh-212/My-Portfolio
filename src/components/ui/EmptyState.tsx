"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/motion";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  message,
  className,
}: EmptyStateProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE_PREMIUM,
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: EASE_PREMIUM },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-20 px-6 text-center",
        "rounded-2xl border transition-colors duration-300 hover:border-[var(--color-accent-dim)]",
        className
      )}
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      {/* Icon container */}
      <motion.div
        variants={itemVariants}
        whileHover={shouldReduceMotion ? {} : { scale: 1.06, rotate: 2 }}
        transition={{ duration: 0.25 }}
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: "var(--color-accent-glow)",
          color: "var(--color-accent)",
          border: "1px solid var(--color-accent-dim)",
        }}
      >
        {icon}
      </motion.div>

      <div className="flex flex-col gap-2 max-w-sm">
        <motion.p
          variants={itemVariants}
          className="text-sm font-medium"
          style={{ color: "var(--color-text)" }}
        >
          {title}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          {message}
        </motion.p>
      </div>

      {/* Decorative dots */}
      <motion.div variants={itemVariants} className="flex gap-1.5 mt-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--color-border)" }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
