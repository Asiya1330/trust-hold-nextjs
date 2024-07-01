import CoreValues from "@/components/core-values";
import React from "react";

const CoreValuesPage: React.FC = () => {
  const coreValues = [
    {
      title: "Trust",
      description:
        "The assurance that Trusthold will follow through with all agreements instilling a confidence in every investment opportunity.",
    },
    {
      title: "Reliability",
      description:
        "Consistency in quality performance coupled with vast experience across the real-estate sector puts investors, tenants and residents of every Trusthold project at ease.",
    },
    {
      title: "Professionalism",
      description:
        "A competence and skill covering every aspect of real-estate development.",
    },
    {
      title: "Ethical Leadership",
      description:
        "Operating with moral values and a code of principles that ensures trust and reliability on a professional and human level.",
    },
  ];

  const imageUrl = "/path/to/your/image.jpg"; // Replace with the actual image path

  return (
    <div className="container flex mx-auto">
      <div className="md:w-1/2">

      </div>
      <div className="md:w-1/2">
      <CoreValues values={coreValues} imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default CoreValuesPage;
