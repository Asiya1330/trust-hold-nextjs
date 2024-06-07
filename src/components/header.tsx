import Link from "next/link";
import React, { useState, FC } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { MenuItem } from "@/app/layout";

interface DropdownLink {
  id: number;
  link: string;
  text: string;
}

interface NavLink {
  id: number;
  link: string;
  text: string;
  dropdown: DropdownLink[];
}

interface HeaderProps {
  logoUrl: string;
  menuItems: MenuItem[];
}

const Header: FC<HeaderProps> = ({ logoUrl, menuItems }) => {
  const [nav, setNav] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const topdown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const links: NavLink[] = [
    {
      id: 1,
      link: "#",
      text: "About",
      dropdown: [
        { id: 1, link: "/about/profile", text: "Profile" },
        { id: 2, link: "/about/core-values", text: "Core Values" },
        { id: 3, link: "/about/mission", text: "Vision & Mission" },
        { id: 4, link: "/about/team", text: "Management Team" },
      ],
    },
    {
      id: 2,
      link: "/services",
      text: "Services",
      dropdown: [],
    },
    {
      id: 3,
      link: "#",
      text: "Projects",
      dropdown: [
        { id: 1, link: "/projects/spears-1858", text: "Spears 1858" },
        { id: 2, link: "/projects/rubik-1709", text: "Rubik 1709" },
        { id: 3, link: "/projects/loft-705", text: "Loft 705" },
        { id: 4, link: "/projects/spears-88", text: "Spears 88" },
      ],
    },
    {
      id: 4,
      link: "/media",
      text: "Media",
      dropdown: [],
    },
    {
      id: 5,
      link: "/news",
      text: "News",
      dropdown: [],
    },
    {
      id: 6,
      link: "/careers",
      text: "Careers",
      dropdown: [],
    },
    {
      id: 7,
      link: "/contact",
      text: "Contact us",
      dropdown: [],
    },
  ];

  const handleMouseEnter = (id: number) => {
    setDropdownOpen(id);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={topdown}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white nav">
        <div>
          <h1 className="text-5xl font-signature ml-2">
            <Link
              className="link-underline link-underline-black"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              Logo
            </Link>
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link, dropdown, text }) => (
            <li
              key={id}
              className="relative nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-red-500 duration-200 link-underline"
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={link} className="flex items-center">
                {text}
                {dropdown.length > 0 && (
                  <FaChevronDown className="ml-2" size="10" />
                )}
              </Link>
              {dropdown.length > 0 && (
                <ul
                  className={`absolute top-[13px] left-0 border bg-white text-black w-48 mt-2 rounded-md transition-all duration-200 ${
                    dropdownOpen === id ? "block" : "hidden"
                  }`}
                >
                  {dropdown.map((subLink) => (
                    <li
                      key={subLink.id}
                      className="px-4 py-2 hover:bg-red-100 hover:text-red-500"
                    >
                      <Link href={subLink.link}>{subLink.text}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-black md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-200 text-black overflow-y-auto">
            {links.map(({ id, link, text, dropdown }) => (
              <li key={id} className="w-full">
                <div
                  className="px-4 cursor-pointer capitalize py-2 text-xl flex items-center justify-between"
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === id ? null : id)
                  }
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {text}
                  </Link>
                  {dropdown.length > 0 && <FaChevronDown size={20} />}
                </div>
                {dropdownOpen === id && dropdown.length > 0 && (
                  <ul className="pl-8 border">
                    {dropdown.map((subLink) => (
                      <li key={subLink.id} className="py text-md">
                        <Link onClick={() => setNav(!nav)} href={subLink.link}>
                          {subLink.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
