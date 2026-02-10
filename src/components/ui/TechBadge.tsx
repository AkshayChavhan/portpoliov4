'use client';

import { motion } from 'framer-motion';

interface TechBadgeProps {
  label: string;
  className?: string;
}

export function TechBadge({ label, className = '' }: TechBadgeProps) {
  return (
    <motion.span
      className={`inline-flex items-center text-sm px-3 py-1 rounded-full border transition-colors duration-200 ${className}`}
      style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-body)',
        borderColor: 'var(--border)',
      }}
      whileHover={{
        backgroundColor: 'var(--accent-light)',
        color: 'var(--accent)',
        borderColor: 'var(--accent)',
      }}
    >
      {label}
    </motion.span>
  );
}
