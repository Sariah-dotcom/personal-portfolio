import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div>
      <h2 className='text-white font-plus font-bold text-3xl mb-3'>projects</h2>
      <div>
        <ProjectCard 
          projectTitle='The Maya Joy Blog'
          description='description'
        />
      </div>
    </div>
  )
}
