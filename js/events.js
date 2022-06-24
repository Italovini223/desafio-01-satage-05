import {
  play,
  stop,
  add,
  sub,
} from "./elements.js"

export default function Events({timer}) {
  play.addEventListener("click", function() {
    let newMinutes = prompt("Digite quantos minutos")
    
  
    if(!newMinutes) {
     timer.reset()
      return
    }
    
    timer.updateDisplay(newMinutes,0)
    timer.updateMinutes(newMinutes)
    timer.countDow()
  
  }) 
  
  stop.addEventListener("click", function () {
    timer.reset()
  })
  
  add.addEventListener("click", function() {
    timer.addMinutes()
  })
  
  sub.addEventListener("click", function() {
    timer.subMinutes()
  })


}