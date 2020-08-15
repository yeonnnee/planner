const dateCon = document.querySelector(".date");
const clockCon = document.querySelector(".clock");

function getDate() {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const day = today.getDay();
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  dateCon.innerHTML = `${days[day]} ${month}. ${date}. ${year}`;
}

function getTime() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  clockCon.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getDate();
  getTime();
  setInterval(getTime, 1000);
}

init();
