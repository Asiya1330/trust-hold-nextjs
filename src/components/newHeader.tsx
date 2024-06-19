import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

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

const NewHeader = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const [nav, setNav] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(
    null
  );

  useEffect(() => {
    const animateOnLoad = () => {
      if (
        logoRef.current &&
        hamburgerRef.current &&
        navRef.current &&
        mobileMenuRef.current
      ) {
        logoRef.current.style.animation = "slideInLeft 1s ease-out forwards";
        hamburgerRef.current.style.animation =
          "slideInRight 1s ease-out forwards";
        navRef.current.style.animation = "slideDown 0.5s ease-out forwards";
        mobileMenuRef.current.style.animation =
          "slideDown 0.5s ease-out forwards";
      }
    };

    animateOnLoad();
  }, []);

  const topdown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const links: NavLink[] = [
    {
      id: 0,
      link: "/",
      text: "Home",
      dropdown: [],
    },
    {
      id: 1,
      link: "#",
      text: "About",
      dropdown: [
        { id: 1, link: "/about/profile", text: "Profile" },
        { id: 2, link: "/about/core-values", text: "Core Values" },
        { id: 3, link: "/about/mission", text: "Vision & Mission" },
        { id: 4, link: "/about/team", text: "Management Team" },
        { id: 5, link: "/media", text: "Media" },
        { id: 6, link: "/news", text: "News" },
        { id: 7, link: "/careers", text: "Careers" },
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
        { id: 4, link: "/projects/el-palacio", text: "El Palacio" },
        { id: 4, link: "/projects/loft-55", text: "Loft 55" },

      ],
    },
    {
      id: 4,
      link: "/investment-opportunities",
      text: "Investment Opportunities",
      dropdown: [],
    },
    {
      id: 5,
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

  const toggleMobileMenu = () => {
    setNav(!nav);
  };
  const toggleMobileDropdown = (id: number) => {
    setMobileDropdownOpen(mobileDropdownOpen === id ? null : id);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={topdown}
      transition={{ duration: 0.5 }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-auto mt-4 left-0 w-full md:w-11/12 md:mx-10 h-20 px-4 text-black bg-navbar-gradient shadow-md z-50 flex justify-between items-center rounded-lg">
        <div>
          <h1 className="text-5xl font-signature ml-2">
            <Link
              className="link-underline link-underline-black z-10"
              href="/"
              rel="noreferrer"
            >
              <Image
                src="/trusthold-logo.png"
                alt="Trusthold Logo"
                width={200}
                height={60}
                priority
              />
            </Link>
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link, dropdown, text }) => (
            <li
              key={id}
              className={`relative flex justify-center items-center nav-links px-6 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 link-underline ${
                text === "Contact us"
                  ? "bg-red-500 text-white rounded-3xl py-3 ml-4"
                  : "hover:text-red-500"
              }`}
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
                  className={`absolute top-[30px] left-0 border bg-white text-black w-48 mt-2 rounded-md transition-all duration-200 ${
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
      </div>

      {/* Mobile Navbar */}
      <nav
        ref={navRef}
        className="block md:hidden text-gray-200 absolute top-0 right-0 left-0 z-50 "
      >
        <div className="flex justify-between items-center h-20 bg-navbar-gradient">
          <div className="flex items-center pl-4" ref={logoRef}>
            <Link href="/">
              <Image
                src="/trusthold-logo.png"
                alt="Trusthold Logo"
                width={200}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* MOBILE NAV ICON */}
          <div className="block pr-4" ref={hamburgerRef}>
            <button
              aria-label="navigation"
              type="button"
              className="text-gray-900 transition duration-300 focus:outline-none focus:text-gray-900 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              {nav ? (
                <FaTimes className="text-3xl" />
              ) : (
                <FaBars className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          id="mobileMenu"
          className={`overflow-hidden transition-all duration-500  ${
            nav ? "max-h-screen" : "max-h-0"
          }`}
          ref={mobileMenuRef}
        >
          <div className="flex flex-col justify-center items-center w-full py-4 bg-red-700 bg-opacity-75">
            {links.map(({ id, link, text, dropdown }) => (
              <div key={id} className="w-full">
                <div
                  className="block text-gray-200 cursor-pointer py-3 px-4 transition duration-300 focus:outline-none focus:text-[#0d001d] focus:underline hover:underline hover:text-[#0d001d]"
                  onClick={() =>
                    dropdown.length > 0
                      ? toggleMobileDropdown(id)
                      : toggleMobileMenu()
                  }
                >
                  <Link
                    href={link}
                    className="flex justify-between items-center"
                  >
                    {text}
                    {dropdown.length > 0 && (
                      <FaChevronDown className="ml-2" size="10" />
                    )}
                  </Link>
                </div>
                {dropdown.length > 0 && mobileDropdownOpen === id && (
                  <div className="pl-4">
                    {dropdown.map((subLink) => (
                      <Link
                        key={subLink.id}
                        href={subLink.link}
                        className="block text-gray-200 cursor-pointer py-2 px-4 transition duration-300 focus:outline-none focus:text-[#0d001d] focus:underline hover:underline hover:text-red-500"
                        onClick={toggleMobileMenu}
                      >
                        {subLink.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default NewHeader;
