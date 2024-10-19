import React from 'react'
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { Fade } from 'react-awesome-reveal';


export default function Projects() {

  const project1Stack = [
    {id:1, techStack:'MongoDB'},
    {id:2, techStack:'Express/Node'},
    {id:3, techStack:'React'},
  ]

  const project2Stack = [
    {id:1, techStack:'React'},
    {id:2, techStack:'Tailwind'},
  ]

  return (
    <div className='page-section'>
      <SectionTitle title='projects'/>

      <div id='projects'>
        <Fade direction='left'>
          <ProjectCard 
            projectImg='/whisk-n-dough-card.png'
            techStack={project1Stack}
            projectTitle='The Maya Joy Blog'
            projectDescription='Description'
            demoLink="#"
            codeLink='#'
          />
        </Fade>
        
        <Fade direction='right'>
          <ProjectCard 
            projectImg='/whisk-n-dough-card.png'
            techStack={project2Stack}
            projectTitle='Whisk & Dough Bakery'
            projectDescription='A fun, yet minimal web design for a dessert bakery.'
            demoLink="https://whisk-n-dough.vercel.app/"
            codeLink='https://github.com/Sariah-dotcom/whisk-n-dough'
          />
        </Fade>
        
      </div>
    </div>
  )
}
