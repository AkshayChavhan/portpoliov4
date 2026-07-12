import type { TargetAndTransition } from 'framer-motion';
import type { Density } from '@/components/ui/DensityProvider';

// Shared hover treatments for the repeated icon-card pattern used by
// SkillsSection, ServicesSection, and ProductsSection.

export const CARD_HOVER_BY_DENSITY: Record<Density, TargetAndTransition> = {
  standard: { y: -4, boxShadow: 'var(--card-hover-shadow)' },
  moderate: { y: -6, boxShadow: 'var(--card-hover-shadow)' },
  fancy: { y: -8, scale: 1.02, boxShadow: 'var(--card-hover-shadow), var(--density-glow)' },
};

export const ICON_HOVER_BY_DENSITY: Record<Density, TargetAndTransition> = {
  standard: {},
  moderate: { scale: 1.1 },
  fancy: { scale: 1.15, rotate: 8 },
};
