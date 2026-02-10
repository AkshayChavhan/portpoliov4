'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-lg mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span
              className="text-9xl font-bold block mb-4"
              style={{ color: 'var(--accent)', opacity: 0.2 }}
            >
              404
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8"
            style={{ color: 'var(--text-body)' }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              variant="primary"
              href="/"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
