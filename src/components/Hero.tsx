"use client";
import WordRotate from "@/components/ui/word-rotate";
import Particles from "@/components/ui/particles";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col justify-center overflow-hidden bg-black">
        <div>
            <h1 className="font-plus text-white text-6xl font-black">hi, im sariah</h1>
            <WordRotate
                className="font-inter text-sm font-semibold text-coral uppercase"
                words={["an aspiring frontend dev", "based in kingstown, st.vincent"]}
            />
        </div>

      <Particles
        className="absolute inset-0"
        quantity={60}
        ease={80}
        color='#ffffff'
        refresh
      />
    </div>
  );
}
