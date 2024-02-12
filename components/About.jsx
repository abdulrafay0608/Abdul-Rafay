"use client"
import Image from 'next/image';
import React, { useContext } from 'react'
import TypingAnimation from './TypingAnimation';
import { ThemeContext } from '@/context/ThemeProvider';

const About = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <section className={`${theme === "dark" ? "bg-slate-900" : ""} relative py-12 md:p-12`} id='about'>
            {/* <h3 className='flex items-center text-xl md:text-3xl font-extrabold my-4'>I&apos;m &nbsp; <span className='text-yellow-400'> <TypingAnimation /></span></h3> */}

            <h2 className="text-center text-5xl font-extrabold p-0 ">About us</h2>
            <p className="text-center font-mono pb-8">&quot;Turning Ideas into Interactive Experiences&quot;</p>

            <div className='flex flex-col md:flex-row justify-evenly items-center md:mx-16'>
                
                <div className=' md:m-6 md:order-2'>
                    <Image className='' src={"/assets/pi.png"} height={500} width={500} alt='My Picture' />
                </div>
                
                <div className='md:order-1 md:w-2/3 mx-3 py-2'>
                    <h2 className='md:text-3xl text-2xl font-extrabold my-4'>I&apos;m <span className='text-yellow-500'>Abdul Rafay</span>  &amp; I&apos;m a <span className='text-yellow-500'>Front-End Developer</span> </h2>
                    <p className='text-justify md:max-w-[600px]'>
                        I am a dedicated frontend developer with a passion for creating immersive web experiences. From translating designs into code to optimizing user interactions, I bring ideas to life in the digital realm.
                    </p>
                    <table className="my-6">
                        <tbody>
                            <tr>
                                <td className='w-28'>Name</td>
                                <td className='w-4'>:</td>
                                <td className='text-yellow-500'>Abdul Rafay</td>
                            </tr>
                            <tr>
                                <td className='w-28'>Date Of Birth</td>
                                <td className='w-4'>:</td>
                                <td className='text-yellow-500'>August 06, 2033</td>
                            </tr>
                            <tr>
                                <td className='w-28'>Address</td>
                                <td className='w-4'>:</td>
                                <td className='text-yellow-500'>Karachi, Pakistan</td>
                            </tr>
                            <tr>
                                <td className='w-28'>Phone no.</td>
                                <td className='w-4'>:</td>
                                <td className='text-yellow-500'>+92-316-0025477</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='my-3 '>
                        <button className={`${theme === "dark" ? "bg-yellow-400 text-slate-900 shadow-slate-400 hover:text-white hover:shadow-slate-400 hover:bg-transparent hover:border-yellow-400 border-white " : "hover:border-slate-950 bg-transparent hover:bg-yellow-400 text-slate-900 shadow-slate-400 hover:shadow-slate-400 hover:bg-transparent border-slate-950 "} border-double border-4 rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md shadow`}>Resume</button>
                    </div>
                </div>


            </div>

            {/* <div className='flex flex-col md:flex-row justify-evenly items-center'>
                    <div className='shadow-2xl shadow-white/50 rounded-md m-6' >
                        <Image className='rounded-lg' src={"/assets/picture2.jpg"}
                            height={350} width={350} alt='My Picture' />
                    </div>
                    <div>
                        <div className='mx-3'>
                            <h2 className='md:text-3xl text-2xl font-extrabold my-4'>I&apos;m <span className=' text-yellow-400'>Abdul Rafay</span>  &amp; I&apos;m a <span className=' text-yellow-400'>Web Developer</span> </h2>
                            <p className='text-justify md:w-[600px]'>As a passionate front-end developer,
                                I am dedicated to creating immersive web experiences
                                that captivate users and drive results. With a strong
                                foundation in HTML, CSS, and JavaScript, I excel at transforming
                                designs into functional, intuitive, and visually stunning websites.
                            </p>
                            <table className="my-6">
                                <tbody>
                                    <tr>
                                        <td className='w-28'>Name</td>
                                        <td className='w-4'>:</td>
                                        <td className='text-yellow-400'>Abdul Rafay</td>
                                    </tr>
                                    <tr>
                                        <td className='w-28'>Date Of Birth</td>
                                        <td className='w-4'>:</td>
                                        <td className='text-yellow-400'>August 06, 2033</td>
                                    </tr>
                                    <tr>
                                        <td className='w-28'>Address</td>
                                        <td className='w-4'>:</td>
                                        <td className='text-yellow-400'>Karachi, Pakistan</td>
                                    </tr>
                                    <tr>
                                        <td className='w-28'>Phone no.</td>
                                        <td className='w-4'>:</td>
                                        <td className='text-yellow-400'>+92-316-0025477</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='my-3'>
                                <button className='border-double border-4 hover:border-yellow-400 border-white rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md hover:shadow-white shadow shadow-yellow-400 ' >Resume</button>
                            </div>
                        </div>
                    </div>
                </div> */}
        </section>
    )
}

export default About;