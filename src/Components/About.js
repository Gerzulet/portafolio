import profilePic from '../Assets/profilePicCar.png'

export default function About () {


  return ( 
  <div class="mt-4 items-center  h-auto flex flex-col justify-center">
      <img className='rounded-full h-72 'src={profilePic} alt="profilePic"/>
   <p className="w-[90%] mt-7  leading-6 tracking-wider text-slate-300 font-inconsolata ">Hola! Me llamo German Soto, soy desarrollador de aplicaciones web. <br/><br/> Actualmente soy estudiante de ingenieria en la facultad de Buenos Aires, durante mis inicios en la carrera descubrí mi pasion por la programacion, desde el momento en el que toque codigo con el lenguaje C.<br/><br/> Me encanta todo lo relacionado al mundo IT, mantengo mis ojos en el desarrollo de software y la cyberseguridad. <br/> Mi mision es desenvolverme libremente en estos entornos y resolver situaciones cotidianas de la vida real.  </p>

    </div>
  )
}
