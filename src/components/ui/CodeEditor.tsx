'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code2, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { SITE_CONFIG } from '@/lib/constants';

const stats = [
  { label: 'Experience', value: '5+ Years' },
  { label: 'Projects', value: '10+' },
  { label: 'Clients', value: 'Worldwide' },
];

const highlights = [
  'React & Next.js',
  'Node.js & TypeScript',
  'MongoDB & PostgreSQL',
  'AI & LLMs',
];

export function CodeEditor() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="rounded-2xl overflow-hidden border"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Profile header */}
      <div
        className="p-6 pb-4 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shrink-0"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
              color: 'white',
            }}
          >
            AC
          </div>
          <div>
            <h3
              className="text-lg font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              {SITE_CONFIG.fullName}
            </h3>
            <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-body)' }}>
              <Briefcase className="w-3.5 h-3.5" />
              {SITE_CONFIG.title}
            </p>
            <p className="text-xs flex items-center gap-1.5 mt-0.5" style={{ color: 'var(--text-muted)' }}>
              <MapPin className="w-3 h-3" />
              {SITE_CONFIG.location}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-3 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="py-4 text-center border-r last:border-r-0"
            style={{ borderColor: 'var(--border)' }}
          >
            <p className="text-lg font-bold" style={{ color: 'var(--accent)' }}>
              {stat.value}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Tech highlights */}
      <motion.div variants={fadeInUp} className="p-6">
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5"
          style={{ color: 'var(--text-muted)' }}
        >
          <Code2 className="w-3.5 h-3.5" />
          Core Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {highlights.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors duration-200"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-body)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="mt-4 flex items-center gap-2">
          <Zap className="w-4 h-4" style={{ color: 'var(--accent)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
            {SITE_CONFIG.availability}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
