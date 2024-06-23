import Project from "@/components/projectComponent";
import Layout from "@/components/projects/spears-1858/Layout";
import React from "react";

const project = {
  name: "Spears 1858",
  location: "Located on Abdul Kader Street - Mousaytbeh",
  description: [
    "Residential Project",
    "Apartments range between 110m² and 350m² (Simplexes and Duplexes)",
    "Built up area 9,500 m²",
    "Project Cost 25 M$",
  ],
  image: "/spears1858.jpeg",
};

const index = () => {
  return (
    <div className="py-12">
      <Project project={project} />
    </div>
  );
};

export default index;
