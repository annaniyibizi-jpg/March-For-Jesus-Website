const eventDate = new Date("May 16, 2026 14:00:00").getTime()

setInterval(()=>{

const now = new Date().getTime()

const distance = eventDate - now

const days = Math.floor(distance / (1000*60*60*24))
const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((distance % (1000*60*60))/(1000*60))

document.getElementById("countdown").innerHTML =
days + " days " + hours + " hours " + minutes + " minutes"

},1000)
