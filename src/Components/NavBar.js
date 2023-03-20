import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import frenchFlag from '../Assets/frenchFlag.png'
import spanishFlag from '../Assets/spanishFlag.png'
import englishFlag from '../Assets/englishFlag.png'
import { useState, useEffect, useContext } from 'react'
import LanguageContext from '../LanguageContext/LanguageContext'


export default function NavBar() {


  const { language, changeLanguage } = useContext(LanguageContext)
  const [languageFlag, setLanguageFlag] = useState("")

  useEffect(() => {
    setLanguageFlag(spanishFlag)
  }, [])


  useEffect(() => {
    language.language === "spanish" && setLanguageFlag(spanishFlag)
    language.language === "english" && setLanguageFlag(englishFlag)
    language.language === "french" && setLanguageFlag(frenchFlag)


  }, [language])





  return (
    <>
      <nav className="w-full  h-auto relative flex justify-around">
        <ul className='flex  invisible  md:visible '>
          <li className='m-4'><a target="_blank" rel="noreferrer" href="https://github.com/Gerzulet"><BsGithub color='white' size='40' /></a></li>
          <li className='m-4'><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/gzulet"><BsLinkedin color='white' size='40' /></a></li>
          <li className='m-4'><a target="_blank" rel="noreferrer" href="https://wa.me/+1167435985"><BsWhatsapp color='white' size='40' /></a></li>
        </ul>
        <img onClick={changeLanguage} id='languageFlag' className='cursor-pointer h-7 md:h-9 m-4 absolute md:right-[3rem]' src={languageFlag} alt=""></img>
      </nav>
    </>
  )
}
