import {subtractButton, addButton } from "../index"

let interval

//(timer shows minutes) duration: 17min * 60  = 1 020
let duration = 1020
let subtractHidden = false
let addHidden = false

// userDuration could be moved to local storage in the future
let userDuration = duration


function  runTimer () {
    subtractButton.classList.add("hide")
    addButton.classList.add("hide")
    subtractHidden = true
    addHidden = true
  interval =  setInterval(updateCountDown, 1000)
} 


function updateTimerDisplay() {
    const minutes = Math.floor(duration/60)
    let seconds = duration % 60
    let displaySeconds = seconds
     if(seconds === 0  || seconds < 10) {
        displaySeconds ="0" + seconds
    }
    timer.innerHTML = `${minutes}:${displaySeconds}`
 }
 
function updateCountDown(){
    updateTimerDisplay()
    duration --
    console.log(duration)
    if (interval != null && duration <=0) {
    resetTimer()
    resetButtons()
     updateTimerDisplay()
       
    }
}


function resetTimer() {
    clearInterval(interval)
    duration = userDuration
}

function resetButtons() {
    subtractButton.classList.remove("hide")
    addButton.classList.remove("hide")
    subtractHidden = false
    addHidden = false
}


function addOneMinute() {
    duration += 60
    userDuration +=60
}

function subtractOneMinute() {
    duration -= 60
    userDuration -=60
}
export {interval, subtractHidden, addHidden, duration, userDuration, runTimer, updateTimerDisplay, updateCountDown, resetTimer, resetButtons, addOneMinute, subtractOneMinute}