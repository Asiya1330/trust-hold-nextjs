import Hero from "@/components/hero";
import Header from "@/components/header";
import ProjectCards from "@/components/projectCards";
import HomeHero from "@/components/home/home-hero";
import LegalStructure1 from  "@/components/home/legal-structure1";
import LegalStructure2 from "@/components/home/legal-structure2";
import OrganizationChart from "@/components/home/organizational-chart";
import Carousel from "@/components/home/testimonial";
import Testimonial from "@/components/home/testimonial";
import Contact from "@/components/home/contact";
import Slider from '@/components/common/slider';
import { createSection } from "@/components/createSection";


export default function Home() {
  const LegalStructure1Section = createSection(LegalStructure1, 'bottom');
  const LegalStructure2Section = createSection(LegalStructure2, 'top');
  const OrganizationChartSection = createSection(OrganizationChart, 'top');
  const TestimonialSection = createSection(Testimonial, 'bottom');
  const ContactSection = createSection(Contact, 'bottom');
  const ProjectCardsSection = createSection(ProjectCards, 'top');
  const HeroSection = createSection(Hero,"left");
  return (
    <>
      <div className="relative" >
        <HeroSection />
      </div>
      <main className="flex flex-col px-4 py-8 container mx-auto">
        <div className="row">
          <HomeHero />
          <ProjectCardsSection />
          <LegalStructure1Section />
          <LegalStructure2Section />
          <OrganizationChartSection />
          <TestimonialSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
