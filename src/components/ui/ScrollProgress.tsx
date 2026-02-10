'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
      <motion.div
        className="h-full"
        style={{
          width,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-hover), #c084fc)',
          boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
        }}
      />
    </div>
  );
}
