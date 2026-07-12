'use client';

import { useDensity } from './DensityProvider';
import { CustomCursor } from './CustomCursor';
import { ParticleField } from './ParticleField';

export function FancyCursor() {
  const { density } = useDensity();
  if (density !== 'fancy') return null;
  return (
    <>
      <ParticleField />
      <CustomCursor />
    </>
  );
}
