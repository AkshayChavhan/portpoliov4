'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { getFadeInUp } from '@/lib/animations';
import { CARD_HOVER_BY_DENSITY } from '@/lib/densityStyles';
import { useDensity } from './DensityProvider';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { density } = useDensity();
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={getFadeInUp(density)}
      className="group block rounded-xl border overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
      whileHover={CARD_HOVER_BY_DENSITY[density]}
    >
      {/* Image area */}
      <div
        className="aspect-[16/9] relative overflow-hidden border-b"
        style={{
          background: `linear-gradient(135deg, var(--accent-light) 0%, var(--bg-secondary) 100%)`,
          borderColor: 'var(--border)',
        }}
      >
        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {/* Subtle gradient so the category chip stays legible on any image */}
        <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black/30 to-transparent pointer-events-none" />
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'white',
          }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4
          className="text-lg font-bold mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{ color: 'var(--text-primary)' }}
        >
          {post.title}
        </h4>
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: 'var(--text-body)' }}
        >
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <span
            className="flex items-center gap-1 text-sm font-medium transition-all duration-200 group-hover:gap-2"
            style={{ color: 'var(--accent)' }}
          >
            Read
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
