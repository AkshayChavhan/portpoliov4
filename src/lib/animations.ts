import type { Variants } from 'framer-motion';
import type { Density } from '@/components/ui/DensityProvider';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const hoverLift = {
  y: -4,
  transition: { duration: 0.2, ease: 'easeOut' as const },
};

export const tapScale = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2, ease: 'easeOut' as const },
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
};

// Density-aware variant getters. 'standard' always returns the exact static
// values above so the default site is untouched; 'moderate'/'fancy' scale
// duration/distance/stagger and add spring physics for richer motion.

export function getFadeInUp(density: Density): Variants {
  if (density === 'standard') return fadeInUp;
  if (density === 'moderate') {
    return {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14, mass: 0.8 },
    },
  };
}

export function getStaggerContainer(density: Density): Variants {
  if (density === 'standard') return staggerContainer;
  if (density === 'moderate') {
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.12 },
      },
    };
  }
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.15 },
    },
  };
}

export function getSlideInLeft(density: Density): Variants {
  if (density === 'standard') return slideInLeft;
  const distance = density === 'moderate' ? 60 : 90;
  return {
    hidden: { opacity: 0, x: -distance },
    visible: {
      opacity: 1,
      x: 0,
      transition:
        density === 'moderate'
          ? { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
          : { type: 'spring', stiffness: 100, damping: 16 },
    },
  };
}

export function getSlideInRight(density: Density): Variants {
  if (density === 'standard') return slideInRight;
  const distance = density === 'moderate' ? 60 : 90;
  return {
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition:
        density === 'moderate'
          ? { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
          : { type: 'spring', stiffness: 100, damping: 16 },
    },
  };
}

export function getScaleIn(density: Density): Variants {
  if (density === 'standard') return scaleIn;
  if (density === 'moderate') {
    return {
      hidden: { opacity: 0, scale: 0.92 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] },
      },
    };
  }
  return {
    hidden: { opacity: 0, scale: 0.85, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 140, damping: 12 },
    },
  };
}

export function getHoverLift(density: Density) {
  if (density === 'standard') return hoverLift;
  if (density === 'moderate') {
    return { y: -6, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' as const } };
  }
  return {
    y: -10,
    scale: 1.02,
    transition: { type: 'spring' as const, stiffness: 300, damping: 15 },
  };
}
