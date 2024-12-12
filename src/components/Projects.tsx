import ProjectCard from './ProjectCard';

export default function Projects() {
 
  return (
    <div>
      <h2 className='text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>projects</h2>
      <div className='flex flex-col gap-[3rem]'>
        <ProjectCard 
          projectImg='/kayujati.png'
          projectTitle="Kayujati"
          description={
            <>
              Landing page for a furniture retailer based on the design by {" "}
              <a style={{textDecoration: "underline"}} href="https://dribbble.com/shots/23553830-Kayujati-Furniture-Landing-Page" target="_blank" rel="noopener noreferrer">
                Anam Khoirul
              </a>.
            </> }
          siteLink='https://kayujatifurniture.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/kayujati'
        />

        <ProjectCard 
          projectImg='/whisk-and-dough.png'
          projectTitle="Whisk & Dough Bakery"
          description='A simple, yet fun website design for a dessert bakery. Add some goodies to your cart!'
          siteLink='https://whisk-n-dough.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/whisk-n-dough'
        />

        <ProjectCard 
          projectImg = '/kes-luxury.png'
          projectTitle ='Kes Luxury Extensions'
          description = 'Branding and web design for a soon to be launched hair extension retail business.'
          siteLink='https://drive.google.com/file/d/1Xse8bJAVH4Mdt9xICTcBDOxMGi4Kpn9Y/view?usp=sharing'
          codeLink='#'
        />

        <ProjectCard 
          projectImg='/videaste.png'
          projectTitle="Videaste"
          description={
            <>
              Landing page for a photography business based on the design by {" "}
              <a style={{textDecoration: "underline"}} href="https://dribbble.com/shots/23090247-Videaste-Personal-Videographer-Portfolio-Landing-Page-Website" target="_blank" rel="noopener noreferrer">
                Adhiar Subekti
              </a>.
            </> }
          siteLink='https://videaste-rho.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/videaste'
        />

        <ProjectCard 
          projectImg='/cocoa-catcher.png'
          projectTitle="Cocoa Catcher"
          description='A fun, Christmas themed game made with Python'
          siteLink='https://moda-bags.vercel.app/'
          codeLink='https://github.com/Sariah-dotcom/cocoa-catcher'
        />
      </div>
    </div>
  )
}
