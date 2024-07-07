import { ThemeContext } from "@/context/ThemeProvider";
import React, { useContext } from "react";

const SkillsCapsule = ({ skill }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <span
      className={`${
        theme === "dark" ? "border-2 border-gray-400 bg-gray-700" : "border-2 border-slate-950 bg-white"
      } text-[11px] w-min p-2 rounded-2xl mr-3`}
    >
      {skill}
    </span>
  );
};

export default SkillsCapsule;
