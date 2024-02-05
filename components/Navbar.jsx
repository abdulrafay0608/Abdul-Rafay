"use client"
import { MdDarkMode } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { NavMenu } from './NavMenu';
import Link from 'next/link';
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "@/context/ThemeProvider";
import Image from "next/image";


const Navbar = () => {
  const { theme, LightMode, DarkMode } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !isOpen) {
        setShow("-translate-y-[60px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);



  return (
    <nav className={`${theme === "dark" ? "bg-slate-900 border-x-0 border-t-0 border border-b-slate-500 " : "bg-white"} flex items-center justify-around h-[64px] px-4 md:p-8 z-50 sticky top-0 transition-transform duration-300 ${show}`}>
      <div>
        <span className={`${theme === "dark" ? "text-white" : "text-slate-950"} font-extrabold text-xl tracking-tight`}>
          <Image className="mix-blend-normal" height={160} width={160} src={"/assets/logo.png"} alt="logo" />
        </span>
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className={`${theme === "dark" ? "text-white" : "text-slate-950"} `}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation links for larger screens */}
      <div className="hidden md:flex items-center gap-5">
        {NavMenu.map((menu, index) => (
          <Link
            key={index}
            href={menu.url}
            onClick={() => setIsOpen(!isOpen)}
            className={`${theme === "dark" ? "text-white hover:text-white/70 " : "text-slate-950 hover:text-slate-800"}  font-bold hover:underline flex items-center gap-1`}
          >
            <span className='text-[16px]'>{menu.icon}</span>
            <span>{menu.title}</span>
          </Link>
        ))}
      </div>

      {/* Dark and Light mode icons */}
      <div onClick={theme == "dark" ? LightMode : DarkMode} className="flex items-center justify-center h-6 w-6 text-white">
        {theme == "dark" ?
          <>
            <div className="text-white hover:text-white/70 font-bold flex justify-center items-center cursor-pointer">
              <div className="text-sm">Light</div>
              <MdOutlineLightMode color="#fff" size={18} className="ml-2 " />
            </div>
          </>
          :
          <>
            <div className="text-slate-950 font-bold hover:text-slate-800 flex justify-center items-center cursor-pointer">
              <div className="text-sm  ">Dark</div>
              <MdDarkMode size={18} className="text-slate-950 " />
            </div>
          </>
        }

      </div>

      {/* Responsive menu for smaller screens */}
      {isOpen && (
        <div className={`${theme === "dark" ? "bg-slate-900" : "bg-white"}  md:hidden fixed top-16 left-0 w-9/12 h-screen p-3 transition-transform duration-300 `}>
          {NavMenu.map((menu, index) => (
            <Link
              key={index}
              href={menu.url}
              onClick={() => setIsOpen(!isOpen)}
              className={`${theme === "dark" ? "text-white font-bold hover:text-white/70 " : "text-slate-950 font-bold hover:text-slate-800"} flex items-center p-3`}
            >
              <span className='text-[16px]'>{menu.icon}</span>
              <span className="ml-2">{menu.title}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

