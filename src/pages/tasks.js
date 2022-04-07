import { addTaskForm, newTask } from "./dom";

let tasksArr = JSON.parse(localStorage.getItem("tasksArr")) || [];

export const getTaskForm = () => {
  document.getElementById('addTaskBtn').onclick = (e) => {
    if (!document.getElementById('taskForm') && !document.getElementById('projectForm')) addTaskForm();
    submitTaskBtn();
    cancelTask();
  }
}

const cancelTask = () => {
  document.querySelector('#taskForm .cancelBtn').onclick = (e) => {
    e.preventDefault();
      removeTasksForm();
  }
};

const removeTasksForm = () => {
  const taskForm = document.getElementById('taskForm');
  taskForm.parentElement.removeChild(taskForm);
}

const submitTaskBtn = () => {
  document.getElementById('taskSubmit').onclick = (e) => {
    e.preventDefault();
    let myNewTask = taskFactory(startDate.value, taskName.value, description.value, dueDate.value, projectName.value, priority.value, notes.value);

    tasksArr.push(myNewTask);
    localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
    
    newTask(myNewTask.taskName, myNewTask.description, myNewTask.dueDate, true);

    removeTasksForm();
  }
};

const taskFactory = (startDate, taskName, description, dueDate, project, priority, notes) => {
  return {
    taskName: taskName,
    startDate: startDate,
    description: description,
    dueDate: dueDate,
    project: project,
    priority: priority,
    notes: notes,
  }
};

export const tasksArrToPage = () => {
  tasksArr.forEach(element => {
    console.log(element.taskName)
    newTask(element.taskName, element.description, element.dueDate)
  });
}