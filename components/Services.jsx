import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className="md:h-screen mt-12">
            <h2 className="text-center text-5xl font-extrabold">Services</h2>
            <p className="text-center font-mono">&quot;Excellence in Every Service&quot;</p>

            <div className="container px-5 py-24 mx-auto">

                <div className="flex justify-evenly items-center flex-wrap  sm:-m-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:p-8 md:w-1/4 flex flex-col rounded-xl border-4 border-double border-yellow-400/50 shadow-lg shadow-yellow-400/50 hover:shadow-slate-400/50 transition ease-in-out delay-75 hover:-translate-y-4 hover:bg-slate-900 hover:scale-100 duration-500">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full border-dotted border-yellow-400 border-2 text-yellow-400 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-yellow-300 text-lg font-bold mb-3">Web Developement</h2>
                            <p className="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

                        </div>
                    </div>
                    <div className="p-4 md:p-8 md:w-1/4 flex flex-col rounded-xl border-4 border-double border-yellow-400/50 shadow-lg shadow-yellow-400/50 hover:shadow-slate-400/50 transition ease-in-out delay-75 hover:-translate-y-4 hover:bg-slate-900 hover:scale-100 duration-500">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full border-dotted border-yellow-400 border-2 text-yellow-400 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-yellow-300 text-lg font-bold mb-3">Web Developement</h2>
                            <p className="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

                        </div>
                    </div>
                    <div className="p-4 md:p-8 md:w-1/4 flex flex-col rounded-xl border-4 border-double border-yellow-400/50 shadow-lg shadow-yellow-400/50 hover:shadow-slate-400/50 transition ease-in-out delay-75 hover:-translate-y-4 hover:bg-slate-900 hover:scale-100 duration-500">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full border-dotted border-yellow-400 border-2 text-yellow-400 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-yellow-300 text-lg font-bold mb-3">Web Developement</h2>
                            <p className="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services;