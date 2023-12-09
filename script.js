const apiKey = '7d599ce045a697247a327dd3f4029960';

function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
    const searchValidation = document.getElementById('searchValidation')
    console.log(cityName)

    if(!cityName) {
        searchValidation.innerHTML = `<h3 class='msg'>Please enter a city name</h3>`;
        dataContainer.innerHTML = ''
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => { 
        displayWeather(data);
        console.log(data);
    })
    .catch(err => {
        console.error('Error fetching weather data:', err);
        searchValidation.innerHTML = `<h3 class="msg">City not found</h3`
        dataContainer.innerHTML = ''
    })
}

function displayWeather(data) {
    const dataContainer = document.getElementById('dataContainer');
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    searchValidation.innerHTML= ''
    dataContainer.innerHTML = `
        <h2 class="city">${data.name}</h2>
        <h3 class="temp">Temperature ${Math.round(data.main.temp - 273.15)} C°</h3>
        <h3 class="desc">${data.weather[0].description}</h3>
        <img src="${iconUrl}" alt="Weather Icon">
    `
}
window.addEventListener("load", getWeather);
