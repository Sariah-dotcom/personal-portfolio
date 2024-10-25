import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LuExternalLink } from "react-icons/lu";

export default function ProjectLinks(props) {
  return (
    <div className='flex gap-10'>
                <div className="text-coral hover:text-white">
                    <Link to={props.demoLink} className='flex items-center gap-3'>
                        <LuExternalLink className='h-6 w-6' />
                        <p className='text-coral hover:text-white'>View live</p>
                    </Link>
                </div>
                
                <div className="text-coral hover:text-white">
                    <Link to={props.codeLink} className='flex items-center gap-3'>
                        <FaGithub className='h-6 w-6' />
                        <p className='text-coral hover:text-white'>Code</p>
                    </Link>
                </div>
            </div>
  )
}
