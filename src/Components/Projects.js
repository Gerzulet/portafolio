import './Proyects.css'
import { useState } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import noteManagerImg from '../Assets/notetakingappPreview.gif'
import jsLogo from '../Assets/jslogo.svg'
import reactLogo from '../Assets/reactLogo.svg'
import tailwindLogo from '../Assets/tailwindLogo.svg'
import bootstrapLogo from '../Assets/bootstrapLogo.svg'
import nonResponsiveIcon from '../Assets/nonResponsiveIcon.svg'
import responsiveIcon from '../Assets/responsiveIcon.svg'
import previewIcon from '../Assets/previewIcon.svg'
import githubIcon from '../Assets/githubIcon.svg'
import landingPagePreview from '../Assets/landingPagePreview.gif'


export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const CarouselData = [
    {
      'image': landingPagePreview,
      'technologies': [tailwindLogo, reactLogo],
      'linkGithub' : 'https://github.com/Gerzulet/landing-page',
      'responsive' : true, 
      'ProyectTitle' : 'Landing Page',
    },
    {
      'image': 'https://thumbs.dreamstime.com/b/polar-bear-ursus-maritimus-carnivorous-bear-whose-native-range-lies-largely-arctic-circle-encompassing-115252759.jpg',
      'technologies': [reactLogo, reactLogo]
    },
    {
      'image': noteManagerImg,
      'ProyectTitle': 'Administrador de notas',
      'link': 'https://github.com',
      'responsive': false,
      'technologies': [jsLogo, bootstrapLogo],
      'linkGithub': 'https://github.com/Gerzulet/NotesManager.github.io',
      'linkPreview': 'https://gerzulet.github.io/NotesManager.github.io/'
    }
  ]

  // Funciones de carrousel
  function nextSlide() {
    let newSlide = currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide)
  }

  function prevSlide() {
    let newSlide =
      currentSlide === 0
        ? CarouselData.length - 1
        : currentSlide - 1;
    setCurrentSlide(newSlide)
  }



  return (

    <div className=" font-inconsolata">
      <div className="mt-8 animate-fadein h-[28rem]">

        {/* Controles de carrousel, swipe para mobile */}
        <AiOutlineLeft onClick={prevSlide} className='absolute left-14 text-3xl inset-y-1/2 text-white cursor-pointer' />
        <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>


          <div className=" m-40  flex overflow-hidden relative">


            {/* Renderizado de carrousel */}
            {CarouselData.map((slide, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? `h-[28rem] animate-fadein block w-full  object-cover relative`
                      : "hidden"
                  }>
                  <h1 className="my-8 text-white text-center underline font-mono text-2xl ">{slide.ProyectTitle}</h1>


                  <img
                    src={slide.image}
                    alt={slide.ProyectTitle}
                    key={index}
                  />

                  <h1 class="absolute top-[60%] text-red-600 left-14">{slide.responsive}</h1>

                  <div class="text-white absolute flex flex-col bottom-[85%] right-[93%]">
                    {slide.responsive === false ? 
                    <img className='h-12' src={nonResponsiveIcon} alt="non Resposive"/> : <img className='h-12' src={responsiveIcon} alt="responsive"/>
                     }
                  </div>
                  <div class="text-white absolute flex flex-col bottom-[30%] left-[93%]">
                    {slide.technologies.map((el, index) => {
                      return (
                        <img className='h-12 my-2  ' key={index} src={el} alt="" />

                      )
                    })}
                    <a target="_blank" href={slide.linkPreview}>
                    <img className='h-12 my-2' src={previewIcon} alt="preview"/>
                    </a>
                    <a target="_blank" href={slide.linkGithub}>
                    <img className='h-12 my-2' src={githubIcon} alt="seeCode"/>
                    </a>
                  </div>

                  

                </div>
              );
            })}
          </div>
        </Swipe>
        <AiOutlineRight onClick={nextSlide} className='absolute right-14 text-3xl inset-y-1/2 text-white cursor-pointer' />
      </div>


    </div>
  )
}
