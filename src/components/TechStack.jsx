import React from 'react'

export default function TechStack({techStack}) {
  return (
    <div className='tech-stack-container'>
    {techStack.map(stack => (
      <button key={stack.id} className='stack-btn'>
        {stack.techStack}
      </button>
    ))}
  </div>
  )
}
