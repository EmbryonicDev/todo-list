import { btnHover, elFactory } from "../functions/global-functions";
import { addTaskForm, newTask, addProjectForm, addConfirmDelete } from "./dom";
import { newProject } from "./dom";
import blackStyleOn from '../assets/icons/style-on-icon-black.svg';
import blackStyleOff from '../assets/icons/style-off-icon-black.svg';
import blackTitleIcon from '../assets/icons/task-icon-black.svg';
import styleOn from '../assets/icons/style-on-icon.svg';
import styleOff from '../assets/icons/style-off-icon.svg';
import titleIcon from '../assets/icons/task-icon.svg';
import { addDays, format } from "date-fns";

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
  },
};

export const tasks = {
  init: function () {
    this.addNewTaskForm.init();
    this.tasksArrToPage(tasksArr);
  },

  tasksArrToPage: (thisArr) => {
    thisArr.forEach(element => {
      newTask(element.taskName, element.description, element.project, element.startDate, element.dueDate, element.uniqueID)
    });
    btnHover('.taskEditBtn', '.taskDeleteBtn')
    tasks.addEditTaskForm.init();
    tasks.deleteTask.init();
    tasks.checkBoxAction.init();
    tasks.priorityColors();
    tasks.hideTasks();
  },

  hideTasks: function () {
    const hideBtn = document.querySelector('#hideComplete');
    document.querySelector('#hideComplete').onclick = (e) => {
      if (hideBtn.innerText == 'Hide Complete') {
        hideBtn.innerText = 'Show Complete'
      } else if (hideBtn.innerText == 'Show Complete') {
        hideBtn.innerText = 'Hide Complete'
      }
      tasks.getSelectedTasks.init();
    }
  },

  taskSortStore: () => {
    tasksArr.sort((a, b) => a.startDate > b.startDate ? 1 : -1);
    tasksArr.sort((a, b) => a.project < b.project ? 1 : -1);
    tasksArr.sort((a, b) => a.complete > b.complete ? 1 : -1);
    localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
  },

  checkBoxAction: {
    targetWrap: null,
    targetId: null,
    taskToMark: null,
    init: function () {
      this.markStorageComplete.init();
      this.checkboxFunction.init();
    },

    markStorageComplete: {
      displayedIDs: [],
      init: function () {
        this.cacheDom();
        this.bindEvents();
      },
      cacheDom: function () {
        tasks.checkBoxAction.taskWrap = document.querySelectorAll('.taskWrap')
      },
      bindEvents: function () {
        tasks.checkBoxAction.taskWrap.forEach(taskDiv => {
          tasks.checkBoxAction.targetId = taskDiv.getAttribute('id');
          this.displayedIDs.push(tasks.checkBoxAction.targetId);
          this.markStoredTasks();
        });
      },
      markStoredTasks: function () {
        this.displayedIDs.forEach(id => {
          tasks.checkBoxAction.targetWrap = document.getElementById(tasks.checkBoxAction.targetId);
          this.taskToMark = tasksArr.filter(tasksArr => tasksArr.uniqueID == id);

          if (this.taskToMark[0].complete == 'Yes') {
            tasks.checkBoxAction.targetWrap.classList.add('checked');
            tasks.checkBoxAction.targetWrap.querySelector('input[type="checkbox"]').setAttribute("checked", true);
            tasks.checkBoxAction.targetWrap.querySelector('h3').classList.add('checked');
            tasks.checkBoxAction.targetWrap.querySelectorAll('p').forEach(p => {
              p.classList.add('checked');
            });
          } else if (this.taskToMark[0].complete) {
            tasks.checkBoxAction.targetWrap.classList.remove('checked');
            tasks.checkBoxAction.targetWrap.querySelector('input[type="checkbox"]').removeAttribute("checked", true);
            tasks.checkBoxAction.targetWrap.querySelector('h3').classList.remove('checked');
            tasks.checkBoxAction.targetWrap.querySelectorAll('p').forEach(p => {
              p.classList.remove('checked');
            });
          }
        })
      }
    },

    checkboxFunction: {
      _objIndex: null,
      _eTarget: null,
      init: function () {
        this.cacheDom();
        this.bindEvents();
      },
      cacheDom: function () {
        this.checkboxes = document.querySelectorAll('.taskWrap input[type="checkbox"]');
      },
      bindEvents: function () {
        this.checkboxes.forEach(box => {
          box.addEventListener('change', (e) => {
            this._eTarget = e.target;
            tasks.checkBoxAction.targetId = box.closest('.taskWrap').getAttribute('id');
            tasks.checkBoxAction.targetWrap = box.closest('.taskWrap');
            tasks.checkBoxAction.checkboxFunction._objIndex = tasksArr.findIndex(tasksArr => tasksArr.uniqueID == tasks.checkBoxAction.targetId);
            this.addCheckboxFunction()
          });
        });
      },
      addCheckboxFunction: function (e) {
        if (tasks.checkBoxAction.checkboxFunction._eTarget.checked) {
          tasksArr[tasks.checkBoxAction.checkboxFunction._objIndex].complete = "Yes"
        } else {
          tasksArr[tasks.checkBoxAction.checkboxFunction._objIndex].complete = "No";
        }
        tasks.checkBoxAction.markStorageComplete.init();
        tasks.taskSortStore();
        tasks.priorityColors();
      }
    },
  },

  priorityColors: function () {
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
    })
  },

  getSelectedTasks: { // change name to getFilterTasks
    init: function () {
      this.cacheDom();
      this.clearTasks();
      this.filterTasks();
    },
    cacheDom: function () {
      this.mainDiv = document.getElementById('mainDiv');
      this.activeTitle = document.getElementById('activeTitle').innerText;
      this.hideBtn = document.getElementById('hideComplete');
    },
    clearTasks: function () {
      while (tasks.getSelectedTasks.mainDiv.children.length > 1) {
        tasks.getSelectedTasks.mainDiv.removeChild(tasks.getSelectedTasks.mainDiv.lastChild);
      }
    },
    filterTasks: function () {
      // date-fns
      const temp = (new Date());
      const today = format(temp, 'yyyy-MM-dd');
      const tempWeek = addDays(temp, 6);
      const week = format(tempWeek, 'yyyy-MM-dd');
      // arrays
      const allHidden = tasksArr.filter(tasksArr => tasksArr.complete == "No");
      const todayTasks = tasksArr.filter(tasksArr => tasksArr.startDate <= today);
      const todayHidden = todayTasks.filter(todayTasks => todayTasks.complete == "No");
      const weekTasks = tasksArr.filter(tasksArr => tasksArr.startDate < week);
      const weekHidden = weekTasks.filter(weekTasks => weekTasks.complete == "No");
      const highPriority = tasksArr.filter(tasksArr => tasksArr.priority == 'High');
      const highHidden = highPriority.filter(highPriority => highPriority.complete == "No");
      const completedTasks = tasksArr.filter(tasksArr => tasksArr.complete == 'Yes');
      const completedHidden = completedTasks.filter(completedTasks => completedTasks.complete == "No");

      if (projectsArr.includes(tasks.getSelectedTasks.activeTitle)) {
        let filteredProjects = tasksArr.filter(tasksArr => tasksArr.project == tasks.getSelectedTasks.activeTitle);
        if (tasks.getSelectedTasks.hideBtn.innerText == 'Show Complete') {
          filteredProjects = filteredProjects.filter(filteredProjects => filteredProjects.complete == 'No')
        }
        tasks.tasksArrToPage(filteredProjects);
      };
      // sort tasks according to selected taskss category
      if (tasks.getSelectedTasks.hideBtn.innerText == "Hide Complete") {
        switch (tasks.getSelectedTasks.activeTitle) {
          case "All Tasks":
            tasks.tasksArrToPage(tasksArr);
            break;
          case "Today":
            tasks.tasksArrToPage(todayTasks);
            break;
          case "Next 7 Days":
            tasks.tasksArrToPage(weekTasks);
            break;
          case "High Priority":
            tasks.tasksArrToPage(highPriority)
            break;
          case "Completed Tasks":
            tasks.tasksArrToPage(completedTasks)
            break;
        }
      }
      if (tasks.getSelectedTasks.hideBtn.innerText == "Show Complete") {
        switch (tasks.getSelectedTasks.activeTitle) {
          case "All Tasks":
            tasks.tasksArrToPage(allHidden);
            break;
          case "Today":
            tasks.tasksArrToPage(todayHidden);
            break;
          case "Next 7 Days":
            tasks.tasksArrToPage(weekHidden);
            break;
          case "High Priority":
            tasks.tasksArrToPage(highHidden)
            break;
          case "Completed Tasks":
            tasks.tasksArrToPage(completedHidden)
            break;
        }
      }
    }
  },

  addNewTaskForm: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.addTaskBtn = document.getElementById('addTaskBtn');
    },
    bindEvents: function () {
      this.addTaskBtn.addEventListener('click', this.getTaskForm.bind());
    },
    getTaskForm: () => {
      if (!document.getElementById('taskForm') && !document.getElementById('projectForm')) {
        addTaskForm();
        tasks.addTask.init()
      }
    }
  },

  addTask: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.form = document.getElementById('taskForm');
      this.cancelBtn = this.form.querySelector('.cancelBtn');
    },
    bindEvents: function () {
      this.form.addEventListener('submit', this.submitTask.bind());
      this.cancelBtn.addEventListener('click', this.removeTasksForm.bind());
    },
    submitTask: (e) => {
      e.preventDefault();
      let myUniqueId = tasks.addTask.getUniqueID();
      let myNewTask = tasks.addTask.taskFactory(startDate.value, taskName.value, description.value, dueDate.value, projectName.value, priority.value, notes.value, myUniqueId);

      tasksArr.push(myNewTask);
      tasks.taskSortStore();

      newTask(myNewTask.taskName, myNewTask.description, myNewTask.startDate, myNewTask.dueDate, myNewTask.projectName, myUniqueId, true);

      getSelectedTasks();
      tasks.addTask.removeTasksForm();
    },
    removeTasksForm: () => {
      tasks.addTask.form.parentElement.removeChild(taskForm);
    },
    getUniqueID: () => {
      return (Math.random() + 1).toString(36).substring(3);
    },
    taskFactory: (startDate, taskName, description, dueDate, project, priority, notes, uniqueID) => {
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
    }
  },

  addEditTaskForm: {
    targetId: null,
    appendTo: null,
    objIndex: null,
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.editTaskBtn = document.querySelectorAll('.taskEditBtn');
    },
    bindEvents: function () {
      this.editTaskBtn.forEach(editBtn => {
        editBtn.addEventListener('click', () => {
          this.targetId = editBtn.closest('.taskWrap').getAttribute('id');
          this.getTaskForm();
        });
      });
    },
    getTaskForm: (e) => {
      if (!document.getElementById('taskForm') && !document.getElementById('projectForm')) {
        addTaskForm();
        tasks.addEditTaskForm.taskDetailsToForm();
      }
    },
    taskDetailsToForm: () => {
      // get the parent of form's <select> element (#projectName) & remove
      tasks.addEditTaskForm.appendTo = document.getElementById('projectName').closest('p');
      projectName.remove();
      // add empty select back to the same parent
      elFactory('select', { id: 'projectName' }, tasks.addEditTaskForm.appendTo,);

      // find the task to be edited in tasksArr
      tasks.addEditTaskForm.objIndex = tasksArr.findIndex(tasksArr => tasksArr.uniqueID == tasks.addEditTaskForm.targetId);

      // send selected task property values to form
      startDate.value = tasksArr[tasks.addEditTaskForm.objIndex].startDate
      taskName.value = tasksArr[tasks.addEditTaskForm.objIndex].taskName;
      description.value = tasksArr[tasks.addEditTaskForm.objIndex].description
      dueDate.value = tasksArr[tasks.addEditTaskForm.objIndex].dueDate
      priority.value = tasksArr[tasks.addEditTaskForm.objIndex].priority
      notes.value = tasksArr[tasks.addEditTaskForm.objIndex].notes

      // find index of task's project in projectArr, remove from projectsArr, add to start of array
      // this is so that the form's dropdown list has the task's project first in line
      const projectIndex = projectsArr.findIndex(projectsArr => projectsArr === tasksArr[tasks.addEditTaskForm.objIndex].project);
      projectsArr.splice(projectIndex, 1);
      projectsArr.sort();
      projectsArr.unshift(tasksArr[tasks.addEditTaskForm.objIndex].project);
      // Create options & append to new select element
      projectsArr.forEach(project => {
        elFactory('option', '', projectName, project);
      });
      tasks.modifyTask.init();
    }
  },
  modifyTask: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.form = document.getElementById('taskForm');
      this.cancelBtn = this.form.querySelector('.cancelBtn');
    },
    bindEvents: function () {
      this.form.addEventListener('submit', this.submitTaskMods.bind(), this.removeTasksForm.bind());
      this.cancelBtn.addEventListener('click', this.removeTasksForm.bind());
    },
    submitTaskMods: (e) => {
      e.preventDefault();
      tasksArr[tasks.addEditTaskForm.objIndex].startDate = startDate.value;
      tasksArr[tasks.addEditTaskForm.objIndex].taskName = taskName.value;
      tasksArr[tasks.addEditTaskForm.objIndex].description = description.value;
      tasksArr[tasks.addEditTaskForm.objIndex].dueDate = dueDate.value;
      tasksArr[tasks.addEditTaskForm.objIndex].project = projectName.value;
      tasksArr[tasks.addEditTaskForm.objIndex].priority = priority.value;
      tasksArr[tasks.addEditTaskForm.objIndex].notes = notes.value;

      tasks.modifyTask.removeTasksForm();
      tasks.taskSortStore();
      getSelectedTasks();
    },
    removeTasksForm: () => {
      tasks.modifyTask.form.parentElement.removeChild(taskForm);
    }
  },
  deleteTask: {
    taskToDelete: null,
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.deleteTaskBtns = document.querySelectorAll('.taskDeleteBtn');
    },
    bindEvents: function () {
      this.deleteTaskBtns.forEach(taskDelBtn => {
        taskDelBtn.addEventListener('click', () => {
          this.taskToDelete = taskDelBtn.closest('.taskWrap');
          this.targetId = taskDelBtn.closest('.taskWrap').getAttribute('id');
          this.removeTask();
        })
      });
    },
    removeTask: function () {
      this.taskToDelete.remove();
      tasksArr = tasksArr.filter(tasksArr => tasksArr.uniqueID !== tasks.deleteTask.targetId);
      localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
    }
  }
};

