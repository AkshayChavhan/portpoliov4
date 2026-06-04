'use client';

import { motion } from 'framer-motion';
import {
  Users,
  ShoppingBag,
  Boxes,
  Briefcase,
  GraduationCap,
  BedDouble,
  Stethoscope,
  Receipt,
  Sparkles,
} from 'lucide-react';
import { products } from '@/lib/data';
import { scaleIn, staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Boxes: <Boxes className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  BedDouble: <BedDouble className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Receipt: <Receipt className="w-6 h-6" />,
};

export function ProductsSection() {
  if (products.length === 0) return null;

  return (
    <section
      id="products"
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <Container>
        <SectionHeading
          label="READY-TO-BUILD SOLUTIONS"
          title="Products"
          subtitle="Proven software solutions I can build and customize for your business"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={scaleIn}
              className="rounded-xl border p-6 transition-all duration-200"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
              whileHover={{
                y: -4,
                boxShadow: 'var(--card-hover-shadow)',
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent)',
                }}
              >
                {iconMap[product.icon] || <Sparkles className="w-6 h-6" />}
              </div>

              <h4
                className="text-base font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {product.title}
              </h4>

              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-body)' }}
              >
                {product.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
