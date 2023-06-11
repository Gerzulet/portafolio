import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import { LanguageProvider } from './LanguageContext/LanguageContext'
function App() {
  return (
    <>

      <LanguageProvider>

        <NavBar />
        <Main />
      </LanguageProvider>
    </>
  );
}

export default App;
