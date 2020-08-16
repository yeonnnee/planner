/* Load List from LS */
function loadSavedList() {
  const savedPendingList = localStorage.getItem("PENDING");
  const savedFinishedList = localStorage.getItem("FINISHED");

  if (savedPendingList !== null) {
    const parsedPendingList = JSON.parse(savedPendingList);
    parsedPendingList.forEach((list) => paintPendingList(list.text));
  }
  if (savedFinishedList !== null) {
    const parsedFinishedList = JSON.parse(savedFinishedList);
    parsedFinishedList.forEach((list) => paintFinished(list.text));
  }
}

function submitHandler(event) {
  event.preventDefault();
  const inputValue = taskInput.value;
  paintPendingList(inputValue);
  taskInput.value = "";
}

function init() {
  loadSavedList();
  taskForm.addEventListener("submit", submitHandler);
}

init();
