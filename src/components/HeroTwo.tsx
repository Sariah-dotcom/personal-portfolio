import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroTwo() {
  useGSAP(()=>{
    gsap.fromTo('.line',
      {
        height:0,
        opacity:0
      },
      {
        opacity:1,
        height: 270,
        stagger: 0.2,
        duration: 1.5,
        ease: "power2.inOut"
      }
    )

    gsap.fromTo('.hero-text',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.75,
        stagger: 1,
        ease: 'power1.inOut',
      }
    )
  })

  return (
    <section className='hero'>
      <hr className='line absolute top-0 right-10 md:right-24 border-[1px] border-grey h-[40%] lg:h-[60%]' />
      <hr className='line absolute bottom-0 lg:-bottom-24 left-10 md:left-24 border-[1px] border-grey h-[40%] lg:h-[60%]' />

      <div className='text-grey flex flex-col gap-2 md:px-10'>
        <p className='text-xs lg:text-sm hero-text'>hi, i'm</p>
        <h1 className='hero-text font-inter text-5xl font-bold md:text-7xl lg:text-9xl'>sariah jackson</h1>
        <p className='hero-text text-xs lg:text-sm text-right leading-3'>an aspiring front-end developer <br />based in kingstown, st.vincent</p>
      </div>
      
      
    </section>
  )
}
