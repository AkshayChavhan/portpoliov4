'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { TechBadge } from './TechBadge';
import type { Experience } from '@/types';

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-8 sm:pl-10 pb-10"
    >
      {/* Vertical line */}
      {!isLast && (
        <div
          className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-[2px]"
          style={{ backgroundColor: 'var(--border)' }}
        />
      )}

      {/* Dot with pulse */}
      <motion.div
        className="absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full border-4 z-10"
        style={{
          backgroundColor: 'var(--accent)',
          borderColor: 'var(--bg-primary)',
          boxShadow: '0 0 0 2px var(--accent)',
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, type: 'spring' }}
      />

      {/* Content */}
      <div
        className="rounded-xl p-5 sm:p-6 border transition-all duration-200"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h4
            className="text-lg font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {experience.role}
          </h4>
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--accent)' }}
          >
            {experience.period}
          </span>
        </div>
        <p
          className="text-sm font-medium mb-3"
          style={{ color: 'var(--text-muted)' }}
        >
          {experience.company}
        </p>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: 'var(--text-body)' }}
        >
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
