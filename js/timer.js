import {
  seconds,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

let minutes = Number(minutesDisplay.textContent)
let setTimeTimeout

export default function Timer ({sounds}) {

  function updateDisplay (minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function countDow() {
    setTimeTimeout = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent) 
    let  minutes = Number (minutesDisplay.textContent)
  
    if (minutes <= 0 && seconds <= 0) {
      reset()
      sounds.timeEnd()
      return
    }
  
    if( seconds <=0) {
      seconds = 60
  
      minutes --
    }
  
    updateDisplay(minutes, seconds - 1)
  
  
    countDow()
   }, 1000)
  }
  
  function reset () {
    updateDisplay(minutes, 0)
    clearTimeout(setTimeTimeout)
  }
  
  function addMinutes () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
  
    updateDisplay(minutes + 5, seconds)
  }
  
  function subMinutes() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    
    if(minutes -5 < 0 ) {
      return
    }
    updateDisplay(minutes -  5, seconds)
  }

  function updateMinutes (newMinutes) {
    minutes = newMinutes
  }

  return {
    updateDisplay,
    countDow,
    reset,
    addMinutes,
    subMinutes,
    updateMinutes
  }
}
