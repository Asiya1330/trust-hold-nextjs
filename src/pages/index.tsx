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
import Slider from '@/components/common/slider'

export default function Home() {
 
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-sec.avif')" }}
      >
        <Header logoUrl="" menuItems={[]} />
        <Hero />
      </div>
      <main className="flex flex-col px-4 py-8 container">
        <div className="row">
          <HomeHero />
          <div className="shadow-md rounded-md">
            <LegalStructure1 />
            <LegalStructure2 />
          </div>
          <div className="shadow-md rounded-md mt-6">
            <OrganizationChart />
          </div>
          <div>
           <Testimonial />
          </div>
          <div>
            <Contact />
          </div>
          <Slider />
          <ProjectCards />
        </div>
      </main>
    </>
  );
}
