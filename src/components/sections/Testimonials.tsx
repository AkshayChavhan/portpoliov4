'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function Testimonials() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <Container>
        <SectionHeading
          label="TESTIMONIALS"
          title="What Clients Say"
          subtitle="Feedback from people I've worked with"
        />

        <motion.div
          variants={staggerContainer}
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
