import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div>
      <h2 className='text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>projects</h2>
      <div>
        <ProjectCard 
          projectTitle="Whisk & Dough Bakery"
          description='A simple, yet fun website design for a dessert bakery.'
          siteLink='https://whisk-n-dough.vercel.app/'
          codeLink='#'
        />
      </div>
    </div>
  )
}
