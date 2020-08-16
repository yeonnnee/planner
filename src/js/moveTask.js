function moveItem(event) {
  const checkedItem = event.target;
  const checkedList = checkedItem.parentNode;

  if (checkedList.parentNode.className === "pending") {
    pending.removeChild(checkedList);
    finished.appendChild(checkedList);

    const finishedTask = pendingList.filter(
      (list) => list.id === +checkedList.id
    );
    const updatePending = pendingList.filter(
      (list) => list.id !== +checkedList.id
    );
    // update PENDING ITEM
    pendingList = updatePending;
    savePendingItem();

    // update FINISHED ITEM
    finishedList.push(...finishedTask);
    saveFinishedItem();
  } else if (checkedList.parentNode.className === "finished") {
    finished.removeChild(checkedList);
    pending.appendChild(checkedList);

    const notFinished = finishedList.filter(
      (list) => list.id === +checkedList.id
    );
    const savedFinshed = finishedList.filter(
      (list) => list.id !== +checkedList.id
    );

    // update PENDING ITEM
    pendingList.push(...notFinished);
    savePendingItem();

    // update FINISHED ITEM
    finishedList = savedFinshed;
    saveFinishedItem();
  }
}
