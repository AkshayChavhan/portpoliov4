'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Code2,
  Brain,
  Webhook,
  ShoppingCart,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { services } from '@/lib/data';
import { getScaleIn, getStaggerContainer } from '@/lib/animations';
import { CARD_HOVER_BY_DENSITY, ICON_HOVER_BY_DENSITY } from '@/lib/densityStyles';
import { useDensity } from '@/components/ui/DensityProvider';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Webhook: <Webhook className="w-6 h-6" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
};

export function ServicesSection() {
  const { density } = useDensity();
  const scaleIn = getScaleIn(density);
  const staggerContainer = getStaggerContainer(density);
  if (services.length === 0) return null;

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
    >
      <Container>
        <SectionHeading
          label="WHAT I OFFER"
          title="Services"
          subtitle="End-to-end development services to bring your product from idea to launch"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
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
                {iconMap[service.icon] || <Sparkles className="w-6 h-6" />}
              </motion.div>

              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {service.title}
              </h4>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--text-body)' }}
              >
                {service.description}
              </p>

              <motion.ul
                className="flex flex-col gap-2"
                variants={density === 'standard' ? undefined : staggerContainer}
                initial={density === 'standard' ? undefined : 'hidden'}
                whileInView={density === 'standard' ? undefined : 'visible'}
                viewport={{ once: true }}
              >
                {service.features.map((feature) =>
                  density === 'standard' ? (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'var(--text-body)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent)' }}
                      />
                      {feature}
                    </li>
                  ) : (
                    <motion.li
                      key={feature}
                      variants={getScaleIn(density)}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'var(--text-body)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent)' }}
                      />
                      {feature}
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
