import './Main.css'
import {useState} from 'react'
import About from './About'
import Skills from './Skills'
import Start from './Start'
import Projects from './Projects'



export default function Main () {

const [section, setSection] = useState(<Start/>)

function cambiarDisplay (subject) {
    setSection(subject)
  }


  return (
  <>
      <main className="main md:h-[44rem] w-full  relative">
        <div id="menu" className="w-[90%] md:w-[35%] h-[40rem] absolute left-5 md:left-4 top-5 ">
          <h1 className='text-white md:invisible '>ProfilPic</h1>
          <ul className="flex flex-col items-center mt-40 relative text-white text-4xl">
            <li onClick={() => cambiarDisplay(<About/>)} id="about"   data-text='&nbsp;SOBRE' className='my-4 cursor-pointer'  >
                &nbsp;Sobre&nbsp;
            </li>
            <li  onClick={() => cambiarDisplay(<Skills/>)}  id="skills" data-text='&nbsp;Competencias' className="my-4 cursor-pointer">&nbsp;Competencias&nbsp;</li>
            <li onClick={() => cambiarDisplay(<Projects/>)}  id="projects" data-text='&nbsp;Proyectos' className="my-5 cursor-pointer ">&nbsp;Proyectos&nbsp;</li>
          </ul>
        </div>
        <div className="projectDisplay w-[70%] h-[33rem]  invisible md:visible absolute right-4 bottom-[12rem] ">
          {section}
        </div>

      </main>
  </>
  )
}
