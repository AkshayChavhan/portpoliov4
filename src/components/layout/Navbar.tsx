'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Small delay to let mobile menu close before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          className="flex items-center gap-2.5 transition-colors duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span
            className="text-lg font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Akshay
          </span>
          <span
            className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
            style={{
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent)',
            }}
          >
            Developer
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="nav-link text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-body)' }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'var(--text-body)';
              }}
            >
              {link.label}
            </button>
          ))}

          <ThemeToggle />

          <Button
            variant="primary"
            className="!text-sm !px-4 !py-2"
            onClick={() => handleNavClick('#contact')}
          >
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden gap-3 items-center">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border transition-colors duration-200"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-body)',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: 'var(--nav-bg)',
              backdropFilter: 'blur(12px)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ color: 'var(--text-body)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--bg-secondary)';
                    (e.target as HTMLElement).style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = 'var(--text-body)';
                  }}
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="primary"
                className="mt-2 w-full"
                onClick={() => handleNavClick('#contact')}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
