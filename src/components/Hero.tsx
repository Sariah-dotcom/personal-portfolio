"use client";
import WordRotate from "@/components/ui/word-rotate";
import Particles from "@/components/ui/particles";
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';


export default function Hero() {
  const imgRef = useRef(null);

  useLayoutEffect(()=>{
    gsap.fromTo(imgRef.current, {y:-50},
      {
       y:0,
        duration:4,
        yoyo:true,
        repeat:-1
    });

  },[]);

  return (
    <div className="relative flex h-screen w-full flex-col justify-center overflow-hidden bg-black">
        <div className="lg:flex lg:justify-center">
          <div className="flex items-center">
            <div>
              <h1 className="font-plus text-white text-6xl font-black lg:text-7xl">hi, im sariah</h1>
              <WordRotate
                className="font-inter text-sm  font-semibold text-coral uppercase"
                words={["an aspiring frontend developer", "based in kingstown, st.vincent"]}
              />
            </div>

            <img className="hidden md:inline" src="/cat.png" alt="floating cat" ref={imgRef} />
          </div>
        </div>

      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color='#ffffff'
        refresh
      />
    </div>
  );
}
