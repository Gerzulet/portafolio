import htmlLogo from '../Assets/htmllogo.svg'
import jsLogo from '../Assets/jslogo.svg'
import cssLogo from '../Assets/csslogo.svg'
import reactLogo from '../Assets/reactLogo.svg'
import linuxLogo  from '../Assets/linuxlogo.svg'
import gitLogo from '../Assets/gitlogo.svg'
import tailwindLogo from '../Assets/tailwindLogo.svg'
import bootstrapLogo from '../Assets/bootstrapLogo.svg'
import nodejs from '../Assets/nodejs.svg'


export default function Skills({responsiveStyle}) {


  return ( 
 <div className={`flex ${responsiveStyle} animate-fadein font-inconsolata m-24 flex-col items-center `}> 
      
      <h2 class="text-white font-bold text-xl">Lenguages</h2>
     <div className="flex m-8">
        <img className='h-24 mx-4  ' src={htmlLogo} alt="LogoHtml"/>
        <img className='h-24 mx-4 ' src={cssLogo} alt="LogoCss"/>
        <img className='h-24 mx-4 ' src={jsLogo} alt="LogoJs"/>
      </div>

      <h1 class="text-white text-xl font-bold">Frameworks</h1>
        <div class="flex m-8">
        <img className='h-24 mx-4 'src={reactLogo} alt="LogoReact"/>
        <img className='h-24 mx-4 'src={tailwindLogo} alt="Logotailwind"/>
        <img className='h-24 mx-4 'src={bootstrapLogo} alt="LogoBoostrap"/>
      </div>

        <h2 class="text-white font-bold text-xl">Herramientas y sistemas operativos </h2>
        <div class="flex m-8">
        <img className='h-24 mx-3 ' src={gitLogo} alt="LogoGit"/>
        <img className='h-24 mx-3 ' src={linuxLogo} alt="LogoLinux"/>
        <img className='h-24 mx-3 ' src={nodejs} alt="LogoLinux"/>
      </div>
    </div>
  )
}
