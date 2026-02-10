'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label="EXPERIENCE"
          title="My Journey"
          subtitle="A timeline of my professional growth and achievements"
        />

        <motion.div
          variants={staggerContainer}
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
