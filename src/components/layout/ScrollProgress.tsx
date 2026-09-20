"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] origin-left pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #5B8CFF 0%, #8B7CFF 100%)",
        boxShadow: "0 0 10px rgba(91, 140, 255, 0.4)",
      }}
      aria-hidden="true"
    />
  );
}
