import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Testimonials } from '@/components/sections/Testimonials';
import { BlogSection } from '@/components/sections/BlogSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProject />
      <ProjectsGrid />
      <SkillsSection />
      <ServicesSection />
      <ProductsSection />
      <ExperienceTimeline />
      <Testimonials />
      <BlogSection />
      <ContactSection />
    </>
  );
}
