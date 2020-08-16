const taskForm = document.createElement("form");
const taskInput = document.createElement("input");
const taskList = document.createElement("div");
const pending = document.createElement("ul");
const finished = document.createElement("ul");
const title = document.createElement("div");

taskForm.setAttribute("class", "taskForm");
title.setAttribute("class", "title");
taskInput.setAttribute("class", "taskInput");
taskInput.setAttribute("placeholder", "Add New Tasks");
taskList.setAttribute("class", "taskList");
pending.setAttribute("class", "pending");
finished.setAttribute("class", "finished");

taskForm.appendChild(title);
taskForm.appendChild(taskInput);
wrapper.appendChild(taskForm);
wrapper.appendChild(taskList);
taskList.appendChild(pending);
taskList.appendChild(finished);

pending.innerHTML = `PENDING`;
finished.innerHTML = `FINISHED`;
title.innerHTML = `Task`;
