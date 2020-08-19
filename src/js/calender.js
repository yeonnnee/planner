const tDay = {
  current: 0,
};

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
const week = Math.ceil(lastDate.getDate() / 7) + 1;

let firstDay = firstDate.getDay();

tDay.current = today;
const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

currentYearMonth.innerHTML = `${monthList[currentMonth]} ${currentYear}`;

function getNextMonth() {
  const next = new Date(tDay.current.valueOf() + 30 * 24 * 60 * 60 * 1000);
  const nextMonth = next.getMonth();
  const nextYear = next.getFullYear();
  tDay.current = next;
  currentYearMonth.innerHTML = `${monthList[nextMonth]} ${nextYear}`;
}

function getPreMonth() {
  const pre = new Date(tDay.current.valueOf() - 30 * 24 * 60 * 60 * 1000);
  const preMonth = pre.getMonth();
  const preYear = pre.getFullYear();
  tDay.current = pre;
  currentYearMonth.innerHTML = `${monthList[preMonth]} ${preYear}`;
}

function buildCalender() {
  let leftDays = 7;
  let setDays = 1;
  for (i = 1; i < week; i++) {
    const row = table.insertRow();
    while (firstDay != 0) {
      row.insertCell().innerHTML = "";
      firstDay -= 1;
      leftDays -= 1;
    }
    let nextMonthDate = 1;
    while (leftDays != 0) {
      if (setDays > lastDate.getDate()) {
        row.insertCell().innerHTML = nextMonthDate;
        leftDays -= 1;
        nextMonthDate += 1;
      } else {
        row.insertCell().innerHTML = setDays;
        setDays += 1;
        leftDays -= 1;
      }
    }
    leftDays = 7;
  }
  leftArrow.addEventListener("click", getPreMonth);
  rightArrow.addEventListener("click", getNextMonth);
}

function init() {
  buildCalender();
}
init();
