const left = document.createElement("span");
const right = document.createElement("span");
const planDay = document.createElement("span");

left.setAttribute("class", "left");
right.setAttribute("class", "right");
planDay.setAttribute("class", "day");
title.appendChild(left);
title.appendChild(planDay);
title.appendChild(right);

left.innerHTML = `<`;
right.innerHTML = `>`;

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const todayObj = {
  today: 0,
};

function commingDay() {
  const tomorrow = new Date(todayObj.today.valueOf() + 24 * 60 * 60 * 1000);
  const commingDate = tomorrow.getDate();
  const commingDay = tomorrow.getDay();
  const commingMonth = tomorrow.getMonth() + 1;
  const commingYear = tomorrow.getFullYear();

  todayObj.today = tomorrow;

  planDay.innerHTML = `${days[commingDay]} ${
    commingMonth < 10 ? `0${commingMonth}` : commingMonth
  }. ${commingDate < 10 ? `0${commingDate}` : commingDate}. ${commingYear}`;
}

function passedDay() {
  const yesterday = new Date(todayObj.today.valueOf() - 24 * 60 * 60 * 1000);
  const passedDate = yesterday.getDate();
  const passedDay = yesterday.getDay();
  const passedMonth = yesterday.getMonth() + 1;
  const passedYear = yesterday.getFullYear();

  todayObj.today = yesterday;

  planDay.innerHTML = `${days[passedDay]} ${
    passedMonth < 10 ? `0${passedMonth}` : passedMonth
  }. ${passedDate < 10 ? `0${passedMonth}` : passedMonth}. ${passedYear}`;
}

function getDate() {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDay();

  planDay.innerHTML = `${days[day]} ${month < 10 ? `0${month}` : month}. ${
    date < 10 ? `0${date}` : date
  }. ${year}`;

  right.addEventListener("click", commingDay);
  left.addEventListener("click", passedDay);

  todayObj.today = today;
}

function init() {
  getDate();
}

init();
