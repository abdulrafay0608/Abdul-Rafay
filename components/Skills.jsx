"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
const Skills = () => {

    return (
        <div>
            <div className="mt-12">
                <h2 className="text-center text-5xl font-extrabold">Services</h2>
                <p className="text-center mx-2 font-mono">
                    "Learning is the compass that guides us; every acquired skill is a marker on the journey of continuous growth."</p>

                <div class="block md:flex justify-evenly items-center  w-full my-16">

                    <div className='md:w-5/12'>

                        <div class="mb-6 mx-2">
                            <Image className='rounded-full bg-white animate-bounce' height={50} width={50} src={"/skills/html.svg"} />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "90%" }}>
                                <span class="text-xl font-mono mb-2">HTML5</span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >90%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "90%" }}></div>
                            </div>
                        </div>

                        <div class="mb-6 mx-2">
                            <Image className=' animate-bounce' height={50} width={50} src={"/skills/css.svg"} alt='html-logo' />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "80%" }}>
                                <span class="text-xl font-mono mb-2">CSS3</span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >80%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        <div class="mb-6 mx-2">
                            <Image className='rounded-full animate-bounce' height={50} width={50} src={"/skills/js.svg"} alt='css-logo' />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "75%" }}>
                                <span class="text-xl font-mono mb-2">JavaScript & ECMA Script</span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >75%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "75%" }}></div>
                            </div>
                        </div>

                        <div class="mb-6 mx-2">
                            <Image className='rounded-full animate-bounce' height={50} width={50} src={"/skills/github.webp"} alt='github-logo' />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "80%" }}>
                                <span class="text-xl font-mono mb-2">Github</span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >80%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        <div class="mb-6 mx-2">
                            <Image className='rounded-full animate-bounce' height={50} width={50} src={"/skills/tailwind.svg"} alt='tailwind-logo' />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "80%" }}>
                                <span class="text-xl font-mono mb-2">Tailwind CSS & BootStrap 5</span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >80%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                    </div>

                    <div className='md:w-5/12'>

                        <div class="mb-6 mx-2">
                            <Image className='rounded-full animate-bounce' height={50} width={50} src={"/skills/firebase.webp"} alt='firebase-logo' />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "80%" }}>
                                <span class="text-xl font-mono mb-2">Firebase</span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >80%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        <div class="mb-6 mx-2">
                            <Image className='rounded-ful animate-bounce' height={50} width={50} src={"/skills/reactjs.svg"} alt='react-logo' />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "70%" }}>
                                <span class="text-xl font-mono mb-2">React</span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >70%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "70%" }}></div>
                            </div>
                        </div>
                        <div class="mb-6 mx-2">
                            <Image className='rounded-full animate-bounce object-contain bg-white  p-2' height={50} width={50} src={"/skills/next.svg"} />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "75%" }}>
                                <span class="text-xl font-mono mb-2">Next js <span className='font-light text-sm'> (React Framework) </span> </span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >75%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "75%" }}></div>
                            </div>
                        </div>

                        <div class="mb-6 mx-2">
                            <Image className='rounded-ful animate-bounce' height={50} width={50} src={"/skills/nodeJs.png"} />
                            <div className='flex justify-between items-center mx-2' style={{ width: "55%" }}>
                                <span class="text-xl font-mono mb-2">Node js & Express js </span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >55%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "55%" }}></div>
                            </div>
                        </div>
                        <div class="mb-6 mx-2">
                            <Image className='rounded-full animate-bounce' height={50} width={50} src={"/skills/reactjs.svg"} />
                            <div className='flex justify-between  items-center mx-2' style={{ width: "52%" }}>
                                <span class="text-xl font-mono mb-2">React Native</span>
                                <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >50%</span>
                            </div>
                            <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                                <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: "52%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




            {/* <div class="column right">
                <div class="bars">
                    <div class="info">
                        <span>HTML5</span>

                    </div>
                    <div class="line html"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>CSS3</span>
                        <span>80%</span>
                    </div>
                    <div class="line css"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>JavaScript</span>
                        <span>80%</span>
                    </div>
                    <div class="line js"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>ECMAScript</span>
                        <span>70%</span>
                    </div>
                    <div class="line ecmascript"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Firebase</span>
                        <span>80%</span>
                    </div>
                    <div class="line firebase"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>React.js</span>
                        <span>70%</span>
                    </div>
                    <div class="line react"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Next.js</span>
                        <span>70%</span>
                    </div>
                    <div class="line next"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Node.js</span>
                        <span>50%</span>
                    </div>
                    <div class="line node"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Express.js</span>
                        <span>50%</span>
                    </div>
                    <div class="line express"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Github</span>
                        <span>80%</span>
                    </div>
                    <div class="line github"></div>
                </div>

                <div class="bars">
                    <div class="info">
                        <span>BootStrap 5</span>
                        <span>90%</span>
                    </div>
                    <div class="line bootstrap"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Social Media Post Making</span>
                        <span>80%</span>
                    </div>
                    <div class="line smpm"></div>
                </div>

            </div> */}
        </div>
    )
}

export default Skills