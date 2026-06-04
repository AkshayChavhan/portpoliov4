import type { Project, SkillCategory, Experience, Testimonial, BlogPost, Service, Product } from '@/types';

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
    featured: true,
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

export const services: Service[] = [
  {
    title: 'Web Design & Development',
    description:
      'Fast, responsive, SEO-friendly websites and web apps built with Next.js and React — from marketing sites to complex dashboards, designed to convert visitors into customers.',
    icon: 'Globe',
    features: ['Responsive UI', 'SEO Optimized', 'Performance First'],
  },
  {
    title: 'Software Development',
    description:
      'Custom, scalable software tailored to your business — end-to-end across architecture, API design, and delivery, using the MERN stack, TypeScript, and Prisma.',
    icon: 'Code2',
    features: ['Custom Solutions', 'Scalable Architecture', 'Clean Code'],
  },
  {
    title: 'AI Integration',
    description:
      'Bring AI into your product with multi-LLM support (OpenAI, Claude, Gemini, Groq), RAG knowledge systems, chat assistants, and real-time SSE streaming.',
    icon: 'Brain',
    features: ['Multi-LLM Support', 'RAG Systems', 'AI Assistants'],
  },
  {
    title: 'API Development',
    description:
      'Robust, well-documented REST APIs with Node.js and Express — secure authentication, webhook processing, and integrations that connect your systems together.',
    icon: 'Webhook',
    features: ['REST APIs', 'Auth & Security', 'Third-Party Integrations'],
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'End-to-end online stores with product catalogs, cart and checkout, payment gateways (Stripe & Razorpay), and admin dashboards for inventory and orders.',
    icon: 'ShoppingCart',
    features: ['Payment Gateways', 'Admin Dashboard', 'Inventory Management'],
  },
  {
    title: 'Maintenance & Support',
    description:
      'Keep your application healthy with ongoing maintenance, performance optimization, bug fixes, and feature enhancements — with reliable, responsive support.',
    icon: 'Wrench',
    features: ['Bug Fixes', 'Performance Tuning', 'Feature Updates'],
  },
];

export const products: Product[] = [
  {
    title: 'CRM Systems',
    description:
      'Manage leads, contacts, and customer relationships with custom pipelines, activity tracking, and analytics built around your sales process.',
    icon: 'Users',
  },
  {
    title: 'E-Commerce Platforms',
    description:
      'Full-featured online stores with catalog, cart, payments, and an admin dashboard — ready to sell products at scale.',
    icon: 'ShoppingBag',
  },
  {
    title: 'ERP Systems',
    description:
      'Unify operations — inventory, invoicing, purchase orders, and reporting — into a single platform that streamlines your business.',
    icon: 'Boxes',
  },
  {
    title: 'Job Portals',
    description:
      'Connect employers and candidates with job listings, applicant tracking, profiles, search, and application management.',
    icon: 'Briefcase',
  },
  {
    title: 'Learning Management',
    description:
      'Deliver courses online with lessons, quizzes, progress tracking, and student dashboards for schools, trainers, and creators.',
    icon: 'GraduationCap',
  },
  {
    title: 'Hotel Management',
    description:
      'Handle bookings, room availability, guest check-in/out, and billing in one streamlined hospitality system.',
    icon: 'BedDouble',
  },
  {
    title: 'Hospital Management',
    description:
      'Coordinate patients, appointments, doctors, and records with secure, role-based access for healthcare teams.',
    icon: 'Stethoscope',
  },
  {
    title: 'Billing & Invoicing',
    description:
      'Generate invoices, track payments, manage taxes, and send reminders with a clean, automated billing workflow.',
    icon: 'Receipt',
  },
];

export const testimonials: Testimonial[] = [];

// Real Medium articles. Add an entry per post — the Blog section auto-hides while empty.
// Each `url` should be the full Medium article link (cards open it in a new tab).
export const blogPosts: BlogPost[] = [
  {
    title:
      'How I Built One AI Platform That Talks to OpenAI, Claude, Gemini, and Groq — and Why Your Business Might Need This',
    excerpt:
      'A practical look at "multi-LLM" architecture — what it means, why it saves money, and how it makes your AI features more reliable.',
    category: 'AI',
    date: '2026-06-04',
    url: 'https://medium.com/@akshaychavhan676/how-i-built-one-ai-platform-that-talks-to-openai-claude-gemini-and-groq-and-why-your-business-9b66870263b7',
    readTime: '4 min read',
    image: '/images/blog1.png',
  },
  {
    title:
      'Stop Burning Money on AI Tokens: 8 Techniques That Cut Our LLM Bill Without Hurting Quality',
    excerpt:
      'Token cost is the silent killer of AI features. Here’s how we made an AI platform dramatically cheaper to run — with code, trade-offs, and the ideas that actually moved the needle.',
    category: 'AI',
    date: '2026-06-04',
    url: 'https://medium.com/@akshaychavhan676/stop-burning-money-on-ai-tokens-8-techniques-that-cut-our-llm-bill-without-hurting-quality-b6611e07a1af',
    readTime: '5 min read',
    image: '/images/blog2.png',
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
