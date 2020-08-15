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

function init() {
  getDate();
  getTime();
  setInterval(getTime, 1000);
}

init();
