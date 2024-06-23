import Project from "@/components/projectComponent";
import Layout from "@/components/projects/spears-1858/Layout";
import React from "react";

const project = {
  name: "Loft 705",
  location: "Located at Achrafieh, between Abdul Wahab & Trabaud Streets",
  description: [
    "Residential Project",
    "Apartments range between 100m² and 250m² (Simplexes and Duplexes)",
    "Build up area 4,500 m²",
    "Project cost 12 M$"
  ],
  image: "/loft705-4th.jpeg"
};

const index = () => {
  return (
    <div className="py-12">
      <Project project={project} />
    </div>
  );
};

export default index;
