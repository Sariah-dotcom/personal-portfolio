import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import Nav from './components/Nav.tsx'
import Projects from './components/Projects.tsx'

export default function App() {
  return (
    <div className='px-8 flex flex-col gap-12'>
      <Hero />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
