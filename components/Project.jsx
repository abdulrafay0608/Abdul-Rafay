import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { RiLiveFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

// grid grid-cols-3 gap-8 mt-12
const Project = () => {
    return (
        <section id='portfolio'>
            
            <div className="mt-20">
                <h2 className="text-center text-5xl font-extrabold">Portfolio</h2>
                <p className="text-center mx-2 font-mono">
                    &quot;Each project is a unique piece of development.&quot;
                </p>

                <div className='grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20'>
                    <div className='relative'>
                        <div className="scroll-item">
                        </div>
                        <div className='magic-text absolute top-1 left-1 bg-white p-3 rounded-md shadow-sm shadow-white'>
                            <p className='text-black font-bold'>Hover here to see Majic 💥💫</p>
                        </div>
                    </div>

                    <div className="text-container">
                        <h2 className='text-center text-2xl font-extrabold my-4'>Amazone Clone</h2>
                        <p className='mx-6 text-center text-slate-300'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur magnam animi totam tempora, repellendus rem nihil neque ratione maxime vitae voluptas eius omnis vel enim dolor ex nisi velit?</p>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md '>
                                HTML
                            </div>
                            <div className='bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md'>
                                CSS
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 my-4'>
                            <Link href={""}>
                                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                                    <p>Live Demo </p>
                                    <RiLiveFill />
                                </div>
                            </Link>
                            <Link href={""}>
                                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                                    <p>Code </p>
                                    <FaGithub />

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20'>
                    <div className="text-container">
                        <h2 className='text-center text-2xl font-extrabold my-4'>Amazone Clone</h2>
                        <p className='mx-6 text-center text-slate-300'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur magnam animi totam tempora, repellendus rem nihil neque ratione maxime vitae voluptas eius omnis vel enim dolor ex nisi velit?</p>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md '>
                                HTML
                            </div>
                            <div className='bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md'>
                                CSS
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 my-4'>
                            <Link href={""}>
                                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                                    <p>Live Demo </p>
                                    <RiLiveFill />
                                </div>
                            </Link>
                            <Link href={""}>
                                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                                    <p>Code </p>
                                    <FaGithub />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className="scroll-item">
                        </div>
                        <div className='magic-text absolute top-1 left-1 bg-white p-3 rounded-md shadow-sm shadow-white'>
                            <p className='text-black font-bold'>Hover here to see Majic 💥💫</p>
                        </div>
                    </div>

                </div>

                <div className='grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20'>
                    <div className='relative'>
                        <div className="scroll-item">
                        </div>
                        <div className='magic-text absolute top-1 left-1 bg-white p-3 rounded-md shadow-sm shadow-white'>
                            <p className='text-black font-bold'>Hover here to see Majic 💥💫</p>
                        </div>
                    </div>

                    <div className="text-container">
                        <h2 className='text-center text-2xl font-extrabold my-4'>Amazone Clone</h2>
                        <p className='mx-6 text-center text-slate-300'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur magnam animi totam tempora, repellendus rem nihil neque ratione maxime vitae voluptas eius omnis vel enim dolor ex nisi velit?</p>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md '>
                                HTML
                            </div>
                            <div className='bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md'>
                                CSS
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 my-4'>
                            <Link href={""}>
                                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                                    <p>Live Demo </p>
                                    <RiLiveFill />
                                </div>
                            </Link>
                            <Link href={""}>
                                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                                    <p>Code </p>
                                    <FaGithub />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 grid-flow-col-1 justify-center items-center bg-slate-900 hover:bg-slate-950 transition-all p-4 border-4 border-double my-12 border-yellow-400 mx-2 md:mx-20'>
                    <div className="text-container">
                        <h2 className='text-center text-2xl font-extrabold my-4'>Amazone Clone</h2>
                        <p className='mx-6 text-center text-slate-300'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur magnam animi totam tempora, repellendus rem nihil neque ratione maxime vitae voluptas eius omnis vel enim dolor ex nisi velit?</p>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md '>
                                HTML
                            </div>
                            <div className='bg-slate-950 border-4 border-double border-yellow-400 text-white font-bold py-1 px-2 rounded-md'>
                                CSS
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 my-4'>
                            <Link href={""}>
                                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                                    <p>Live Demo </p>
                                    <RiLiveFill />
                                </div>
                            </Link>
                            <Link href={""}>
                                <div className="flex justify-center items-center gap-2 text-sm shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-md transition duration-300 ease-out">
                                    <p>Code </p>
                                    <FaGithub />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className="scroll-item">
                        </div>
                        <div className='magic-text absolute top-1 left-1 bg-white p-3 rounded-md shadow-sm shadow-white'>
                            <p className='text-black font-bold'>Hover here to see Majic 💥💫</p>
                        </div>
                    </div>

                </div>

            </div>

        </section >
    )
}

export default Project;