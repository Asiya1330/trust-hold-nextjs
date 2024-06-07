import Hero from "@/components/hero";
import Header from "@/components/header";
import ProjectCards from "@/components/projectCards";

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
      <main className="flex flex-col px-4 py-8">
        <ProjectCards />
      </main>
    </>
  );
}
