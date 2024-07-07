"use client";
import Image from "next/image";
import React from "react";
import DarkButton from "@/ui-component/DarkButton";
import Link from "next/link";

const About = () => {

  return (
    <section >
      <div className="min-h-[90vh] relative flex flex-col lg:flex-row justify-around items-center">
        <div className="about-img px-2 lg:p-0 mb-12 lg:m-6 lg:order-2">
          <Image className="img" layout="fill"  src={"/asset/profile.png"} alt="My-Picture" />
        </div>

        <div className="md:order-1">
          <div className="md:max-w-[550px] w-full px-3 text-sm leading-7">
            <p>
              Hello! I'm Abdul Rafay, a front-end web developer with a passion
              for creating dynamic and responsive websites. With a strong
              foundation in HTML, CSS, JavaScript, and React (including
              Next.js), I specialize in turning complex problems into elegant
              web solutions.
            </p>
            <p className="mt-6">
              I started my journey in web development with a keen interest in
              how websites are built and function.
            </p>
            <p className="mt-6">
              This curiosity led me to undertake formal training at Saylani Mass
              IT Training provided me with a solid understanding of the
              fundamentals and advanced concepts of web development. Since then,
              I've increased my skills through a variety of projects,
              continually learning and adapting to the latest technologies and
              best practices.
            </p>
          </div>
          <Link href={"/asset/abdul-rafay-resume.pdf"} className="mt-8 mx-3">
            <DarkButton lable={"Resume"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
