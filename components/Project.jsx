"use client";

import React, { useContext } from "react";

import { RiLiveFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { ThemeContext } from "@/context/ThemeProvider";
import SwiperCard from "./SwiperCard";

const Project = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <div className="flex justify-center items-center lg:my-0 my-10">
        <SwiperCard />
        {/* <div className="h-[60vh] flex justify-center items-center text-2xl md:text-5xl font-[900]">
          Project Upload Soon
        </div> */}
      </div>
      
    </section>
  );
};

export default Project;
