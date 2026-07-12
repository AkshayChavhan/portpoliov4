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
import { getScaleIn, getStaggerContainer } from '@/lib/animations';
import { CARD_HOVER_BY_DENSITY, ICON_HOVER_BY_DENSITY } from '@/lib/densityStyles';
import { useDensity } from '@/components/ui/DensityProvider';
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
  const { density } = useDensity();
  const scaleIn = getScaleIn(density);
  const staggerContainer = getStaggerContainer(density);
  if (products.length === 0) return null;

  return (
    <section
      id="products"
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
      style={{ backgroundColor: 'var(--density-section-bg)' }}
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
              whileHover={CARD_HOVER_BY_DENSITY[density]}
            >
              <motion.div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent)',
                }}
                whileHover={ICON_HOVER_BY_DENSITY[density]}
              >
                {iconMap[product.icon] || <Sparkles className="w-6 h-6" />}
              </motion.div>

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
