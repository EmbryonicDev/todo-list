import { elFactory } from "../functions/global-functions";
import menuIcon from '../assets/icons/menu.svg';
import titleIcon from '../assets/icons/task-icon.svg';
import allTasksIcon from '../assets/icons/all-tasks.svg';
import todayIcon from '../assets/icons/today-icon.svg';
import weekIcon from '../assets/icons/week-icon.svg';
import priorityIcon from '../assets/icons/priority-high.svg';
import dots from '../assets/icons/dots.svg';
import { projectsArr } from "./projects";

export const activeProjects = JSON.parse(localStorage.getItem("activeProjects")) || [];

// add header
export const header = () => {
  elFactory('HEADER', { id: 'myHeader' }, document.body,
    elFactory('img', { src: menuIcon }, ''),
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
    elFactory('hr', '', ''),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: allTasksIcon }, ''),
      elFactory('div', '', '', 'All Tasks')
    ),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: todayIcon }, ''),
      elFactory('div', '', '', 'Today')
    ),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: weekIcon }, ''),
      elFactory('div', '', '', 'Next 7 days')
    ),
    elFactory('div', { class: "sideNav" }, '',
      elFactory('img', { src: priorityIcon }, ''),
      elFactory('div', '', '', 'High Priority'),
    ),
    elFactory('div', { class: 'sideTitleDiv' }, '',
      elFactory('h2', { class: 'sideTitle' }, '', 'Projects'),
      elFactory('button', { id: 'addProjectBtn' }, '', '+')
    ),
    elFactory('hr', '', ''),
    elFactory('div', { id: 'projectsDiv' }, '',
      elFactory('div', { class: 'projectWrap' }, '',
        elFactory('img', { src: menuIcon }, ''),
        elFactory('h3', '', '', 'General Tasks')
      )
    )
  )
};

// add task form 
export function addTaskForm() {
  elFactory('form', { id: 'taskForm' }, document.body,
    elFactory('p', '', '',
      elFactory('label', { for: 'startDate' }, '', 'Start Date:'),
      elFactory('input', { type: 'date', id: 'startDate', value: new Date().toISOString().slice(0, 10) }, '')
    ),
    elFactory('p', '', '',
      elFactory('label', { for: 'taskName' }, '', 'Task Name: '),
      elFactory('input', { id: 'taskName' }, '')
    ),
    elFactory('p', '', '',
      elFactory('label', { for: 'description' }, '', 'Description: '),
      elFactory('input', { id: 'description' }, '')
    ),
    elFactory('p', '', '',
      elFactory('label', { for: 'dueDate' }, '', 'Due Date: '),
      elFactory('input', { type: 'date', id: 'dueDate' }, '')
    ),
    elFactory('p', '', '',
      elFactory('label', { for: 'projectName' }, '', 'Project: '),
      elFactory('select', { id: 'projectName' }, '',
      )
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
    projectsArr.forEach(project => {
      elFactory('option', '', projectName, project);
    });
  })();
};

// add project form
export function addProjectForm() {
  elFactory('form', { id: 'projectForm' }, document.body,
    elFactory('p', '', '',
      elFactory('label', { for: 'newProjectName' }, '', 'New Project Name:'),
      elFactory('input', { id: 'newProjectName', name: 'newProjectName' }, ''),
    ),
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
    elFactory('img', { src: dots, class: 'projectMenu' }, '')
  )
  // ensures that projects in local storage are not duplicated
  if (checkActiveProjects) {
    activeProjects.push(projectName);
    localStorage.setItem("activeProjects", JSON.stringify(activeProjects));
  }
}

// active project / tasks catagory display
export const activeTitleDisplay = () => {
  elFactory('div', { id: 'mainDiv' }, document.body,
    elFactory('h2', { id: 'activeTitle' }, '', 'testing')
  )
}
