"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";

const SocialIcon = () => {
  return (
    <div className="flex items-center gap-4">
      <Link target="_blank" href={"https://www.facebook.com/abdulrafay0608"}>
        <div className="flex justify-center items-center w-10 h-10 rounded-lg text-white text-lg hover:text-[#3b5998] hover:rounded-full bg-[#3b5998] hover:bg-white transition-colors duration-500">
          <FaFacebookF size={25} />
        </div>
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/abdulrafay0608/"}
      >
        <div className="flex justify-center items-center w-10 h-10 leading-10 rounded-lg text-white hover:text-[#0A66C2] hover:rounded-full bg-[#0A66C2] hover:bg-white transition-colors duration-500">
          <FaLinkedinIn size={25} />
        </div>
      </Link>
      <Link target="_blank" href={"https://github.com/abdulrafay0608"}>
        <div className="flex justify-center items-center w-10 h-10 leading-10 rounded-lg text-white text-lg hover:text-[#34465d] hover:rounded-full  bg-[#34465d] hover:bg-white transition-colors duration-500">
          <TbBrandGithubFilled size={25} />
        </div>
      </Link>
      <Link target="_blank" href={"mailto:abdulrafay0608@gmail.com"}>
        <div className="flex justify-center items-center w-10 h-10 leading-10 rounded-lg text-white text-lg hover:text-[#ff8c00] hover:rounded-full bg-[#ff8c00] hover:bg-white transition-colors duration-500">
          <IoMdMail size={25} />
        </div>
      </Link>
    </div>
  );
};

export default SocialIcon;
