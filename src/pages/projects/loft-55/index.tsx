import Project from "@/components/projectComponent";
import Layout from "@/components/projects/spears-1858/Layout";
import React from "react";

const project = {
  name: "Loft 55",
  location: "Located at Achrafieh, Saide Street",
  description: [
    "Residential Project",
    "Units range between 68 and 160sqm",
    "Sellable area 1900 sqm",
    "Project Cost 3.6 M$",
    "Starting Date 2024",
    "Delivery Date 2027",

  ],
  image: "/loft-55-detailed.jpeg",
};

const index = () => {
  return (
    <div className="py-12">
      <Project project={project} />
    </div>
  );
};

export default index;
