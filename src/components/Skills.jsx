import React from 'react'
import SectionTitle from './SectionTitle'
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <div id='page-section'>
      
      <SectionTitle title='skills, tools & frameworks' />
      
      <div className="skill-icons">
        
        <div className="skill-icon">
            <FaHtml5 color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>HTML</p>
        </div>

        <div className="skill-icon">
            <FaCss3Alt color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>CSS</p>
        </div>

        <div className="skill-icon">
            <IoLogoJavascript color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>JavaScript</p>
        </div>

        <div className="skill-icon">
            <FaReact color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>React</p>
        </div>

        <div className="skill-icon">
            <RiTailwindCssFill color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>Tailwind CSS</p>
        </div>

        <div className="skill-icon">
            <FaFigma color='#FF7A6B' style={{height:'3rem', width: '3rem'}} />
            <p>Figma</p>
        </div>
      </div>
    </div>
  )
}
