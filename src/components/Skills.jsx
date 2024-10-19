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
    <div className='page-section'>
      <SectionTitle title='skills, tools & frameworks' />

      <Fade direction='up' triggerOnce>
      <div className="skill-icons">
        
        <div className="skill-icon">
            <FaHtml5 color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>HTML</p>
        </div>

        <div className="skill-icon">
            <FaCss3Alt color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>CSS</p>
        </div>

        <div className="skill-icon">
            <IoLogoJavascript color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>JavaScript</p>
        </div>

        <div className="skill-icon">
            <FaReact color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>React</p>
        </div>

        <div className="skill-icon">
            <RiTailwindCssFill color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>Tailwind</p>
        </div>

        <div className="skill-icon">
            <FaFigma color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>Figma</p>
        </div>
      </div>
      </Fade>
      
    </div>
  )
}
