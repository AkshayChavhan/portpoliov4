'use client';

import { forwardRef, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label
          className="block text-sm font-medium transition-colors duration-200"
          style={{ color: error ? '#ef4444' : 'var(--text-secondary)' }}
        >
          {label}
        </label>
        <textarea
          ref={ref}
          className={`w-full rounded-lg border px-4 py-3 text-base outline-none transition-all duration-200 resize-y min-h-[120px] ${className}`}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: error ? '#ef4444' : 'var(--border)',
            color: 'var(--text-primary)',
            boxShadow: error ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none',
          }}
          onFocus={(e) => {
            if (!error) {
              e.target.style.borderColor = 'var(--accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
            }
          }}
          onBlur={(e) => {
            if (!error) {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }
          }}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
