const calenderCon = document.createElement("div");
const table = document.createElement("table");
const tr = document.createElement("tr");
const currentYearMonth = document.createElement("td");
const preMonth = document.createElement("td");
const nextMonth = document.createElement("td");
const rightArrow = document.createElement("span");
const leftArrow = document.createElement("span");

userSection.appendChild(calenderCon);

table.classList.add("calenderCon");
tr.classList.add("calenderTitle");

table.setAttribute("id", "calender-table");
currentYearMonth.setAttribute("id", "currentYearMonth");

rightArrow.setAttribute("id", "arrow");
leftArrow.setAttribute("id", "arrow");

rightArrow.innerHTML = `>`;
leftArrow.innerHTML = `<`;

calenderCon.appendChild(table);
table.appendChild(tr);

tr.appendChild(preMonth);
tr.appendChild(currentYearMonth);
tr.appendChild(nextMonth);

preMonth.appendChild(leftArrow);
nextMonth.appendChild(rightArrow);

const dateTr = document.createElement("tr");
const sun = document.createElement("td");
const mon = document.createElement("td");
const tue = document.createElement("td");
const wed = document.createElement("td");
const thur = document.createElement("td");
const fri = document.createElement("td");
const sat = document.createElement("td");

sun.innerHTML = `SUN`;
mon.innerHTML = `MON`;
tue.innerHTML = `TUE`;
wed.innerHTML = `WED`;
thur.innerHTML = `THUR`;
fri.innerHTML = `FRI`;
sat.innerHTML = `SAT`;

table.appendChild(dateTr);
dateTr.appendChild(sun);
dateTr.appendChild(mon);
dateTr.appendChild(tue);
dateTr.appendChild(wed);
dateTr.appendChild(thur);
dateTr.appendChild(fri);
dateTr.appendChild(sat);

dateTr.classList.add("dayCon");
sun.classList.add("days");
mon.classList.add("days");
tue.classList.add("days");
wed.classList.add("days");
thur.classList.add("days");
fri.classList.add("days");
sat.classList.add("days");

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
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

const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
let firstDay = firstDate.getDay();
const week = Math.ceil(lastDate.getDate() / 7) + 1;

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
}

function init() {
  buildCalender();
}
init();
