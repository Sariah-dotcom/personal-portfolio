import ShineBorder from "@/components/ui/shine-border";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Contact() {
  useGSAP(()=>{
    gsap.fromTo('.contact-text',
      {
        opacity: 0,
        x: -100
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: 'power1.inOut',
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".contact-text", 
            start: "top 60%", 
          },
      }
    )
  })
  return (
    <div>
        <h2 className='contact-text text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>get in touch</h2>
        <p className='contact-text'>I'd love to collaborate on exciting projects or help bring your ideas to life through
            responsive and efficient code. Whether you're looking for a website, or just 
            have questions, feel free to reach out!
        </p>

      <a href="mailto:sariahkjackson@gmail.com">
        <ShineBorder className="font-plus mt-5 font-bold -z-1 relative bg-greyD text-white" color='coral'>
            Say hi
        </ShineBorder>
      </a>
    </div>
  )
}
