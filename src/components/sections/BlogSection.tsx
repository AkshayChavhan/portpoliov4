'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/data';
import { staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlogCard } from '@/components/ui/BlogCard';

export function BlogSection() {
  if (blogPosts.length === 0) return null;

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label="BLOG"
          title="Latest Articles"
          subtitle="Insights and learnings from real-world projects, published on Medium"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
