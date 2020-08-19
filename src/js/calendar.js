const calendarObj = {
  today: 0,
  firstDay: 0,
  week: 0,
  lastDate: 0,
};

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

function getCurrentMonth() {
  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);
  const week = Math.ceil(lastDate.getDate() / 7) + 1;

  let firstDay = firstDate.getDay();

  calendarObj.today = today;
  calendarObj.firstDay = firstDay;
  calendarObj.lastDate = lastDate;
  calendarObj.week = week;

  console.log(calendarObj);
  currentYearMonth.innerHTML = `${monthList[month - 1]} ${year}`;
  buildCalendar();
}

function getNextMonth() {
  const next = new Date(calendarObj.today.valueOf() + 30 * 24 * 60 * 60 * 1000);
  const nextMonth = next.getMonth();
  const nextYear = next.getFullYear();

  const firstDateForNextMonth = new Date(nextYear, nextMonth, 1);
  const lastDateForNextMonth = new Date(nextYear, nextMonth + 1, 0);
  const weekForNextMonth = Math.ceil(lastDateForNextMonth.getDate() / 7) + 1;

  let firstDayForNextMonth = firstDateForNextMonth.getDay();

  calendarObj.today = next;
  calendarObj.firstDay = firstDayForNextMonth;
  calendarObj.lastMonth = lastDateForNextMonth;
  calendarObj.week = weekForNextMonth;

  currentYearMonth.innerHTML = `${monthList[nextMonth]} ${nextYear}`;

  deleteRow();
}

function getPreMonth() {
  const pre = new Date(calendarObj.today.valueOf() - 30 * 24 * 60 * 60 * 1000);
  const preMonth = pre.getMonth();
  const preYear = pre.getFullYear();

  const firstDateForPre = new Date(preYear, preMonth, 1);
  const lastDateForPre = new Date(preYear, preMonth + 1, 0);
  const weekForPre = Math.ceil(lastDateForPre.getDate() / 7) + 1;

  let firstDay = firstDateForPre.getDay();

  calendarObj.today = pre;
  calendarObj.firstDay = firstDay;
  calendarObj.lastDate = lastDateForPre;
  calendarObj.week = weekForPre;

  currentYearMonth.innerHTML = `${monthList[preMonth]} ${preYear}`;
  table.deleteRow(calendarObj.week + 1);
  deleteRow();
}

function deleteRow() {
  for (i = 1; i < table.rows.length + 4; i++) {
    table.deleteRow(table.rows.length - 1);
  }
  buildCalendar();
}

function buildCalendar() {
  let firstDayOfMonth = calendarObj.firstDay;
  let weekOfMonth = calendarObj.week;
  let lastDateOfMonth = calendarObj.lastDate;

  let leftDays = 7;
  let setDays = 1;
  for (i = 1; i < weekOfMonth + 1; i++) {
    const row = table.insertRow();
    while (firstDayOfMonth != 0) {
      row.insertCell().innerHTML = "";
      firstDayOfMonth -= 1;
      leftDays -= 1;
    }

    while (leftDays != 0) {
      if (setDays > lastDateOfMonth.getDate()) {
        row.insertCell().innerHTML = "";
        leftDays -= 1;
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
  getCurrentMonth();
  leftArrow.addEventListener("click", getPreMonth);
  rightArrow.addEventListener("click", getNextMonth);
}
init();
