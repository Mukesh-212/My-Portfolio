"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { education } from "@/data/portfolio";
import { EASE_PREMIUM } from "@/lib/motion";

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-28 bg-section-primary" aria-label="Education section">
      <div className="container-portfolio">
        <div className="section-divider mb-20" />

        <AnimatedSection>
          <SectionHeader
            label="Education"
            title="Education"
            className="mb-12"
          />
        </AnimatedSection>

        <div className="flex flex-col gap-5 max-w-3xl">
          {education.map((item, i) => (
            <AnimatedSection key={item.institution} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -3,
                        borderColor: "rgba(91, 140, 255, 0.35)",
                      }
                }
                transition={{ duration: 0.25, ease: EASE_PREMIUM }}
                className="group rounded-2xl border p-8 flex flex-col sm:flex-row sm:items-start gap-6 transition-all duration-300 shadow-lg"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "var(--color-accent-glow)",
                    color: "var(--color-accent)",
                    border: "1px solid var(--color-accent-dim)",
                  }}
                  aria-hidden="true"
                >
                  <GraduationCap size={20} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="text-base font-semibold leading-snug transition-colors duration-200 group-hover:text-[#ffffff]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.degree}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-1">
                    <span className="label-mono">{item.duration}</span>
                    {/* Status badge */}
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border"
                      style={{
                        background: "var(--color-accent-glow)",
                        borderColor: "var(--color-accent-dim)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
