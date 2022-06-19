const API_KEY="87ec99017e2bf7dc16de008b913c41fe";
function onGeoRight(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&long=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const name= data.name;
            weather.innerText= `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Couldn't find you. No weather info for you.");
}

navigator.geolocation.getCurrentPosition(onGeoRight, onGeoError);


