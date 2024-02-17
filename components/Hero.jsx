"use client"

import Image from 'next/image'
import React, { useContext } from 'react'
import SocialIcon from './SocialIcon'
import TypingAnimation from './TypingAnimation'
import { ThemeContext } from "@/context/ThemeProvider";
import Link from 'next/link'
const Hero = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <main className='relative md:h-screen' id='home'>

            <div className='relative flex flex-col-reverse md:flex-row justify-around items-center h-[85vh]'>

                <div className={`absolute rounded-md rotate-180 animate-ping transition-all duration-1000 h-20 w-20 md:h-40 md:w-40 border-4 border-double ${theme === "dark" ? "border-yellow-300" : "border-yellow-600"}`}></div>
                <div className='absolute rounded-md rotate-45 animate-ping transition-all duration-1000 h-20 w-20 md:h-40 md:w-40 border-4 border-double border-yellow-300'></div>
                <div className='absolute rounded rotate-180 animate-ping transition-all duration-1000 h-10 w-10 md:h-20 md:w-20 border-4 border-double border-yellow-300'></div>
                <div className='absolute rounded rotate-45 animate-ping transition-all duration-1000 h-10 w-10 md:h-20 md:w-20 border-4 border-double border-yellow-300'></div>


                <div className='bg-black/20 p-4 md:bg-transparent md:p-0 absolute mx-3 md:mx-0 md:relative '>
                    <h3 className='font-bold text-base md:text-2xl '>Welcome to My Corner of the Web!</h3>
                    <h2 className={`text-yellow-500 md:text-5xl text-3xl font-extrabold my-4 `}>Abdul Rafay</h2>
                    <h3 className='flex items-center text-xl md:text-3xl font-bold my-4'>I&apos;m &nbsp; <span className='text-yellow-500'> <TypingAnimation /></span></h3>
                    <p className='md:w-[500px] font-bold'>&quot;Passionate Frontend Developer | Crafting Digital Experiences&quot;
                    </p>
                    <div className='my-5'>
                        <Link href={"#contact"} >
                            <button className={`${theme === 'dark' ? "border-yellow-400 hover:border-white hover:shadow-yellow-400 shadow-white" : "border-slate-950 bg-yellow-400 hover:bg-transparent"} border-double border-4 rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md shadow`}>Hire me</button>
                        </Link>
                        <Link href={""}>
                            <button className={`${theme === "dark" ? "bg-yellow-400 text-slate-900 shadow-slate-400 hover:text-white hover:shadow-slate-400 hover:bg-transparent hover:border-yellow-400 border-white " : "hover:border-slate-950 bg-transparent hover:bg-yellow-400 text-slate-900 shadow-slate-400 hover:shadow-slate-400 hover:bg-transparent border-slate-950 "} border-double border-4 rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md shadow`}>Resume</button>
                        </Link>
                    </div>
                    <div className='md:absolute -bottom-28 mt-8'>
                        <SocialIcon />
                    </div>
                </div>
                <div className=''>
                    <Image className='' src={"/assets/profile.png"} height={400} width={400} alt='my picture' />
                </div>
            </div>

        </main>

    )
}

export default Hero