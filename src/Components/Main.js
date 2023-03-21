import './Main.css'
import { useState } from 'react'
import About from './About'
import Skills from './Skills'
import Start from './Start'
import Projects from './Projects'



export default function Main() {

  const [section, setSection] = useState(<Start />)
  const [toggleAbout, setToggleAbout] = useState(false)
  const [toggleSkills, setToggleSkills] = useState(false)
  const [toggleProjects, setToggleProjects] = useState(false)
  const [showAbout, setShowAbout] = useState(null)
  const [showSkills, setShowSkills] = useState(null)
  const [showProjects, setShowProjects] = useState(null)

  function cambiarDisplayResponsive(subject) {
    if (subject === 1) {
      if (toggleAbout === false) {
        setShowAbout(<About responsiveStyle='md:hidden' />)
        setToggleAbout(true)
      } else if (toggleAbout === true) {
        setShowAbout("")
        setToggleAbout(false)
      }
    } else if (subject === 2) {
      if (!toggleSkills) {
        setShowSkills(<Skills responsiveStyle='md:hidden' />)
        setToggleSkills(true)
      } else {
        setShowSkills("")
        setToggleSkills(false)
      }
    } else if (subject === 3) {
      if (!toggleProjects) {
        setShowProjects(<Projects responsiveStyle='md:hidden' />)
        setToggleProjects(true)
      } else {
        setShowProjects("")
        setToggleProjects(false)
      }
    }
  }

  function cambiarDisplay(subject) {
    setSection(subject)
  }




  return (
    <>
      <main className="main md:h-[44rem] w-full  relative">
        <div id="menu" className="w-[90%] md:w-[35%] h-[40rem] absolute left-5 md:left-4 top-5 ">
          <h1 className='text-white md:invisible hidden'>Profile Pic</h1>
          <ul className="flex flex-col items-center mt-40 relative text-white text-4xl">
            <li onClick={() => cambiarDisplay(<About responsiveStyle='' />)} id="about" data-text='&nbsp;SOBRE' className='my-4 invisible md:visible cursor-pointer'  >
              &nbsp;Sobre&nbsp;
            </li>
            {/* Elemento html con funcion para responsive */}
            <li onClick={() => cambiarDisplayResponsive(1)} id="about" data-text='&nbsp;SOBRE' className='my-4 md:hidden cursor-pointer'  >
              &nbsp;Sobre&nbsp;
            </li>
            {showAbout}
            {/* ELemento html con funcion en resposive */}
            <li onClick={() => cambiarDisplayResponsive(2)} id="skills" data-text='&nbsp;Competencias' className=" md:hidden my-4 cursor-pointer">&nbsp;Competencias&nbsp;</li>
            {showSkills}
            <li onClick={() => cambiarDisplay(<Skills responsiveStyle='' />)} id="skills" data-text='&nbsp;Competencias' className="nonresponsive  md:visible   my-4 cursor-pointer">&nbsp;Competencias&nbsp;</li>
            <li onClick={() => cambiarDisplayResponsive(3)} id="projects" data-text='&nbsp;Proyectos' className=" md:hidden my-5 cursor-pointer ">&nbsp;Proyectos&nbsp;</li>
            <li onClick={() => cambiarDisplay(<Projects />)} id="projects" data-text='&nbsp;Proyectos' className="nonresponsive  md:visible my-5 cursor-pointer ">&nbsp;Proyectos&nbsp;</li>
            {showProjects}
          </ul>
        </div>
        <div className="projectDisplay w-[70%] h-[33rem]  invisible md:visible absolute right-4 bottom-[12rem] ">
          {section}
        </div>

      </main>
    </>
  )
}
