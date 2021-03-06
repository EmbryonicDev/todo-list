import { alphaNumSort, elFactory, mainDivTitle } from "../functions/global-functions";
import menuIcon from '../assets/icons/menu.svg';
import titleIcon from '../assets/icons/task-icon.svg';
import allTasksIcon from '../assets/icons/all-tasks.svg';
import todayIcon from '../assets/icons/today-icon.svg';
import weekIcon from '../assets/icons/week-icon.svg';
import priorityIcon from '../assets/icons/priority-high.svg';
import completeIcon from '../assets/icons/complete-icon.svg';
import dots from '../assets/icons/dots.svg';
import styleOn from '../assets/icons/style-on-icon.svg'
import styleOff from '../assets/icons/style-off-icon.svg'
import nightModeIcon from '../assets/icons/night-mode-icon.svg'
import { taskFormProjectDropDown, activeProjects } from "./script";

// add header
export const header = () => {
  elFactory('HEADER', { id: 'myHeader' }, document.body,
    elFactory('div', { id: 'styleBtnsDiv' }, '',
      elFactory('img', { src: styleOff, id: 'styleOffBtn' }, ''),
      elFactory('img', { src: styleOn, id: 'styleOnBtn' }, ''),
      elFactory('img', { src: nightModeIcon, id: 'nightModeBtn' }, ''),
    ),
    elFactory('div', { id: 'iconTitle' }, '',
      elFactory('img', { src: titleIcon }, ''),
      elFactory('h1', '', '', "Todo List")
    )
  )
};

// Add sidebar
export const sidebar = () => {
  elFactory('div', { id: 'sidebar' }, document.body,
    elFactory('div', { class: 'sideTitleDiv' }, '',
      elFactory('h2', { class: 'sideTitle' }, '', 'Tasks'),
      elFactory('button', { id: 'addTaskBtn' }, '', '+')
    ),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: allTasksIcon }, ''),
      elFactory('h3', '', '', 'All Tasks'),
    ),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: todayIcon }, ''),
      elFactory('h3', '', '', 'Today'),
    ),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: weekIcon }, ''),
      elFactory('h3', '', '', 'Next 7 Days'),
    ),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: priorityIcon }, ''),
      elFactory('h3', '', '', 'High Priority'),
    ),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: completeIcon }, ''),
      elFactory('h3', '', '', 'Completed Tasks'),
    ),
    elFactory('div', { class: 'sideTitleDiv' }, '',
      elFactory('h2', { class: 'sideTitle' }, '', 'Projects'),
      elFactory('button', { id: 'addProjectBtn' }, '', '+')
    ),
    elFactory('div', { id: 'projectsDiv' }, '',
      elFactory('div', { class: 'projectWrap' }, '',
        elFactory('img', { src: menuIcon }, ''),
        elFactory('h3', '', '', 'General Tasks')
      )
    )
  )
  mainDivTitle('.sideNav');
};

// add task form 
export function addTaskForm() {
  elFactory('form', { id: 'taskForm', action: '/', method: 'GET' }, document.body,
    elFactory('p', '', '',
      elFactory('label', { for: 'startDate' }, '', 'Start Date:'),
      elFactory('input', { type: 'date', id: 'startDate', value: new Date().toISOString().slice(0, 10) }, '')
    ),
    elFactory('p', '', '',
      elFactory('label', { for: 'taskName', class: 'required' }, '', 'Task Name: '),
      elFactory('input', { id: 'taskName', required:'' }, '')
    ),
    elFactory('p', { class: 'error', id: 'taskNameError' }, ''),
    elFactory('p', '', '',
      elFactory('label', { for: 'description' }, '', 'Description: '),
      elFactory('input', { id: 'description' }, '')
    ),
    elFactory('p', '', '',
      elFactory('label', { for: 'dueDate' }, '', 'Due Date: '),
      elFactory('input', { type: 'date', id: 'dueDate' }, '')
    ),
    elFactory('p', { class: 'error', id: 'taskDueDateError' }, ''),
    elFactory('p', '', '',
      elFactory('label', { for: 'projectName' }, '', 'Project: '),
      elFactory('select', { id: 'projectName' }, '')
    ),
    elFactory('p', '', '',
      elFactory('label', { for: 'priority' }, '', 'Priority: '),
      elFactory('select', { id: 'priority' }, '',
        elFactory('option', { id: 'priorityMedium' }, '', "Medium"),
        elFactory('option', { id: 'priorityHigh' }, '', "High"),
        elFactory('option', { id: 'priorityLow' }, '', "Low")
      )
    ),
    elFactory('p', '', '',
      elFactory('label', { for: 'Notes' }, '', 'Notes:'),
      elFactory('textarea', { id: 'notes', cols: "30", rows: "10", placeHolder: 'Add your notes here...' }, '')
    ),
    elFactory('div', { class: 'formBtnDiv' }, '',
      elFactory('button', { type: 'submit', id: 'taskSubmit' }, '', 'Add Task'),
      elFactory('button', { class: 'cancelBtn' }, '', 'Cancel'),
    )
  );
  // add project names to task form's project dropdown list
  (() => {
    let thisIndex = null;
    const activeTitle = document.getElementById('activeTitle').innerText;

    // helper function for below
    function modifyProjectArr(unshiftThis) {
      taskFormProjectDropDown.splice(thisIndex, 1);
      taskFormProjectDropDown.unshift(unshiftThis);
    }

    // Send 'General Tasks' to projectArr[0] if task is added while activeTitle = any tasks category
    if (!taskFormProjectDropDown.includes(activeTitle)) {
      thisIndex = taskFormProjectDropDown.findIndex(projectsArr => projectsArr === 'General Tasks');
      modifyProjectArr('General Tasks');
    } else {
      alphaNumSort(taskFormProjectDropDown);
      // find the active project on display & move it to projectsArr[0]
      thisIndex = taskFormProjectDropDown.findIndex(projectsArr => projectsArr === activeTitle);
      modifyProjectArr(activeTitle);
    };

    // push the sorted arr to the task form dropdown for projects
    taskFormProjectDropDown.forEach(project => {
      elFactory('option', '', projectName, project);
    });
  })();
};

