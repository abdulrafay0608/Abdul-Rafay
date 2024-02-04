"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const message = e.target[3].value;

        // Send data to API or perform other actions
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Message:', message);
    };


    return (
        <section id='contact'>
            <div className="mt-12 pb-10">
                <h2 className="text-center text-5xl font-extrabold">Get in Touch</h2>
                <p className="text-center font-mono pb-12">&quot;Let's Turn Your Ideas into Reality&quot;</p>

                <div className="block md:flex justify-center items-center md:gap-4">
                    <div className=' bg-slate-900 rounded-md p-4 mx-2 md:p-10'>
                        <h1 className='font-bold text-2xl'><span className='border-b-2 border-yellow-400'>SAY SOM</span>ETHING</h1>

                        <form onSubmit={handleSubmit} className="my-4">

                            <div className='grid md:grid-cols-2 grid-flow-col-1 md:justify-center items-center gap-6 my-6'>
                                <input
                                    placeholder='Name *'
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    autoComplete='off'
                                    className="w-full py-2 bg-transparent border-b-2 border-b-slate-500 outline-none transition-all focus:border-yellow-400"
                                />

                                <input
                                    placeholder='Email *'
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete='off'
                                    className="w-full py-2 bg-transparent border-b-2 border-b-slate-500 outline-none transition-all focus:border-yellow-400"
                                />
                            </div>

                            <input
                                placeholder='Subject *'
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                autoComplete='off'
                                className="w-full py-2 bg-transparent border-b-2 border-b-slate-500 outline-none transition-all focus:border-yellow-400"
                            />

                            <textarea name="message" id="" cols="30" rows="4"
                                placeholder='Your message *'
                                required
                                autoComplete='off'
                                className="w-full my-6 py-2 bg-transparent border-b-2 border-b-slate-500 outline-none transition-all focus:border-yellow-400"
                            >

                            </textarea>
                            <button className='border-double border-4 border-yellow-400 hover:border-white rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md hover:shadow-yellow-400 shadow shadow-white ' >Send Message</button>
                        </form>
                    </div>

                    <div className="my-6 mx-2 md:w-[390px] ">

                        <Link href={"/"}>
                            <div className="flex justify-start items-center bg-slate-900 border-double border-slate-400 border-4 rounded-lg py-3 my-4">
                                <div className="text-lg md:text-xl w-min border-double border-4 text-yellow-400 border-yellow-400 p-3 rounded-full mx-2 md:mx-4">
                                    <TfiEmail />
                                </div>
                                <div className="">
                                    <h2 className="text-white title-font font-md">Our Email</h2>
                                    <p className='text-sm text-yellow-300'>abdulrafay0608@gmail.com</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={"/"}>
                            <div className="flex justify-start items-center bg-slate-900 border-double border-slate-400 border-4 rounded-lg py-3 my-4">
                                <div className="text-lg md:text-xl w-min border-double border-4 text-yellow-400 border-yellow-400 p-3 rounded-full mx-2 md:mx-4">
                                    <FaPhoneAlt />
                                </div>
                                <div className="">
                                    <h2 className="text-white title-font font-md">Phone</h2>
                                    <p className='text-sm text-yellow-300'>[ +92-316-0025477 ]</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={"/"}>
                            <div className="flex justify-start items-center bg-slate-900 border-double border-slate-400 border-4 rounded-lg py-3 my-4">
                                <div className="text-lg md:text-xl w-min border-double border-4 text-yellow-400 border-yellow-400 p-3 rounded-full mx-2 md:mx-4">
                                    <FaLinkedinIn />
                                </div>
                                <div className="">
                                    <h2 className="text-white title-font font-md">Linkedin</h2>
                                    <p className='text-sm text-yellow-300'>linkedin.com/in/abdulrafay0608/</p>
                                </div>
                            </div>
                        </Link>

                        <Link href={"/"}>
                            <div className="flex justify-start items-center bg-slate-900 border-double border-slate-400 border-4 rounded-lg py-3 my-4">
                                <div className="text-lg md:text-xl w-min border-double border-4 text-yellow-400 border-yellow-400 p-3 rounded-full mx-2 md:mx-4">
                                    <CiLocationOn />
                                </div>
                                <div className="">
                                    <h2 className="text-white title-font font-md">Our Location</h2>
                                    <p className='text-sm text-yellow-300'>Pakistan, Karachi</p>
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