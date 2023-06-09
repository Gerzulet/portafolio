import profilePic from '../Assets/profilePicCar.png'
import LanguageContext from '../LanguageContext/LanguageContext'
import { useContext, useEffect } from "react";


export default function About({ responsiveStyle, display, animation }) {

  const { language } = useContext(LanguageContext)

  return (
    <div className={`md:mt-24 ${responsiveStyle} ${display} ${animation} items-center animate-fadein  h-auto flex flex-col justify-center`}>
      <img className='rounded-full h-60 ' src={profilePic} alt="profilePic" />
      <p id="aboutext" className="w-[90%] mt-7  text-sm md:text-[1em] leading-6 tracking-wider text-slate-300 font-inconsolata ">
        <p id="test" data-value={language.presentation}>
          {language.presentation}
        </p>
        <br />
        <br />
        <p data-value={language.studies}>
          {language.studies}
        </p>
        <br />
        <br />
        <p data-value={language.interests}>
          {language.interests}
        </p>
        <br />
        <br />
        <p data-value={language.mision}>
          {language.mision}
        </p>

      </p>

    </div>
  )
}
