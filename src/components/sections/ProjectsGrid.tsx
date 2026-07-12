'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { getStaggerContainer } from '@/lib/animations';
import { useDensity } from '@/components/ui/DensityProvider';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { TiltCard } from '@/components/ui/TiltCard';

const TILT_BY_DENSITY = {
  standard: { tiltRange: 8, glareOpacity: 1, hoverScale: 1.02 },
  moderate: { tiltRange: 12, glareOpacity: 1, hoverScale: 1.03 },
  fancy: { tiltRange: 16, glareOpacity: 1, hoverScale: 1.05 },
} as const;

export function ProjectsGrid() {
  const { density } = useDensity();
  const nonFeatured = projects.filter((p) => !p.featured);
  const tilt = TILT_BY_DENSITY[density];

  if (nonFeatured.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label="PROJECTS"
          title="Other Work"
          subtitle="A selection of projects I've built with modern technologies"
        />

        <motion.div
          variants={getStaggerContainer(density)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {nonFeatured.map((project) => (
            <TiltCard key={project.id} {...tilt}>
              <ProjectCard project={project} />
            </TiltCard>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
