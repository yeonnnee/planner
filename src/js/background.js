const body = document.querySelector("body");

function getImage() {
  const numberOfImage = Math.floor(Math.random() * 9);
  const imageUrl = `src/images/${numberOfImage + 1}.jpg`;
  body.style.backgroundImage = `url(${imageUrl})`;
  body.style.backgroundSize = `cover`;
}

function init() {
  getImage();
}
init();
