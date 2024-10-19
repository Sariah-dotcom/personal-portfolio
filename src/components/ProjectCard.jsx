import React from 'react'
import TechStack from './TechStack'
import ProjectLinks from './ProjectLinks'

export default function ProjectCard(props) {
  return (
    <div className='project-card'>
      <div>
        <img className='project-img' src={props.projectImg}  alt='project image'/>
        <TechStack techStack={props.techStack} />
      </div>
      
      
      <div>
        <h3 className='project-title'>{props.projectTitle}</h3>
        <p>{props.projectDescription}</p>
        <ProjectLinks demoLink={props.demoLink} codeLink={props.codeLink} />

      </div>
      

    </div>
  )
}
