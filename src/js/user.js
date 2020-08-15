const secondBody = document.querySelector("body");
const clock = document.querySelector(".clock-container");
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
    secondBody.removeChild(form);
    secondBody.removeChild(clock);

    paintUser();
  }
}

function paintUser() {
  const user = localStorage.getItem("user");
  const userSection = document.createElement("div");

  secondBody.appendChild(userSection);
  userSection.appendChild(clock);
  userSection.appendChild(form);

  userSection.classList.add("user-section");

  form.innerHTML = `${user}'s planner`;

  form.style.boxShadow = "none";
  form.style.height = "50px";
  form.style.width = "400px";
  form.style.margin = "30px 0";
  form.style.fontSize = "30px";
}

function init() {
  loadUser();
}

init();
