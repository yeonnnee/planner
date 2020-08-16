let pendingList = [];
let finishedList = [];

/*Pending list */
function paintPendingList(text) {
  const item = document.createElement("li");
  const checkBox = document.createElement("input");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const label = document.createElement("label");
  const listId =
    pendingList.length + (Math.floor(Math.random() * 123456789) + 1);

  checkBox.setAttribute("type", "checkbox");
  label.setAttribute("for", `task-${listId}`);
  item.setAttribute("id", `${listId}`);
  item.setAttribute("class", `item`);
  checkBox.id = `task-${listId}`;

  span.innerHTML = text;
  delBtn.innerHTML = "x";

  pending.appendChild(item);
  item.appendChild(checkBox);
  item.appendChild(label);
  item.appendChild(span);
  item.appendChild(delBtn);

  delBtn.addEventListener("click", deleteItem);
  checkBox.addEventListener("click", moveItem);

  const pendingObj = {
    id: listId,
    text: text,
  };
  pendingList.push(pendingObj);
  savePendingItem();
}

/* Saving Value */
function savePendingItem() {
  localStorage.setItem("PENDING", JSON.stringify(pendingList));
}

function saveFinishedItem() {
  localStorage.setItem("FINISHED", JSON.stringify(finishedList));
}

/* Delete Item */
function deleteItem(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;

  if (ul.className === "pending") {
    pending.removeChild(li);
    const updatedPending = pendingList.filter((list) => list.id !== +li.id);
    // update PENDING list
    pendingList = updatedPending;
    savePendingItem();
  } else {
    finished.removeChild(li);
    const updatedFinished = finishedList.filter((list) => list.id !== +li.id);
    // update FINISHED list
    finishedList = updatedFinished;
    saveFinishedItem();
  }
}
