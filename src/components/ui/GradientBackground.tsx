'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useDensity } from './DensityProvider';

export function GradientBackground() {
  const { density } = useDensity();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Ease the blobs toward the cursor instead of snapping to every mousemove.
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 1 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 1 });
  const isTouchDevice = typeof window !== 'undefined'
    ? !window.matchMedia('(hover: hover)').matches
    : false;

  // Standard keeps the original parallax responsiveness; richer tiers
  // track the cursor more closely for a livelier feel.
  const parallaxMultiplier = density === 'standard' ? 1 : density === 'moderate' ? 1.4 : 1.8;
  const blob1X = useTransform(smoothX, (v) => v * 0.02 * parallaxMultiplier);
  const blob1Y = useTransform(smoothY, (v) => v * 0.02 * parallaxMultiplier);
  const blob2X = useTransform(smoothX, (v) => v * -0.015 * parallaxMultiplier);
  const blob2Y = useTransform(smoothY, (v) => v * -0.015 * parallaxMultiplier);

  // Base opacities scale with the shared --density-blob-opacity CSS var
  // (0.35 at standard, 0.45 moderate, 0.6 fancy) relative to the original
  // per-blob values so Standard renders byte-identical to before.
  const opacityScale = density === 'standard' ? 1 : density === 'moderate' ? 1.3 : 1.8;

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Blob 1 - Large indigo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '40%',
          height: '40%',
          top: '10%',
          left: '10%',
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.2 * opacityScale,
          x: isTouchDevice ? 0 : blob1X,
          y: isTouchDevice ? 0 : blob1Y,
        }}
        animate={{
          x: isTouchDevice ? [0, 30, -20, 0] : undefined,
          y: isTouchDevice ? [0, -20, 30, 0] : undefined,
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2 - Medium purple */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '35%',
          height: '35%',
          top: '30%',
          right: '5%',
          background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.15 * opacityScale,
          x: isTouchDevice ? 0 : blob2X,
          y: isTouchDevice ? 0 : blob2Y,
        }}
        animate={{
          x: isTouchDevice ? [0, -25, 15, 0] : undefined,
          y: isTouchDevice ? [0, 25, -15, 0] : undefined,
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Blob 3 - Small blue */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '25%',
          height: '25%',
          bottom: '15%',
          left: '30%',
          background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.12 * opacityScale,
        }}
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -30, 10, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Blob 4 - Fancy only: extra accent for a richer, busier backdrop */}
      {density === 'fancy' && (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '30%',
            height: '30%',
            top: '55%',
            right: '20%',
            background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)',
            filter: 'blur(90px)',
            opacity: 0.18,
          }}
          animate={{
            x: [0, -20, 25, 0],
            y: [0, 20, -15, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      )}
    </div>
  );
}
