import React from "react";

const skills = [
  { skill_img: "/svg/html.svg", skill_name: "HTML5" },
  { skill_img: "/svg/css.svg", skill_name: "CSS3" },
  { skill_img: "/svg/javascript.svg", skill_name: "JavaScript" },
  { skill_img: "/svg/react.svg", skill_name: "React" },
  { skill_img: "/svg/next.svg", skill_name: "Next.js" },
  { skill_img: "/svg/mongo.svg", skill_name: "MongoDB" },
  { skill_img: "/svg/firebase.svg", skill_name: "Firebase" },
  { skill_img: "/svg/express.svg", skill_name: "Express" },
  { skill_img: "/svg/node.svg", skill_name: "Node.js" },
  { skill_img: "/svg/react.svg", skill_name: "React Native" },
];

const SkillsIcon = () => {
  return (
    <div className="">
      <ul className="grid grid-cols-2 md:gap-2 gap-12 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 h-full my-8">
        {skills.map((skill, i) => {
          return (
            <li
              key={i}
              className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col cursor-pointer"
              style={{
                opacity: 1,
                transform: "translateY(0px) translateZ(0px)",
              }}
            >
              <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-[#041622] rounded-full dark:rounded-none p-4">
                <img
                  alt={skill.skill_name}
                  width={100}
                  height={100}
                  className="invert w-full h-full"
                  src={skill.skill_img}
                />
              </div>
              <span className="dark:text-neutral-400 text-sm text-neutral-800">
                {skill.skill_name}
              </span>
            </li>
          );
        })}

        {/* <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              //   style={{ color: "transparent" }}
              src="/React.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            React
          </span>
        </li>
        <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              style={{ color: "transparent" }}
              src="/CSS.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            CSS3
          </span>
        </li>
        <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              style={{ color: "transparent" }}
              src="/Next.js.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            Next.js
          </span>
        </li>
        <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              style={{ color: "transparent" }}
              src="/HTML5.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            HTML5
          </span>
        </li>
        <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              style={{ color: "transparent" }}
              src="/Prisma.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            Prisma ORM
          </span>
        </li>
        <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              style={{ color: "transparent" }}
              src="/bootstrap.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            Bootstrap
          </span>
        </li>
        <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              style={{ color: "transparent" }}
              src="/Typescript.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            Typescript
          </span>
        </li>
        <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              style={{ color: "transparent" }}
              src="/Tailwind.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            Tailwind
          </span>
        </li>
        <li
          className="flex md:mx-8 justify-center gap-4 text-center items-center flex-col"
          style={{
            opacity: 1,
            transform: "translateY(0px) translateZ(0px)",
          }}
        >
          <div className="dark:p-0 w-[60px] h-[60px] sm:dark:p-4 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] p-4 bg-black rounded-full dark:rounded-none">
            <img
              alt="skills"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-full h-full"
              style={{ color: "transparent" }}
              src="/Node.js.svg"
            />
          </div>
          <span className="dark:text-neutral-400 text-sm text-neutral-800">
            Node.js
          </span>
        </li> */}
      </ul>
    </div>
  );
};

export default SkillsIcon;
