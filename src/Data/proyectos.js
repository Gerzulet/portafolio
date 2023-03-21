import noteAppPreview from '../Assets/notetakingappPreview.gif'
import landingPagePreview from '../Assets/landingPagePreview.gif'
import catWorking from '../Assets/catWorking.jpg'
import tailwindIcon from '../Assets/tailwindLogo.svg'
import reactIcon from '../Assets/reactLogo.svg'
import jsLogo from '../Assets/jslogo.svg'
import bootstrapLogo from '../Assets/bootstrapLogo.svg'


const ProyectosDB = [
  {
    'image': landingPagePreview,
    'technologies': [reactIcon, tailwindIcon],
    'linkGithub': 'https://github.com/Gerzulet/landing-page',
    'responsive': true,
    'ProyectTitle': 'Landing Page',
    'linkPreview': 'https://zulet-landingpage.netlify.app/'

  },
  {
    'image': catWorking,
    'technologies': [reactIcon, tailwindIcon],
    'linkGithub': 'https://github.com/Gerzulet/ProyectoFinalSoto',
    'responsive': true,
    'ProyectTitle': 'E-Commerce (WORK IN PROGRESS)',

  },
  {
    'image': noteAppPreview,
    'ProyectTitle': 'Note Taking App',
    'responsive': false,
    'technologies': [jsLogo, bootstrapLogo],
    'linkGithub': 'https://github.com/Gerzulet/NotesManager.github.io',
    'linkPreview': 'https://gerzulet.github.io/NotesManager.github.io/'
  }
]

export default ProyectosDB
