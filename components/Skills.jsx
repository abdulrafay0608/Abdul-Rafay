import Image from "next/image";
import React, { useContext } from "react";
import SkillBar from "./SkillsIcon";
import { ThemeContext } from "@/context/ThemeProvider";
import Capsule from "@/ui-component/Capsule";
import SkillsIcon from "./SkillsIcon";
// Learning is the compass that guides us; every acquired skill is a marker on the journey of continuous growth.
const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section >
      <div className="flex flex-col items-center min-h-[80vh] w-full my-5">
        <div className="mx-3">
          <Capsule
            capsule={"Transforming Ideas into Interactive Digital Solutions. ✌️"}/>
        </div>

        <p className="md:w-1/2 w-full px-3 lg:text-center tracking-wide text-sm leading-6">
          With extensive experience as front-end developer, I specialize in
          crafting exceptional web experiences. Utilizing HTML, CSS, JavaScript,
          React.js, Next.js, Firebase, MongoDB, Express.js, Node.js, and basic
          React Native, I've built dynamic websites and frontend applications,
          showcasing proficiency in both back-end and front-end development. My
          primary focus is on front-end development, where I bring designs to
          life and ensure seamless user interactions.
        </p>
        <div>
          <SkillsIcon />
        </div>
      </div>
    </section>
  );
};

export default Skills;
