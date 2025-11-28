import { useState } from 'react'
import About from './about'
import Hero from './hero'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'
import Header from './header'
function Alamin() {
  const [activeSection,setActiveSection]=useState('about')

  return (
    <div className='min-h-screen bg-background'>
      
       <Header activeSection={activeSection} setActiveSection={setActiveSection}/>
       <main>
          <Hero/>
          <div id='about'>
            <About/>
          </div>
         <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
       </main>
       <Footer/>
    </div>
  )
}

export default Alamin
