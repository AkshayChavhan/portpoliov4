'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { getStaggerContainer } from '@/lib/animations';
import { useDensity } from '@/components/ui/DensityProvider';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';

export function ExperienceTimeline() {
  const { density } = useDensity();

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label="EXPERIENCE"
          title="My Journey"
          subtitle="A timeline of my professional growth and achievements"
        />

        <motion.div
          variants={getStaggerContainer(density)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.period}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
