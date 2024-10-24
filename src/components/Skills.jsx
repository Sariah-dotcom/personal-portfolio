import React, { useRef, useLayoutEffect } from 'react'
import SectionTitle from './SectionTitle'
import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
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
        <div className='md:flex md:justify-center'>
        <div className='flex flex-wrap gap-5 pt-5 lg:gap-20 md:w-[70%]'>
          
          <div className="skill-icon">
              <FaHtml5 color='#FF7A6B' className='stack-icon' />
              <p className='text-coral text-lg md:text-[1.2rem]'>HTML</p>
          </div>

          <div className="skill-icon">
              <FaCss3Alt color='#FF7A6B' className='stack-icon'/>
              <p className='text-coral text-lg md:text-[1.2rem]'>CSS</p>
          </div>

      <div className="skill-icon">
          <IoLogoJavascript color='#FF7A6B' className='stack-icon' />
          <p className='text-coral text-lg md:text-[1.2rem]'>JavaScript</p>
      </div>

      <div className="skill-icon">
          <FaReact color='#FF7A6B' className='stack-icon' />
          <p className='text-coral text-lg md:text-[1.2rem]'>React</p>
      </div>

      <div className="skill-icon">
          <RiTailwindCssFill color='#FF7A6B' className='stack-icon' />
          <p className='text-coral text-lg lg:text[1rem]'>Tailwind</p>
      </div>

      <div className="skill-icon">
          <FaFigma color='#FF7A6B' className='stack-icon' />
          <p className='text-coral text-lg md:text-[1.2rem]'>Figma</p>
      </div>

      <div className="skill-icon">
          <SiMongodb color='#FF7A6B' className='stack-icon' />
          <p className='text-coral text-lg md:text-[1.2rem]'>MongoDB</p>
      </div>

      <div className="skill-icon">
          <FaNodeJs color='#FF7A6B' className='stack-icon' />
          <p className='text-coral text-lg md:text-[1.2rem]'>Node</p>
      </div>

      </div>
        </div>
    </Fade>

    </div>
      
      
    </div>
  )
}
