import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import StickyIcons from './StickyIcons.jsx'

export default function Hero() {
    const element1Ref = useRef(null);
    const element2Ref = useRef(null);
    const element3Ref = useRef(null);

    useEffect(() => {
        // Initialize the annotation
        const annotation1 = annotate(element1Ref.current, { type: 'circle', color: '#FF7A6B', strokeWidth: 1});
        const annotation2 = annotate(element2Ref.current, { type: 'box', color: '#FFFFFF', strokeWidth: 1});
        const annotation3 = annotate(element3Ref.current, { type: 'crossed-off', color: '#FFFFFF', strokeWidth: 1});
    
        // Start the animation
        annotation1.show();

        setTimeout(() => {
          annotation2.show();
        }, 2000)
      
        setTimeout(() => {
          annotation3.show();
        }, 3000)

    }, []);

  return (
    <div id='hero'>
      <div className="hero-content">
        <h1>Hi, I'm <span ref={element1Ref}>Sariah</span></h1>
        <p><span ref={element2Ref}>An aspiring frontend dev</span>, a music lover, a bookworm and the next <span ref={element3Ref}>female tony hawk</span></p>
      </div>

      <StickyIcons />
    </div>
  )
}
