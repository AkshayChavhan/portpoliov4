import type { Transition, Variants } from 'framer-motion';
import type { Density } from '@/components/ui/DensityProvider';

// One shared motion language for the whole site.
// EASE_SMOOTH is an expo-style ease-out: quick to start, long soft landing,
// no overshoot. Springs are tuned to be (slightly over) critically damped so
// nothing wobbles or bounces past its target.
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

export const SMOOTH_SPRING = { type: 'spring', stiffness: 90, damping: 20, mass: 1 } as const;

const reveal = (duration = 0.8): Transition => ({ duration, ease: EASE_SMOOTH });

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: reveal() },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: reveal(0.7) },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: reveal() },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: reveal() },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: reveal(0.7) },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const quick = { duration: 0.35, ease: EASE_SMOOTH };

export const hoverLift = { y: -4, transition: quick };

export const tapScale = { scale: 0.98, transition: { duration: 0.15, ease: EASE_SMOOTH } };

export const buttonHover = { scale: 1.02, transition: quick };

export const buttonTap = { scale: 0.98, transition: { duration: 0.15, ease: EASE_SMOOTH } };

// Density-aware variant getters. Every tier uses the same smooth easing;
// richer tiers only travel a bit further and take a little longer.

export function getFadeInUp(density: Density): Variants {
  if (density === 'standard') return fadeInUp;
  if (density === 'moderate') {
    return {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: reveal(0.9) },
    };
  }
  return {
    hidden: { opacity: 0, y: 44, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: SMOOTH_SPRING },
  };
}

export function getStaggerContainer(density: Density): Variants {
  if (density === 'standard') return staggerContainer;
  const stagger = density === 'moderate' ? 0.1 : 0.12;
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: 0.08 },
    },
  };
}

function slideIn(density: Density, direction: 1 | -1): Variants {
  const distance = density === 'moderate' ? 48 : 64;
  return {
    hidden: { opacity: 0, x: distance * direction },
    visible: {
      opacity: 1,
      x: 0,
      transition: density === 'moderate' ? reveal(0.9) : SMOOTH_SPRING,
    },
  };
}

export function getSlideInLeft(density: Density): Variants {
  if (density === 'standard') return slideInLeft;
  return slideIn(density, -1);
}

export function getSlideInRight(density: Density): Variants {
  if (density === 'standard') return slideInRight;
  return slideIn(density, 1);
}

export function getScaleIn(density: Density): Variants {
  if (density === 'standard') return scaleIn;
  if (density === 'moderate') {
    return {
      hidden: { opacity: 0, scale: 0.94 },
      visible: { opacity: 1, scale: 1, transition: reveal(0.8) },
    };
  }
  return {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: SMOOTH_SPRING },
  };
}

export function getHoverLift(density: Density) {
  if (density === 'standard') return hoverLift;
  if (density === 'moderate') {
    return { y: -6, scale: 1.01, transition: quick };
  }
  return { y: -8, scale: 1.015, transition: { duration: 0.45, ease: EASE_SMOOTH } };
}
