import { useEffect } from 'react';
import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import { LanguageProvider } from './LanguageContext/LanguageContext'
import anime from 'animejs';
import lionIcon from './Assets/lion.svg'

function App() {

  useEffect(() => {
    const wrapper = document.getElementById("tiles");

    let columns = 0,
      rows = 0,
      toggled = false;

    const toggle = () => {
      toggled = true;


      document.body.classList.add("toggled");
      document.getElementById("title2").classList.add("fixed")


      // Here trying to transition to portfolio, nightmare fuel i tell ya
      setTimeout(() => {
        const tiles = document.getElementById("tiles")
        tiles.classList.add('endoftile')
        document.querySelector("body").classList.add('endofbackground')
        document.getElementById("icon").remove()

        tiles.addEventListener('transitionend', () => {
          document.getElementById("title2").classList.remove("fixed")
          document.getElementById("content").style.display = "block"
          document.getElementById("content").classList.add("makeContentAppear")
          tiles.parentNode.removeChild(tiles)
        }, false)


      }, 4300);
      // hasta ahora funciona, tenemos que trabajar en una trasicion mas fluida hacia el menu



    }

    const handleOnClick = index => {
      toggle();

      anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        direction: 'alternate',
        delay: anime.stagger(50, { grid: [columns, rows], from: index }),

      });

    }

    const createTile = index => {
      const tile = document.createElement("div");

      tile.classList.add("tile");

      tile.style.opacity = toggled ? 0 : 1;

      // tile.onclick = e => {
      //   handleOnClick(index);
      // }

      tile.addEventListener('click', (e) => {
        handleOnClick(index)
      })


      return tile;
    }

    const createTiles = quantity => {
      Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
      });
    }

    const createGrid = () => {
      wrapper.innerHTML = "";

      const size = document.body.clientWidth > 800 ? 100 : 50;

      columns = Math.floor(document.body.clientWidth / size);
      rows = Math.floor(document.body.clientHeight / size);

      wrapper.style.setProperty("--columns", columns);
      wrapper.style.setProperty("--rows", rows);

      createTiles(columns * rows);
    }

    createGrid();

    window.onresize = () => createGrid();
  }, [])





  return (<> <LanguageProvider>
    <div id="tiles"></div>

    <div id="content">
      <NavBar />
      <Main />
    </div>

    <h1 id="title" className="centered">
      In arduis servare
      <span id="fancy" class="fancy"> mentem...</span>

      <p id="subtitle" className="centered">
        Maintain your mind in what is
        <span id="fancy" class="subfancy"> difficult...</span>

      </p>
    </h1>
    <img id="icon" src={lionIcon}></img>
    <h1 id="title2" className="centered ">
      ...secundis perficere
      <span id="fancy" class="fancy"> iacturam.</span>
      <p id="subtitle" className="centered">
        ...achieve tranquility in
        <span id="fancy" class="subfancy"> prosperity.</span>
      </p>
    </h1>


    {/* "Labor omnia vincit improbus et duris urgens in rebus egestas." - "Unrelenting effort conquers all and pressing need in difficult circumstances." (Horace) */}

  </LanguageProvider> </>);
}

export default App;
