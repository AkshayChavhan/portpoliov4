'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { getStaggerContainer } from '@/lib/animations';
import { useDensity } from '@/components/ui/DensityProvider';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function Testimonials() {
  const { density } = useDensity();
  if (testimonials.length === 0) return null;

  return (
    <section
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
      style={{ backgroundColor: 'var(--density-section-bg)' }}
    >
      <Container>
        <SectionHeading
          label="TESTIMONIALS"
          title="What Clients Say"
          subtitle="Feedback from people I've worked with"
        />

        <motion.div
          variants={getStaggerContainer(density)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
