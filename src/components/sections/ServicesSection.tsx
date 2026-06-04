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
import { scaleIn, staggerContainer } from '@/lib/animations';
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
                {iconMap[service.icon] || <Sparkles className="w-6 h-6" />}
              </div>

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

              <ul className="flex flex-col gap-2">
                {service.features.map((feature) => (
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
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
