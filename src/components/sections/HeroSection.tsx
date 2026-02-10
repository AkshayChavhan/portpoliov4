'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GradientBackground } from '@/components/ui/GradientBackground';
import { CodeEditor } from '@/components/ui/CodeEditor';

export function HeroSection() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 min-h-[90vh] flex items-center overflow-hidden">
      <GradientBackground />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full"
                style={{
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-green-500"
                  style={{ animation: 'pulse-dot 2s infinite' }}
                />
                {SITE_CONFIG.availability}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {SITE_CONFIG.tagline.split('.').map((part, i) =>
                part.trim() ? (
                  <span key={i}>
                    {i > 0 && <br />}
                    {part.trim()}
                    {i < SITE_CONFIG.tagline.split('.').length - 2 && '.'}
                  </span>
                ) : null
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--text-body)' }}
            >
              {SITE_CONFIG.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <MagneticButton>
                <Button
                  variant="primary"
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Let&apos;s Work Together
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
              <Button
                variant="secondary"
                onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </Button>
            </motion.div>

            {/* Location */}
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-sm flex items-center gap-2"
              style={{ color: 'var(--text-muted)' }}
            >
              <span>{SITE_CONFIG.location}</span>
              <span>&middot;</span>
              <span>{SITE_CONFIG.title}</span>
            </motion.p>
          </motion.div>

          {/* Right: Code editor */}
          <div className="hidden lg:block">
            <CodeEditor />
          </div>
        </div>

        {/* Mobile code editor */}
        <div className="lg:hidden mt-12">
          <CodeEditor />
        </div>
      </Container>
    </section>
  );
}
