import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

export default function SectionTitle(props) {
    const titleRef = useRef(null);

    useEffect(() => {
        // Initialize the annotation
        const annotation = annotate(titleRef.current, { type: 'underline', color: '#FF7A6B' });
    
        // Start the animation
        annotation.show();
      }, []);

  return (
    <div className='text-5xl mb-12'>
        <h2 ref={titleRef}>{props.title}</h2>
    </div>
  )
}
