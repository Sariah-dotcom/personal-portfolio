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
        duration: 1.5,
        ease: 'power3.inOut',
      }
    )

    gsap.fromTo('.hero-img',
      {
        opacity: 0,
        y: -20,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.inOut',
      }
    )
  })

  return (
    <div className='bg-greyD h-[100vh] w-full relative lg:flex'>
      
      <div className='hero-img lg:hidden absolute -top-8 -right-8'>
        <img src="/lines-mobile.png" alt="lines" />
      </div>

      <div className='hero-text absolute bottom-24 text-white lg:ml-10'>
        <h3 className='uppercase font-semibold font-inter text-coral'>hey there, i'm</h3>
        <h1 className='font-plus text-6xl lg:text-9xl font-bold -mt-3 lg:-mt-8'>sariah <br />jackson</h1>
        <p className='mt-5 text-xs lg:mt-10 border-l-2 pl-3'>
          an aspiring front-end developer <br />
          based in kingstown st.vincent
        </p>
      </div>

      <div className='hero-img hidden lg:block absolute top-0 -right-8'>
        <img src="/lines.png" alt="lines" />
      </div>
    </div>
  )
}
