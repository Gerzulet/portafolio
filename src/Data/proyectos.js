import noteAppPreview from '../Assets/notetakingappPreview.gif'
import landingPagePreview from '../Assets/landingPagePreview.gif'
import tailwindIcon from '../Assets/tailwindLogo.svg'
import reactIcon from '../Assets/reactLogo.svg'
import jsLogo from '../Assets/jslogo.svg'
import firebaseLogo from '../Assets/icons8-firebase-48.png'
import bootstrapLogo from '../Assets/bootstrapLogo.svg'
import bookecommerce from '../Assets/bookecommerce.gif'


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
    'image': bookecommerce,
    'technologies': [reactIcon, tailwindIcon, firebaseLogo],
    'linkGithub': 'https://github.com/Gerzulet/Books-ECommerce',
    'responsive': true,
    'ProyectTitle': 'E-Commerce',
    'linkPreview': 'https://soto-book-ecommerce.netlify.app/'

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
