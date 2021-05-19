
import "./style.scss"
import {titles, tracks, loadTracks, pauseTrack, resetSlider, setVolumeandSlider, playWindOnly } from "./scripts/tracks"

import {duration, userDuration, interval, subtractHidden, addHidden, runTimer, updateTimerDisplay, updateCountDown, resetTimer, resetButtons, subtractOneMinute, addOneMinute} from "./scripts/timer"


const timer = document.querySelector("#timer")


const addButton = document.querySelector("#plus")
const subtractButton = document.querySelector("#subtract")
const playButton = document.querySelector("#play")

// creates audio object for each title in the array  and corresponding selectors
loadTracks()

// bottom section -  all music related events
tracks.forEach(track => {
    track.card.addEventListener("click", (c)=> {
        if (track.paused === true || track.muted === true  || track.volume === 0) {
            setVolumeandSlider(track)
            track.play()
        }

        else {
            pauseTrack(track)
            resetSlider(track)
        }  
    })

    track.slider.addEventListener("input", s => {
        const value = s.target.value;
        track.volume = value;
        if (track.paused === true || track.muted === true && value> 0) {
            track.play()
        }
        track.fill.style.width = `${value*100}%`
        console.log(value)
    })

})


playButton.addEventListener("click", (e)=> {

    
    console.log(playButton.firstElementChild.getAttribute('src'))

   if (playButton.firstElementChild.getAttribute('src') === "./img/play.svg" )  {
    runTimer()

    const areAllPaused = tracks.every(track => track.paused)
    console.log(areAllPaused)
    if (areAllPaused) {
        playWindOnly(tracks)
    }
    playButton.firstElementChild.setAttribute("src","./img/stop.svg" ) 
   } else {
    playButton.firstElementChild.setAttribute("src","./img/play.svg") 
    resetTimer()
    resetButtons()
    updateTimerDisplay()
    
    tracks.forEach(track => {
        pauseTrack(track)
        resetSlider(track)
    })

   }



})

addButton.addEventListener("click", (e) => {
    // console.log(e.target.data-time)
    addOneMinute()
    console.log(duration)
    updateTimerDisplay()
    if (duration >= 5940) {
        addButton.classList.add("hide")
        addHidden = true
    }
    if (subtractHidden){
        subtractButton.classList.remove("hide")
        subtractHidden = false
    }
   
})
subtractButton.addEventListener("click", (e) => {
    // console.log(e.target.data-time)
    subtractOneMinute()
    console.log(duration)
    updateTimerDisplay()
   if (duration <= 60) {
       e.target.classList.add("hide")
       subtractHidden = true
   }
})



// random notes

// https://stackoverflow.com/questions/7798680/add-duration-to-js-settimeout-after-the-timer-is-running <--- tutaj jest jak naprawic timer!!!

// check this to try and solve the layout: https://stackoverflow.com/questions/53215170/flexbox-images-different-results-in-chrome-and-firefox


export {duration, subtractButton, addButton }



