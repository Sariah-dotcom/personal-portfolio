import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { annotate } from 'rough-notation';
import StickyIcons from './StickyIcons.jsx';
import { Fade } from 'react-awesome-reveal';

export default function Hero() {
    // const element1Ref = useRef(null);
    // const element2Ref = useRef(null);
    // const element3Ref = useRef(null);
    // const heroText = useRef(null);
    // const iconsRef = useRef(null);

    // useLayoutEffect(()=>{
    //   gsap.fromTo(heroText.current, {opacity:0, y:300}, {opacity:1, y:0, duration:1})
    // }, []);

    // useEffect(() => {
        // Initialize the annotation
        // const annotation1 = annotate(element1Ref.current, { type: 'circle', color: '#FF7A6B', strokeWidth: 1});
        // const annotation2 = annotate(element2Ref.current, { type: 'underline', color: '#FFFFFF', strokeWidth: 1});
        // const annotation3 = annotate(element3Ref.current, { type: 'crossed-off', color: '#FFFFFF', strokeWidth: 1});
    
        // Start the animation
        // setTimeout(() => {
        //    annotation1.show();
        // }, 500)
      

        // setTimeout(() => {
        //   annotation2.show();
        // }, 1300)
      
        // setTimeout(() => {
        //   annotation3.show();
        // }, 2500)

    // }, []);



  return (
    <>
      <div id='hero'>
        <div className="hero-content">
          <Fade direction='down' className='hero-text'>
            <h1>Hi, I'm <span>Sariah</span></h1>
            <p>An Aspring front-end developer</p>
          </Fade>
          {/* <p><span style={{ marginRight:'0.5rem'}} ref={element2Ref}>An aspiring frontend developer,</span>a bookworm and the next <br /> <span ref={element3Ref}>
            female tony hawk</span></p> */}
        </div>
        <img src="/hero-test.png" alt="hero img" />
      </div>
      <StickyIcons />
    </>
  )
}
