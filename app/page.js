"use client";

import { gsap, Power3 } from "gsap";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/Gola";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Heading from "@/ui-component/Heading";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState("hidden");
  const [lastScrollY, setLastScrollY] = useState(0);
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  useEffect(() => {
    gsap.set(".cursor-dot", { scale: 0.1 });
    gsap.set(".cursor-outline", { scale: 0.6 });
    const xCTo = gsap.quickTo(".cursor-outline", "left", {
      duration: 0.2,
      ease: "power3",
    });
    const yCTo = gsap.quickTo(".cursor-outline", "top", {
      duration: 0.2,
      ease: "power3",
    });

    const xDTo = gsap.quickTo(".cursor-dot", "left", {
      duration: 0.6,
      ease: "power3",
    });
    const yDTo = gsap.quickTo(".cursor-dot", "top", {
      duration: 0.6,
      ease: "power3",
    });

    let isVisible = false;

    const mouseMove = (e) => {
      if (!isVisible) {
        gsap.set(".cursor-outline, .cursor-dot", { opacity: 1 });
        isVisible = true;
      }

      const cursorPosition = {
        left: e.clientX,
        top: e.clientY,
      };

      xCTo(cursorPosition.left);
      yCTo(cursorPosition.top);
      xDTo(cursorPosition.left);
      yDTo(cursorPosition.top);
    };

    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // const controlNavbar = () => {
  //   if (window.scrollY > 150) {
  //     setIsOpen("block");
  //   } else {
  //     setIsOpen("hidden");
  //   }
  //   setLastScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, [lastScrollY]);

  return (
    <>
      <div id="home">
        <div className="hidden sm:block relative">
          <div className="fixed top-0 left-0 z-50">
            <div
              className={`${
                theme === "dark" ? "border-white border" : "border border-black"
              } cursor-outline absolute w-20 h-20   rounded-full mix-blend-difference pointer-events-none opacity-0`}
            ></div>
            <div
              className={`${
                theme === "dark"
                  ? " bg-[#ccc] border border-[#ccc]"
                  : "border bg-black  border-black"
              } cursor-dot absolute w-20 h-20 border rounded-full mix-blend-difference pointer-events-none opacity-0`}
            ></div>
          </div>
        </div>
        <div className="cursor-pointer fixed right-[30px] bottom-[30px]  z-50 w-[50px] hover:scale-125 transition-all duration-300 h-[50px] rounded-full">
          <Link href={"https://wa.me/03160025477"} target="_blank">
          <Image
            src={"/svg/whatsapp.svg"}
            width={100}
            height={100}
            className=" w-full h-full"
            alt={"whatsapp"}
          />
          </Link>
        </div>
        <AnimatedBackground />
        <Navbar timeline={tl} ease={ease} />
        <Hero />
        <div id="about" className="text-5xl my-12 lg:m-0">
          <Heading heading={"About us"} />
        </div>
        <About />
        <div id="skills" className="text-5xl my-12 lg:m-0">
          <Heading heading={"Skills"} />
        </div>
        <Skills />
        <div id="portfolio" className="text-5xl my-12 lg:m-0">
          <Heading heading={"Project"} />
        </div>
        <Project />
        <div id="contact" className="text-5xl text-left my-12">
          <Heading heading={"Get in Touch"} />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
