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
      <footer className='flex flex-col gap-10 p-3 items-center'>
        <div className='footer-top'>
            <img src="/logo.png" alt="logo" className='h-[5rem] w-[5rem]' />
        </div>

        <hr className='text-coral w-1/2' />

        <div className='flex flex-col gap-3 items-center'>
            <p className='text-coral flex items-center gap-1'>Made with <FaReact/> and <span ref={footerRef} ><a href="https://roughnotation.com/" target='_blank'> Rough Notation</a></span></p>
            <p className='text-coral'>© {year}</p>
        </div>
      </footer>
    </div>
  )
}
