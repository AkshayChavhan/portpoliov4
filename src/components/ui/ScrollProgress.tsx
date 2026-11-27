'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Spring-smoothed and drawn with scaleX (GPU transform) instead of width,
  // so the bar glides rather than stepping with each scroll event.
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-hover), #c084fc)',
          boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
        }}
      />
    </div>
  );
}
