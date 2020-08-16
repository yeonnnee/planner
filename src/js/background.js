const body = document.querySelector("body");
const wrapper = document.createElement("div");

function getImage() {
  const numberOfImage = Math.floor(Math.random() * 3);
  const imageUrl = `src/images/${numberOfImage + 1}.jpg`;

  body.style.backgroundImage = `url(${imageUrl})`;
  body.style.backgroundSize = `cover`;
  body.classList.add("showUp");
}

function loadBackground() {
  const user = localStorage.getItem("user");

  if (user === null) {
    getImage();
  } else {
    body.style.backgroundColor = "#E9E5DC";
    body.appendChild(wrapper);
    wrapper.classList.add("wrapper");
  }
}

function init() {
  loadBackground();
}
init();
