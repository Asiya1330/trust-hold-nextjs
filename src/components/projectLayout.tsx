import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useState } from "react";

const ProjectLayout = ({
  children,
  tabs,
}: {
  children: ReactNode;
  tabs: Array<{ name: String; url:Url }>;
}) => {
  console.log("Project layout",tabs);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const route = useRouter();

  return (
    <div className="pt-[120px] container m-auto">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {tabs.map((tab, index) => (
            <li className="" key={index}>
              <a
                href="#"
                aria-current="page"
                onClick={() => route.push(tab.url)}
                className={`inline-block p-4 ${
                  activeTab.name === tab.name
                    ? "text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-gray-100"
                    : "rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                } `}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default ProjectLayout;
