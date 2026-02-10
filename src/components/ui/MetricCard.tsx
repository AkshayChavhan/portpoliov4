'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useCallback, useEffect } from 'react';
import { fadeInUp } from '@/lib/animations';

interface MetricCardProps {
  value: string;
  label: string;
}

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (!ref.current || hasAnimated.current) return;

    const match = value.match(/^([\d.]+)/);
    if (!match) {
      if (ref.current) ref.current.textContent = value;
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    const target = parseFloat(match[1]);
    const suffix = value.replace(match[1], '');
    const duration = 1500;
    const startTime = Date.now();
    const el = ref.current;

    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (el) {
        el.textContent = (target % 1 !== 0)
          ? current.toFixed(1) + suffix
          : Math.floor(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return <span ref={ref}>0</span>;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl p-4 border text-center"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <p
        className="text-2xl font-bold"
        style={{ color: 'var(--accent)' }}
      >
        <AnimatedValue value={value} />
      </p>
      <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
    </motion.div>
  );
}
