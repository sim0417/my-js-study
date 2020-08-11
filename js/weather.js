const weatherInfo = document.querySelector('.weather-info');

const WEATHER_API_KEY = "e2e41e4ae74c3339b0b1ab184943a746";
const COORDS = 'coords';

function weatherInit() {
    const loadCoords = localStorage.getItem(COORDS);
    if (loadCoords === null) {
        askForCoords();
    } else {
        const parseData = JSON.parse(loadCoords);
        getWeather(parseData.lat, parseData.lng);
    }
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGetGeoInfoSuccess, handleGetGeoInfoError);
}

function handleGetGeoInfoSuccess(position) {
    // console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const coordsObj = {
        lat,
        lng
    };
    saveCoords(coordsObj);
    getWeather(lat, lng);
}

function handleGetGeoInfoError() {
    alert("Fail to get your positon");
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
    ).then(function (response) {
        return jsonData = response.json();
    }).then(function (json) {
        const temp = json.main.temp;
        const place = json.name;
        weatherInfo.innerText = `${temp} @ ${place}`;
    });
}

weatherInit();