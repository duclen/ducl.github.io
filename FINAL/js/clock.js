const clock = document.querySelector("h2#clock")


function get_clock (){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

setInterval(get_clock, 1000);