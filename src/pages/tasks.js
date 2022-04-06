import { addTaskForm } from "./dom";

let tasksArr = JSON.parse(localStorage.getItem("tasksArr")) || [];

export const getTaskForm = () => {
  document.getElementById('addTaskBtn').onclick = (e) => {
    if(!document.getElementById('taskForm') && !document.getElementById('projectForm')) addTaskForm();
    submitTaskBtn();
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

const submitTaskBtn = () => {
  document.getElementById('taskSubmit').onclick = (e) => {
    e.preventDefault();
    let newTask = taskFactory(dateAdded.value, taskName.value, description.value, dueDate.value, projectName.value, priority.value, notes.value);

    tasksArr.push(newTask);
    localStorage.setItem("tasksArr", JSON.stringify(tasksArr));

    removeTasksForm();
  }
}

const removeTasksForm = () => {
  const taskForm = document.getElementById('taskForm');
  taskForm.parentElement.removeChild(taskForm);
}