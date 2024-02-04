import React from 'react'
import SocialIcon from './SocialIcon';

const Footer = () => {
  

  return (
    <section className='block text-center md:flex justify-around items-center p-2 bg-slate-900 '>
      <div className='text-xs'>
        <SocialIcon />
      </div>
      <div className='md:text-sm m-3 text-xs'>
        Created By <span className='text-yellow-400'>Abdul Rafay</span>  |  {new Date().getFullYear()}  all copyright reserved.
      </div>
    </section>
  )
}

export default Footer;  