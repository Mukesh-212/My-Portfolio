"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center items-center" : "items-start";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn("flex flex-col gap-3", alignClass, className)}
    >
      {label && (
        <motion.span variants={itemVariants} className="label-mono">
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariants}
        className="heading-display text-3xl sm:text-4xl"
        style={{ color: "var(--color-text)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-base max-w-xl leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          {subtitle}
        </motion.p>
      )}
      {/* Accent underline animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 0.5, ease: EASE_PREMIUM, delay: 0.2 },
          },
        }}
        className="h-px w-12 mt-1 rounded-full origin-left"
        style={{ background: "var(--color-accent)" }}
      />
    </motion.div>
  );
}
