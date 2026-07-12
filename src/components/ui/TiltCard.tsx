'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees at either edge. Defaults to the original 8°. */
  tiltRange?: number;
  /** Peak glare opacity on hover. Defaults to the original 1. */
  glareOpacity?: number;
  /** Peak hover scale. Defaults to the original 1.02. */
  hoverScale?: number;
}

function getIsTouchDevice() {
  if (typeof window === 'undefined') return true;
  return !window.matchMedia('(hover: hover)').matches;
}

export function TiltCard({
  children,
  className = '',
  tiltRange = 8,
  glareOpacity = 1,
  hoverScale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice] = useState(getIsTouchDevice);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [tiltRange, -tiltRange]);
  const rotateY = useTransform(mouseX, [0, 1], [-tiltRange, tiltRange]);

  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 300 });
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 300 });

  // Glare effect position
  const glareX = useTransform(mouseX, [0, 1], ['0%', '100%']);
  const glareY = useTransform(mouseY, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isTouchDevice) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  if (isTouchDevice) {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        className={`relative overflow-hidden ${className}`}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: hoverScale }}
        transition={{ duration: 0.2 }}
      >
        {children}

        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glareX}px ${glareY}px, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            opacity: 0,
          }}
          whileHover={{ opacity: glareOpacity }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}
