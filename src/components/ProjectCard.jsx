import React from 'react'
import TechStack from './TechStack'
import ProjectLinks from './ProjectLinks'

export default function ProjectCard(props) {
  return (
    <div className='mb-20 flex flex-col gap-5'>
      <div>
        <img className='rounded-lg' src={props.projectImg}  alt='project image'/>
        <TechStack techStack={props.techStack} />
      </div>
      
      
      <div className='flex flex-col gap-7'>
        <h3>{props.projectTitle}</h3>
        <p className='text-xl'>{props.projectDescription}</p>
        <ProjectLinks demoLink={props.demoLink} codeLink={props.codeLink} />

      </div>
      

    </div>
  )
}
