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

sun.innerHTML = `Sun`;
mon.innerHTML = `Mon`;
tue.innerHTML = `Tue`;
wed.innerHTML = `Wed`;
thur.innerHTML = `Thur`;
fri.innerHTML = `Fri`;
sat.innerHTML = `Sat`;

sun.style.color = "#c44569";
sat.style.color = "#4a69bd";

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
