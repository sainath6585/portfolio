import { useState } from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './sections/Skills'
import ProjectsStrip from "./components/ProjectsStrip";
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Projects/>
     <Experience/>
     <Contact/>
     <Footer/>
     <BackToTop/>
    </>
  )
}

export default App
