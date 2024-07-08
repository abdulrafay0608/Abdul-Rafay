import React, { useCallback, useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperCard.css";
import { Navigation, Pagination, History, Autoplay } from "swiper/modules";
import Capsule from "@/ui-component/Capsule";
import Button from "@/ui-component/Button";
import DarkButton from "@/ui-component/DarkButton";
import { ThemeContext } from "@/context/ThemeProvider";
import SkillsCapsule from "@/ui-component/SkillsCapsule";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Pass Protector",
    description:
      "PassProtector is an innovative application designed to securely store user credentials, helping users manage and protect their usernames and passwords. Given the frequent issue of users forgetting their login details after signing up on various websites and apps, PassProtector offers a reliable solution to this problem.",
    technologies: ["React + Vite.js", "Tailwind CSS", "Local Storage"],
    image: "/asset/pass.png",
    liveDemo: "https://rafay-passprotector.vercel.app/",
    codeLink: "https://github.com/abdulrafay0608/Password-Manager",
  },
  {
    title: "Sidcup Family Golf Clone",
    description:
      "In this project, I recreated the engaging landing page for Sidcup Family Golf, a multi-purpose golf facility in London. Using HTML, CSS, and JavaScript, I faithfully replicated the original design and interactive elements.",
    technologies: ["HTML", "CSS", "JavaScript", "Swipper js"],
    image: "/asset/golf.png",
    liveDemo: "https://rafay-sidcupfamilygolf.vercel.app",
    codeLink: "https://github.com/abdulrafay0608/Sidcup-Family-Golf",
  },
  {
    title: "Sundown Studio Clone",
    description:
      "In this project, I recreated the landing page for Sundown Studio, a design studio. This clone replicates the design and interactive features of the original website using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Swipper js"],
    image: "/asset/sundown.png",
    liveDemo: "https://rafay-sundown.vercel.app",
    codeLink: "https://github.com/abdulrafay0608/Sundown",
  },
  {
    title: "Personal Blogging App",
    description:
      "Crafted a user-friendly personal blogging app platform allowing users to post, edit, and delete personal blogs using HTML, CSS, and JavaScript. Additionally, it offers secure authentication via email and password.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/asset/blog.png",
    liveDemo: "https://personalbloggingapp-rafay.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/BlogApp",
  },
  {
    title: "Human-Generated Prompts",
    description:
      "An innovative platform that generates prompts tailored to users' search intent, powered by Next.js, Node.js, MongoDB, and Express for a seamless experience.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    image: "/asset/human.jpg",
    liveDemo: "https://humangeneratedprompts.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/Human-Generated-Prompt",
  },
  {
    title: "Todo App",
    description:
      "Experience the future of task management with Next.js Todo App: A seamlessly integrated project leveraging Tailwind CSS, Firestore, and Firebase authentication for a dynamic and secure user experience.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    image: "/asset/todo.png",
    liveDemo: "https://rafay-todo.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/todo",
  },
  {
    title: "Shoe Store",
    description:
      "Developed an online shoe store website using Next.js and Tailwind CSS, focusing on enhancing my frontend skills. Crafted a user-friendly, responsive interface for an immersive shopping experience.",
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/asset/shoe.png",
    liveDemo: "https://rafay-shoes-store.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/Online-Shoes-Store",
  },
  {
    title: "Amazon Clone",
    description:
      "Recreated an Amazon e-commerce platform using HTML and CSS to enhance front-end skills and display proficiency in building visually appealing websites.",
    technologies: ["HTML", "CSS"],
    image: "/asset/amazone.png",
    liveDemo: "https://ecommercerafay.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/Landing-Page",
  },
];

