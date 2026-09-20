import { Variants } from "framer-motion";

/**
 * Premium Motion System Utility
 * Smooth, intentional, editorial motion curves and variants.
 */

// Custom cubic-bezier easing curve for ultra-smooth motion
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT_FAST = [0.25, 1, 0.5, 1] as const;

// Transition presets
export const TRANSITION_SMOOTH = {
  duration: 0.7,
  ease: EASE_PREMIUM,
};

export const TRANSITION_FAST = {
  duration: 0.35,
  ease: EASE_OUT_FAST,
};

/**
 * Standard Fade + Slide Up variant for viewport scroll reveals
 */
export const createFadeUpVariant = (
  distance = 24,
  duration = 0.65,
  delay = 0
): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: EASE_PREMIUM,
    },
  },
});

/**
 * Stagger container variant for grouped child items
 */
export const createStaggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Editorial text reveal variant
 */
export const textRevealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Standard hover interaction props for buttons and clickable cards
 */
export const buttonHoverMotion = {
  whileHover: { y: -2, scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.2, ease: EASE_OUT_FAST },
};

export const cardHoverMotion = {
  whileHover: { y: -4 },
  transition: { duration: 0.25, ease: EASE_PREMIUM },
};

export const badgeHoverMotion = {
  whileHover: { y: -2 },
  transition: { duration: 0.18, ease: EASE_OUT_FAST },
};
