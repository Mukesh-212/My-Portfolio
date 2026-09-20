"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { EASE_PREMIUM } from "@/lib/motion";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    description: "Best way to reach me",
  },
  {
    label: "GitHub",
    value: "Mukesh-212",
    href: personalInfo.github,
    icon: Github,
    description: "See my code",
  },
  {
    label: "LinkedIn",
    value: "mukesh-s-505b263a",
    href: personalInfo.linkedin,
    icon: Linkedin,
    description: "Connect professionally",
  },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_PREMIUM },
    },
  };

  return (
    <section id="contact" className="py-28 bg-section-primary" aria-label="Contact section">
      <div className="container-portfolio">
        <div className="section-divider mb-20" />

        <div className="max-w-2xl">
          <AnimatedSection>
            <SectionHeader
              label="Contact"
              title="Get in Touch"
              subtitle="I'm open to conversations about technology, learning opportunities, and projects. Feel free to reach out."
              className="mb-12"
            />
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-4"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.div key={link.label} variants={cardItemVariants}>
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -3,
                            borderColor: "rgba(91, 140, 255, 0.4)",
                            boxShadow: "0 6px 24px rgba(91, 140, 255, 0.12)",
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="group flex items-center justify-between rounded-xl border p-5 transition-all duration-200 shadow-md"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:border-[rgba(91,140,255,0.4)] group-hover:bg-[var(--color-accent-glow)] group-hover:text-[var(--color-accent)]"
                        style={{
                          background: "var(--color-bg)",
                          color: "var(--color-muted)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--color-text)]"
                          style={{ color: "var(--color-text)" }}
                        >
                          {link.label}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--color-body)" }}
                        >
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="transition-all duration-200 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:text-[var(--color-accent)]"
                      style={{ color: "var(--color-muted)" }}
                    />
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
