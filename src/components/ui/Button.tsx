'use client';

import { motion } from 'framer-motion';
import { buttonHover, buttonTap } from '@/lib/animations';
import { playClickBeep } from '@/lib/sounds';
import type { ReactNode, MouseEvent } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  href?: string;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'px-8 py-3 text-white',
  secondary: 'px-8 py-3 border',
  ghost: 'px-4 py-2 text-sm font-medium',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  disabled,
  type = 'button',
  href,
}: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    playClickBeep();
    onClick?.(e);
  };

  const primaryStyle = {
    background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.25)',
  };

  const secondaryStyle = {
    borderColor: 'var(--border)',
    color: 'var(--text-secondary)',
    backgroundColor: 'transparent',
  };

  const ghostStyle = {
    color: 'var(--text-body)',
    backgroundColor: 'transparent',
  };

  const styleMap: Record<ButtonVariant, React.CSSProperties> = {
    primary: primaryStyle,
    secondary: secondaryStyle,
    ghost: ghostStyle,
  };

  const getHoverProps = (v: ButtonVariant) => {
    const base = { ...buttonHover };
    if (v === 'primary') return { ...base, boxShadow: '0 6px 20px rgba(99, 102, 241, 0.35)' };
    if (v === 'secondary') return { ...base, borderColor: 'var(--accent)', color: 'var(--accent)' };
    if (v === 'ghost') return { ...base, backgroundColor: 'var(--bg-secondary)' };
    return base;
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        style={styleMap[variant]}
        whileHover={getHoverProps(variant)}
        whileTap={buttonTap}
        onClick={() => playClickBeep()}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={styleMap[variant]}
      whileHover={getHoverProps(variant)}
      whileTap={buttonTap}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
