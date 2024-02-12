"use client"
import React, { useContext } from 'react'
import SocialIcon from './SocialIcon';
import { ThemeContext } from '@/context/ThemeProvider';

const Footer = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <section className={`${theme === "dark" ? "bg-slate-900  border-b-slate-500 " : "bg-slate-100 border-b-slate-300 "} border-x-0 border-t-0 border block text-center md:flex justify-around items-center p-2 `}>
      <div className='text-xs'>
        <SocialIcon />
      </div>
      <div className='font-bold md:text-sm m-3 text-xs'>
        Created By <span className='text-yellow-500 font-extrabold'>Abdul Rafay</span>  |  {new Date().getFullYear()}  all copyright reserved.
      </div>
    </section>
  )
}

export default Footer;  