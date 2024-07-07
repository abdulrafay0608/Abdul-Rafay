import React from "react";
import "./Heading.css"

const Heading = ({heading}) => {
  return <h2 className="flex justify-center items-center font-protest h-[10vh] font-[800] text-5xl">{heading}</h2>;
};

export default Heading;
