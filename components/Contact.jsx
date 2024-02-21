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
  
                    <div className={`${theme === "dark" ? "bg-slate-900" : "bg-gray-100"} rounded-md p-4 md:mx-20 mx-2 md:p-10`}>

                        <h1 className={`${theme === "dark" ? "text-white" : "text-slate-950"} font-bold text-2xl`}><span className='border-b-2 border-yellow-500'>Feel Free To Con</span>tact</h1>

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
                                <button className={`${theme === "dark" ? "bg-yellow-400 text-slate-900 shadow-slate-400 hover:text-white hover:shadow-slate-400 hover:bg-transparent hover:border-yellow-400 border-white " : "hover:border-slate-950 bg-transparent hover:bg-yellow-400 text-slate-900 shadow-slate-400 hover:shadow-slate-400 hover:bg-transparent border-slate-950 "} border-double border-4 rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md shadow`}>Send Message</button>
                            </div>
                            <ToastContainer />
                        </form>
                    </div>

                   

            </div>
        </section>
    )
}

export default Contact;