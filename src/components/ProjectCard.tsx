import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    projectTitle: string;
    description: string;
}

export default function ProjectCard({ projectTitle, description }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <img src="" alt="" />
      
      <div className="flex flex-col gap-3">
        <h3 className="font-plus text-white text-2xl font-bold">{projectTitle}</h3>
        <p>{description}</p>

        <div className="flex gap-10">
           <div className="flex gap-2 text-coral items-center">
                <LuExternalLink />
                <p className="text-coral">View live</p>
            </div>

            <div className="flex gap-2 text-coral items-center">
                <FaGithub />
                <p className="text-coral">Code</p>
            </div>
        </div>
      </div>
    </div>
  )
}
