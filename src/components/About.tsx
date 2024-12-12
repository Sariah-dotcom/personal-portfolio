
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGreensock } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <div className='flex flex-col gap-10'>
        <div className="mb-[8rem]">
            <h2 className='text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>about</h2>
            <p>I'm Sariah Jackson, a recent Computer Science grad from St.Vincent & the Grenadines<span className='lg:hidden ml-2'>🇻🇨</span>.
            <br /><br />Before university, I took a full-stack web development course and found my passion for frontend development.
            When I'm not coding, I'm probably crocheting, reading sci-fi or falling off my skateboard.</p>
        </div>

        <div>
            <h2 className='text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>skills, tools & frameworks</h2>
            <div className='flex flex-wrap gap-5 py-3 lg:gap-12'>
                
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

                <div className='flex flex-col items-center'>
                    <SiMongodb className='text-coral size-10 lg:size-16' />
                    <p className='text-coral mt-1'>MongoDB</p>
                </div>

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
