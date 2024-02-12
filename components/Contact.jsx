"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { ThemeContext } from '@/context/ThemeProvider';

const Contact = () => {

    const { theme } = useContext(ThemeContext)
    const route = useRouter()
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID,
            form.current, { publicKey: process.env.PUBLIC_ID, })
            .then(() => {
                route.refresh()
                toast.success('✅ Successfully Submitted!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                console.log('SUCCESS!');
            },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };


    return (
        <section id='contact'>
            <div className="mt-12 pb-10">
                <h2 className="text-center text-5xl font-extrabold">Get in Touch</h2>

                <p className="text-center font-mono pb-12">{`"Let's Turn Your Ideas into Reality"`}</p>
                <div className="block md:flex justify-center items-center md:mx-16 md:gap-4">

                    <div className={`${theme === "dark" ? "bg-slate-900" : "bg-gray-100"} md:w-full rounded-md p-4 mx-2 md:p-10`}>

                        <h1 className={`${theme === "dark" ? "text-white" : "text-slate-950"} font-bold text-2xl`}><span className='border-b-2 border-yellow-500'>SAY SOM</span>ETHING</h1>

                        <form ref={form} onSubmit={handleSubmit} className="my-4">

                            <div className='grid md:grid-cols-2 grid-flow-col-1 md:justify-center items-center gap-6 my-6'>
                                <input
                                    placeholder='Name *'
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    required
                                    autoComplete='off'
                                    className={`${theme === "dark" ? "border-b-slate-500 focus:border-yellow-400" : "border-b-slate-400 focus:border-slate-900"} w-full py-2 bg-transparent border-b-2 outline-none transition-all`} />
                                <input
                                    placeholder='Email *'
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    required
                                    autoComplete='off'
                                    className={`${theme === "dark" ? "border-b-slate-500 focus:border-yellow-400" : "border-b-slate-400 focus:border-slate-900"} w-full py-2 bg-transparent border-b-2 outline-none transition-all`} />
                            </div>

                            <input
                                placeholder='Subject *'
                                type="text"
                                id="subject"
                                name="user_subject"
                                required
                                autoComplete='off'
                                className={`${theme === "dark" ? "border-b-slate-500 focus:border-yellow-400" : "border-b-slate-400 focus:border-slate-900"} w-full py-2 bg-transparent border-b-2 outline-none transition-all`} />

                            <textarea name="message" id="" cols="30" rows="4"
                                placeholder='Your message *'
                                required
                                autoComplete='off'
                                className={`${theme === "dark" ? "border-b-slate-500 focus:border-yellow-400" : "border-b-slate-400 focus:border-slate-900"} w-full py-2 bg-transparent border-b-2 outline-none transition-all`}>
                            </textarea>
                            <div className='mt-5'>
                                <button className={`${theme === "dark" ? "bg-yellow-400 text-slate-900 shadow-slate-400 hover:text-white hover:shadow-slate-400 hover:bg-transparent hover:border-yellow-400 border-white " : "hover:border-slate-950 bg-transparent hover:bg-yellow-400 text-slate-900 shadow-slate-400 hover:shadow-slate-400 hover:bg-transparent border-slate-950 "} border-double border-4 rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md shadow`}>Resume</button>
                            </div>
                            <ToastContainer />
                        </form>
                    </div>

                    <div className="my-6 mx-2 ">

                        <Link href={"/"}>
                            <div className={`${theme === "dark" ? "bg-slate-900 border-slate-400" : "border-slate-900 bg-gray-100"} flex justify-start items-center border-double border-4 rounded-lg py-3 my-4`}>
                                <div className={`${theme === "dark" ? "text-yellow-500 border-yellow-500" : "text-slate-900 border-slate-900"} text-lg md:text-xl w-min border-double border-4  p-3 rounded-full mx-2 md:mx-4`}>
                                    <TfiEmail />
                                </div>
                                <div className="">
                                    <h2 className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold title-font font-md`}>Our Email</h2>
                                    <p className='text-sm font-bold text-yellow-500'>abdulrafay0608@gmail.com</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={"/"}>
                            <div className={`${theme === "dark" ? "bg-slate-900 border-slate-400" : "border-slate-900 bg-gray-100"} flex justify-start items-center border-double border-4 rounded-lg py-3 my-4`}>
                                <div className={`${theme === "dark" ? "text-yellow-500 border-yellow-500" : "text-slate-900 border-slate-900"} text-lg md:text-xl w-min border-double border-4  p-3 rounded-full mx-2 md:mx-4`}>
                                    <FaPhoneAlt />
                                </div>
                                <div className="">
                                    <h2 className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold title-font font-md`}>Phone</h2>
                                    <p className='text-sm font-bold text-yellow-500'>[ +92-316-0025477 ]</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={"/"}>
                            <div className={`${theme === "dark" ? "bg-slate-900 border-slate-400" : "border-slate-900 bg-gray-100"} flex justify-start items-center border-double border-4 rounded-lg py-3 my-4`}>
                                <div className={`${theme === "dark" ? "text-yellow-500 border-yellow-500" : "text-slate-900 border-slate-900"} text-lg md:text-xl w-min border-double border-4  p-3 rounded-full mx-2 md:mx-4`}>
                                    <FaLinkedinIn />
                                </div>
                                <div className="">
                                    <h2 className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold title-font font-md`}>Linkedin</h2>
                                    <p className='text-sm font-bold text-yellow-500'>linkedin.com/in/abdulrafay0608/</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={"/"}>
                            <div className={`${theme === "dark" ? "bg-slate-900 border-slate-400" : "border-slate-900 bg-gray-100"} flex justify-start items-center border-double border-4 rounded-lg py-3 my-4`}>
                                <div className={`${theme === "dark" ? "text-yellow-500 border-yellow-500" : "text-slate-900 border-slate-900"} text-lg md:text-xl w-min border-double border-4  p-3 rounded-full mx-2 md:mx-4`}>
                                    <CiLocationOn />
                                </div>
                                <div className="">
                                    <h2 className={`${theme === "dark" ? "text-white" : "text-slate-900"} font-bold title-font font-md`}>Our Location</h2>
                                    <p className='text-sm font-bold text-yellow-500'>Pakistan, Karachi</p>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact;