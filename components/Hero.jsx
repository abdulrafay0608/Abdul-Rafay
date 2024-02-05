
import Image from 'next/image'
import React from 'react'
import SocialIcon from './SocialIcon'
import TypingAnimation from './TypingAnimation'

const Hero = () => {
    return (
        <section className='' id='home'>

            <div className='relative flex flex-col-reverse md:flex-row justify-around items-center h-[90vh] '>
                <div className='absolute mx-3 md:mx-0 md:relative '>
                    <h3 className='font-bold text-xl md:text-2xl '>Welcome to My Corner of the Web!</h3>
                    <h2 className='text-yellow-400 md:text-5xl text-3xl font-extrabold my-4 '>Abdul Rafay</h2>
                    <h3 className='flex items-center text-xl md:text-3xl font-bold my-4'>I&apos;m &nbsp; <span className='text-yellow-400'> <TypingAnimation /></span></h3>
                    <p className='md:w-[500px]'>&quot;Passionate Frontend Developer | Crafting Digital Experiences&quot;
                    </p>
                    <div className='my-3'>
                        <button className='border-double border-4 border-yellow-400 hover:border-white rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md hover:shadow-yellow-400 shadow shadow-white ' >Hire me</button>
                        <button className='border-double border-4 hover:border-yellow-400 border-white rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md hover:shadow-white shadow shadow-yellow-400 ' >Resume</button>
                    </div>
                    <div className='md:absolute -bottom-20 mt-8'>
                        <SocialIcon />
                    </div>
                </div>
                <div className='hidden md:block shadow-2xl rounded-full shadow-white/30 bg-slate-50'>
                    <Image className='rounded-full' src={"/assets/picture.jpg"} height={400} width={400} alt='my picture' />
                </div>
            </div>
        </section>

    )
}

export default Hero