// MOVE getProjectsArr into projects{}
export const projects = {
  init: function () {
    this.getStoredProjects();
    this.getProjectsArr();
    this.getProjectForm();
  },

  getStoredProjects: function () {
    if (activeProjects.length > 0) {
      activeProjects.sort((a, b) => a > b ? 1 : -1);
      activeProjects.forEach(element => {
        newProject(element);
        btnHover('.projectEditBtn', '.projectDeleteBtn');
        editOrDeleteProject('.projectDeleteBtn', '.projectEditBtn');
      });
    }
  },
  getProjectsArr: function () {
    projectsArr = [];
    document.querySelectorAll(".projectWrap h3").forEach(project => {
      projectsArr.push(project.innerText);
    })
  },
  getProjectForm: function () {
    document.getElementById('addProjectBtn').onclick = (e) => {
      // check if any form is on screen
      if (!document.getElementById('projectForm') && !document.getElementById('taskForm')) {
        addProjectForm();
        projects.projectSubmit();
        projects.cancelProject();
      }
    }
  },
  projectSubmit: function () {
    document.getElementById('projectSubmit').onclick = (e) => {
      e.preventDefault();
      newProject(projectForm.newProjectName.value, true);
      removeProjectForm();
      projects.getProjectsArr();
    }
  },
  cancelProject: function () {
    document.querySelector('#projectForm .cancelBtn').onclick = (e) => {
      e.preventDefault();
      removeProjectForm();
    }
  },
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

      tasks.taskSortStore();
      getSelectedTasks();
      removeProjectForm();
      projects.getStoredProjects();
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
          projects.getProjectsArr();
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
        tasks.taskSortStore();
      })
    })
  }
  projectWrapBtns.forEach(button => {
    addListeners(button);
  });
}

const removeProjectForm = () => {
  projectForm.parentElement.removeChild(projectForm);
}
