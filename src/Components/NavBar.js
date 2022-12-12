import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs' 
import germanFlag from '../Assets/germanFlag.png'
import frenchFlag from '../Assets/frenchFlag.png'
import spanishFlag  from '../Assets/spanishFlag.png'
import englishFlag  from '../Assets/englishFlag.png'
import {useState, useEffect} from 'react'

export default function NavBar() {

  const languages = [spanishFlag,englishFlag, frenchFlag, germanFlag]
  const [languageFlag, setLanguageFlag] = useState(spanishFlag)
  useEffect(()=> {
    document.getElementById("languageFlag").addEventListener('click', changeLanguage)
  },[languageFlag])

 function changeLanguage() {
    let lenguageActual = languages.findIndex(elemento => elemento === languageFlag)
    lenguageActual === 3 ? setLanguageFlag(spanishFlag) : setLanguageFlag(languages[lenguageActual + 1])

  }


 return (
    <>
      <nav className="w-full  h-auto relative flex justify-around">
        <ul className='flex  invisible  md:visible '>
          <li className='m-4'><a target="_blank" href="https://github.com/Gerzulet"><BsGithub color='white' size='40' /></a></li>
          <li className='m-4'><a target="_blank" href="https://linkedin.com/in/gzulet"><BsLinkedin color='white' size='40' /></a></li>
          <li className='m-4'><a target="_blank" href="https://wa.me/+1167435985"><BsWhatsapp color='white' size='40' /></a></li>
        </ul>
          <img id='languageFlag' className='cursor-pointer h-7 md:h-9 m-4 absolute md:right-[3rem]' src={languageFlag} alt=""></img>
      </nav>
    </>
  )
}
