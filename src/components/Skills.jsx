import React, { useRef, useLayoutEffect } from 'react'
import SectionTitle from './SectionTitle'
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { Fade } from 'react-awesome-reveal';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Skills() {
  // const skillsRef = useRef(null);

  // useLayoutEffect(()=>{
  //   gsap.fromTo(skillsRef.current, {opacity:0, x:-150},
  //     {
  //       opacity:1,
  //       x:0,
  //       scrollTrigger:{
  //         trigger: skillsRef.current,
  //         start: "top 200px",
  //         end: "bottom 100px"
  //       },
  //       duration:1.5,
  //       ease: "elastic.out(1,0.75)"
  //   });

  // },[]);
  return (
    <div className='page-section' >
      <div id='skills'>
      <SectionTitle title='skills, tools & frameworks' />

      <Fade direction='up' triggerOnce>

        <div className='flex flex-wrap gap-5 pt-5 lg:gap-20'>
          
          <div className="skill-icon">
              <FaHtml5 color='#FF7A6B' className='h-[4rem] w-[4rem]' />
              <p className='text-coral text-lg lg:text[1rem]'>HTML</p>
          </div>

          <div className="skill-icon">
              <FaCss3Alt color='#FF7A6B' className='h-[4rem] w-[4rem]'/>
              <p className='text-coral text-lg lg:text[1rem]'>CSS</p>
          </div>

      <div className="skill-icon">
          <IoLogoJavascript color='#FF7A6B' className='h-[4rem] w-[4rem]' />
          <p className='text-coral text-lg lg:text[1rem]'>JavaScript</p>
      </div>

      <div className="skill-icon">
          <FaReact color='#FF7A6B' className='h-[4rem] w-[4rem]' />
          <p className='text-coral text-lg lg:text[1rem]'>React</p>
      </div>

      <div className="skill-icon">
          <RiTailwindCssFill color='#FF7A6B' className='h-[4rem] w-[4rem]' />
          <p className='text-coral text-lg lg:text[1rem]'>Tailwind</p>
      </div>

      <div className="skill-icon">
          <FaFigma color='#FF7A6B' className='h-[4rem] w-[4rem]' />
          <p className='text-coral text-lg lg:text-[1rem]'>Figma</p>
      </div>
      </div>
    </Fade>

      </div>
      
      
    </div>
  )
}
