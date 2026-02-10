'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.article
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
        className="aspect-[16/9] relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--accent-light) 0%, var(--bg-secondary) 100%)`,
        }}
      >
        <span
          className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full"
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
    </motion.article>
  );
}
