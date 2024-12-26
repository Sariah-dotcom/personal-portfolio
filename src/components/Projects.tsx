import ProjectCard from './ProjectCard';

export default function Projects() {
  const project1Stack = [
    {id:1, techStack:'HTML'},
    {id:2, techStack:'CSS'},
    {id:3, techStack:'JavaScript'},
  ]

  const project2Stack = [
    {id:1, techStack:'React'},
    {id:2, techStack:'Tailwind'},
    {id:3, techStack:'GSAP'},
  ]

  const project3Stack = [
    {id:1, techStack:'Python'},
    {id:2, techStack:'Figma'},
  ]

 
  return (
    <div>
      <h2 className='text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>projects</h2>
      <div className='flex flex-col gap-[3rem]'>
        <ProjectCard 
          techStack={project1Stack}
          projectImg='/qrates.png'
          projectTitle="Qrates"
          description={
            <>
              A recreation of the qrates.com landing page based on a challenge by {" "}
              <a style={{textDecoration: "underline", position: "absolute"}} href="https://www.frontendpractice.com/projects/qrates" target="_blank" rel="noopener noreferrer">
                Frontend Practice
              </a>.
            </> }
          siteLink='https://qrates-studios.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/qrates-'
        />

        <ProjectCard 
          techStack={project2Stack}
          projectImg='/bequia.png'
          projectTitle="Bequia Tourism Association"
          description={
            <>
              A redesign of the current <br /> {" "}
              <a style={{textDecoration: "underline", position: "absolute"}} href="https://www.bequiatourism.com/default.htm" target="_blank" rel="noopener noreferrer">
               Bequia Tourism Association website
              </a>.
            </> }
          siteLink='https://bequiatourism.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/bequia-tourism-authority'
        />

        {/* <ProjectCard 
          techStack={project2Stack}
          projectImg='/kayujati.png'
          projectTitle="Kayujati"
          description={
            <>
              A landing page for a furniture retailer based on the design by {" "}
              <a style={{textDecoration: "underline", position: "absolute"}} href="https://dribbble.com/shots/23553830-Kayujati-Furniture-Landing-Page" target="_blank" rel="noopener noreferrer">
                Anam Khoirul
              </a>.
            </> }
          siteLink='https://kayujatifurniture.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/kayujati'
        /> */}

        <ProjectCard
          techStack={project3Stack}
          projectImg='/cocoa-catcher.png'
          projectTitle="Cocoa Catcher"
          description='A fun, Christmas themed game made with Python'
          siteLink='https://drive.google.com/file/d/1myqROqLJQwYT158VSYQsTPYKRGX40Qce/view?usp=sharing'
          codeLink='https://github.com/Sariah-dotcom/cocoa-catcher'
        />

        {/* <ProjectCard 
          techStack={project4Stack}
          projectImg='/whisk-and-dough.png'
          projectTitle="Whisk & Dough Bakery"
          description='A simple, yet fun website design for a dessert bakery. Add some goodies to your cart!'
          siteLink='https://whisk-n-dough.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/whisk-n-dough'
        /> */}

        {/* <ProjectCard 
          projectImg = '/kes-luxury.png'
          projectTitle ='Kes Luxury Extensions'
          description = 'Branding and web design for a soon to be launched hair extension retail business.'
          siteLink='https://drive.google.com/file/d/1Xse8bJAVH4Mdt9xICTcBDOxMGi4Kpn9Y/view?usp=sharing'
          codeLink='#'
        /> */}
      </div>
    </div>
  )
}
