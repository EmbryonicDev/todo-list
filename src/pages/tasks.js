import { btnHover, getSelectedTasks } from "../functions/global-functions";
import { addTaskForm, newTask } from "./dom";

export let tasksArr = JSON.parse(localStorage.getItem("tasksArr")) || [];

export const getTaskForm = () => {
  document.getElementById('addTaskBtn').onclick = (e) => {
    if (!document.getElementById('taskForm') && !document.getElementById('projectForm')) {
      addTaskForm();
      submitTaskBtn();
      cancelTask();
    }
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

const getUniqueID = () => {
  let myID = (Math.random() + 1).toString(36).substring(3);
  return myID;
}

const submitTaskBtn = () => {
  document.getElementById('taskSubmit').onclick = (e) => {
    let myUniqueId = getUniqueID();
    e.preventDefault();
    let myNewTask = taskFactory(startDate.value, taskName.value, description.value, dueDate.value, projectName.value, priority.value, notes.value, myUniqueId);

    tasksArr.push(myNewTask);
    localStorage.setItem("tasksArr", JSON.stringify(tasksArr));

    newTask(myNewTask.taskName, myNewTask.description, myNewTask.startDate, myNewTask.dueDate, myNewTask.projectName, myUniqueId, true);
    getSelectedTasks();

    removeTasksForm();
  }
};

const taskFactory = (startDate, taskName, description, dueDate, project, priority, notes, uniqueID) => {
  return {
    taskName: taskName,
    startDate: startDate,
    description: description,
    dueDate: dueDate,
    project: project,
    priority: priority,
    notes: notes,
    uniqueID: uniqueID,
  }
};

export const tasksArrToPage = (thisArr) => {
  thisArr.forEach(element => {
    newTask(element.taskName, element.description, element.project, element.startDate, element.dueDate, element.uniqueID)
  });
  btnHover('.taskEditBtn', '.taskDeleteBtn')
  editOrDeleteTask('.taskDeleteBtn', '.taskEditBtn');
}

const editOrDeleteTask = (btn1, btn2) => {
  const affectedBtn = [btn1, btn2];

  const addListeners = (getThisElement) => {
    document.querySelectorAll(getThisElement).forEach(button => {
      button.addEventListener('click', () => {
        // get the unique id of the container
        let deleteMe = (button.closest('.taskWrap').getAttribute('id'));
        // get the containing div
        let deleteThis = button.closest('.taskWrap');

        // action for deleteBtn
        if (getThisElement == btn1) {
          // remove from DOM & from local storage
          deleteThis.remove();
          tasksArr = tasksArr.filter(tasksArr => tasksArr.uniqueID !== deleteMe);

          // action for editBtn
        } else if (getThisElement == btn2) {
          let objIndex = tasksArr.findIndex(tasksArr => tasksArr.uniqueID == deleteMe);
          console.log(tasksArr[objIndex]);
        }
        localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
      })
    })
  }
  affectedBtn.forEach(button => {
    addListeners(button);
  })

}