import { addTaskForm } from "./dom";

export const getTaskForm = () => {
  document.getElementById('addTaskBtn').onclick = (e) => {
    if(!document.getElementById('taskForm')) addTaskForm();
  }
}