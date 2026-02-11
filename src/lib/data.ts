import type { Project, SkillCategory, Experience, Testimonial, BlogPost } from '@/types';

export const projects: Project[] = [
  {
    id: 'saakie',
    title: 'SAAKIE - Premium E-Commerce Platform',
    description:
      'Full-stack e-commerce platform for premium Indian sarees and ethnic wear. Features advanced product catalog with filtering, dual payment gateways (Stripe & Razorpay), admin dashboard with real-time analytics and inventory management, Clerk authentication with role-based access, Cloudinary image optimization, wishlist, reviews & ratings, order tracking, and Instagram social feed integration.',
    metrics: [
      { label: 'Admin', value: 'Full Dashboard' },
      { label: 'Payments', value: 'Stripe + Razorpay' },
      { label: 'Auth', value: 'Role-Based' },
    ],
    tech: ['Next.js 14', 'TypeScript', 'MongoDB', 'Prisma', 'Clerk', 'Stripe', 'Cloudinary'],
    image: '/images/saakie-preview.png',
    link: 'http://saakie.vercel.app/',
    github: 'https://github.com/AkshayChavhan',
    featured: true,
  },
  {
    id: 'msg2ai',
    title: 'MSG2AI - AI-Powered Messaging Platform',
    description:
      'SaaS platform for businesses to send SMS & WhatsApp messages at scale with AI-powered assistants. Features broadcast campaigns, multi-LLM support (OpenAI, Gemini, Groq, Claude), real-time analytics, sentiment analysis, and role-based access control.',
    metrics: [
      { label: 'Messaging', value: 'SMS & WhatsApp' },
      { label: 'AI Models', value: '5+ LLMs' },
      { label: 'Feature', value: 'Multi-tenant' },
    ],
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Prisma', 'Twilio'],
    image: '/images/msg2ai-dashboard.png',
    link: 'https://dev.msg2ai.xyz/',
    github: '#',
    featured: true,
  },
  {
    id: 'excalidraw',
    title: 'Excalidraw-Style Drawing App',
    description:
      'Comprehensive collaborative drawing application with authentication, real-time collaboration, and AI-powered features. Built with modern web technologies for a seamless drawing experience.',
    metrics: [
      { label: 'Feature', value: 'Real-time Sync' },
      { label: 'Feature', value: 'AI Integration' },
      { label: 'Feature', value: 'Multi-user' },
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'MongoDB'],
    image: '/images/excalidraw-preview.png',
    link: '#',
    github: 'https://github.com/AkshayChavhan',
    featured: false,
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    items: ['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express', 'NestJS', 'Prisma ORM'],
  },
  {
    category: 'Database',
    icon: 'Database',
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    category: 'AI & LLMs',
    icon: 'Brain',
    items: ['LLM', 'Vector Databases', 'AI Integration', 'RAG'],
  },
  {
    category: 'Specializations',
    icon: 'Sparkles',
    items: ['Full-Stack Development', 'E-Commerce', 'Dashboards', 'Real-Time Apps', 'Payment Integration', 'API Development', 'AI-Powered Apps', 'Authentication Systems', 'PWA'],
  },
];

export const experiences: Experience[] = [
  {
    period: '2023 - Present',
    role: 'Full-Stack Developer',
    company: 'Freelance',
    description:
      'Building scalable web applications for clients worldwide. Specializing in e-commerce platforms, real-time dashboards, and AI-powered applications. Delivered 10+ projects with a focus on performance and clean code.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
  },
  {
    period: '2022 - 2023',
    role: 'Full-Stack Developer',
    company: 'Tech Company',
    description:
      'Developed and maintained multiple web applications serving thousands of users. Led frontend architecture decisions, implemented CI/CD pipelines, and mentored junior developers.',
    tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
  },
  {
    period: '2021 - 2022',
    role: 'Frontend Developer',
    company: 'Startup',
    description:
      'Built responsive user interfaces and collaborated with design teams to deliver pixel-perfect implementations. Gained deep expertise in the React ecosystem and modern CSS.',
    tech: ['React', 'JavaScript', 'CSS', 'REST APIs', 'Git'],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart',
    quote:
      'Akshay delivered our e-commerce platform ahead of schedule. The attention to detail and performance optimization was exceptional. Our conversion rate improved significantly after launch.',
    rating: 5,
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'DataFlow',
    quote:
      'Working with Akshay was a great experience. He understood our requirements quickly, communicated proactively, and built exactly what we needed. Highly recommend for any web project.',
    rating: 5,
    avatar: 'MC',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'DesignHub',
    quote:
      'The dashboard Akshay built transformed how we analyze data. Clean code, great communication, and delivered on time. We continue to work together on new features.',
    rating: 5,
    avatar: 'PS',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'How I Optimized QR Scanner Detection from 2.3s to 0.3s',
    excerpt:
      'A deep dive into the performance optimization techniques that led to an 87% improvement in QR code detection speed using WebGL and advanced algorithms.',
    category: 'Performance',
    date: '2026-01-15',
    slug: '#',
    readTime: '8 min read',
  },
  {
    title: 'Building Scalable E-Commerce with Next.js',
    excerpt:
      'Lessons learned from building SAAKIE - a premium e-commerce platform handling 500+ products with Stripe integration and real-time inventory.',
    category: 'Next.js',
    date: '2026-01-02',
    slug: '#',
    readTime: '12 min read',
  },
  {
    title: 'MongoDB vs PostgreSQL: Choosing the Right Database',
    excerpt:
      'A practical comparison based on real-world projects. When to use each, performance benchmarks, and why it matters for your next application.',
    category: 'Database',
    date: '2025-12-18',
    slug: '#',
    readTime: '10 min read',
  },
];

export const codeEditorContent = `// akshay.config.ts
const developer = {
  name: "Akshay Chavhan",
  role: "Full-Stack Developer",
  location: "Pune, India",
  skills: [
    "React", "Next.js",
    "Node.js", "TypeScript",
    "MongoDB", "AI/LLMs"
  ],
  experience: "5+ years",
  available: true,
  passion: "Building apps that
    drive real results"
};

export default developer;`;
