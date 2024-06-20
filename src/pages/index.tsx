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
    content: "Trusthold Development Group is coming up with exciting new Project...",
    url: "/about",
    details: null // No additional details for this slide
  },
  {
    src: "/loft55-2.jpeg",
    label: "Trusthold Development Group",
    content: "Trusthold Development Group continues to offer expert services in development...",
    url: "/about",
    details: null // No additional details for this slide
  },
  {
    src: "/1858-2nd.jpeg",
    label: "Spears 1858",
    content: "Home to luxurious apartments...",
    url: "/about",
    details: `
    ➢ Residential Project
    ➢ Located on Abdul Kader Street - Mousaytbeh
    ➢ Apartments range between 110m² and 350m² (Simplexes and Duplexes)
    ➢ Built up area 9,500 m²
    ➢ Project Cost 25 M$`
  },
  {
    src: "/rubik-3rd.jpeg",
    label: "Rubik 1709",
    content: "A location perfect for businesses and medical practices...",
    url: "/about",
    details: `
    ➢ Retail, Offices, and Clinics Project
    ➢ Located on Alfred Naccache Street, Near Hotel Dieu Hospital
    ➢ Units range between 95 m² and 400 m²
    ➢ Built up area 8,250 m²
    ➢ Project Cost 20 M$`
  },
  {
    src: "/loft705-4th.jpeg",
    label: "Loft 705",
    content: "Loft 705 is in the center of Beirut’s business and commercial district...",
    url: "/about",
    details: `
    ➢ Residential Project
    ➢ Located at Achrafieh, between Abdul Wahab & Trabaud Streets
    ➢ Apartments range between 100m² and 250m² (Simplexes and Duplexes)
    ➢ Built up area 4,500 m²
    ➢ Project Cost 12 M$`
  },
  {
    src: "/spears88-5th.jpeg",
    label: "Spears 88",
    content: "Spears 88 is in the center of Beirut’s business and commercial district...",
    url: "/about",
    details: `
    ➢ Retail and Offices Project
    ➢ Located on the main road of Spears Street
    ➢ Units range between 90 m² and 475 m²
    ➢ Built up area 9,250 m²
    ➢ Project Cost 25 M$`
  },
  // {
  //   src: "/ict.jpeg",
  //   label: "El Palacio",
  //   content: "El Palacio includes retail, commercial, and residential spaces...",
  //   url: "/about",
  //   details: `
  //   ➢ Retail, Commercial, and Residential Project, includes Mall
  //   ➢ Located in Bir El Jir on Usto Boulevard, Oran - Algeria
  //   ➢ Units range between 58 m² and 148 m²
  //   ➢ Built up area 64,000 m²
  //   ➢ Project Cost 50 M$`
  // }
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
      </div>
      <main className="flex flex-col px-4 py-8 container mx-auto">
        <div className="row">
          <HomeHero />
          {/* <ProjectCardsSection />
          <LegalStructure1Section />
          <LegalStructure2Section />
          <OrganizationChartSection />
          <TestimonialSection /> */}
          {/* <ContactSection /> */}
        </div>
      </main>
    </>
  );
}
