"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Loader } from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

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
    }, 3000);

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };

  }, [lastScrollY]);


  return (
    <>
      {loading ? <Loader /> :
        <div className="relative">
          {/* <div className={`sticky z-50 top-[90vh] mx-2 md:mx-8 text-white text-2xl transition-all duration-300 ${isOpen}`} >
            <Link id="home" href={""} className="bg-slate-700 hover:bg-slate-800 p-2">
              <FaArrowAltCircleUp color="#fff"  />
            </Link>
          </div> */}
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </div >
      }
    </>
  );
}