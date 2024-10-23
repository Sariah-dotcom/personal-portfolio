import React, { useRef, useLayoutEffect } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { Fade } from 'react-awesome-reveal';


export default function About() {
  return (
    <div className='page-section'>
      <div id='about'>
      <SectionTitle title="about" />
      
      <Fade triggerOnce direction='up' fraction='0.6'>
        <div>   
          <p className='text-lg md:text-[1.2rem]'>
            I'm Sariah Jackson, a recent Computer Science grad from St.Vincent & the Grenadines<span className='lg:hidden ml-2'>🇻🇨</span>.
            <br /><br />Before university, I took a full-stack web development course and found my passion in frontend development.
            When I'm not coding, I'm probably crocheting, reading sci-fi or falling off my skateboard.
          </p>
        </div>
    </Fade>

      </div>
      
    </div>
    

  )
}
