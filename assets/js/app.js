let hourOutput = document.querySelector('#hour')
let minOutput = document.querySelector('#min')
let secOutput = document.querySelector('#sec')

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // calulate teansform rotate
    let calHour = (hours * 30) + (min / 2)
    let calMin = (min * 6) + (sec / 10);
    let calSec = sec*6;

    // output
    hourOutput.style.transform = `rotate(${calHour}deg)`
    minOutput.style.transform = `rotate(${calMin}deg)`
    secOutput.style.transform = `rotate(${calSec}deg)`
    setTimeout(function(){
        clock()
    }, 1000)
}
clock()