"use client";

import Image from "next/image";
import React, { useContext } from "react";
import SocialIcon from "./SocialIcon";
import TypingAnimation from "./TypingAnimation";
import { ThemeContext } from "@/context/ThemeProvider";
import Link from "next/link";
import Button from "@/ui-component/Button";
import DarkButton from "@/ui-component/DarkButton";
import Capsule from "@/ui-component/Capsule";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <div className="relative min-h-[90vh]  flex flex-col-reverse lg:flex-row justify-around items-center">
        <div className="px-4">
          <h3
            className={`${
              theme === "dark" ? "bg-[#0d2232]" : "bg-gray-200"
            }  hover:animate-pulse rounded-3xl max-w-max py-2 px-8 border border-[#112b3e] text-sm font-semibold`}
          >
            <span className="text-base">✨</span> Welcome to My Portfolio
          </h3>
          <h2 className="font-protest font-[800] tracking-wider text-4xl md:text-6xl my-4">
            Abdul Rafay
          </h2>
          <h3 className="font-protest flex items-center text-xl md:text-3xl font-bold my-4">
            I&apos;m &nbsp;
            <span className="tracking-wider text-[#95C11E]">
              <TypingAnimation />
            </span>
          </h3>
          <Capsule
            capsule={
              "Designing the Future of Web with Excellence and Passion 👋"
            }
          />
          <p className="w-full md:w-[500px] text-sm my-4 tracking-wide leading-6">
            A passionate and creative
            <span className="text-[#95C11E] font-bold">
              {" "}
              frontend web developer{" "}
            </span>
            with a knack for designing and building beautiful, user-friendly
            websites and applications.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Link href={"#contact"}>
              <DarkButton lable={"Hire Me"} />
            </Link>
            <Link href={"/asset/abdul-rafay-resume.pdf"}>
              <Button lable={"Resume"} />
            </Link>
          </div>
          <div className="mt-10">
            <SocialIcon />
          </div>
        </div>

        <div className="rounded-full relative mb-8 lg:mb-0 flex justify-center items-center">
         

          <Image
            className="hero-img"
            width={550}
            height={550}
            src={"/svg/hero.svg"}
            alt="computer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
