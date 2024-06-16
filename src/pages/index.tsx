import Hero from "@/components/hero";
import Header from "@/components/header";
import ProjectCards from "@/components/projectCards";
import HomeHero from "@/components/home/home-hero";
import LegalStructure1 from "@/components/home/legal-structure1";
import LegalStructure2 from "@/components/home/legal-structure2";
import OrganizationChart from "@/components/home/organizational-chart";
import Carousel from "@/components/home/testimonial";
import Testimonial from "@/components/home/testimonial";
import Contact from "@/components/home/contact";
import Slider from "@/components/common/slider";
import { createSection } from "@/components/createSection";
import CarouselSlider from "@/components/CarousalSlider";
import Image from "next/image";

const slides = [
  {
    src: "/loft55.jpeg",
    label: "Our new project 2024",
    content:
      "Trusthold Development Group is coming up with exciting new Project...",
    url: "/about",
  },
  {
    src: "/1st.jpeg",
    label: "Trusthold Development Group",
    content:
      "Trusthold Development Group continues to offer expert services in development...",
    url: "/about",
  },
  {
    src: "/1858-2nd.jpeg",
    label: "Spears 1858",
    content: " Home to luxurious apartments...",
    url: "/about",
  },

  {
    src: "/rubik-3rd.jpeg",
    label: "Rubik 1709",
    content: "A location perfect for businesses and medical practices...",
    url: "/about",
  },
  {
    src: "/loft705-4th.jpeg",
    label: "loft 705",
    content:
      "loft 705 is in the center of Beirut’s business and commercial district...",
    url: "/about",
  },
  {
    src: "/spears88-5th.jpeg",
    label: "Spears 88 ",
    content:
      "Spears 88 is in the center of Beirut’s business and commercial district...",
    url: "/about",
  },
];
export default function Home() {
  const LegalStructure1Section = createSection(LegalStructure1, "bottom");
  const LegalStructure2Section = createSection(LegalStructure2, "top");
  const OrganizationChartSection = createSection(OrganizationChart, "top");
  const TestimonialSection = createSection(Testimonial, "bottom");
  const ContactSection = createSection(Contact, "bottom");
  const ProjectCardsSection = createSection(ProjectCards, "top");
  const HeroSection = createSection(Hero, "left");
  return (
    <>
      <div className="relative">
        {/* <HeroSection /> */}
        <CarouselSlider slides={slides} />
        <Image alt="" src="/loft55.jpeg" height="300" width="300" />
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
