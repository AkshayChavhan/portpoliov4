'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function getIsTouchDevice() {
  if (typeof window === 'undefined') return true;
  return !window.matchMedia('(hover: hover)').matches;
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(getIsTouchDevice);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Trail dots with increasing delay
  const trail1X = useSpring(cursorX, { damping: 30, stiffness: 400 });
  const trail1Y = useSpring(cursorY, { damping: 30, stiffness: 400 });
  const trail2X = useSpring(cursorX, { damping: 35, stiffness: 250 });
  const trail2Y = useSpring(cursorY, { damping: 35, stiffness: 250 });

  useEffect(() => {
    // Skip on touch devices
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" style={{ cursor: 'none' }}>
      {/* Trail dot 2 */}
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        style={{
          x: trail2X,
          y: trail2Y,
          width: 6,
          height: 6,
          backgroundColor: 'var(--accent)',
          opacity: isVisible ? 0.15 : 0,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trail dot 1 */}
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        style={{
          x: trail1X,
          y: trail1Y,
          width: 8,
          height: 8,
          backgroundColor: 'var(--accent)',
          opacity: isVisible ? 0.3 : 0,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        style={{
          x: springX,
          y: springY,
          width: 6,
          height: 6,
          backgroundColor: 'var(--accent)',
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}
