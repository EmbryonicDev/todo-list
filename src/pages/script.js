import { btnHover, elFactory, getSelectedTasks } from "../functions/global-functions";
import { addTaskForm, newTask, addProjectForm, addConfirmDelete } from "./dom";
import { newProject } from "./dom";
import blackStyleOn from '../assets/icons/style-on-icon-black.svg';
import blackStyleOff from '../assets/icons/style-off-icon-black.svg';
import blackTitleIcon from '../assets/icons/task-icon-black.svg';
import styleOn from '../assets/icons/style-on-icon.svg';
import styleOff from '../assets/icons/style-off-icon.svg';
import titleIcon from '../assets/icons/task-icon.svg';

export let tasksArr = JSON.parse(localStorage.getItem("tasksArr")) || [];
export let projectsArr = [];
export let activeProjects = JSON.parse(localStorage.getItem("activeProjects")) || [];

export const pageStyle = {
  init: function () {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom: function () {
    this.myHeader = document.getElementById('myHeader');
    this.styleOnIcon = this.myHeader.querySelector('#styleOnBtn');
    this.styleOffIcon = this.myHeader.querySelector('#styleOffBtn');
    this.headerTitleIcon = this.myHeader.querySelector('#iconTitle img');
  },
  bindEvents: function () {
    this.styleOffIcon.addEventListener('click', this.changePageStyling.bind(this.changePageStyling, '', 'id', blackStyleOn, blackStyleOff, blackTitleIcon, 'background: #a3a3a3'));
    this.styleOnIcon.addEventListener('click', this.changePageStyling.bind(this.changePageStyling, 'bodyStyled', '', styleOn, styleOff, titleIcon, 'background: 0'));
  },
  changePageStyling: (bodyId, deleteAttribute, styleOnSrc, styleOffSrc, headerTitleIconSrc, styleOffBgc) => {
    document.body.id = bodyId;
    document.body.removeAttribute(deleteAttribute);
    pageStyle.styleOnIcon.setAttribute('src', styleOnSrc);
    pageStyle.styleOffIcon.setAttribute('src', styleOffSrc);
    pageStyle.headerTitleIcon.setAttribute('src', headerTitleIconSrc);
    pageStyle.styleOffIcon.style.cssText = styleOffBgc;
  }
};

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

export const taskSortStore = () => {
  tasksArr.sort((a, b) => a.startDate > b.startDate ? 1 : -1);
  tasksArr.sort((a, b) => a.project < b.project ? 1 : -1);
  tasksArr.sort((a, b) => a.complete > b.complete ? 1 : -1);
  localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
}

const submitTaskBtn = () => {
  document.getElementById('taskSubmit').onclick = (e) => {
    let myUniqueId = getUniqueID();
    e.preventDefault();
    let myNewTask = taskFactory(startDate.value, taskName.value, description.value, dueDate.value, projectName.value, priority.value, notes.value, myUniqueId);

    tasksArr.push(myNewTask);
    taskSortStore();

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
    complete: "No",
  }
};

const priorityColors = () => {
  tasksArr.forEach(task => {
    if (document.getElementById(task.uniqueID)) {
      const taskDiv = document.getElementById(task.uniqueID)
      if (!taskDiv.classList.contains('checked')) {
        if (task.priority == "High") {
          taskDiv.classList.add('red')
        } else if (task.priority == "Medium") {
          taskDiv.classList.add('orange')
        } else if (task.priority == "Low") {
          taskDiv.classList.add('yellow')
        }
      }
    }
  });
}

export const tasksArrToPage = (thisArr) => {
  thisArr.forEach(element => {
    newTask(element.taskName, element.description, element.project, element.startDate, element.dueDate, element.uniqueID)
  });
  btnHover('.taskEditBtn', '.taskDeleteBtn')
  editOrDeleteTask('.taskDeleteBtn', '.taskEditBtn');
  hideTasks();
  checkBoxAction();
  priorityColors();
}

const hideTasks = () => {
  document.querySelector('#hideComplete').onclick = (e) => {
    const hideBtn = document.querySelector('#hideComplete');
    if (hideBtn.innerText == 'Hide Complete') {
      hideBtn.innerText = 'Show Complete'
    } else if (hideBtn.innerText == 'Show Complete') {
      hideBtn.innerText = 'Hide Complete'
    }
    getSelectedTasks();
  }
}

const editOrDeleteTask = (btn1, btn2) => {
  const affectedBtn = [btn1, btn2];
  let targetId = null;
  let objIndex = null;

  const getTaskDetails = () => {
    addTaskForm();
    cancelTask();
    // get the parent of form's select element (#projectName)
    const appendHere = document.getElementById('projectName').closest('p');
    // remove preconfigured project options on form
    projectName.remove();
    // add empty select back to same parent
    elFactory('select', { id: 'projectName' }, appendHere,);

    // send selected task property values to form
    objIndex = tasksArr.findIndex(tasksArr => tasksArr.uniqueID == targetId);
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
    submitTaskMods();
  }

  const submitTaskMods = () => {
    document.getElementById('taskSubmit').onclick = (e) => {
      e.preventDefault();
      tasksArr[objIndex].startDate = startDate.value;
      tasksArr[objIndex].taskName = taskName.value;
      tasksArr[objIndex].description = description.value;
      tasksArr[objIndex].dueDate = dueDate.value;
      tasksArr[objIndex].project = projectName.value;
      tasksArr[objIndex].priority = priority.value;
      tasksArr[objIndex].notes = notes.value;

      taskSortStore();

      getSelectedTasks();
      removeTasksForm();
    }
  };

  const addListeners = (getThisElement) => {
    document.querySelectorAll(getThisElement).forEach(button => {
      button.addEventListener('click', () => {
        // get the unique id of the container
        targetId = (button.closest('.taskWrap').getAttribute('id'));
        // get the containing div
        let deleteThis = button.closest('.taskWrap');

        // action for deleteBtn
        if (getThisElement == btn1) {
          // remove from DOM && from taskArr
          deleteThis.remove();
          tasksArr = tasksArr.filter(tasksArr => tasksArr.uniqueID !== targetId);

          // action for editBtn
        } else if (getThisElement == btn2) {
          getTaskDetails()
        }
        taskSortStore();
      })
    })
  }
  affectedBtn.forEach(button => {
    addListeners(button);
  })
}

export const checkBoxAction = () => {
  let targetWrap = null;
  let targetId = null;
  let objIndex = null;

  // tick checkbox for completed tasks after page load / filter
  const updateCompletedTasks = () => {
    let displayedIDs = [];
    document.querySelectorAll('.taskWrap').forEach(taskDiv => {
      targetId = taskDiv.getAttribute('id');
      displayedIDs.push(targetId);

      displayedIDs.forEach(id => {
        targetWrap = document.getElementById(targetId);
        let taskToMark = tasksArr.filter(tasksArr => tasksArr.uniqueID == id);

        if (taskToMark[0].complete == 'Yes') {
          targetWrap.classList.add('checked');
          targetWrap.querySelector('input[type="checkbox"]').setAttribute("checked", true);
          targetWrap.querySelector('h3').classList.add('checked');
          targetWrap.querySelectorAll('p').forEach(p => {
            p.classList.add('checked');
          });
        } else if (taskToMark[0].complete) {
          targetWrap.classList.remove('checked');
          targetWrap.querySelector('input[type="checkbox"]').removeAttribute("checked", true);
          targetWrap.querySelector('h3').classList.remove('checked');
          targetWrap.querySelectorAll('p').forEach(p => {
            p.classList.remove('checked');
          });
        }
      });
      taskSortStore();
    });
  }
  updateCompletedTasks();

  // add eListeners to checkboxes
  document.querySelectorAll('.taskWrap input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      targetId = checkbox.closest('.taskWrap').getAttribute('id');
      targetWrap = checkbox.closest('.taskWrap');
      objIndex = tasksArr.findIndex(tasksArr => tasksArr.uniqueID == targetId);
      if (e.target.checked) {
        tasksArr[objIndex].complete = "Yes"
      } else {
        tasksArr[objIndex].complete = "No";
      }
      taskSortStore();
      updateCompletedTasks();
    })
  });
}

