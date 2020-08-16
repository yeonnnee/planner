const secondBody = document.querySelector("body");
const clock = document.querySelector(".clock-container");
const form = document.querySelector(".name-container");
const inputName = document.querySelector(".name");
const ask = document.querySelector(".ask");
const userSection = document.createElement("div");

function saveUser() {
  const user = inputName.value;
  localStorage.setItem("user", user);
}

function askName() {
  form.addEventListener("submit", saveUser);
}

function loadUser() {
  const user = localStorage.getItem("user");

  if (user === null) {
    askName();
  } else {
    // user name input 요소 없애기
    form.removeChild(inputName);
    form.removeChild(ask);

    //clock, name input 없애기
    secondBody.removeChild(form);
    secondBody.removeChild(clock);
    secondBody.appendChild(userSection);

    // 새로운 section 띄우기
    userSection.appendChild(clock);
    userSection.appendChild(form);

    // section 스타일링
    userSection.classList.add("user-section");
    form.classList.add("load-user");
    form.innerHTML = `${user}'s planner`;
  }
}

function init() {
  loadUser();
}

init();
