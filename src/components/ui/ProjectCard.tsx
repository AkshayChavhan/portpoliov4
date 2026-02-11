'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { TechBadge } from './TechBadge';
import { Skeleton } from './Skeleton';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group rounded-xl border overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
      whileHover={{
        y: -4,
        boxShadow: 'var(--card-hover-shadow)',
      }}
    >
      {/* Image area */}
      <div
        className="aspect-[16/10] overflow-hidden"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        {project.images.length > 0 ? (
          <div
            className="w-full h-full flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundColor: 'var(--bg-tertiary)' }}
          >
            <span style={{ color: 'var(--accent)', opacity: 0.5 }}>
              {project.id === 'excalidraw' ? '🎨' : '📱'}
            </span>
          </div>
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h4
          className="text-xl font-bold mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h4>
        <p
          className="text-sm mb-4 leading-relaxed line-clamp-3"
          style={{ color: 'var(--text-body)' }}
        >
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.map((metric) => (
            <span
              key={metric.label}
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: 'var(--accent-light)',
                color: 'var(--accent)',
              }}
            >
              {metric.value}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Learn more */}
        <div
          className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-4"
          style={{ color: 'var(--accent)' }}
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
