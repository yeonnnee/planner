const API_KEY = "d8657ab8e62cef80281fdcffae5145a3";

async function getWeather(lat, lon) {
  const dataFetch = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const data = await dataFetch.json();
  const temperature = data.main.temp;
  const location = data.name;

  const weatherSection = document.createElement("div");
  body.appendChild(weatherSection);
  weatherSection.classList.add("weather");
  weatherSection.innerHTML = `${temperature} @ ${location}`;
}

function saveLocation(coordsObj) {
  localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function getGeolocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveLocation(coordsObj);
  getWeather(latitude, longitude);
}

function failGeolocation() {
  console.log("can't access geolocation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(getGeolocation, failGeolocation);
}

function loadCoords() {
  const savedCoords = localStorage.getItem("coords");

  if (savedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(savedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords;
}

init();
