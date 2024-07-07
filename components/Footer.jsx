"use client";
import Link from "next/link";
import React from "react";
import SocialIcon from "./SocialIcon";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {

  return (
    <footer className="relative pt-5">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="font-protest font-[700] text-4xl md:text-5xl lg:text-7xl">
          <span className="text-[#95C11E]"> &lt; Abd</span>ul Rafay{" "}
          <span className="text-[#95C11E]">/&gt;</span>
        </div>
        <div className="">
          <SocialIcon />
        </div>
        <p className="w-full border-t border-gray-500 text-center text-[12px] md:text-sm py-3">
          Created By<span className="text-[#95C11E] font-bold"> Abdul Rafay </span> |{" "}
          {new Date().getFullYear()} all copyright reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
