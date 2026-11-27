'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_SMOOTH } from '@/lib/animations';

/**
 * Site-wide motion defaults: any animation without its own transition uses the
 * shared smooth ease, and visitors with "reduce motion" turned on get fades
 * instead of movement.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: EASE_SMOOTH }}>
      {children}
    </MotionConfig>
  );
}
