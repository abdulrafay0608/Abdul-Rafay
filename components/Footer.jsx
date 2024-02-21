"use client"
import Link from 'next/link';
import React, { useContext } from 'react'
import SocialIcon from './SocialIcon';
import { ThemeContext } from '@/context/ThemeProvider';
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <footer className={`${theme === "dark" ? "bg-slate-900  border-b-slate-500 " : "bg-slate-100 border-b-slate-300 "} border-x-0 border-t-0 border block text-center pt-6`}>
      <div className='block md:flex justify-around items-center mb-6 m-2 md:m-20'>

        <div className='md:w-[40vw] w-full my-6'>
          <div className="">
            <Image height={200} width={200} src={`${theme == "dark" ? "/assets/logodark.png" : "/assets/logolight.png"}`} alt="logo" />
          </div>
          <div className='text-sm py-3'>
            <SocialIcon />
          </div>
        </div>

        <div className="md:w-[60vw] w-full">
          <div className='block md:flex items-center w-full md:gap-8'>

            <Link className='md:w-[50%]' target='_blank' href={"mailto:abdulrafay0608@gmail.com"}>
              <div className={`${theme === "dark" ? "bg-slate-900 border-slate-400" : "border-slate-900 bg-gray-100"} flex justify-start items-center w-full border-double border-4 rounded-lg py-3 my-4`}>
                <div className={`${theme === "dark" ? "text-yellow-500 border-yellow-500" : "text-slate-900 border-slate-900"}  w-min text-lg md:text-xl border-double border-4  p-3 rounded-full mx-2 md:mx-4`}>
                  <TfiEmail />
                </div>
                <div className="text-left">
                  <h2 className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold title-font font-md`}>Our Email</h2>
                  <p className='text-sm font-bold text-yellow-500'>abdulrafay0608@gmail.com</p>
                </div>
              </div>
            </Link>

            <Link className='md:w-[50%]' href={"tel:03160025477"}>
              <div className={`${theme === "dark" ? "bg-slate-900 border-slate-400" : "border-slate-900 bg-gray-100"} flex justify-start items-center w-full border-double border-4 rounded-lg py-3 my-4`}>
                <div className={`${theme === "dark" ? "text-yellow-500 border-yellow-500" : "text-slate-900 border-slate-900"} text-lg md:text-xl w-min border-double border-4  p-3 rounded-full mx-2 md:mx-4`}>
                  <FaPhoneAlt />
                </div>
                <div className="text-left">
                  <h2 className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold title-font font-md`}>Phone</h2>
                  <p className='text-sm font-bold text-yellow-500'>[ +92-316-0025477 ]</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='block md:flex items-center w-full md:gap-8'>
            <Link className='md:w-[50%]' target='_blank' href={"https://www.linkedin.com/in/abdulrafay0608/"}>
              <div className={`${theme === "dark" ? "bg-slate-900 border-slate-400" : "border-slate-900 bg-gray-100"} flex justify-start items-center w-full border-double border-4 rounded-lg py-3 my-4`}>
                <div className={`${theme === "dark" ? "text-yellow-500 border-yellow-500" : "text-slate-900 border-slate-900"}  w-min text-lg md:text-xl border-double border-4  p-3 rounded-full mx-2 md:mx-4`}>
                  <FaLinkedinIn />
                </div>
                <div className="text-left">
                  <h2 className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold title-font font-md`}>Linkedin</h2>
                  <p className='text-sm font-bold text-yellow-500'>/in/abdulrafay0608/</p>
                </div>
              </div>
            </Link>

            <Link className='w-[50%]' href={""}>
              <div className={`${theme === "dark" ? "bg-slate-900 border-slate-400" : "border-slate-900 bg-gray-100"} flex justify-start items-center w-full border-double border-4 rounded-lg py-3 my-4`}>
                <div className={`${theme === "dark" ? "text-yellow-500 border-yellow-500" : "text-slate-900 border-slate-900"} text-lg md:text-xl w-min border-double border-4  p-3 rounded-full mx-2 md:mx-4`}>
                  <CiLocationOn />
                </div>
                <div className="text-left">
                  <h2 className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold title-font font-md`}>Our Location</h2>
                  <p className='text-sm font-bold text-yellow-500'>Pakistan, Karachi</p>
                </div>
              </div>
            </Link>
          </div>



        </div>
      </div>
      <div className={`${theme === "dark" ? "bg-slate-950" : "bg-slate-100"} font-bold md:text-sm py-4 text-xs`}>
        Created By <span className='text-yellow-500 font-extrabold'>Abdul Rafay</span>  |  {new Date().getFullYear()}  all copyright reserved.
      </div>
    </footer>
  )
}

export default Footer;  