"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { EASE_PREMIUM } from "@/lib/motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_PREMIUM },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: EASE_PREMIUM },
    },
  };

  const firstName = personalInfo.name.split(" ")[0]; // "Mukesh"
  const lastName = personalInfo.name.split(" ")[1];  // "S"

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-section-primary"
      aria-label="Hero section"
    >
      {/* Background ambient light shift + right side subtle glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Main background subtle radial glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(91, 140, 255, 0.06) 0%, transparent 70%)",
          }}
        />

        {/* Right side ambient violet-blue floating aura */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.3, 0.6, 0.3],
                  y: [0, -30, 0],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 124, 255, 0.08) 0%, rgba(91, 140, 255, 0.03) 50%, transparent 70%)",
          }}
        />

        {/* Subtle grid lines texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </motion.div>

      <div className="container-portfolio relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 max-w-3xl"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="label-mono">Portfolio</span>
          </motion.div>

          {/* Heading — MUKESH S stays together on 1 line on desktop */}
          <motion.h1
            variants={itemVariants}
            className="heading-display mb-6 tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 7.5vw, 6.2rem)",
              lineHeight: 1.02,
            }}
          >
            <span className="whitespace-nowrap">
              {firstName}{" "}
              <span className="gradient-text-accent font-semibold">{lastName}</span>
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-8">
            <p
              className="text-xs sm:text-sm tracking-widest uppercase font-semibold"
              style={{ color: "var(--color-accent)" }}
            >
              {personalInfo.role}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed max-w-xl mb-12"
            style={{ color: "var(--color-body)" }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA & Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-5"
          >
            {/* CTA Button with subtle blue-to-violet gradient */}
            <motion.a
              href="#about"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 group text-white shadow-lg"
              style={{
                background: "var(--gradient-accent)",
                boxShadow: "0 4px 20px rgba(91, 140, 255, 0.28)",
              }}
            >
              <span>Learn more</span>
              <ArrowDown
                size={15}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </motion.a>

            {/* Social Icons */}
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.08,
                  },
                },
              }}
              className="flex items-center gap-3 ml-2"
            >
              <motion.a
                variants={socialVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2, color: "var(--color-accent)" }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200 hover:border-[var(--color-accent-dim)]"
                style={{ color: "var(--color-body)" }}
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </motion.a>

              <motion.a
                variants={socialVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2, color: "var(--color-accent)" }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200 hover:border-[var(--color-accent-dim)]"
                style={{ color: "var(--color-body)" }}
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                variants={socialVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2, color: "var(--color-accent)" }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200 hover:border-[var(--color-accent-dim)]"
                style={{ color: "var(--color-body)" }}
                aria-label="Send email"
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side intentional subtle light/grid accent container (Desktop) */}
        <div className="hidden lg:block lg:col-span-4 relative h-[380px] pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE_PREMIUM, delay: 0.4 }}
            className="w-full h-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/30 backdrop-blur-sm p-6 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Inner subtle ambient light gradient */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(91, 140, 255, 0.15) 0%, rgba(139, 124, 255, 0.08) 50%, transparent 80%)",
              }}
            />

            {/* Corner subtle crosshair indicators */}
            <div className="flex justify-between items-center text-[10px] font-mono text-[var(--color-muted)] tracking-wider uppercase">
              <span>EXPLORE / 01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            </div>

            <div className="relative z-10 my-auto py-6">
              <p className="text-xs font-mono text-[var(--color-accent)] mb-2 uppercase tracking-widest">
                {"// Focus Areas"}
              </p>
              <div className="space-y-2 text-sm font-medium text-[var(--color-text)]">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                  <span>Artificial Intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--color-accent-secondary)]" />
                  <span>Data Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                  <span>Software Engineering</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-[var(--color-muted)] flex justify-between items-center border-t border-[var(--color-border)] pt-4">
              <span>BE CSE 2025–2029</span>
              <span>KGiSL TECH</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.1, duration: 0.6, ease: EASE_PREMIUM }}
        aria-hidden="true"
      >
        <span className="label-mono" style={{ fontSize: "0.55rem" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-8 origin-top"
          style={{ background: "var(--color-border)" }}
          animate={shouldReduceMotion ? {} : { scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
