function getClock(){
    let now = new Date()
    let hours = now.getHours().toString().padStart(2,'0')
    const maridiam = hours >= 12 ? "pm" : "am"
    hours = hours %  12||12
    hours = hours.toString().padStart(2,'0')
    const minute = now.getMinutes().toString().padStart(2,'0')
    const seconds = now.getSeconds().toString().padStart(2,'0')
    const timestring = `${hours}:${minute}:${seconds}${maridiam}`
    document.getElementById("Clock").textContent = timestring;
}
getClock()
setInterval(getClock,1000)

