import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offline',
  robots: { index: false, follow: false },
};

export default function Offline() {
  return (
    <div
      className="min-h-[70vh] flex items-center justify-center px-6"
      style={{ color: 'var(--text-body)' }}
    >
      <div className="max-w-md text-center">
        <div
          className="mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
          style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
        >
          A
        </div>
        <h1
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          You&apos;re offline
        </h1>
        <p className="text-base leading-relaxed mb-8">
          This page isn&apos;t available without a connection. Reconnect and try
          again — pages you&apos;ve already visited will still work offline.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
        >
          Go to homepage
        </a>
      </div>
    </div>
  );
}
