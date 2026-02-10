'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

function getIsTouchDevice() {
  if (typeof window === 'undefined') return true;
  return !window.matchMedia('(hover: hover)').matches;
}

export function MagneticButton({ children, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice] = useState(getIsTouchDevice);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isTouchDevice) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Max 8px translation
    const maxMove = 8;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const factor = Math.min(distance / 100, 1);

    x.set((deltaX / distance) * maxMove * factor || 0);
    y.set((deltaY / distance) * maxMove * factor || 0);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
