"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState("hidden");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setIsOpen("block");
    } else {
      setIsOpen("hidden");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };

  }, [lastScrollY]);


  return (
    <>
      {/* {loading ?"": "<Preloader />"} */}
      <div className="relative">
        <div className={`sticky z-50 animate-bounce  top-[92vh] mx-2 md:mx-8 text-right text-white text-2xl transition-all duration-300  ${isOpen}`}>
          <Link className="bg-slate-700 hover:bg-slate-800 p-3 rounded-full " id="home" href={""}>
            ⏏
          </Link>
        </div>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Project />
        <Contact />
      </div >
    </>
  );
}