import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div>
      <h2 className='text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>projects</h2>
      <div className='flex flex-col gap-[3rem]'>
        <ProjectCard 
          projectImg='/grownify.png'
          projectTitle="The Maya Joy Blog"
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec posuere odio.'
          siteLink='#'
          codeLink='#'
        />

        <ProjectCard 
          projectImg='/grownify.png'
          projectTitle="Grownify"
          description='Landing page for a habit tracking app catered to young adults.'
          siteLink='https://grownify.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/grownify'
        />

        <ProjectCard 
          projectImg='/whisk-and-dough.png'
          projectTitle="Whisk & Dough Bakery"
          description='A simple, yet fun website design for a dessert bakery.'
          siteLink='https://whisk-n-dough.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/whisk-n-dough'
        />
      </div>
    </div>
  )
}
