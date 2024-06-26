"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import { RiLiveFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { ThemeContext } from "@/context/ThemeProvider";

const Project = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="portfolio">
      <div className="mt-20">
        <h2 className="text-center text-5xl font-extrabold">Portfolio</h2>
        <p className="text-center mx-2 font-mono">
          &quot;Each project is a unique piece of development.&quot;
        </p>

        <div className="grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20">
          <div className="text-container">
            <h2 className="text-center text-2xl font-extrabold my-4 text-white">
              Sundown Studio Clone
            </h2>
            <p className="md:mx-6 text-center text-slate-300">
              PassProtector is an innovative application designed to securely
              store user credentials, helping users manage and protect their
              usernames and passwords. Given the frequent issue of users
              forgetting their login details after signing up on various
              websites and apps, passprotector offers a reliable solution to
              this problem.
            </p>
            <div className="flex justify-center items-center my-3 gap-2">
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md ">
                React (Vite.js)
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                Tailwind Css
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                Local Storage
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-4">
              <Link
                target="_blank"
                href={"https://https://passprotector.vercel.app"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Live Demo </p>
                  <RiLiveFill />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/abdulrafay0608/Password-Manager"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Code </p>
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="minus0ne-scroll-item"></div>
            <div className="magic-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-sm shadow-white">
              <p className="text-black font-bold">
                Hover here to see Majic 💥💫
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20">
          <div className="relative">
            <div className="zero-scroll-item"></div>
            <div className="magic-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-sm shadow-white">
              <p className="text-black font-bold">
                Hover here to see Majic 💥💫
              </p>
            </div>
          </div>

          <div className="text-container">
            <h2 className="text-center text-2xl font-extrabold my-4 text-white">
              Sidcup Family Golf Clone
            </h2>
            <p className="md:mx-6 text-center text-slate-300">
              In this project, I recreated the engaging landing page for Sidcup
              Family Golf, a multi-purpose golf facility in London. Using HTML,
              CSS, and JavaScript, I faithfully replicated the original design
              and interactive elements.
            </p>
            <div className="flex justify-center items-center my-3 gap-2">
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md ">
                HTML
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                CSS
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                JavaScript
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 my-4">
              <Link
                target="_blank"
                href={"https://rafay-sidcupfamilygolf.vercel.app"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Live Demo </p>
                  <RiLiveFill />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/abdulrafay0608/Sidcup-Family-Golf"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Code </p>
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20">
          <div className="text-container">
            <h2 className="text-center text-2xl font-extrabold my-4 text-white">
              Sundown Studio Clone
            </h2>
            <p className="md:mx-6 text-center text-slate-300">
              In this project, I recreated the landing page for Sundown Studio,
              a design studio. This clone replicates the design and interactive
              features of the original website using HTML, CSS, and JavaScript.
            </p>
            <div className="flex justify-center items-center my-3 gap-2">
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md ">
                HTML
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                CSS
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                JavaScript
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-4">
              <Link
                target="_blank"
                href={"https://https://rafay-sundown.vercel.app"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Live Demo </p>
                  <RiLiveFill />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/abdulrafay0608/Sundown"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Code </p>
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="first-scroll-item"></div>
            <div className="magic-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-sm shadow-white">
              <p className="text-black font-bold">
                Hover here to see Majic 💥💫
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20">
          <div className="relative">
            <div className="second-scroll-item"></div>
            <div className="magic-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white p-3 rounded-md shadow-sm shadow-white">
              <p className="text-black font-bold">
                Hover here to see Majic 💥💫
              </p>
            </div>
          </div>
          <div className="text-container">
            <h2 className="text-center text-2xl font-extrabold my-4 text-white">
              Personal Blogging App
            </h2>
            <p className="md:mx-6 text-center text-slate-300">
              Crafted a user-friendly personal blogging app platform allowing
              users to post, edit, and delete personal blogs using HTML, CSS,
              and JavaScript. Additionally, it offers secure authentication via
              email and password.
            </p>
            <div className="flex justify-center items-center my-3 gap-2">
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md ">
                HTML
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                CSS
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                JS
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-4">
              <Link
                target="_blank"
                href={"https://personalbloggingapp-rafay.netlify.app/"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Live Demo </p>
                  <RiLiveFill />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/abdulrafay0608/BlogApp"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Code</p>
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20">
          <div className="text-container">
            <h2 className="text-center text-2xl font-extrabold my-4 text-white">
              Human-Generated Prompts
            </h2>
            <p className="md:mx-6 text-center text-slate-300">
              An innovative platform that generates prompts tailored to
              users&apos; search intent, powered by Next.js, Node.js, MongoDB,
              and Express for a seamless
            </p>
            <div className="flex justify-center items-center my-3 gap-2">
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md ">
                Next js
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                Tailwind Css
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                MongoDB
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-4">
              <Link
                target="_blank"
                href={"https://humangeneratedprompts.netlify.app/"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Live Demo </p>
                  <RiLiveFill />
                </div>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://github.com/abdulrafay0608/Human-Generated-Prompt"
                }
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Code </p>
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="third-scroll-item"></div>
            <div className="magic-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-sm shadow-white">
              <p className="text-black font-bold">
                Hover here to see Majic 💥💫
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20">
          <div className="relative">
            <div className="fourth-scroll-item"></div>
          </div>
          <div className="text-container">
            <h2 className="text-center text-2xl font-extrabold my-4 text-white">
              Todo App
            </h2>
            <p className="md:mx-6 text-center text-slate-300">
              Experience the future of task management with Next.js Todo App: A
              seamlessly integrated project leveraging Tailwind CSS, Firestore,
              and Firebase authentication for a dynamic and secure user
              experience.
            </p>
            <div className="flex justify-center items-center my-3 gap-2">
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md ">
                Next js
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                Tailwind Css
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                Firebase
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-4">
              <Link target="_blank" href={"https://rafay-todo.netlify.app/"}>
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Live Demo </p>
                  <RiLiveFill />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/abdulrafay0608/todo"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Code</p>
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20">
          <div className="text-container">
            <h2 className="text-center text-2xl font-extrabold my-4 text-white">
              Shoe Store
            </h2>
            <p className="md:mx-6 text-center text-slate-300">
              Developed an online shoe store website using Next.js and Tailwind
              CSS, focusing on enhancing my frontend skills. Crafted a
              user-friendly, responsive interface for an immersive shopping
              experience.
            </p>
            <div className="flex justify-center items-center my-3 gap-2">
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md ">
                Next js
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                Tailwind Css
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-4">
              <Link
                target="_blank"
                href={"https://rafay-shoes-store.netlify.app/"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Live Demo </p>
                  <RiLiveFill />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/abdulrafay0608/Online-Shoes-Store"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Code </p>
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="fifth-scroll-item"></div>
            <div className="magic-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-sm shadow-white">
              <p className="text-black font-bold">
                Hover here to see Majic 💥💫
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20">
          <div className="relative">
            <div className="sixth-scroll-item"></div>
            <div className="magic-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-sm shadow-white">
              <p className="text-black font-bold">
                Hover here to see Majic 💥💫
              </p>
            </div>
          </div>

          <div className="text-container">
            <h2 className="text-center text-2xl font-extrabold my-4 text-white">
              Amazone Clone
            </h2>
            <p className="md:mx-6 text-center text-slate-300">
              Recreated an Amazon e-commerce platform using HTML and CSS to
              enhance front-end skills and display proficiency in building
              visually appealing.
            </p>
            <div className="flex justify-center items-center my-3 gap-2">
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md ">
                HTML
              </div>
              <div className="bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md">
                CSS
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-4">
              <Link
                target="_blank"
                href={"https://ecommercerafay.netlify.app/"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Live Demo </p>
                  <RiLiveFill />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/abdulrafay0608/Landing-Page"}
              >
                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                  <p>Code </p>
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
