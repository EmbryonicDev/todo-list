import { addTaskForm } from "./dom";

let tasksArr = JSON.parse(localStorage.getItem("tasksArr")) || [];

export const getTaskForm = () => {
  document.getElementById('addTaskBtn').onclick = (e) => {
    if(!document.getElementById('taskForm') && !document.getElementById('projectForm')) addTaskForm();
  }
}

const taskFactory = (dateAdded, taskName, description, dueDate, project, priority, notes) => {
  return {
    taskName: taskName,
    dateAdded: dateAdded,
    description: description,
    dueDate: dueDate,
    project: project,
    priority: priority,
    notes: notes,
  }
};