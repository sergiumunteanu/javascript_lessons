const main = document.getElementById("main");
const temperature = document.getElementById("temperature");
const locationHtml = document.getElementById("location");
const date = document.getElementById("date");
const wIcon = document.getElementById("w-icon");
const wType = document.getElementById("w-type");
const aside = document.getElementById("aside");
const searchLocation = document.getElementById("search-location");
const searchBtn = document.getElementById("search-btn");
const pressure = document.getElementById("pressure")
const humidity = document.getElementById("humidity")
const visibility = document.getElementById("visibility")
const windSpeed = document.getElementById("wind-speed")

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCityName, showError);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function getCityName(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=3f3779bb4d5d49ec84804316c90ac9b1&language=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //const city = data.results[0].components.city;
            //const city = data.results[0].components.city.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const city = data.results[0].components.town.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            //const city = "Chisinau";
            console.log(data.results[0].components)
            console.log(`Current city: ${city}`);
            app(city)
            
        })
        .catch(error => console.error('Error:', error));
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

async function app(loc) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=5e03f7f010c44c4a74eed7cbaa122045`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        temperature.innerHTML = Math.round(data.main.temp - 273) + "°C";
        locationHtml.innerHTML = data.name;
        const date1 = new Date().toLocaleDateString().split('/');
        date.innerHTML = date1[1] + "." + date1[0] + "." + date1[2];
        wIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        wType.innerHTML = data.weather[0].main;
        pressure.innerHTML = data.main.pressure + " millibar";
        humidity.innerHTML = data.main.humidity + " %";
        visibility.innerHTML = data.visibility / 1000 + "km";
        windSpeed.innerHTML = data.wind.speed + " m/s";
    } catch (error) {
        console.error('Error:', error);
    }
}

searchLocation.addEventListener("keyup", (event) => {
    if(event.key == "Enter")
    {
        app(searchLocation.value);
    }
});

searchBtn.addEventListener("click", () => {
    app(searchLocation.value);
});
//app("Revaca");