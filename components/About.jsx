
import Image from 'next/image';
import React from 'react'

const About = () => {
    return (
        <div className="md:h-screen mt-12">
            <h2 className="text-center text-5xl font-extrabold">About us </h2>

            <div className='flex flex-col md:flex-row justify-evenly items-center my-12 md:my-20'>
                <div className='shadow-2xl shadow-white/50 rounded-md m-6' >
                    <Image className='rounded-lg' src={"/assets/picture2.jpg"}
                        height={350} width={350} alt='My Picture' />
                </div>
                <div>
                    <div className='mx-3'>
                        <h2 className='md:text-3xl text-2xl font-extrabold my-4'>I'm <span className=' text-yellow-400'>Abdul Rafay</span>  & I'm a <span className=' text-yellow-400'>Web Developer</span> </h2>
                        <p className='text-justify md:w-[600px]'>As a passionate front-end developer,
                            I am dedicated to creating immersive web experiences
                            that captivate users and drive results. With a strong
                            foundation in HTML, CSS, and JavaScript, I excel at transforming
                            designs into functional, intuitive, and visually stunning websites.
                        </p>
                        <table class="my-6">
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
            </div>
        </div>
    )
}

export default About;