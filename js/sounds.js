
export default function Sounds() {
  const forestSound =  document.querySelector(".forestAudio")
  const rainSound = document.querySelector(".rainAudio")
  const coffeeShopSound = document.querySelector(".coffeeShopAudio")
  const fireSound = document.querySelector(".fireAudio")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

 
  function StopOtherAudios (audio1, audio2, audio3) {
    audio1.pause()
    audio2.pause()
    audio3.pause()
  }

  function playForest() {
    StopOtherAudios(rainSound, coffeeShopSound, fireSound)
    forestSound.play()
  }

  function playRain() {
    StopOtherAudios(forestSound, coffeeShopSound, fireSound)
    rainSound.play()
  }

  function payCoffeeShop() {
    StopOtherAudios(forestSound, rainSound, fireSound)
    coffeeShopSound.play()
  }

  function PlayFire() {
    StopOtherAudios(forestSound,rainSound,coffeeShopSound)
    fireSound.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }
  return {
    playForest,
    playRain,
    payCoffeeShop,
    PlayFire,
    timeEnd
  }
}