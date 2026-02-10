import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akshay-portfolio.vercel.app'),
  title: {
    default: 'Akshay Chavhan | Full-Stack Developer - React, Next.js, Node.js',
    template: '%s | Akshay Chavhan',
  },
  description:
    'Full-stack developer with 3+ years of experience building scalable web applications. Specializing in React, Next.js, Node.js, e-commerce platforms, and AI-powered apps. Available for freelance work.',
  keywords: [
    'full-stack developer',
    'React developer',
    'Next.js developer',
    'Node.js developer',
    'freelance developer',
    'web developer Pune',
    'e-commerce developer',
    'MERN stack developer',
    'TypeScript developer',
    'freelance web developer India',
  ],
  authors: [{ name: 'Akshay Chavhan' }],
  creator: 'Akshay Chavhan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akshay-portfolio.vercel.app',
    siteName: 'Akshay Chavhan - Portfolio',
    title: 'Akshay Chavhan | Full-Stack Developer',
    description:
      'Building scalable web applications with React, Next.js, and Node.js. Available for freelance work.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akshay Chavhan - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshay Chavhan | Full-Stack Developer',
    description:
      'Building scalable web applications with React, Next.js, and Node.js.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Inline script to prevent dark mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-body)' }}>
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