// add project form
export function addProjectForm(errorId) {
  elFactory('form', { id: 'projectForm', action: '/', method: 'GET' }, document.body,
    elFactory('p', '', '',
      elFactory('label', { for: 'newProjectName', class: 'required' }, '', 'New Project Name:'),
      elFactory('input', { id: 'newProjectName', name: 'newProjectName', required: '' }, ''),
    ),
    elFactory('p', { class: 'error', id: errorId }, ''),
    elFactory('div', { class: 'formBtnDiv' }, '',
      elFactory('button', { type: 'submit', id: 'projectSubmit' }, '', 'Add Project'),
      elFactory('button', { class: 'cancelBtn' }, '', 'Cancel'),
    )
  )
};

// add new project
export const newProject = (projectName, checkActiveProjects) => {
  const parent = document.getElementById('projectsDiv');
  elFactory('div', { class: 'projectWrap' }, parent,
    elFactory('img', { src: menuIcon }, ''),
    elFactory('h3', '', '', projectName),
    elFactory('div', { class: 'projectBtnWrap' }, '',
      elFactory('img', { src: dots, class: 'projectEditBtn' }, ''),
      elFactory('div', { class: 'projectBtnInfo' }, '', 'Edit Project'),
      elFactory('button', { class: "projectDeleteBtn" }, '', 'X'),
      elFactory('div', { class: 'projectBtnInfo' }, '', 'Delete Project')
    )
  )
  // Add eListener to display mainDiv title
  mainDivTitle('.projectWrap h3');
  // ensures that projects in local storage are not duplicated
  if (checkActiveProjects) {
    activeProjects.push(projectName);
    localStorage.setItem("activeProjects", JSON.stringify(activeProjects));
  }
}

// active project / tasks catagory display
export const activeTitleDisplay = () => {
  elFactory('div', { id: 'mainDiv' }, document.body,
    elFactory('div', { id: 'activeTitleDiv' }, '',
      elFactory('h2', { id: 'activeTitle' }, '', 'All Tasks'),
      elFactory('button', { id: 'hideComplete' }, '', 'Hide Complete')
    )
  )
}

export const addConfirmDelete = () => {
  elFactory('div', { id: 'confirmDeleteWrap' }, document.body,
    elFactory('h3', '', '', 'Warning!'),
    elFactory('p', { id: 'confirmPara' }, '', 'Deleting the project named "',
      elFactory('span', { id: 'projectNameSpan' }, ''),
      '" will remove a total of ',
      elFactory('span', { id: 'taskNumberSpan' }, ''),
      ' linked tasks. Do you wish to continue?'
    ),
    elFactory('button', { id: 'confirmProjectDelete' }, '', 'Confirm'),
    elFactory('button', { id: 'cancelProjectDelete' }, '', 'Cancel'),
  )
}

// add new task to DOM
export const newTask = (taskName, description, projectName, startDate, dueDate, uniqueID) => {
  const parent = document.getElementById('mainDiv');
  elFactory('div', { class: 'taskWrap', id: uniqueID }, parent,
    elFactory('input', { type: 'checkbox' }, ''),
    elFactory('div', { class: 'nameDescriptionWrap' }, '',
      elFactory('H3', '', '', taskName),
      elFactory('p', '', '', description),
    ),
    elFactory("p", '', '', projectName),
    elFactory('div', { class: 'taskDatesWrap' }, '',
      elFactory('p', '', '', "Start: " + startDate),
      elFactory('p', '', '', "End: " + dueDate),
    ),
    elFactory('div', { class: 'taskBtnWrap' }, '',
      elFactory('img', { src: dots, class: 'taskEditBtn' }, ''),
      elFactory('div', { class: 'taskBtnInfo' }, '', 'Edit Task'),
      elFactory('button', { class: "taskDeleteBtn" }, '', 'X'),
      elFactory('div', { class: 'taskBtnInfo' }, '', 'Delete Task')
    )
  )
}