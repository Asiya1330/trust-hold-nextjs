import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useState } from "react";
import Specification from "./Specification";
import FloorPlan from "./FloorPlan";
import AreasAvailabilities from "./Areas&Availabilities";
import PaymentSchedule from "./PaymentSchedule";
import Team from "./Team";
import Location from "./Location";
import NewsLetters from "./NewsLetters";
import Photos from "./Photos";

const Layout = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { name: "Location", element: <Location /> },
    { name: "Sepcification", element: <Specification /> },
    { name: "FLoor Plan", element: <FloorPlan /> },
    { name: "Areas & Availabilities", element: <AreasAvailabilities />},
    { name: "Payment Schedule", element:<PaymentSchedule />},
    { name: "Professional Team", element: <Team /> },
    { name: "NewsLetter", element: <NewsLetters /> },
    { name: "Photos", element: <Photos /> },

  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className=" container m-auto">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <li className="" key={index}>
            <p
              aria-current="page"
              onClick={() => {
                setActiveTab(tab);
              }}
              className={`inline-block p-4 ${
                activeTab.name === tab.name
                  ? "text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-gray-100"
                  : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              } `}
            >
              {tab.name}
            </p>
          </li>
        ))}
      </ul>
      <div>{activeTab.element}</div>
    </div>
  );
};

export default Layout;
