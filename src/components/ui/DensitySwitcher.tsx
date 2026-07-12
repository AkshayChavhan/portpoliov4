'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Gauge, Sparkles, Wand2 } from 'lucide-react';
import { useDensity, type Density } from './DensityProvider';

const DENSITY_OPTIONS: { value: Density; label: string; description: string; icon: typeof Gauge }[] = [
  { value: 'standard', label: 'Standard', description: 'Clean & simple', icon: Gauge },
  { value: 'moderate', label: 'Moderate', description: 'Polished & animated', icon: Sparkles },
  { value: 'fancy', label: 'Fancy', description: 'Full immersive design', icon: Wand2 },
];

interface DensitySwitcherProps {
  className?: string;
}

export function DensitySwitcher({ className = '' }: DensitySwitcherProps) {
  const { density, setDensity } = useDensity();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = DENSITY_OPTIONS.find((opt) => opt.value === density) ?? DENSITY_OPTIONS[0];
  const CurrentIcon = current.icon;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-colors duration-200"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-body)',
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change site design mode"
      >
        <CurrentIcon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
        <span>{current.label}</span>
        <ChevronDown
          className="w-3.5 h-3.5 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 rounded-xl border overflow-hidden z-50"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--card-hover-shadow)',
            }}
            role="listbox"
          >
            {DENSITY_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const isActive = opt.value === density;
              return (
                <button
                  key={opt.value}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setDensity(opt.value);
                    setOpen(false);
                  }}
                  className="w-full flex items-start gap-3 px-4 py-3 text-left transition-colors duration-150"
                  style={{
                    backgroundColor: isActive ? 'var(--accent-light)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <Icon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}
                  />
                  <span className="flex flex-col">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: isActive ? 'var(--accent)' : 'var(--text-primary)' }}
                    >
                      {opt.label}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {opt.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
