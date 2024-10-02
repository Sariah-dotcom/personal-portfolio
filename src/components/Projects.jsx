import React from 'react'
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  return (
    <div id='page-section'>
      <SectionTitle title='projects'/>
      <div className='projects'>
              <div className="card-row">
                        <ProjectCard />
                        <ProjectDetails projectTitle="ResuMate" description=" AI-powered platform 
                        simplifies the process of building a professional, standout resume tailored to your target job."/>
              </div>

                <div className="card-row">
                    <ProjectCard />
                    <ProjectDetails projectTitle="ResuMate" description=" AI-powered platform 
                    simplifies the process of building a professional, standout resume tailored to your target job."/>
                </div>   

                <div className="card-row">
                    <ProjectCard />
                    <ProjectDetails projectTitle="ResuMate" description=" AI-powered platform 
                    simplifies the process of building a professional, standout resume tailored to your target job."/>
                </div>   

                <div className="card-row">
                    <ProjectCard />
                    <ProjectDetails projectTitle="ResuMate" description=" AI-powered platform 
                    simplifies the process of building a professional, standout resume tailored to your target job."/>
                </div>   

    </div>

    </div>

  )
}
