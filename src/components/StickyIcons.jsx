import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function StickyIcons() {
  return (
    <div className='flex flex-col items-center gap-7 fixed -right-5 bottom-3 z-20'>
       <p className='rotate-90 flex items-center text-coral opacity-50 text-lg gap-2 mb-12 font-bold hover:opacity-100'><FaLocationDot /> St.Vincent</p>

        <a href="https://github.com/Sariah-dotcom" className='icon'>
          <FaGithub className='text-coral h-[2rem] w-[2rem]'/>
        </a>

        <a href="https://www.linkedin.com/in/sariahk-jackson-13j/" className='icon'>
          <FaLinkedin className='text-coral h-[2rem] w-[2rem]' />
        </a>

        <a href="mailto:sariahkjackson.com" className='icon'>
          <MdEmail className='text-coral h-[2rem] w-[2rem]'/>
        </a>
    </div>
  )
}
