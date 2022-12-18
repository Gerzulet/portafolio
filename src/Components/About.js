import profilePic from '../Assets/profilePicCar.png'
import {AiFillCloseCircle} from 'react-icons/ai'
import LanguageContext from '../LanguageContext/LanguageContext'
import {  useContext} from "react";



export default function About ({responsiveStyle, display, animation }) {

  const {language} = useContext(LanguageContext)
  console.log(language)

  return ( 
  <div className={`md:mt-24 ${responsiveStyle} ${display} ${animation} items-center animate-fadein  h-auto flex flex-col justify-center`}>
      <img className='rounded-full h-60 'src={profilePic} alt="profilePic"/>
   <p className="w-[90%] mt-7  text-sm md:text-[1em] leading-6 tracking-wider text-slate-300 font-inconsolata ">
        {language.presentation}
        <br/>
        <br/>
        {language.studies}
        <br/> 
        <br/> 
        {language.interests}
        <br/> 
        <br/> 
        {language.mision}

      </p>
   <button className='md:hidden  mt-7'>
        <AiFillCloseCircle size='1em' color='white'/>
      </button>
    </div>
  )
}
