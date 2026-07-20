/**
 * Simple Animation Variants for Minimal Modern Portfolio
 * Pre-configured Framer Motion animation variants
 */

import { Variants, Transition } from 'framer-motion';

// Default transition configuration
export const defaultTransition: Transition = {
  duration: 0.2,
  ease: [0, 0, 0.2, 1], // ease-out
};

// Fade in animation
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { ...defaultTransition, duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { ...defaultTransition, duration: 0.2 }
  }
};

// Slide up with fade
export const slideUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { ...defaultTransition, duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { ...defaultTransition, duration: 0.2 }
  }
};

// Stagger container for lists (50ms delay between items)
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05, // 50ms
      delayChildren: 0
    }
  }
};

// Stagger item for children
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: defaultTransition
  }
};

// Modal overlay
export const modalOverlay: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { ...defaultTransition, duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { ...defaultTransition, duration: 0.15 }
  }
};

// Modal content
export const modalContent: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.95,
    y: 20
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      ...defaultTransition,
      duration: 0.3,
      delay: 0.05
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    y: 20,
    transition: { ...defaultTransition, duration: 0.2 }
  }
};

// Tooltip animation
export const tooltip: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.95,
    y: 5
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { ...defaultTransition, duration: 0.15 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    y: 5,
    transition: { ...defaultTransition, duration: 0.1 }
  }
};

export default {
  fadeIn,
  slideUp,
  staggerContainer,
  staggerItem,
  modalOverlay,
  modalContent,
  tooltip,
  defaultTransition
};
