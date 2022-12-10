import './Main.css'
import {useState} from 'react'
import About from './About'
import Contact from './Contact'
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
      <main className="md:h-[44rem] w-full  relative">
        <div id="menu" className="w-[90%] md:w-[35%] h-[40rem] absolute left-5 md:left-4 top-7 ">
          <ul className="flex flex-col items-center mt-40 relative text-white text-4xl">
            <li onClick={() => cambiarDisplay(<About/>)} id="about"   data-text='&nbsp;SOBRE' className='my-4 cursor-pointer'  >
                &nbsp;Sobre&nbsp;

            </li>
            <li onClick={() => cambiarDisplay(<Contact/>)}  id="contact" data-text='&nbsp;Contacto' className="my-4 cursor-pointer">&nbsp;Contacto&nbsp;</li>
            <li  onClick={() => cambiarDisplay(<Skills/>)}  id="skills" data-text='&nbsp;Competencias' className="my-4 cursor-pointer">&nbsp;Competencias&nbsp;</li>
            <li onClick={() => cambiarDisplay(<Projects/>)}  id="projects" data-text='&nbsp;Proyectos' className="my-5 cursor-pointer ">&nbsp;Proyectos&nbsp;</li>
          </ul>
        </div>
        <div className="w-[60%] h-[40rem]  invisible md:visible absolute right-4 top-7 ">
          {section}
        </div>

      </main>
  </>
  )
}
