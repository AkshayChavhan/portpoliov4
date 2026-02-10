import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer
      className="border-t py-8 px-4 sm:px-6 lg:px-8"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.
        </p>

        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Built with Next.js &amp; Tailwind CSS
        </p>

        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-green-500"
            style={{ animation: 'pulse-dot 2s infinite' }}
          />
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {SITE_CONFIG.availability}
          </span>
        </div>
      </div>
    </footer>
  );
}
