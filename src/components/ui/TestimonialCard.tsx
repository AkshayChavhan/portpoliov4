'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border p-8 transition-all duration-200"
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
      {/* Quote mark */}
      <div
        className="text-6xl font-serif leading-none mb-4"
        style={{ color: 'var(--accent)', opacity: 0.2 }}
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <p
        className="text-sm leading-relaxed italic mb-6"
        style={{ color: 'var(--text-secondary)' }}
      >
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div
        className="w-12 h-[1px] mb-4"
        style={{ backgroundColor: 'var(--border)' }}
      />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
          style={{
            backgroundColor: 'var(--accent-light)',
            color: 'var(--accent)',
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {testimonial.name}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mt-3">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-current"
            style={{ color: 'var(--accent)' }}
          />
        ))}
      </div>
    </motion.div>
  );
}
