import htmlLogo from '../Assets/htmllogo.svg'
import jsLogo from '../Assets/jslogo.svg'
import cssLogo from '../Assets/csslogo.svg'
import reactLogo from '../Assets/reactLogo.svg'
import linuxLogo from '../Assets/linuxlogo.svg'
import gitLogo from '../Assets/gitlogo.svg'
import tailwindLogo from '../Assets/tailwindLogo.svg'
import bootstrapLogo from '../Assets/bootstrapLogo.svg'
import docker from '../Assets/docker.svg'
import nodejs from '../Assets/nodejs.svg'
import mongo from '../Assets/mongodb.png'
import swagger from '../Assets/swagger.png'
import express from '../Assets/express.svg'
import nest from '../Assets/nest.svg'
import c from '../Assets/c.svg'


import LanguageContext from '../LanguageContext/LanguageContext'

import { useContext } from "react";
export default function Skills({ responsiveStyle }) {

  const { language } = useContext(LanguageContext)

  return (
    <div className={`flex ${responsiveStyle} mr-6 animate-fadein font-inconsolata  my-3 md:m-24 flex-col items-center `}>

      <h2 className="text-white font-bold text-xl">{language.skillsLanguages}</h2>
      <div className="flex my-8 md:m-8 ">
        <img title='HTML' className='h-16  md:h-24 mx-4  ' src={htmlLogo} alt="LogoHtml" />
        <img title='CSS' className='h-16  md:h-24 mx-4 ' src={cssLogo} alt="LogoCss" />
        <img title='Javascript' className='h-16 md:h-24 mx-4 ' src={jsLogo} alt="LogoJs" />
        <img title='C Language' className='h-16 md:h-24 mx-4 ' src={c} alt="LogoC" />
      </div>

      <h1 className="text-white text-xl font-bold">{language.frameworks}</h1>
      <div className="flex my-8 mx-0 md:m-8">
        <img title='React' className='h-16 md:h-24 md:md:mx-4 ' src={reactLogo} alt="LogoReact" />
        <img title='Swagger Doc' className='h-16 md:h-24 md:mx-4 mx-1 ' src={swagger} alt="LogoSwagger" />
        <img title='Tailwind' className='h-16  md:h-24 md:mx-4 mx-1 ' src={tailwindLogo} alt="Logotailwind" />
        <img title='Bootstrap' className='h-16  md:h-24 md:mx-4 mx-1 ' src={bootstrapLogo} alt="LogoBoostrap" />
        <img title='ExpressJS' className='h-16  md:h-24 md:mx-4 mx-1 ' src={express} alt="LogoExpress" />
        <img title='NestJs' className='h-16  md:h-24 md:mx-4 mx-1 ' src={nest} alt="LogoNest" />
      </div>

      <h2 className="text-white text-center font-bold text-xl">{language.tools} </h2>
      <div className="flex my-8 md:m-8">
        <img title='Docker' className='h-16  md:h-24 md:mx-4 mx-1 ' src={docker} alt="LogoDocker" />
        <img title='MongoDB' className='h-16  md:h-24 md:mx-4 mx-1 ' src={mongo} alt="LogoMongo" />
        <img title='Git' className='h-16  md:h-24 md:mx-3 mx-1 ' src={gitLogo} alt="LogoGit" />
        <img title='Linux' className='h-16 md:h-24 md:mx-3 mx-1 ' src={linuxLogo} alt="LogoLinux" />
        <img title='NodeJS' className='h-16 md:h-24 md:mx-3 mx-1' src={nodejs} alt="LogoNode" />
      </div>
    </div>
  )
}
