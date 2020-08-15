const form = document.querySelector(".name-container");
const inputName = document.querySelector(".name");
const ask = document.querySelector(".ask");

function saveUser() {
  const user = inputName.value;
  localStorage.setItem("user", user);
}

function askName() {
  inputName.addEventListener("input", saveUser);
}

function loadUser() {
  const user = localStorage.getItem("user");

  if (user === null) {
    askName();
  } else {
    form.removeChild(inputName);
    form.removeChild(ask);
    form.innerHTML = `${user}'s to-do-list`;
    form.style.fontSize = "30px";
    form.style.boxShadow = "none";
    form.style.height = "50px";
  }
}

function init() {
  loadUser();
}

init();
