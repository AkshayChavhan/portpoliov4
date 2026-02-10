'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlogCard } from '@/components/ui/BlogCard';

export function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label="BLOG"
          title="Latest Articles"
          subtitle="Insights and learnings from real-world projects"
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

        {/* View all link */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-4"
            style={{ color: 'var(--accent)' }}
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
