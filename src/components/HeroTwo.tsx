import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroTwo() {
  useGSAP(()=>{
    gsap.fromTo('.hero-text',
      {
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: 'back.inOut',
      }
    )
  })

  return (
    <section className='bg-greyD h-[100vh] w-full relative lg:flex'>
      <img className='w-full h-[100vh]' src="/bg.png" alt="" />
      
      <div className='pl-5 absolute bottom-24 text-white lg:pl-10 flex flex-col gap-3'>
        <p className='hero-text font-xs uppercase text-coral'>hey there, i'm</p>
        
        <div className='font-plus text-7xl lg:text-9xl font-bold'>
          <h1 className='hero-text'>sariah</h1>
          <h1 className='hero-text -mt-3'>jackson</h1>
        </div>

        <p className='hero-text mt-5 text-xs lg:mt-10 border-l-2 pl-3'>
          an aspiring front-end developer <br />
          based in kingstown st.vincent
        </p>
      </div>
    </section>
  )
}
