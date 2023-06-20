import './Main.css'
import { useEffect, useState } from 'react'
import About from './About'
import Skills from './Skills'
import Start from './Start'
import Projects from './Projects'
import { useContext } from "react";
import LanguageContext from '../LanguageContext/LanguageContext'


export default function Main() {

  const { language } = useContext(LanguageContext)
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
    setRippleAnimation()
    setSection(subject)
  }

  function setRippleAnimation() {

    const spans = document.querySelectorAll(".bgPulse span")
    spans.forEach(el => {
      el.classList.add("pulse")
    })

    setTimeout(() => {
      const moons = document.querySelector(".moon")
      moons.classList.add("backgroundimages")
    }, 4000);

  }


  useEffect(() => {
    hackAnimations()
    document.querySelector('#about').dispatchEvent(new Event('mouseover'))
    setTimeout(() => {
      document.querySelector('#skills').dispatchEvent(new Event('mouseover'))
    }, 1400);
    setTimeout(() => {
      document.querySelector('#projects').dispatchEvent(new Event('mouseover'))
    }, 3000);
    document.querySelector('#aboutResponsive').dispatchEvent(new Event('click'))
    setTimeout(() => {
      document.querySelector('#skillsResponsive').dispatchEvent(new Event('click'))
    }, 1400);
    setTimeout(() => {
      document.querySelector('#projectsResponsive').dispatchEvent(new Event('click'))
    }, 3000);

  }, [language])




  useEffect(() => {
    const sections = ['#aboutResponsive', '#skillsResponsive', '#projectsResponsive'];
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    sections.forEach(el => {
      const element = document.querySelector(el);
      element.onclick = event => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.dataset.value
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
        element.onmouseout = event => {
          clearInterval(interval);
          event.target.innerText = event.target.dataset.value;
        };
      }
    });
  }, [language])










  // Animation for navbar items, thanks to hyperflex youtube channel
  function hackAnimations() {

    const sections = ['#about', '#skills', '#projects'];
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    sections.forEach(el => {
      const element = document.querySelector(el);
      if (!element.onmouseover) { // Verificar si el manejador de eventos ya está agregado
        element.onmouseover = event => {
          let iteration = 0;
          clearInterval(interval);

          interval = setInterval(() => {
            event.target.innerText = event.target.dataset.value
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
              })
              .join("");

            if (iteration >= event.target.dataset.value.length) {
              clearInterval(interval);
            }

            iteration += 1 / 2.0;
          }, 30);
        };


        element.onmouseout = event => {
          clearInterval(interval);
          event.target.innerText = event.target.dataset.value;
        };
      }
    });

  }



  return (
    <>
      <main id="particles-js" className="main md:h-[44rem] w-full  relative">
        <div id="menu" className="w-[90%] md:w-[35%] h-[40rem] absolute left-5 md:left-4 top-5 ">
          <ul id="menutitles" className="flex flex-col items-center mt-40 relative text-white text-4xl">
            <li data-value={language.about} onClick={() => cambiarDisplay(<About responsiveStyle='' />)} id="about" className='my-4 invisible md:visible cursor-pointer'  >
              &nbsp;{language.about}&nbsp;
            </li>
            {/* Elemento html con funcion para responsive */}
            <li onClick={() => cambiarDisplayResponsive(1)} data-value={language.about} id="aboutResponsive" data-text='&nbsp;SOBRE' className='my-4 md:hidden cursor-pointer'  >
              &nbsp;{language.about}&nbsp;
            </li>
            {showAbout}
            {/* ELemento html con funcion en resposive */}
            <li data-value={language.skills} onClick={() => cambiarDisplayResponsive(2)} id="skillsResponsive" data-text='&nbsp;Competencias' className=" md:hidden my-4 cursor-pointer">&nbsp;{language.skills}&nbsp;</li>
            {showSkills}
            <li data-value={language.skills} onClick={() => cambiarDisplay(<Skills responsiveStyle='' />)} id="skills" data-text='&nbsp;Competencias' className="nonresponsive  md:visible   my-4 cursor-pointer">&nbsp;{language.skills}&nbsp;</li>
            <li data-value={language.projects} onClick={() => cambiarDisplayResponsive(3)} id="projectsResponsive" data-text='&nbsp;Proyectos' className=" md:hidden my-5 cursor-pointer ">&nbsp;{language.projects}&nbsp;</li>
            <li data-value={language.projects} onClick={() => cambiarDisplay(<Projects />)} id="projects" data-text='&nbsp;Proyectos' className="nonresponsive  md:visible my-5 cursor-pointer ">&nbsp;{language.projects}&nbsp;</li>
            {showProjects}
          </ul>
        </div>
        <div className="projectDisplay w-[70%] h-[33rem]  invisible md:visible absolute right-4 bottom-[12rem] ">
          {section}
        </div>

        <section>
          <div className="bgPulse">
            <span className=''></span>
            <span className=''></span>
            <span className='' > </span>
            <span className=''></span>
            <span className=''></span>
          </div>
          <div className="moon ">
            <span className=''></span>
            <span className=''></span>
            <span className='' > </span>
            <span className=''></span>
            <span className=''></span>
            <span className=''></span>
            <span className=''></span>
            <span className=''></span>
            <span className=''></span>
            <span className=''></span>
            <span className=''></span>
            <span className=''></span>
            <span className=''></span>
          </div>

        </section>
      </main>
    </>
  )
}
