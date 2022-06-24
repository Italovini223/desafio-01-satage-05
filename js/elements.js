const play = document.querySelector(".play")
const add = document.querySelector(".add")
const stop = document.querySelector(".stop")
const sub = document.querySelector(".sub")
const buttonRain = document.querySelector(".rain")
const buttonForest = document.querySelector(".forest")
const buttonCoffeeShop = document.querySelector(".coffeeShop")
const buttonFire = document.querySelector(".fire")

let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay= document.querySelector(".seconds")
let seconds = Number(secondsDisplay.textContent)

export {
  play,
  add,
  stop,
  sub,
  buttonRain,
  buttonCoffeeShop,
  buttonForest,
  buttonFire,
  minutesDisplay,
  secondsDisplay,
  seconds,
}