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
  const LegalStructure1Section = createSection(LegalStructure1, 'left');
  const LegalStructure2Section = createSection(LegalStructure2, 'right');
  const OrganizationChartSection = createSection(OrganizationChart, 'top');
  const TestimonialSection = createSection(Testimonial, 'bottom');
  const ContactSection = createSection(Contact, 'left');
  const ProjectCardsSection = createSection(ProjectCards, 'right');

  return (
    <>
      <div className="relative" >
        <Hero />
      </div>
      <main className="flex flex-col px-4 py-8 container">
        <div className="row">
          <HomeHero />
          <LegalStructure1Section />
          <LegalStructure2Section />
          <OrganizationChartSection />
          <TestimonialSection />
          <ContactSection />
          <ProjectCardsSection />
        </div>
      </main>
    </>
  );
}
