"use client";
import { MdDarkMode } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "@/context/ThemeProvider";
import DarkButton from "@/ui-component/DarkButton";

const Navbar = () => {
  const { theme, LightMode, DarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !isOpen) {
        setShow("-translate-y-[70px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    setIsOpen(false);
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${
        theme === "dark" ? "dark" : "light"
      } flex items-center justify-around border-b border-gray-500 h-[70px] px-4 md:p-0 z-10 sticky top-0 transition-transform duration-1000 ease-in-out delay-200 ${show}`}
    >
      <div className="font-protest font-[700] text-2xl lg:text-3xl">
        <span className="text-[#95C11E]"> &lt; Abd</span>ul Rafay{" "}
        <span className="text-[#95C11E]">/&gt;</span>
      </div>

      {/* Navigation links for larger screens */}
      <nav className="hidden lg:flex items-center gap-8">
        {NavMenu.map((menu, index) => (
          <Link
            key={index}
            href={menu.url}
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              theme === "dark"
                ? "text-white hover:text-white/80 "
                : "text-slate-950 hover:text-slate-800"
            } text-sm font-light hover:underline`}
          >
            <span>{menu.title}</span>
          </Link>
        ))}
      </nav>

      {/* Dark and Light mode icons */}
      <div className="flex items-center justify-center gap-5 text-white ">
        <Link
          href={"/asset/abdul-rafay-resume.pdf"}
          className="hidden lg:block"
        >
          <DarkButton lable={"Resume"} />
        </Link>
        {theme == "dark" ? (
          <>
            <div
              onClick={theme == "dark" ? LightMode : DarkMode}
              className="transition-all duration-1000 ease-in-out hover:underline flex justify-center items-center gap-3 cursor-pointer"
            >
              <MdOutlineLightMode color="#fff" size={25} />
            </div>
          </>
        ) : (
          <>
            <div
              onClick={theme == "dark" ? LightMode : DarkMode}
              className="transition-all duration-1000 ease-in-out text-slate-950 text-sm font-light  hover:text-slate-800 flex justify-center items-center gap-3 cursor-pointer"
            >
              <MdDarkMode size={25} className="text-slate-950 " />
            </div>
          </>
        )}
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${theme === "dark" ? "text-white" : "text-slate-950"} `}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Responsive menu for smaller screens */}
      {isOpen && (
        <nav
          className={`${theme === "dark" ? "bg-[#051622]/90" : "light"} ${
            isOpen ? "right-[0%]" : "-right-[100%]"
          } lg:hidden -right-[100%]  z-40 absolute top-[70px]  w-9/12 h-screen p-3 ease-out transition duration-500 transform`}
        >
          {NavMenu.map((menu, index) => (
            <Link
              key={index}
              href={menu.url}
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                theme === "dark"
                  ? "text-white hover:text-white/70 "
                  : "text-slate-950 hover:text-slate-800"
              } flex items-center hover:underline p-3 leading-10	`}
            >
              <span className="ml-2">{menu.title}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
