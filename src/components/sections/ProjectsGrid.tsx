'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { TiltCard } from '@/components/ui/TiltCard';

export function ProjectsGrid() {
  const nonFeatured = projects.filter((p) => !p.featured);

  if (nonFeatured.length === 0) return null;

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label="PROJECTS"
          title="Other Work"
          subtitle="A selection of projects I've built with modern technologies"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {nonFeatured.map((project) => (
            <TiltCard key={project.id}>
              <ProjectCard project={project} />
            </TiltCard>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
