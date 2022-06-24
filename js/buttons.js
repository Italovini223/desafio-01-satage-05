import {
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire
} from "./elements.js"

export default function Buttons ({sounds}) {

  buttonForest.addEventListener("click", function() {
    sounds.playForest()
  
  })
  
  buttonRain.addEventListener("click", function() {
    sounds.playRain()
  })
  
  buttonCoffeeShop.addEventListener("click", function() {
  sounds.payCoffeeShop()
  })

  buttonFire.addEventListener("click", function() {
    sounds.PlayFire()
  })
}