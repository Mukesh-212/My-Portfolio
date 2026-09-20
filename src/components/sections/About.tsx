"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { about, personalInfo } from "@/data/portfolio";
import { EASE_PREMIUM } from "@/lib/motion";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const paragraphContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const paragraphItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_PREMIUM },
    },
  };

  const cardListVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardListItemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: EASE_PREMIUM },
    },
  };

  return (
    <section id="about" className="py-28 bg-section-secondary" aria-label="About section">
      <div className="container-portfolio">
        <div className="section-divider mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">
          {/* Left Column — Text */}
          <div>
            <SectionHeader
              label="About"
              title="Who I am"
              className="mb-10"
            />
            <motion.div
              variants={paragraphContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-5"
            >
              {about.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={paragraphItemVariants}
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "var(--color-body)" }}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Key Facts Card */}
          <AnimatedSection delay={0.15} direction="up">
            <div
              className="rounded-2xl border p-7 flex flex-col gap-6 sticky top-24 transition-all duration-300 hover:border-[rgba(91,140,255,0.35)] shadow-lg"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Career Goal */}
              <div>
                <p className="label-mono mb-3">Career Goal</p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-body)" }}
                >
                  {about.careerGoal}
                </p>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: "var(--color-border)" }}
              />

              {/* Career Interests */}
              <div>
                <p className="label-mono mb-3">Career Interests</p>
                <motion.ul
                  variants={cardListVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-2.5"
                >
                  {about.careerInterests.map((interest) => (
                    <motion.li
                      key={interest}
                      variants={cardListItemVariants}
                      className="flex items-center gap-2.5 text-sm font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--color-accent)" }}
                      />
                      {interest}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: "var(--color-border)" }}
              />

              {/* Contact Shortcut */}
              <div>
                <p className="label-mono mb-2">Get in touch</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-block text-sm font-medium transition-all duration-200 hover:translate-x-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  {personalInfo.email} →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
