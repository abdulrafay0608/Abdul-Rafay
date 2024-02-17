"use client"

import { ThemeContext } from '@/context/ThemeProvider';
import Link from 'next/link';
import React, { useContext } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";

const SocialIcon = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className='flex justify-center items-center gap-4'>
            <Link target='_blank' href={"https://www.facebook.com/abdulrafay0608"}>
                <div className={`${theme === "dark" ? "text-yellow-400 shadow-yellow-500 hover:shadow-white border-yellow-400 hover:border-white hover:text-white " : "text-slate-950 hover:bg-yellow-400 border-slate-950"} shadow border-dotted border-2 p-3 rounded-full transition duration-300 ease-out`}>
                    <FaFacebookF />
                </div>
            </Link>
            <Link target='_blank' href={"https://www.linkedin.com/in/abdulrafay0608/"}>
                <div className={`${theme === "dark" ? "text-yellow-400 shadow-yellow-500 hover:shadow-white border-yellow-400 hover:border-white hover:text-white " : "text-slate-950 hover:bg-yellow-400 border-slate-950"} shadow border-dotted border-2 p-3 rounded-full transition duration-300 ease-out`}>
                    <FaLinkedinIn />

                </div>
            </Link>
            <Link target='_blank' href={"https://github.com/abdulrafay0608"}>
                <div className={`${theme === "dark" ? "text-yellow-400 shadow-yellow-500 hover:shadow-white border-yellow-400 hover:border-white hover:text-white " : "text-slate-950 hover:bg-yellow-400 border-slate-950"} shadow border-dotted border-2 p-3 rounded-full transition duration-300 ease-out`}>
                    <TbBrandGithubFilled />
                </div>
            </Link>
            <Link target='_blank' href={"mailto:abdulrafay0608@gmail.com"}>
                <div className={`${theme === "dark" ? "text-yellow-400 shadow-yellow-500 hover:shadow-white border-yellow-400 hover:border-white hover:text-white " : "text-slate-950 hover:bg-yellow-400 border-slate-950"} shadow border-dotted border-2 p-3 rounded-full transition duration-300 ease-out`}>
                    <IoMdMail />
                </div>
            </Link>
        </div>
    )
}

export default SocialIcon;