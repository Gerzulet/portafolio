import noteAppPreview from '../Assets/notetakingappPreview.gif'
import landingPagePreview from '../Assets/landingPagePreview.gif'
import tailwindIcon from '../Assets/tailwindLogo.svg'
import reactIcon from '../Assets/reactLogo.svg'
import jsLogo from '../Assets/jslogo.svg'
import bootstrapLogo from '../Assets/bootstrapLogo.svg'
const ProyectosDB = [
    {
      'image': landingPagePreview,
      'technologies': [reactIcon, tailwindIcon],
      'linkGithub' : 'https://github.com/Gerzulet/landing-page',
      'responsive' : true, 
      'ProyectTitle' : 'Landing Page',
    },
    {
      'image': 'https://thumbs.dreamstime.com/b/polar-bear-ursus-maritimus-carnivorous-bear-whose-native-range-lies-largely-arctic-circle-encompassing-115252759.jpg',
      'technologies': ['../Assets/tailwindLogo.svg', '../Assets/reactLogo.svg']
    },
    {
      'image': noteAppPreview,
      'ProyectTitle': 'Note Taking App',
      'link': 'https://github.com',
      'responsive': false,
      'technologies': [jsLogo, bootstrapLogo],
      'linkGithub': 'https://github.com/Gerzulet/NotesManager.github.io',
      'linkPreview': 'https://gerzulet.github.io/NotesManager.github.io/'
    }
  ]

export default ProyectosDB
