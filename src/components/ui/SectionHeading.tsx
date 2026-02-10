'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="mb-12"
    >
      <p
        className="text-sm font-semibold uppercase tracking-wider mb-2"
        style={{ color: 'var(--accent)' }}
      >
        {label}
      </p>
      <h2
        className="text-3xl sm:text-4xl font-bold tracking-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg" style={{ color: 'var(--text-body)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
