import ProjectCards from "@/components/projectCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-8">
      <ProjectCards />
    </main>
  );
}
