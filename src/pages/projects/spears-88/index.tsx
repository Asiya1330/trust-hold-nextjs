import Project from "@/components/projectComponent";
import Layout from "@/components/projects/spears-1858/Layout";
import React from "react";

const project = {
  name: "Spears 88",
  location: "Located on the main road of Spears Street",
  description: [
    "Retail and Offices Project",
    "Units range between 90 m² and 475m²",
    "Built up area 9,250 m²",
    "Project Cost 25 M$"
  ],
  image: "/spears88-5th.jpeg"
};


const index = () => {
  return (
    <div className="py-12">
      <Project project={project} />
    </div>
  );
};

export default index;
