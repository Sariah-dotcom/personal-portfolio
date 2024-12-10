"use client";
import WordRotate from "@/components/ui/word-rotate";
import Particles from "@/components/ui/particles";
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(imgRef.current, { y: -50 },
      {
        y: 0,
        duration: 4,
        yoyo: true,
        repeat: -1
      });
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden justify-center bg-black">
      <div className="flex">
        <div className="flex items-center">
          <div className="lg:ml-20">
            <h1 className="font-plus text-white text-6xl font-black lg:text-7xl">hi, im sariah</h1>

            <WordRotate
              className="font-inter text-sm font-semibold text-coral uppercase"
              words={["an aspiring frontend developer", "based in kingstown, st.vincent"]}
            />
          </div>

          <img
            className="hidden md:inline absolute right-0"
            src="/ab.png"
            alt="contour lines"
            ref={imgRef}
          />
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
