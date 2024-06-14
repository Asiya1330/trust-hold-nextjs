import Image from "next/image";
import React from "react";

const services = () => {
  return (
    <section className="max-w-5xl mx-auto py-10">
      <div>
        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-primary rounded mr-4 uppercase flex flex-col items-center justify-center bg-primary">
              <div className="text-3xl font-black text-white">Step 1</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-primary border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-white">
                  <span className="font-black">Step 1</span> - Idea
                </div>
                <div className="p-3 text-3xl text-gray-800 font">
                  PRE-DEVELOPMENT PHASE
                </div>
                <div className="px-3 pb-6">
                  <ul className="list-disc list-inside">
                    <li>
                      Plot acquisition and finalizing the whole deal structuring
                    </li>
                    <li>Managing and monitoring all financing process</li>
                    <li>Business plan and feasibility study preparation</li>
                    <li>
                      Appointment of the Lawyer, Auditor, and Design Consultants
                    </li>
                    <li>Market Survey</li>
                    <li>Marketing and Sales Strategy</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-96 w-full p-5">
                <Image
                  src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                  alt="step 1"
                  className="object-scale-down"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 ml-16 h-16 border-l-4 border-primary border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-primary border-dashed"></div>
          </div>
          <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-primary border-dashed border-t-4 rounded-tr-full"></div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-primary bg-primary rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-white">Step 2</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="border-l-4 ml-4 h-full border-primary border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-white">
                  <span className="font-black">Step 2</span> - Collaboration
                </div>
                <div className="p-3 text-3xl text-gray-800 font">
                  DEVELOPMENT PHASE
                </div>
                <div className="px-3 pb-6">
                  <ul className="list-disc list-inside">
                    <li>Project Management</li>
                    <li>Construction Management</li>
                    <li>Financial Management</li>
                    <li>Owner`&apos;`s Representative Services</li>
                    <li>Budgeting, Cost estimation and Cost control</li>
                    <li>Coordination with Owner and Architect</li>
                    <li>Follow-up Design Phase</li>
                    <li>Contracts Administration</li>
                    <li>Marketing, Sales and Sales Administration</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-96 w-full p-5">
                <img
                  src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                  alt="step 2"
                  className="object-scale-down"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start flex-row-reverse">
          <div className="border-t-4 border-l-4 border-transparent">
            <div className="w-16 mr-16 h-16 border-r-4 border-primary border-dashed border-b-4 rounded-br-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-primary border-dashed"></div>
          </div>
          <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-primary border-dashed border-t-4 rounded-tl-full"></div>
        </div>
        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border border-primary bg-primary rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-white">Step 3</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-primary border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto border rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-white">
                  <span className="font-black">Step 3</span> - Planification
                </div>
                <div className="p-3 text-3xl text-gray-800 font">
                  POST-DEVELPMENT PHASE
                </div>
                <div className="px-3 pb-6">
                  <ul>
                    <li>Delivery</li>
                    <li>Handover to clients</li>
                    <li>Permitting (occupancy permits)</li>
                    <li>Property Management Services</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-96 w-full p-5">
                <img
                  src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                  alt="step 3"
                  className="object-scale-down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