// ***  FROM PROJECTS.JS ***
export const getStoredProjects = () => {
  if (activeProjects.length > 0) {
    activeProjects.sort((a, b) => a > b ? 1 : -1);
    activeProjects.forEach(element => {
      newProject(element);
      btnHover('.projectEditBtn', '.projectDeleteBtn');
      editOrDeleteProject('.projectDeleteBtn', '.projectEditBtn');
    });
  }
}

export const getProjectsArr = () => {
  projectsArr = [];
  document.querySelectorAll(".projectWrap h3").forEach(project => {
    projectsArr.push(project.innerText);
  })
}

const editOrDeleteProject = (btn1, btn2) => {
  const projectWrapBtns = [btn1, btn2];
  let btn3 = null;
  let btn4 = null;
  let confirmBtns = [btn3, btn4];
  let tasksToModify = null;
  let projectToModify = null;
  let projectDivToDelete = null;

  const getProjectDetails = () => {
    if (!document.getElementById('projectForm') && !document.getElementById('taskForm') && !document.getElementById('confirmDeleteWrap')) addProjectForm();
    cancelProject();
    // send selected project name to form input
    newProjectName.value = projectToModify;
    submitProjectMods();
  }

  const submitProjectMods = () => {
    document.getElementById('projectSubmit').onclick = (e) => {
      e.preventDefault();

      // Remove original name from activeProjects & push new name to activeProjects
      const modifiedProjectName = newProjectName.value;
      let index = activeProjects.indexOf(projectToModify)
      activeProjects.splice(index, 1);
      activeProjects.push(modifiedProjectName);
      projectSubmit();
      localStorage.setItem("activeProjects", JSON.stringify(activeProjects));

      // remove all sidebar projectWraps (except General Tasks) so that getStoredProjects()
      // won't temporarily duplicate any projects
      for (let i = 0; i < activeProjects.length; i++) {
        const deleteWrap = document.querySelector('.projectWrap:last-of-type');
        deleteWrap.remove();
        console.log(document.querySelector('.projectWrap:last-of-type'))
      }

      // update tasks with new project name
      for (let i = 0; i < tasksToModify.length; i++) {
        tasksToModify[i].project = modifiedProjectName;
      }

      taskSortStore();
      getSelectedTasks();
      removeProjectForm();
      getStoredProjects();
    }
  };

  const addBoldText = (getThisElement, textToAdd) => {
    const span = document.getElementById(getThisElement);
    span.innerText = textToAdd;
    span.style.cssText = 'font-weight: bold';
  }

  const confirmProjectDelete = () => {
    // create & display confirmation box
    if (!document.getElementById('confirmDeleteWrap') && !document.getElementById('projectForm') && !document.getElementById('taskForm')) {
      addConfirmDelete();

      addBoldText('projectNameSpan', projectToModify);
      addBoldText('taskNumberSpan', tasksToModify.length);

    }
    // add eListeners to confirmation box buttons
    btn3 = '#confirmProjectDelete';
    btn4 = '#cancelProjectDelete';
    confirmBtns = [btn3, btn4];
    confirmBtns.forEach(button => {
      addListeners(button);
    })
  }

  const removeConfirmation = () => {
    if (document.getElementById('confirmDeleteWrap').remove()) {
      document.getElementById('confirmDeleteWrap').remove();
    }
  }

  const addListeners = (getThisElement) => {
    // let projectDivToDelete = null;
    document.querySelectorAll(getThisElement).forEach(button => {
      button.addEventListener('click', () => {

        if (getThisElement == btn1 || getThisElement == btn2) {
          // get the containing div
          projectDivToDelete = button.closest('.projectWrap');

          // get the project name of the container
          projectToModify = button.closest('.projectWrap').children[1].innerText;
          // get associated tasks
          for (let i = 0; i < tasksArr.length; i++) {
            tasksToModify = tasksArr.filter(tasksArr => tasksArr.project == projectToModify);
          }
        }

        // action for deleteBtn
        if (getThisElement == btn1) {
          confirmProjectDelete();

          // action for editBtn
        } else if (getThisElement == btn2) {
          getProjectDetails()

          // action for confirm delete
        } else if (getThisElement == btn3) {
          activeProjects = activeProjects.filter(activeProjects => activeProjects !== projectToModify)
          localStorage.setItem("activeProjects", JSON.stringify(activeProjects));
          getProjectsArr();
          location.reload();

          // remove tasks from tasksArr
          if (tasksToModify.length > 0) {
            tasksArr = tasksArr.filter(tasksArr => tasksArr.project !== projectToModify);
            getSelectedTasks();
          }
          removeConfirmation();
          // action for canceling delete request
        } else if (getThisElement == btn4) {
          removeConfirmation();
        }
        taskSortStore();
      })
    })
  }
  projectWrapBtns.forEach(button => {
    addListeners(button);
  });
}

export const getProjectForm = () => {
  document.getElementById('addProjectBtn').onclick = (e) => {
    // check if any form is on screen
    if (!document.getElementById('projectForm') && !document.getElementById('taskForm')) {
      addProjectForm();
      projectSubmit();
      cancelProject();
    }
  }
}

const projectSubmit = () => {
  document.getElementById('projectSubmit').onclick = (e) => {
    e.preventDefault();
    newProject(projectForm.newProjectName.value, true);
    removeProjectForm();
    getProjectsArr();
  }
}

const cancelProject = () => {
  document.querySelector('#projectForm .cancelBtn').onclick = (e) => {
    e.preventDefault();
    removeProjectForm();
  }
};

const removeProjectForm = () => {
  projectForm.parentElement.removeChild(projectForm);
}
