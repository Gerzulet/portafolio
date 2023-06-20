import { useEffect } from 'react'
import './start.css'

export default function Start() {

  useEffect(() => {
    const circles = document.querySelector(".doorToCat span:nth-child(2)")
    circles.addEventListener("animationend", () => {

      const circleDoor = document.querySelector(".doorToCat span:nth-child(4)")
      circleDoor.classList.add("swingAnimation")
      const spans = document.querySelectorAll(".bgPulse span")
      spans.forEach(el => {
        el.classList.add("pulse")
      })


      const moons = document.querySelector(".moon")
      moons.classList.add("backgroundimages")


    })

  }, [])


  return (
    <div className="visible   doorToCat">
      <span className=''></span>
      <span className=''></span>
      <span className=''></span>
      <span className=''></span>
      <span className=''></span>

    </div>
  )
}
