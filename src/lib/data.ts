import type { Project, SkillCategory, Experience, Testimonial, BlogPost } from '@/types';

export const projects: Project[] = [
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
    images: [
      '/images/msg2ai-dashboard.png',
      '/images/msg2ai-broadcast-messages.png',
      '/images/msg2ai-messaging-logs.png',
      '/images/msg2ai-simulator.png',
    ],
    link: 'https://dev.msg2ai.xyz/',
    github: '#',
    featured: true,
  },
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
    images: [
      '/images/saakie1.png',
      '/images/saakie2.png',
      '/images/saakie3.png',
      '/images/saakie4.png',
      '/images/saakie5.png',
      '/images/saakie6.png',
      '/images/saakie7.png',
      '/images/saakie8.png',
      '/images/saakie9.png',
      '/images/saakie10.png',
      '/images/saakie11.png'
    ],
    link: 'http://saakie.vercel.app/',
    github: 'https://github.com/AkshayChavhan',
    featured: true,
  },
  {
    id: 'ai2story',
    title: 'AI2Story - AI-Powered Video Story Generator',
    description:
      'Open-source platform that transforms text prompts into polished short video stories. Generates structured scenes with AI, creates images via Pollinations.ai, produces natural voiceovers with Edge TTS, and composes final videos with Ken Burns effects and crossfade transitions — all using 100% free APIs.',
    metrics: [
      { label: 'AI', value: 'Gemini + TTS' },
      { label: 'Video', value: 'Auto Compose' },
      { label: 'Cost', value: '100% Free APIs' },
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'MongoDB', 'Prisma', 'Zustand', 'FFmpeg'],
    images: [
      '/images/ai2story_main.png',
      '/images/ai2story_login.png',
      '/images/ai2story_createNewStory.png',
      '/images/ai2story_storyFormFilled.png',
      '/images/ai2story_storySetting.png',
      '/images/ai2story_generatedScene.png',
      '/images/ai2story_defaultTemplate.png',
      '/images/ai2story_sidePanel.png',
    ],
    link: 'https://ai2story.vercel.app/',
    github: 'https://github.com/AkshayChavhan',
    featured: true,
  },
  {
    id: 'buddies',
    title: 'Buddies - Group Trip Planner',
    description:
      'Web-first trip planner built around the idea that the best trips happen with friends — group trips, shared expenses, and shared memories are first-class. Features smart trip categorization (Past, Active, Upcoming & Drafts with a countdown to your next adventure), email-based buddy invitations, automatic place insights from Wikipedia in your language, a day-by-day itinerary timeline, and a minimum-transaction bill-splitting algorithm so no one overpays. Multi-language and dark mode throughout. Currently in active development.',
    metrics: [
      { label: 'Travel', value: 'Group Trips' },
      { label: 'Expenses', value: 'Smart Bill Split' },
      { label: 'Status', value: 'In Development' },
    ],
    tech: ['Next.js 14', 'TypeScript', 'MongoDB', 'Prisma', 'Better Auth', 'Cloudinary', 'Resend'],
    images: ['/images/buddies-preview.png'],
    link: 'https://github.com/AkshayChavhan/buddy',
    github: 'https://github.com/AkshayChavhan/buddy',
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
    images: ['/images/excalidraw-preview.png'],
    link: 'https://excellidraw.vercel.app/',
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
    items: ['LLM', 'Claude API', 'Anthropic SDK', 'Claude Code', 'Prompt Engineering', 'Vector Databases', 'AI Integration', 'RAG'],
  },
  {
    category: 'Specializations',
    icon: 'Sparkles',
    items: ['Full-Stack Development', 'E-Commerce', 'Dashboards', 'Real-Time Apps', 'Payment Integration', 'API Development', 'AI-Powered Apps', 'Authentication Systems', 'PWA'],
  },
];

export const experiences: Experience[] = [
  {
    period: 'June 2022 - Present',
    role: 'Full-Stack Developer',
    company: 'Rethink Technology LLC',
    description:
      'Build and maintain full-stack web applications across the complete SDLC with React.js, Next.js, Node.js, Express.js, and MongoDB. Integrate AI capabilities using the OpenAI and Claude APIs, LangChain.js, and the Vercel AI SDK — implementing RAG systems and SSE streaming for real-time features. Also develop DAML smart contracts for enterprise decentralized apps, architected a GCP file-storage pipeline that eliminated orphaned files, and enhanced critical Invoice, Payment, and Purchase Order modules.',
    tech: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'OpenAI', 'Claude', 'LangChain.js', 'DAML', 'GCP', 'AWS S3'],
  },
  {
    period: 'March 2021 - April 2022',
    role: 'Junior Frontend Developer',
    company: 'Newton School',
    description:
      'Built reusable, accessible React.js components with Material UI to improve development efficiency across the team. Refactored existing codebases into custom React hooks to reduce redundancy and improve maintainability, and optimized application performance through efficient coding practices and removal of redundant logic.',
    tech: ['React', 'JavaScript', 'Material UI', 'CSS', 'Git'],
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
