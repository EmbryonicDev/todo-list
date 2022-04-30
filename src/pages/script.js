import { alphaNumSort, btnHover, elFactory, titleCase } from "../functions/global-functions";
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
let noSubmit = null;
let noSubmit2 = null;

const checkInputValidity = (inputSelector, inputName, arrToSearch, errorMsg1, errorMsg2) => {

  // for task due / start date
  if (inputName == 'Due Date' || inputName == 'Start Date') {
    const switchName = () => {
      if (inputName == 'Start Date') return 'After Due Date';
      if (inputName == 'Due Date') return 'Before Start Date';
    }
    const START_DATE = document.getElementById('startDate').value;
    const DUE_DATE = document.getElementById('dueDate').value;
    if (START_DATE > DUE_DATE) {
      errorMsg2.innerText = `${inputName} Can't Be ${switchName()}`;
      noSubmit2 = true;
    } else {
      errorMsg2.innerText = '';
      noSubmit2 = false;
    }
  }

  // for new task name / project name / edit project name
  if (inputName !== "Due Date" && inputName !== 'Start Date') {
    if (inputSelector.value === "") {
      errorMsg1.innerText = ``;
    } else if (inputSelector.value.charAt(0) === " ") {
      errorMsg1.innerText = `${inputName} Can't Start With a White Space`;
      noSubmit = true;
    } else if (inputSelector.value.length <= 2) {
      errorMsg1.innerText = `${inputName} Must Be At Least 3 Characters`;
      noSubmit = true;
    } else if (inputSelector.value.includes("  ")) {
      errorMsg1.innerText = `${inputName} Does Not Allow Double White Spaces`;
      noSubmit = true;
    } else if (inputSelector.value.charAt(inputSelector.value.length - 1) == " ") {
      errorMsg1.innerText = `${inputName} Can't End With a White pace`;
      noSubmit = true;
    } else if (inputSelector.value.length >= 33) {
      errorMsg1.innerText = `${inputName} Must Be Less Than 32 Characters`;
      noSubmit = true;
    } else {
      errorMsg1.innerText = '';
      noSubmit = false;
    }
  }

  // for new project name only 
  // if (errorMsg == projects.projectValidation.PROJECT_ERROR) {
  if (document.getElementById('projectError')) {
    if (arrToSearch.some(arrToSearch => arrToSearch == titleCase(inputSelector.value.trim()))) {
      errorMsg1.innerText = `${inputName} Must Be Unique`;
      noSubmit = true;
    }
  }
};

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
    this.taskSortStore();
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
      this.activeTitle = document.getElementById('activeTitle').innerText;
      this.hideBtn = document.getElementById('hideComplete');
    },
    clearTasks: function () {
      const MAIN_DIV = document.getElementById('mainDiv');
      while (MAIN_DIV.children.length > 1) {
        MAIN_DIV.removeChild(MAIN_DIV.lastChild);
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
      this.addTaskBtn.addEventListener('click', () => {
        tasks.addNewTaskForm.getTaskForm();
        tasks.taskValidation.init();
      })
    },
    getTaskForm: () => {
      if (!document.getElementById('taskForm') && !document.getElementById('projectForm')) {
        addTaskForm();
        tasks.addTask.init()
      }
    }
  },

  taskValidation: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.form = document.getElementById('taskForm');
      this.TASK_INPUT = document.getElementById('taskName');
      this.TASK_ERROR = document.getElementById('taskNameError');
      this.START_DATE = document.getElementById('startDate');
      this.DUE_DATE = document.getElementById('dueDate');
      this.DUE_DATE_ERROR = document.getElementById('taskDueDateError')
    },
    bindEvents: function () {
      const VALIDATE_THIS = [this.TASK_INPUT, this.START_DATE, this.DUE_DATE];
      let errorMsg1 = null;
      let errorMsg2 = null;
      let inputName = null;
      let submitCount = null;

      VALIDATE_THIS.forEach(element => {
        if (element == this.TASK_INPUT) {
          errorMsg1 = this.TASK_ERROR;
          inputName = 'Task Name'
        }
        if (element == this.START_DATE) {
          errorMsg2 = this.DUE_DATE_ERROR;
          inputName = 'Start Date'
        }
        if (element == this.DUE_DATE) {
          errorMsg2 = this.DUE_DATE_ERROR;
          inputName = 'Due Date'
        }
        element.addEventListener('input', checkInputValidity.bind(checkInputValidity.bind, element, inputName, tasksArr, errorMsg1, errorMsg2));
        // tasks.taskValidation.form.addEventListener('submit', checkInputValidity.bind(checkInputValidity.bind, element, inputName, tasksArr, errorMsg1, errorMsg2 ))
      });
    },
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
      if (noSubmit == true || noSubmit2 == true) {
        e.preventDefault();
      } else if (noSubmit !== true || noSubmit2 !== true) {
        let myUniqueId = tasks.addTask.getUniqueID();
        let myNewTask = tasks.addTask.taskFactory(startDate.value, titleCase(taskName.value), titleCase(description.value), dueDate.value, projectName.value, priority.value, notes.value, myUniqueId);

        tasksArr.push(myNewTask);
        tasks.taskSortStore();

        newTask(myNewTask.taskName, myNewTask.description, myNewTask.startDate, myNewTask.dueDate, myNewTask.projectName, myUniqueId, true);

        tasks.getSelectedTasks.init();
        tasks.addTask.removeTasksForm();
      }
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
          tasks.taskValidation.init();
        });
      });
    },
    getTaskForm: (e) => {
      if (!document.getElementById('taskForm') && !document.getElementById('projectForm') && !document.getElementById('confirmDeleteWrap')) {
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
      alphaNumSort(projectsArr);
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
      this.form.addEventListener('submit', this.submitTaskMods.bind());
      this.cancelBtn.addEventListener('click', this.removeTasksForm.bind());
    },
    submitTaskMods: (e) => {
      e.preventDefault();
      if (noSubmit == true || noSubmit2 == true) {
        e.preventDefault();
      } else {
        tasksArr[tasks.addEditTaskForm.objIndex].startDate = startDate.value;
        tasksArr[tasks.addEditTaskForm.objIndex].taskName = titleCase(taskName.value);
        tasksArr[tasks.addEditTaskForm.objIndex].description = titleCase(description.value);
        tasksArr[tasks.addEditTaskForm.objIndex].dueDate = dueDate.value;
        tasksArr[tasks.addEditTaskForm.objIndex].project = projectName.value;
        tasksArr[tasks.addEditTaskForm.objIndex].priority = priority.value;
        tasksArr[tasks.addEditTaskForm.objIndex].notes = notes.value;

        tasks.modifyTask.removeTasksForm();
        tasks.taskSortStore();
        tasks.getSelectedTasks.init();
      }
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

export const projects = {
  tasksToModify: null,
  projectToModify: null,
  projectDivToDelete: null,

  init: function () {
    this.getStoredProjects();
    this.getProjectsArr();
    this.projectForm.init();
    this.getProjectEditForm.init();
    this.getConfirmProjectDeleteBox.init();
  },

  getStoredProjects: function () {
    if (activeProjects.length > 0) {
      alphaNumSort(activeProjects);
      localStorage.setItem("activeProjects", JSON.stringify(activeProjects));

      // new projectWraps with button hover ability
      activeProjects.forEach(element => {
        newProject(element);
        btnHover('.projectEditBtn', '.projectDeleteBtn');
      });
    }
  },
  getProjectsArr: function () {
    projectsArr = [];
    document.querySelectorAll(".projectWrap h3").forEach(project => {
      projectsArr.push(project.innerText);
    })
  },
  getProjectForm: function (errorId) {
    if (!document.getElementById('taskForm') && !document.getElementById('projectForm') && !document.getElementById('confirmDeleteWrap')) {
      addProjectForm(errorId);
    }
  },
  removeProjectForm: function () {
    if (document.getElementById('projectForm')) {
      document.getElementById('projectForm').parentElement.removeChild(projectForm);
    }
  },
  getProjectTasks: function () {
    for (let i = 0; i < tasksArr.length; i++) {
      projects.tasksToModify = tasksArr.filter(tasksArr => tasksArr.project == projects.projectToModify);
    }
  },
  reAddeListeners: function () {
    projects.getProjectEditForm.init();
    projects.getConfirmProjectDeleteBox.init();
  },

  projectForm: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.addProjectBtn = document.getElementById('addProjectBtn');
    },
    bindEvents: function () {
      this.addProjectBtn.addEventListener('click', () => {
        projects.getProjectForm('projectError');
        projects.projectValidation.init('projectError');
        projects.addProject.init();
      })
    },
  },

  projectValidation: {
    init: function (errorName, errorId) {
      this.cacheDom(errorName, errorId);
      this.bindEvents();
    },
    cacheDom: function (errorId) {
      this.PROJECT_INPUT = document.getElementById('newProjectName');
      this.PROJECT_ERROR = document.getElementById(errorId);
    },
    bindEvents: function () {
      this.PROJECT_INPUT.addEventListener('input', checkInputValidity.bind(checkInputValidity.bind, this.PROJECT_INPUT, 'Project Name', activeProjects, this.PROJECT_ERROR));
    },
  },

  addProject: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.form = document.getElementById('projectForm');
      this.cancelBtn = this.form.querySelector('.cancelBtn');
    },
    bindEvents: function () {
      this.form.addEventListener('submit', this.projectSubmit.bind())
      this.cancelBtn.addEventListener('click', projects.removeProjectForm.bind());
    },
    projectSubmit: (e) => {
      if (noSubmit == true) {
        e.preventDefault();
      } else if (noSubmit == false) {
        // add title case to project name
        newProjectName.value = titleCase(newProjectName.value);
        // add project to DOM
        newProject(projects.addProject.form.newProjectName.value, true);

        projects.removeProjectForm();
        projects.getProjectsArr();
        projects.reAddeListeners();
      }
    },
  },

  getProjectEditForm: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.projectEditBtn = document.querySelectorAll('.projectEditBtn');
    },
    bindEvents: function () {
      this.projectEditBtn.forEach(editBtn => {
        editBtn.addEventListener('click', () => {
          // get the project name of the container
          projects.projectToModify = editBtn.closest('.projectWrap').children[1].innerText;

          projects.getProjectForm('projectEditError');
          this.projectDetailsToForm();
          projects.projectValidation.init('projectEditError');
          projects.applyProjectMods.init();
        })
      });
    },
    projectDetailsToForm: function () {
      newProjectName.value = projects.projectToModify;
    },
  },

  applyProjectMods: {
    modifiedProjectName: null,
    init: function () {
      this.cacheDom();
      projects.getProjectTasks();
      this.bindEvents();
    },
    cacheDom: function () {
      this.projectForm = document.getElementById('projectForm');
      this.cancelBtn = this.projectForm.querySelector('.cancelBtn');
    },
    bindEvents: function () {
      this.projectForm.addEventListener('submit', this.submitProjectMods.bind());
      this.cancelBtn.addEventListener('click', projects.removeProjectForm.bind());
    },
    submitProjectMods: function (e) {
      e.preventDefault();
      if (noSubmit == true) {
        e.preventDefault();
      } else {
        // replace original project name 
        projects.applyProjectMods.modifiedProjectName = titleCase(projects.applyProjectMods.projectForm.newProjectName.value);
        let index = activeProjects.indexOf(projects.projectToModify);
        activeProjects.splice(index, 1);
        activeProjects.push(titleCase(projects.applyProjectMods.projectForm.newProjectName.value));
        localStorage.setItem("activeProjects", JSON.stringify(activeProjects));

        projects.applyProjectMods.updateProjectTasks();
        projects.applyProjectMods.removeProjectWraps();
        projects.getStoredProjects();
        projects.applyProjectMods.projectSubmit();
        projects.reAddeListeners();
      }
    },
    projectSubmit: function () {
      tasks.taskSortStore();
      tasks.getSelectedTasks.init();
      projects.removeProjectForm();
      projects.getProjectsArr();
    },
    removeProjectWraps: function () {
      const projectsDiv = document.getElementById('projectsDiv');
      while (projectsDiv.children.length > 1) {
        projectsDiv.removeChild(projectsDiv.lastChild);
      }
    },
    updateProjectTasks: function () {
      if (projects.tasksToModify !== null) {
        for (let i = 0; i < projects.tasksToModify.length; i++) {
          projects.tasksToModify[i].project = projects.applyProjectMods.modifiedProjectName;
        }
      }
    }
  },

  getConfirmProjectDeleteBox: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.projectDeleteBtn = document.querySelectorAll('.projectDeleteBtn');
    },
    bindEvents: function () {
      this.projectDeleteBtn.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
          projects.projectDivToDelete = deleteBtn.closest('.projectWrap');
          this.buildConfirmProjectDeleteBox();
          projects.confirmProjectDelete.init();
        })
      });
    },
    buildConfirmProjectDeleteBox: function () {
      projects.projectToModify = projects.projectDivToDelete.children[1].innerText;
      projects.getProjectTasks();

      if (!document.getElementById('confirmDeleteWrap') && !document.getElementById('projectForm') && !document.getElementById('taskForm')) {
        addConfirmDelete();
        projects.getConfirmProjectDeleteBox.addBoldText('projectNameSpan', projects.projectToModify);
        projects.getConfirmProjectDeleteBox.addBoldText('taskNumberSpan', projects.tasksToModify.length);
      }
    },
    addBoldText: function (getThisElement, textToAdd) {
      const span = document.getElementById(getThisElement);
      span.innerText = textToAdd;
      span.style.cssText = 'font-weight: bold';
    }
  },

  confirmProjectDelete: {
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function () {
      this.confirmBox = document.getElementById('confirmDeleteWrap');
      this.confirmBtn = this.confirmBox.querySelector('#confirmProjectDelete');
      this.cancelBtn = this.confirmBox.querySelector('#cancelProjectDelete');
      this.activeTitle = document.getElementById('activeTitle');
    },
    bindEvents: function () {
      this.confirmBtn.addEventListener('click', () => {
        this.deleteProjectDiv();
        this.deleteProjectTasks();
        this.showAllTasks();
      });
      this.cancelBtn.addEventListener('click', this.deleteConfirmationBox.bind());
    },
    deleteProjectDiv: function () {
      activeProjects = activeProjects.filter(activeProjects => activeProjects !== projects.projectToModify);
      localStorage.setItem("activeProjects", JSON.stringify(activeProjects));
      projects.getProjectsArr();
      projects.projectDivToDelete.remove();
      projects.confirmProjectDelete.deleteConfirmationBox();
      projects.confirmProjectDelete.reloadPage();
    },
    deleteConfirmationBox: function () {
      projects.confirmProjectDelete.confirmBox.remove();
    },
    deleteProjectTasks: function () {
      if (projects.tasksToModify.length > 0) {
        tasksArr = tasksArr.filter(tasksArr => tasksArr.project !== projects.projectToModify);
        localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
      }
    },
    reloadPage: function () {
      location.reload();
    }
  }
}