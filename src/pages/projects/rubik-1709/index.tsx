import Project from "@/components/projectComponent";
import Layout from "@/components/projects/spears-1858/Layout";
import React from "react";

const project = {
  name: "Rubik 1709",
  location: "Located on Alfred Naccache Street, Near Hotel Dieu Hospital",
  description: [
    "Retail, Offices, and Clinics Project",
    "Units range between 95 m² and 400 m²",
    "Built up area 8,250 m²",
    "Project Cost 20 M$"
  ],
  image: "/rubik1709.jpeg"
};

const index = () => {
  return (
    <div className="py-12">
      <Project project={project} />
    </div>
  );
};

export default index;
