import profilePic from '../Assets/profilePicCar.png'
import LanguageContext from '../LanguageContext/LanguageContext'
import { useContext, useEffect } from "react";


export default function About({ responsiveStyle, display, animation }) {

  const { language } = useContext(LanguageContext)

  useEffect(() => {
    console.log(language)
    if (language.language === 'spanish') {
      document.getElementById("aboutext").classList.add('wipeanimation')
      document.getElementById("aboutext").addEventListener("animationend", (event) => {
        event.target.classList.remove('wipeanimation')
      })
    }

    if (language.language === 'english') {
      document.getElementById("aboutext").classList.add('diamondanimation')
      document.getElementById("aboutext").addEventListener("animationend", (event) => {
        event.target.classList.remove('diamondanimation')
      })
    }
    if (language.language === 'french') {
      document.getElementById("aboutext").classList.add('cinema')
      document.getElementById("aboutext").addEventListener("animationend", (event) => {
        event.target.classList.remove('cinema')
      })
    }



  }, [language])

  return (
    <div className={`md:mt-24 ${responsiveStyle} ${display} ${animation} items-center animate-fadein  h-auto flex flex-col justify-center`}>
      <img className='rounded-full h-60 ' src={profilePic} alt="profilePic" />
      <p id="aboutext" className="w-[90%] mt-7  text-sm md:text-[1em] leading-6 tracking-wider text-slate-300 font-inconsolata ">
        {language.presentation}
        <br />
        <br />
        {language.studies}
        <br />
        <br />
        {language.interests}
        <br />
        <br />
        {language.mision}

      </p>

    </div>
  )
}
