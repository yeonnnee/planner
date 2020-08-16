function getMenue() {
  const menue = document.createElement("div");
  const task = document.createElement("div");
  const weekly = document.createElement("div");

  userSection.appendChild(menue);
  menue.appendChild(task);
  menue.appendChild(weekly);
  menue.classList.add("menue");

  task.classList.add("task");
  weekly.classList.add("weekly");
  task.innerHTML = "Task";
  weekly.innerHTML = "Weekly";
}

function init() {
  getMenue();
}

init();
