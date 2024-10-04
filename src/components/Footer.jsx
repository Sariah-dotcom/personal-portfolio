import React, { useRef, useEffect } from 'react'
import { FaReact } from 'react-icons/fa';
import { annotate } from 'rough-notation';

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);

    useEffect(()=>{
      const footerAnnotation = annotate(footerRef.current, { type: 'underline', color: '#FF7A6B', strokeWidth: 1});

      const playIndefinitely = () => {
        footerAnnotation.show();

        setTimeout(() => {
          footerAnnotation.hide();
        }, 2000); 
      };
  
      const intervalId = setInterval(playIndefinitely, 3000);
  
      return () => clearInterval(intervalId);
    })

  return (
    <div>
      <footer>
        <div className='footer-top'>
            <img src="/logo.png" alt="logo" />
        </div>

        <hr />

        <div className="footer-bottom">
            <p>Made with <FaReact/> and <span ref={footerRef} ><a href="https://roughnotation.com/" target='_blank'> Rough Notation</a></span></p>
            <p>© {year}</p>
        </div>
      </footer>
    </div>
  )
}
