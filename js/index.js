import Buttons from "./buttons.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
import Timer from "./timer.js"

let sounds = Sounds()
let timer = Timer({sounds})


Events({timer})
Buttons({sounds})







