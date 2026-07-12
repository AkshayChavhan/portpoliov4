'use client';

import { motion } from 'framer-motion';
import { Monitor, Server, Database, Brain, Sparkles } from 'lucide-react';
import { skills } from '@/lib/data';
import { getScaleIn, getStaggerContainer, getFadeInUp } from '@/lib/animations';
import { CARD_HOVER_BY_DENSITY, ICON_HOVER_BY_DENSITY } from '@/lib/densityStyles';
import { useDensity } from '@/components/ui/DensityProvider';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

export function SkillsSection() {
  const { density } = useDensity();
  const scaleIn = getScaleIn(density);
  const staggerContainer = getStaggerContainer(density);
  const fadeInUp = getFadeInUp(density);

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
      style={{ backgroundColor: 'var(--density-section-bg)' }}
    >
      <Container>
        <SectionHeading
          label="SKILLS & EXPERTISE"
          title="Technologies I Work With"
          subtitle="Building modern, scalable applications with the right tools for the job"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={scaleIn}
              className="rounded-xl border p-6 transition-all duration-200"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
              whileHover={CARD_HOVER_BY_DENSITY[density]}
            >
              <motion.div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent)',
                }}
                whileHover={ICON_HOVER_BY_DENSITY[density]}
              >
                {iconMap[skill.icon] || <Sparkles className="w-6 h-6" />}
              </motion.div>

              <h4
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {skill.category}
              </h4>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialization callout */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 rounded-xl border p-6 sm:p-8 text-center"
          style={{
            backgroundColor: 'var(--accent-light)',
            borderColor: 'var(--accent)',
            borderStyle: 'dashed',
          }}
        >
          <p
            className="text-lg font-medium"
            style={{ color: 'var(--accent)' }}
          >
            Specialized in building <strong>full-stack web applications</strong>,{' '}
            <strong>e-commerce platforms</strong>, and{' '}
            <strong>AI-powered tools</strong> with modern technologies.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
