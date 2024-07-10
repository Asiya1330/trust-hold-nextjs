import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LinkItem {
  id: number;
  link: string;
  text: string;
}

interface LinkSection {
  id: number;
  title: string;
  links: LinkItem[];
}

const linkSections: LinkSection[] = [
  {
    id: 2,
    title: "Company",
    links: [
      { id: 1, link: "/about/team", text: "Management Team" },
      { id: 2, link: "/news", text: "News" },
      { id: 3, link: "/careers", text: "Careers" },
    ],
  },
  {
    id: 3,
    title: "About",
    links: [
      { id: 1, link: "/about/profile", text: "Profile" },
      { id: 2, link: "/about/core-values", text: "Core Values" },
      { id: 3, link: "/about/mission", text: "Vision" },
    ],
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d001d] text-white p-4 text-center py-12">
      <div className="mx-auto container overflow-hidden flex flex-col md:flex-row justify-between items-center md:items-start">
        <Link href="/" className="block mr-4 md:w-1/3">
          <Image
            src="/trusthold-logo.png"
            width={150}
            height={100}
            className="w-48 ml-4 lg:ml-0"
            alt="logo"
          />
        </Link>
        <div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
          {linkSections.map((section) => (
            <ul
              key={section.id}
              className="list-none p-0 flex flex-col md:text-left text-center w-full"
            >
              <li
                className="inline-block text-xl mb-4 py-2 px-3 text-white uppercase tracking-wide relative 
               after:content-[''] after:block after:w-6 after:h-[2px] after:bg-red-500 
               after:absolute after:bottom-0 
               after:left-1/2 after:transform after:-translate-x-1/2 
               md:after:left-3 md:after:transform-none"
              >
                {section.title}
              </li>
              {section.links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="inline-block py-2 px-3 hover:text-white no-underline"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
          <div className=" flex flex-col w-full">
            <div className="inline-block py-2 px-3 text-white uppercase tracking-wide">
              Follow Us
            </div>
            <div className="flex pl-4 justify-center mt-2">
              <Link
                className="flex items-center text-gray-300 hover:text-white mr-6 no-underline"
                href="https://www.facebook.com/TrustholdGroup"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </Link>
              <Link
                className="flex items-center text-gray-300 hover:text-white mr-6 no-underline"
                href="https://www.instagram.com/trustholdgroup/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current w-5 h-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm9.8 1.45a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM12 6.75a5.25 5.25 0 1 1 0 10.5A5.25 5.25 0 0 1 12 6.75zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-4 border-t border-gray-800 text-center">
        {" "}
        © {currentYear} Trusthold Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
