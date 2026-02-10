'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { slideInLeft, slideInRight, staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';
import { MetricCard } from '@/components/ui/MetricCard';
import { playClickBeep } from '@/lib/sounds';

export function FeaturedProject() {
  const featured = projects.find((p) => p.featured);
  if (!featured) return null;

  return (
    <section
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <Container>
        <SectionHeading label="FEATURED PROJECT" title="Premium E-Commerce Platform" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left: Image */}
          <motion.div
            variants={slideInLeft}
            className="rounded-2xl overflow-hidden border aspect-[4/3] flex items-center justify-center"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="text-center">
              <span className="text-8xl">🛍️</span>
              <p className="mt-4 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                SAAKIE Preview
              </p>
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div variants={slideInRight}>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {featured.title.split(' - ')[0]}
            </h3>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-body)' }}
            >
              {featured.description}
            </p>

            {/* Metrics */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-4 mb-6"
            >
              {featured.metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                />
              ))}
            </motion.div>

            {/* Tech */}
            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: 'var(--text-muted)' }}
              >
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-6">
              <a
                href={featured.link}
                onClick={() => playClickBeep()}
                className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
                style={{ color: 'var(--accent)' }}
              >
                <ExternalLink className="w-4 h-4" />
                View Live Site
              </a>
              <a
                href={featured.github}
                onClick={() => playClickBeep()}
                className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
                style={{ color: 'var(--text-body)' }}
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
