export interface Project {
  id: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  images: string[];
  link: string;
  github: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  readTime: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
