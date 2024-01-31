import Image from 'next/image'
import React from 'react'
import SocialIcon from './SocialIcon'

const Hero = () => {
    return (
        <>
            <div  className='relative flex flex-col-reverse md:flex-row justify-evenly items-center h-[90vh] '>
                <div className='absolute z-10 mx-3 md:mx-0 md:relative '>
                    <h3 className='font-bold text-2xl md:text-3xl text-yellow-400'>Hello...</h3>
                    <h2 className='md:text-5xl text-3xl font-extrabold my-4'>I'm <span className=' text-yellow-400'>Abdul Rafay</span></h2>
                    <p className='text  md:w-96'>As a passionate front-end developer,
                        I am dedicated to creating immersive web experiences 
                        that captivate users and drive results. With a strong 
                        foundation in HTML, CSS, and JavaScript, I excel at transforming 
                        designs into functional, intuitive, and visually stunning websites.
                    </p>
                    <div className='my-3'>
                        <button className='border-double border-4 border-yellow-400 hover:border-white rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md hover:shadow-yellow-400 shadow shadow-white ' >Hire me</button>
                        <button className='border-double border-4 hover:border-yellow-400 border-white rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md hover:shadow-white shadow shadow-yellow-400 ' >Resume</button>
                    </div>
                    <div className='md:absolute -bottom-20 mt-8'>
                        <SocialIcon />
                    </div>
                </div>
                <div style={{backgroundImage: "url(/assets/picture.jpg)"}} className='brightness-50 md:brightness-100 h-[350px] w-full md:max-w-[350px] bg-cover bg-no-repeat bg-right shadow-2xl shadow-white/30 bg-slate-50 rounded-full'>
                    {/* <Image className='rounded-full  object-contain' src={"/assets/picture.jpg"}
                        height={350} width={350} alt='My Picture' /> */}
                </div>
            </div>

        </>

    )
}

export default Hero