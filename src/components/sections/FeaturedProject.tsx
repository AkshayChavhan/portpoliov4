'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { slideInLeft, slideInRight, staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';
import { MetricCard } from '@/components/ui/MetricCard';

const projectEmojis: Record<string, string> = {
  saakie: '🛍️',
  msg2ai: '🤖',
};

export function FeaturedProject() {
  const featuredProjects = projects.filter((p) => p.featured);
  if (featuredProjects.length === 0) return null;

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <Container>
        <SectionHeading label="FEATURED PROJECTS" title="What I've Built" />

        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const emoji = projectEmojis[project.id] || '🚀';

            return (
              <motion.div
                key={project.id}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <motion.div
                  variants={isReversed ? slideInRight : slideInLeft}
                  className={`rounded-2xl overflow-hidden border aspect-[4/3] relative ${isReversed ? 'md:order-2' : ''}`}
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    borderColor: 'var(--border)',
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title.split(' - ')[0]} Preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-8xl">{emoji}</span>
                        <p className="mt-4 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                          {project.title.split(' - ')[0]} Preview
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Details */}
                <motion.div
                  variants={isReversed ? slideInLeft : slideInRight}
                  className={isReversed ? 'md:order-1' : ''}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title.split(' - ')[0]}
                  </h3>
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: 'var(--text-body)' }}
                  >
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-3 gap-4 mb-6"
                  >
                    {project.metrics.map((metric) => (
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
                      {project.tech.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-6">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"

                        className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
                        style={{ color: 'var(--accent)' }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Site
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"

                        className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
                        style={{ color: 'var(--text-body)' }}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
