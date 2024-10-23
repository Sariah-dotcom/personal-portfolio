import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { annotate } from 'rough-notation';
import StickyIcons from './StickyIcons.jsx';
import { Fade } from 'react-awesome-reveal';

export default function Hero() {
  const imgRef = useRef(null);

  useLayoutEffect(()=>{
    gsap.fromTo(imgRef.current, {y:-50},
      {
       y:0,
        duration:1.5,
        yoyo:true,
        repeat:-1
    });

  },[]);
  return (
    <>
      <div id='hero' className='flex justify-center'>
        <div className='flex flex-col justify-center h-screen gap-10 lg:flex-row lg:items-center'>
          
          <Fade direction='down' cascade>
          <div className='px-8'>
            <h1 className='text-white text-7xl font-black mb-2 md:text-8xl'>hi, i'm sariah</h1>
            <p className='text-coral font-bold uppercase md:text-2xl'>An aspiring frontend developer</p>
            {/* <p className='flex gap-2 opacity-50'>📍Kingstown, St.Vincent <img className='h-5' src="/flag.png" alt="" /></p> */}
          </div>
          </Fade>
          
         
          
          <div className='flex'>
            <img src="/3.png" alt="" />
            <img src="/cat.png" alt="" className='absolute' ref={imgRef} />
          </div>
        
        </div>
      </div>
      <StickyIcons />
    </>
  )
}
