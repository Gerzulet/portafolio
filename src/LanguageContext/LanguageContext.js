import { useState, createContext } from 'react'
import translations from '../Data/translations.js'
const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(translations[0])

  function changeLanguage () {
    
    let actualLanguage = translations.findIndex(el => el === language)
    actualLanguage === 2 ? setLanguage(translations[0]) : setLanguage(translations[actualLanguage + 1])
  }

  return <LanguageContext.Provider value={{language, changeLanguage}}>{children} </LanguageContext.Provider>

}

export {LanguageProvider}
export default LanguageContext
