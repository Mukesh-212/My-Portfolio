"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";
import { skills, currentLearning } from "@/data/portfolio";
import { EASE_PREMIUM } from "@/lib/motion";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const badgeItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: EASE_PREMIUM },
    },
  };

  const roadmapItemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: EASE_PREMIUM },
    },
  };

  return (
    <section id="skills" className="py-28 bg-section-primary" aria-label="Technical skills section">
      <div className="container-portfolio">
        <div className="section-divider mb-20" />

        <AnimatedSection>
          <SectionHeader
            label="Skills"
            title="Technical Skills"
            subtitle="Technologies I currently work with."
            className="mb-12"
          />
        </AnimatedSection>

        {/* Skill groups */}
        <div className="flex flex-col gap-10">
          {skills.map((group, groupIndex) => (
            <AnimatedSection key={group.category} delay={groupIndex * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 transition-all duration-300 hover:border-[rgba(91,140,255,0.25)]">
                {/* Category label with subtle icon bullet */}
                <div className="sm:w-44 flex-shrink-0 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  <p className="label-mono">{group.category}</p>
                </div>

                {/* Badges container */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2.5"
                >
                  {group.skills.map((skill) => (
                    <motion.div key={skill} variants={badgeItemVariants}>
                      <SkillBadge label={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Currently Learning — Premium Learning Roadmap */}
        <AnimatedSection delay={0.25} className="mt-16">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(91,140,255,0.3)] shadow-xl">
            {/* Header / Roadmap Badge */}
            <div className="flex items-center justify-between gap-4 mb-8 border-b border-[var(--color-border)] pb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center text-[var(--color-accent)] border border-[rgba(91,140,255,0.2)]">
                  <Compass size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="label-mono">Active Focus</span>
                    <Sparkles size={12} className="text-[var(--color-accent-secondary)] animate-pulse" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    Learning Roadmap
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-[var(--color-body)] hidden sm:inline-block">
                8 Exploratory Domains
              </span>
            </div>

            {/* Grid Roadmap Nodes */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
            >
              {currentLearning.map((item, idx) => (
                <motion.div
                  key={item}
                  variants={roadmapItemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -2,
                          borderColor: "var(--color-accent)",
                          backgroundColor: "rgba(91, 140, 255, 0.05)",
                        }
                  }
                  className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 flex items-center gap-3.5 transition-all duration-200"
                >
                  {/* Subtle left hover line indicator */}
                  <span className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#5B8CFF] to-[#8B7CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-r" />

                  {/* Index badge */}
                  <span className="text-xs font-mono font-semibold text-[var(--color-accent)] bg-[var(--color-accent-glow)] px-2 py-0.5 rounded border border-[rgba(91,140,255,0.15)] flex-shrink-0">
                    0{idx + 1}
                  </span>

                  {/* Title */}
                  <span className="text-sm font-medium text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-text)]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Clarifying note */}
        <AnimatedSection delay={0.3} className="mt-6">
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            * Currently Learning items are areas of active study — not yet claimed as production skills.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
