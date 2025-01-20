import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import HeroTwo from './components/HeroTwo.tsx'
import Nav from './components/Nav.tsx'
import Projects from './components/Projects.tsx'

export default function App() {
  return (
    <div className='flex flex-col gap-12 lg:items-center'>
      <HeroTwo />
      <Nav />
      <div className="flex px-8 md:px-20 flex-col items-center gap-[8rem] w-full lg:w-3/4 mx-auto">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}
