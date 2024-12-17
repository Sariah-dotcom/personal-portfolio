"use client";
import WordRotate from "@/components/ui/word-rotate";
import Particles from "@/components/ui/particles";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  useGSAP(()=>{
    gsap.fromTo('.hero-text',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power1.inOut',
      }
    )
  })
  
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden justify-center bg-black">
      <div className="flex">
        <div className="flex items-center">
          <div className="lg:ml-20">
            <h1 className="hero-text font-plus text-white text-6xl font-black lg:text-7xl">hi, im sariah</h1>

            <WordRotate
              className="hero-text font-inter text-sm font-semibold text-coral uppercase"
              words={["an aspiring frontend developer", "based in kingstown, st.vincent"]}
            />
          </div>

        </div>
      </div>

      <Particles
        className="absolute inset-0"
        quantity={160}
        ease={10}
        color='#ffffff'
        refresh
      />
    </div>
  );
}
