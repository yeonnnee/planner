/* Load List from LS */

function loadSavedList() {
  const savedPendingList = localStorage.getItem("PENDING");
  const savedFinishedList = localStorage.getItem("FINISHED");
  const pendingList = JSON.parse(savedPendingList);
  const finishedList = JSON.parse(savedFinishedList);

  if (savedPendingList !== null) {
    pendingList.forEach((list) => paintPendingList(list.text));
  }
  if (savedFinishedList !== null) {
    finishedList.forEach((list) => paintFinished(list.text));
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
