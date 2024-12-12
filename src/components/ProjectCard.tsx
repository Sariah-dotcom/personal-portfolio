import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { ReactNode } from 'react';

interface ProjectCardProps {
  projectTitle: string;
  description: ReactNode;
  siteLink: string;
  codeLink: string;
  projectImg: string;
}

export default function ProjectCard({ projectTitle, description, siteLink, codeLink, projectImg }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:gap-[3rem] lg:items-center">
      
      <a href={siteLink} target="_blank" rel="noopener noreferrer" className="lg:w-1/2 relative">
        <img src={projectImg} className="h-[15rem] rounded-[1rem]"/>
      </a>
      
      <div className="flex flex-col gap-3 mt-5 lg:w-1/2">
        <h3 className="font-plus text-white text-2xl font-bold">{projectTitle}</h3>
        <p>{description}</p>

        <div className="flex gap-10">
          <a href={siteLink} className="flex gap-2 text-coral items-center hover:text-white" target="_blank" rel="noopener noreferrer">
            <LuExternalLink />
            <p className="text-coral hover:text-white">View demo</p>
          </a>

           <a href={codeLink} className="flex gap-2 text-coral items-center hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <p className="text-coral hover:text-white">Code</p>
          </a>
        </div>
      </div>

    </div>
  )
}
