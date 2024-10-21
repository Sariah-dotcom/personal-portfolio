import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function StickyIcons() {
  return (
    <div className='flex flex-col gap-7 fixed right-3 bottom-10 z-20'>

        <a href="https://github.com/Sariah-dotcom" className='icon'>
          <FaGithub className='text-coral h-[2.3rem] w-[2.3rem] lg:h-[1.5rem] lg:w-[1.5rem]'/>
        </a>

        <a href="https://www.linkedin.com/in/sariahk-jackson-13j/" className='icon'>
          <FaLinkedin className='text-coral h-[2.3rem] w-[2.3rem] lg:h-[1.5rem] lg:w-[1.5rem]' />
        </a>

        <a href="mailto:sariahkjackson.com" className='icon'>
          <MdEmail className='text-coral h-[2.3rem] w-[2.3rem] lg:h-[1.5rem] lg:w-[1.5rem]'/>
        </a>
    </div>
  )
}
