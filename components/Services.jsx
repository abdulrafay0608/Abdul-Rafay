import Image from 'next/image'
import React, { useContext } from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { ThemeContext } from '@/context/ThemeProvider';

const Services = () => {
    const { theme } = useContext(ThemeContext)

    return (

        <section id='service'>
            <div className="py-12">
                <h2 className="text-center text-5xl font-extrabold">Services</h2>
                <p className="text-center font-mono">&quot;Elevating Your Digital Presence&quot;</p>

                <div className="container px-5 py-16 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className={`${theme === "dark" ? "border-yellow-400/50 shadow-yellow-400/50 hover:shadow-slate-400/50 hover:bg-slate-900" : "border-slate-900 shadow-slate-400 hover:shadow-slate-400/50 hover:bg-slate-200"} p-4 md:p-8 flex flex-col rounded-xl border-8 border-double shadow-lg transition ease-in-out delay-75 hover:-translate-y-4 hover:scale-100 duration-500`}>
                            <div className={`${theme === "dark" ? " border-yellow-400  text-yellow-400" : "border-slate-950 text-slate-950"} border-2 w-20 h-20 text-5xl inline-flex items-center justify-center rounded-full border-dotted mb-5 flex-shrink-0`}>
                                <FaLaptopCode />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-yellow-500 text-lg md:text-xl font-bold mb-3">Front-End Development</h2>
                                <p className="leading-relaxed text-sm">
                                    I am a Front-End Website Developer, I turn creative designs into functional and visually appealing websites. My focus is on creating user-friendly experiences, ensuring that your online presence leaves a lasting impression.
                                </p>
                            </div>
                        </div>

                        <div className={`${theme === "dark" ? "border-yellow-400/50 shadow-yellow-400/50 hover:shadow-slate-400/50 hover:bg-slate-900" : "border-slate-900 shadow-slate-400 hover:shadow-slate-400/50 hover:bg-slate-200"} p-4 md:p-8 flex flex-col rounded-xl border-8 border-double shadow-lg transition ease-in-out delay-75 hover:-translate-y-4 hover:scale-100 duration-500`}>
                            <div className={`${theme === "dark" ? " border-yellow-400  text-yellow-400" : "border-slate-950 text-slate-950"} border-2 w-20 h-20 text-5xl inline-flex items-center justify-center rounded-full border-dotted mb-5 flex-shrink-0`}>
                                <CgWebsite />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-yellow-500 text-lg md:text-xl font-bold mb-3">Web Development</h2>
                                <p className="leading-relaxed text-sm">
                                    I am a Web Developer dedicated to transforming ideas into fully functional websites. With a commitment to staying updated on the latest technologies, I bring a blend of creativity and technical expertise to deliver websites that stand out in the digital landscape.
                                </p>
                            </div>
                        </div>

                        <div className={`${theme === "dark" ? "border-yellow-400/50 shadow-yellow-400/50 hover:shadow-slate-400/50 hover:bg-slate-900" : "border-slate-900 shadow-slate-400 hover:shadow-slate-400/50 hover:bg-slate-200"} p-4 md:p-8 flex flex-col rounded-xl border-8 border-double shadow-lg transition ease-in-out delay-75 hover:-translate-y-4 hover:scale-100 duration-500`}>
                            <div className={`${theme === "dark" ? " border-yellow-400  text-yellow-400" : "border-slate-950 text-slate-950"} border-2 w-20 h-20 text-5xl inline-flex items-center justify-center rounded-full border-dotted mb-5 flex-shrink-0`}>
                            <CiMobile3 />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-yellow-500 text-lg md:text-xl font-bold mb-3">Mobile App Development</h2>
                                <p className="leading-relaxed text-sm">
                                    Specializing in Front-End App Development, I create apps with a focus on user experience. My goal is to deliver applications that are not only visually appealing but also intuitive and responsive, providing users with a seamless and enjoyable interaction.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services;