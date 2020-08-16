const taskForm = document.createElement("form");
const taskInput = document.createElement("input");
const taskList = document.createElement("div");
const pending = document.createElement("ul");
const finished = document.createElement("ul");
const title = document.createElement("div");
const status = document.createElement("div");
const statusPending = document.createElement("span");
const statusfinished = document.createElement("span");

taskForm.setAttribute("class", "taskForm");
title.setAttribute("class", "title");
taskInput.setAttribute("placeholder", "Add New Tasks");
taskInput.setAttribute("class", "taskInput");
taskList.setAttribute("class", "taskList");
pending.setAttribute("class", "pending");
finished.setAttribute("class", "finished");
status.setAttribute("class", "status");

taskForm.appendChild(title);
taskForm.appendChild(taskInput);

wrapper.appendChild(taskForm);
wrapper.appendChild(status);
wrapper.appendChild(taskList);

taskList.appendChild(pending);
taskList.appendChild(finished);

status.appendChild(statusPending);
status.appendChild(statusfinished);

statusPending.innerHTML = `PENDING`;
statusfinished.innerHTML = `FINISHED`;
