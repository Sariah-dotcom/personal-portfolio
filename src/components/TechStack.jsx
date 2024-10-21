import React from 'react'

export default function TechStack({techStack}) {
  return (
    <div className='flex flex-wrap gap-5 py-5'>
    {techStack.map(stack => (
      <button key={stack.id} className='font-inter border border-coral text-coral py-1 px-3 rounded-full'>
        {stack.techStack}
      </button>
    ))}
  </div>
  )
}
