import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;

    //     if (!name || !email || !password) {
    //         alert('Please fill in all fields');
    //         return;
    //     }

    //     // Send data to API or perform other actions
    //     console.log('Name:', name);
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // };


    return (
        <section id='contact'>
            <div className="my-12">
                <h2 className="text-center text-4xl font-extrabold my-6">GET IN TOUCH</h2>

                <div className="block md:flex justify-between items-center gap-4 md:p-20 px-2">

                    <div className=' bg-slate-900 rounded-md px-3 py-6'>
                        <h1 className='font-bold text-2xl '><span className='border-b-2 border-yellow-400'>SAY SOM</span>ETHING</h1>

                        <form onSubmit={"handleSubmit"} className="my-8">

                            <div className='grid md:grid-cols-2 grid-flow-col-1 md:justify-center items-center gap-6 my-6'>
                                <input
                                    placeholder='Name *'
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    autoComplete={false}
                                    className="w-full py-2 bg-transparent border-b-2 border-b-slate-500 outline-none transition-all focus:border-yellow-400"
                                />

                                <input
                                    placeholder='Email *'
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete={false}
                                    className="w-full py-2 bg-transparent border-b-2 border-b-slate-500 outline-none transition-all focus:border-yellow-400"
                                />
                            </div>

                            <input
                                placeholder='Subject *'
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                autoComplete={false}
                                className="w-full py-2 bg-transparent border-b-2 border-b-slate-500 outline-none transition-all focus:border-yellow-400"
                            />

                            <textarea name="message" id="" cols="30" rows="4"
                                placeholder='Your message *'
                                required
                                autoComplete={false}
                                className="w-full my-6 py-2 bg-transparent border-b-2 border-b-slate-500 outline-none transition-all focus:border-yellow-400"
                            >

                            </textarea>

                            <Link href={""}>
                                <button className='border-double border-4 border-yellow-400 hover:border-white rounded-md py-1 px-3 mr-5 font-bold transition duration-300 ease-out hover:ease-in hover:shadow-md hover:shadow-yellow-400 shadow shadow-white ' >Send Message</button>
                            </Link>
                        </form>
                    </div>

                    <div className="col-span-1 mx-2 p-2">
                        <div className="block md:flex justify-center items-center border-double border-slate-400 border-4 p-3 my-5 rounded-lg">
                            <div className="text-2xl w-min border-double border-4 text-yellow-400 border-yellow-400 p-4 rounded-full ">
                                <TfiEmail />
                            </div>
                            <div className="mx-4">
                                <h2 className="text-white title-font font-medium">Our Email</h2>
                                <Link href={""} className='text-yellow-300'>abdulrafay0608@gmail.com</Link>
                            </div>
                        </div>

                        <div className="block md:flex items-center border-double border-slate-400 border-4 p-3 my-5 rounded-lg">
                            <div className="text-2xl  w-min border-double border-4 text-yellow-400 border-yellow-400 p-4 rounded-full ">
                                <TfiEmail />
                            </div>
                            <div className="mx-4">
                                <h2 className="text-white title-font font-medium">Our Email</h2>
                                <Link href={""} className='text-yellow-300'>abdulrafay0608@gmail.com</Link>
                            </div>
                        </div>

                        <div className="block md:flex items-center border-double border-slate-400 border-4 p-3 my-5 rounded-lg">
                            <div className="text-2xl  w-min border-double border-4 text-yellow-400 border-yellow-400 p-4 rounded-full ">
                                <TfiEmail />
                            </div>
                            <div className="mx-4">
                                <h2 className="text-white title-font font-medium">Our Email</h2>
                                <Link href={""} className='text-yellow-300'>abdulrafay0608@gmail.com</Link>
                            </div>
                        </div>

                        <div className="block md:flex items-center border-double border-slate-400 border-4 p-3 my-5 rounded-lg">
                            <div className="text-2xl  w-min border-double border-4 text-yellow-400 border-yellow-400 p-4 rounded-full ">
                                <TfiEmail />
                            </div>
                            <div className="mx-4">
                                <h2 className="text-white title-font font-medium">Our Email</h2>
                                <Link href={""} className='text-yellow-300'>abdulrafay0608@gmail.com</Link>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Contact;