import { btnHover, elFactory, getSelectedTasks } from "../functions/global-functions";
import { addTaskForm, newTask } from "./dom";
import { projectsArr } from "./projects";

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
  let modifyThis = null;

  const getTaskDetails = () => {
    addTaskForm();
    // get the parent of form's select element (#projectName)
    const appendHere = document.getElementById('projectName').closest('p');
    // remove preconfigured project options on form
    projectName.remove();
    // add empty select back to same parent
    elFactory('select', { id: 'projectName' }, appendHere, );
    
    // send selected task property values to form
    let objIndex = tasksArr.findIndex(tasksArr => tasksArr.uniqueID == modifyThis);
    startDate.value = tasksArr[objIndex].startDate
    taskName.value = tasksArr[objIndex].taskName;
    description.value = tasksArr[objIndex].description
    dueDate.value = tasksArr[objIndex].dueDate
    priority.value = tasksArr[objIndex].priority
    notes.value = tasksArr[objIndex].notes
    
    // find index of task's project in projectArr, remove from array, add to start of array
    const projectIndex = projectsArr.findIndex(projectsArr => projectsArr === tasksArr[objIndex].project);
    projectsArr.splice(projectIndex, 1);
    projectsArr.sort();
    projectsArr.unshift(tasksArr[objIndex].project);
    // Create options & append to new select element
    projectsArr.forEach(project => {
      elFactory('option', '', projectName, project);
    });
  }

  const addListeners = (getThisElement) => {
    document.querySelectorAll(getThisElement).forEach(button => {
      button.addEventListener('click', () => {
        // get the unique id of the container
        modifyThis = (button.closest('.taskWrap').getAttribute('id'));
        // get the containing div
        let deleteThis = button.closest('.taskWrap');

        // action for deleteBtn
        if (getThisElement == btn1) {
          // remove from DOM && from taskArr
          deleteThis.remove();
          tasksArr = tasksArr.filter(tasksArr => tasksArr.uniqueID !== modifyThis);

          // action for editBtn
        } else if (getThisElement == btn2) {
          getTaskDetails()
        }
        localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
      })
    })
  }
  affectedBtn.forEach(button => {
    addListeners(button);
  })
}