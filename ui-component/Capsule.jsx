import React, { useContext } from "react";
import "./Capsule.css";
import { ThemeContext } from "@/context/ThemeProvider";

const Capsule = ({ capsule }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "capsuleDark" : "capsuleLight"
      }  max-w-max`}
    >
      {capsule}
    </div>
  );
};

export default Capsule;
