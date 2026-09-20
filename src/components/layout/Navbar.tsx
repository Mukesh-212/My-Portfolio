"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { EASE_PREMIUM } from "@/lib/motion";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Exploring", href: "#exploring", id: "exploring" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();

  // Scroll listener for translucent background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10, 10, 11, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="container-portfolio">
          <nav
            className="flex items-center justify-between h-16"
            aria-label="Main navigation"
          >
            {/* Logo / Name */}
            <a
              href="#hero"
              className="font-semibold text-sm tracking-widest uppercase transition-opacity duration-200 hover:opacity-70 flex items-center gap-1"
              style={{ color: "var(--color-text)", letterSpacing: "0.14em" }}
              aria-label="Go to top"
            >
              {personalInfo.name.split(" ")[0]}
              <span style={{ color: "var(--color-accent)" }}>.</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="relative text-xs tracking-widest uppercase transition-colors duration-200 group py-1"
                      style={{
                        color: isActive ? "var(--color-text)" : "var(--color-muted)",
                      }}
                    >
                      <span className="transition-colors duration-200 group-hover:text-[var(--color-text)]">
                        {link.label}
                      </span>
                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavDot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                          style={{ background: "var(--color-accent)" }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {!isActive && (
                        <span
                          className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full opacity-60"
                          style={{ background: "var(--color-accent)" }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border transition-colors duration-200"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: EASE_PREMIUM }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
            style={{
              background: "rgba(10, 10, 11, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <ul className="container-portfolio py-6 flex flex-col gap-1" role="list">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.li
                    key={link.href}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, ease: EASE_PREMIUM }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center justify-between py-3 text-sm tracking-widest uppercase border-b transition-colors duration-200"
                      style={{
                        borderColor: "var(--color-border)",
                        color: isActive ? "var(--color-text)" : "var(--color-muted)",
                      }}
                      onClick={handleLinkClick}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--color-accent)" }}
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
