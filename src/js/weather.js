const API_KEY = "d8657ab8e62cef80281fdcffae5145a3";

function saveLocation(coordsObj) {
  localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function getGeolocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitud: latitude,
    longitude: longitude,
  };
  saveLocation(coordsObj);
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
  }
}

function init() {
  loadCoords;
}

init();
