import React from "react";

interface CoreValuesProps {
  values: { title: string; description: string }[];
  imageUrl: string;
}

const CoreValues: React.FC<CoreValuesProps> = ({ values, imageUrl }) => {
  return (
    <section className="py-16 flex flex-col md:flex-row items-center justify-center">
      <div className="max-w-4xl w-full mx-auto md:mx-0 md:w-1/2 px-4 sm:px-6 lg:px-8 mb-8 md:mb-0">
        <div className="space-y-8">
          {values.map((value, index) => (
            <div key={index}>
              <h2 className="text-3xl font-extrabold text-primary">{value.title}</h2>
              <p className="mt-2 text-base text-gray-500">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
