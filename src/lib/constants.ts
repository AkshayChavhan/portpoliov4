export const SITE_CONFIG = {
  name: 'Akshay',
  fullName: 'Akshay Chavhan',
  title: 'Full-Stack Developer',
  tagline: 'I build web apps that drive results.',
  description:
    '3+ years building scalable web applications with React, Next.js, and Node.js. Specializing in full-stack development, e-commerce platforms, and AI-powered applications.',
  email: 'your@email.com',
  location: 'Pune, India',
  availability: 'Available for Freelance',
  resumeUrl: '/resume/akshay-chavhan-resume.pdf',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/AkshayChavhan',
  linkedin: 'https://linkedin.com/in/akshay-chavhan',
  email: 'mailto:your@email.com',
  twitter: 'https://twitter.com',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const;

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export const BEEP_FREQUENCY = 800;
export const BEEP_DURATION = 50;
