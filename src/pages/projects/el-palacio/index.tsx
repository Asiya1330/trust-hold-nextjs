import Project from "@/components/projectComponent";
import Layout from "@/components/projects/spears-1858/Layout";
import React from "react";

const project = {
    name: "El Palacio",
    location: "Located in Bir El Jir on Usto Boulevard, Oran - Algeria",
    description: [
      "Retail, Commercial, and Residential Project, includes Mall",
      "Units range between 58 m² and 148m²",
      "Built up area 64,000 m²",
      "Project Cost 50 M$"
    ],
    image: ""
  };


const index = () => {
  return (
    <div className="py-12">
      <Project project={project} />
    </div>
  );
};

export default index;
