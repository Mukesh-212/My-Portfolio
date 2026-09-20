"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { exploring } from "@/data/portfolio";
import { EASE_PREMIUM } from "@/lib/motion";

export default function Exploring() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: EASE_PREMIUM },
    },
  };

  return (
    <section id="exploring" className="py-28 bg-section-secondary" aria-label="Areas of exploration section">
      <div className="container-portfolio">
        <div className="section-divider mb-20" />

        <AnimatedSection>
          <SectionHeader
            label="Learning"
            title="Areas I'm Exploring"
            subtitle="Fields I'm actively learning and building interest in — not claimed skills."
            className="mb-12"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploring.map((area, i) => (
            <AnimatedSection
              key={area.title}
              delay={i * 0.12}
              direction={i % 2 === 0 ? "right" : "left"}
              distance={16}
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -4,
                        borderColor: "rgba(91, 140, 255, 0.35)",
                      }
                }
                transition={{ duration: 0.25, ease: EASE_PREMIUM }}
                className="group relative rounded-2xl border p-8 h-full flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-lg"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* Subtle top hover gradient accent line indicator */}
                <span
                  className="absolute top-0 left-0 right-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                  style={{ background: "var(--gradient-accent)" }}
                />

                <div>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Number */}
                    <span
                      className="text-4xl font-bold leading-none mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[var(--color-accent)] opacity-40 group-hover:opacity-100"
                      style={{
                        color: "var(--color-border)",
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h3
                        className="text-lg font-semibold mb-2 transition-transform duration-200 group-hover:translate-x-0.5"
                        style={{ color: "var(--color-text)" }}
                      >
                        {area.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-body)" }}
                      >
                        {area.description}
                      </p>
                    </div>
                  </div>

                  {/* Topics list */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {area.topics.map((topic) => (
                      <motion.span
                        key={topic}
                        variants={tagVariants}
                        whileHover={
                          shouldReduceMotion
                            ? {}
                            : {
                                y: -1,
                                borderColor: "rgba(91, 140, 255, 0.3)",
                                color: "var(--color-text)",
                              }
                        }
                        className="text-xs px-2.5 py-1 rounded-md border cursor-default transition-all duration-200"
                        style={{
                          background: "var(--color-bg)",
                          borderColor: "var(--color-border)",
                          color: "var(--color-body)",
                        }}
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
