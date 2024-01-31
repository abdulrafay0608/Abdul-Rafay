import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";

const SocialIcon = () => {
    return (
        <div className='flex justify-center items-center gap-4'>
            <Link href={""}>
                <div class="shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-full transition duration-300 ease-out">
                    <FaFacebookF />
                </div>
            </Link>
            <Link href={""}>
                <div class="shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-full transition duration-300 ease-out">
                    <FaLinkedinIn />

                </div>
            </Link>
            <Link href={""}>
                <div class="shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-full transition duration-300 ease-out">
                    <TbBrandGithubFilled />
                </div>
            </Link>
            <Link href={""}>
                <div class="shadow shadow-yellow-500 hover:shadow-white border-dotted border-2 text-yellow-400 border-yellow-400 hover:border-white hover:text-white p-2 rounded-full transition duration-300 ease-out">
                    <IoMdMail />
                </div>
            </Link>
        </div>
    )
}

export default SocialIcon;