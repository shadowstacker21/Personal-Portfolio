import { useState } from 'react'
import About from './Pages/header'
import './App.css'
import Header from './Pages/header'
// import Hero from './Pages/hero'
import Skills from './Pages/skills'
import Projects from './Pages/projects'
// import Contact from './Pages/contact'
import Footer from './Pages/footer'

function App() {
  const [activeSection,setActiveSection]=useState('about')

  return (
    <div className='min-h-screen bg-background'>
      
       <Header activeSection={activeSection} setActiveSection={setActiveSection}/>
       <main>
          {/* <Hero/> */}
          <div id='about'>
            <About/>
          </div>
         <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        {/* <div id="contact">
          <Contact />
        </div> */}
       </main>
       <Footer/>
    </div>
  )
}

export default App
