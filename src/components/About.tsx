
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGreensock } from "react-icons/si";
import { FaPython } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function About() {
    useGSAP(()=>{
        gsap.fromTo('.about-text',
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
                trigger: ".about-text", 
                start: "top 60%", 
              },
          }
        )

        gsap.fromTo('.skills',
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
                  trigger: ".skills", 
                  start: "top 60%", 
                },
            }
        )
    })
  return (
    <div className='flex flex-col gap-10'>
        <div className="mb-[8rem]">
            <h2 className='about-text text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>about</h2>
            <p className="about-text">I'm Sariah Jackson, a recent Computer Science grad from St.Vincent & the Grenadines<span className='lg:hidden ml-2'>🇻🇨</span>.
            <br /><br />Before university, I took a full-stack web development course and found my passion for frontend development.
            When I'm not coding, I'm probably crocheting, reading sci-fi or falling off my skateboard.</p>
        </div>

        <div>
            <h2 className='skills text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>skills, tools & frameworks</h2>
            <div className='skills flex flex-wrap gap-5 py-3 lg:gap-12'>
                
                <div className='flex flex-col items-center'>
                    <FaHtml5 className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>HTML</p>
                </div>

                <div className='flex flex-col items-center'>
                    <FaCss3Alt className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>CSS</p>
                </div>

                <div className='flex flex-col items-center'>
                    <IoLogoJavascript className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>Javascript</p>
                </div>

                <div className='flex flex-col items-center'>
                    <FaPython className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>Python</p>
                </div>

                <div className='flex flex-col items-center'>
                    <FaReact className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>React</p>
                </div>

                <div className='flex flex-col items-center'>
                    <RiTailwindCssFill className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>Tailwind</p>
                </div>

                {/* <div className='flex flex-col items-center'>
                    <SiMongodb className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>MongoDB</p>
                </div> */}

                <div className='flex flex-col items-center'>
                    <FaFigma className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>Figma</p>
                </div>

                <div className='flex flex-col items-center'>
                    <SiGreensock className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>GSAP</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