export default function SwiperCard() {
  const { theme } = useContext(ThemeContext);

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div className="container px-2 sm:px-[50px] py-[20px]">
        <div className="self-end flex justify-end items-center gap-5 mb-2">
          <div
            className="prev-arrow flex justify-center items-center h-12 w-16 rounded-md border text-white bg-[#000]  cursor-pointer"
            onClick={handlePrev}
          >
            <FaArrowRightLong size={20} />
          </div>
          <div
            className="next-arrow flex justify-center items-center h-12 w-16 rounded-md border text-white bg-[#000] cursor-pointer"
            onClick={handleNext}
          >
            <FaArrowLeftLong size={20} />
          </div>
        </div>
        <Swiper
          className={`${
            theme === "dark" ? "dark-parent-swiper" : "light-parent-swiper"
          }`}
          ref={sliderRef}
          spaceBetween={20}
          slidesPerView={3}
          navigation={false}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          modules={[Navigation, Pagination, History]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((pro, i) => {
            return (
              <SwiperSlide
                key={i}
                className={`${
                  theme == "dark" ? "dark-main-swiper" : "light-main-swiper"
                }`}
              >
                <div className="card h-[200px] md:h-[300px] w-[500px] p-2 ">
                  <Image
                    height={300}
                    width={300}
                    className="h-[200px] md:h-[300px] overflow-hidden w-full object-cover object-top rounded-md mix-blend-saturation"
                    src={pro.image}
                    alt={pro.title}
                  />
                  {/* <Swiper
                pagination={false}
                slidesPerView={1}
                spaceBetween={30}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                allowTouchMove={false}
                modules={[Pagination, Autoplay]}
                className={`${
                  theme === "dark" ? "dark-child-swiper" : "light-child-swiper"
                }""`}
              >
                <SwiperSlide className="image-swiper">
                  <Image
                    width={440}
                    height={440}
                    // layout="fill"
                    className=""
                    src="/asset/1.webp"
                    alt="todo"
                  />
                </SwiperSlide>
                <SwiperSlide className="image-swiper">
                  <Image
                    width={440}
                    height={440}
                    // layout="fill"
                    className=""
                    src="/asset/2.webp"
                    alt="pass"
                  />
                </SwiperSlide>
                <SwiperSlide className="image-swiper">
                  <Image
                    width={440}
                    height={440}
                    // layout="fill"
                    className=""
                    src="/asset/3.webp"
                    alt="human"
                  />
                </SwiperSlide>
              </Swiper> */}
                  <div className="md:mx-2 my-4 mx-2">
                    <div className="flex flex-wrap gap-3">
                      {pro.technologies[0] && (
                        <div
                          className={`${
                            theme === "dark"
                              ? "border-2 border-gray-400 bg-gray-700"
                              : "border-2 border-slate-950 bg-white"
                          } text-[11px] max-w-max rounded-[50px] py-2 px-4`}
                        >
                          {pro.technologies[0]}
                        </div>
                      )}
                      {pro.technologies[1] && (
                        <div
                          className={`${
                            theme === "dark"
                              ? "border-2 border-gray-400 bg-gray-700"
                              : "border-2 border-slate-950 bg-white"
                          } text-[11px] max-w-max rounded-[50px] py-2 px-4`}
                        >
                          {pro.technologies[1]}
                        </div>
                      )}
                      {pro.technologies[2] && (
                        <div
                          className={`${
                            theme === "dark"
                              ? "border-2 border-gray-400 bg-gray-700"
                              : "border-2 border-slate-950 bg-white"
                          } text-[11px] max-w-max rounded-[50px] py-2 px-4`}
                        >
                          {pro.technologies[2]}
                        </div>
                      )}
                      {pro.technologies[3] && (
                        <div
                          className={`${
                            theme === "dark"
                              ? "border-2 border-gray-400 bg-gray-700"
                              : "border-2 border-slate-950 bg-white"
                          } text-[11px] max-w-max rounded-[50px] py-2 px-4`}
                        >
                          {pro.technologies[3]}
                        </div>
                      )}
                      {pro.technologies[4] && (
                        <div
                          className={`${
                            theme === "dark"
                              ? "border-2 border-gray-400 bg-gray-700"
                              : "border-2 border-slate-950 bg-white"
                          } text-[11px] max-w-max rounded-[50px] py-2 px-4`}
                        >
                          {pro.technologies[4]}
                        </div>
                      )}
                    </div>
                    <h3 className="font-protest mt-5 mb-3 text-3xl">
                      {pro.title}
                    </h3>
                    <p className="text-sm line-clamp-4 tracking-wide">
                      {pro.description}
                    </p>
                    <div className="flex mt-4 gap-3">
                      <Link target="_blank" href={pro.liveDemo}>
                        <DarkButton lable={"Live"} />
                      </Link>
                      <Link target="_blank" href={pro.codeLink}>
                        <DarkButton lable={"Code"} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}
