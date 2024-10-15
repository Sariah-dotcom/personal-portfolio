import React, { useRef, useLayoutEffect } from 'react';
import SectionTitle from './SectionTitle.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  useLayoutEffect(()=>{
    gsap.fromTo(aboutRef.current, {opacity:0, x:100},
      {
        opacity:1,
        x:0,
        scrollTrigger:{
          trigger: aboutRef.current,
          start: "top 200px",
          end: "bottom 100px"
        },
        duration:1.5,
        ease: "elastic.out(1,0.75)"
      });
  },[]);

  return (
    <div className='page-section' id='about' ref={aboutRef}>
       <SectionTitle title="about" />
            
        <p>I'm Sariah Jackson, a Computer Science grad hailing from the beautiful island nation of St.Vincent & the Grenadines.
          <br /><br />Before starting university, I took a full-stack web development course and been hooked on web development, especially frontend development, ever since.
          When I'm not coding, I'm probably crocheting, reading sci-fi or falling off my skateboard.
        </p>
    </div>
  )
}
