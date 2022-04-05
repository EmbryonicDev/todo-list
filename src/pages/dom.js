import { elFactory } from "../functions/global-functions";
import menuIcon from '../assets/icons/menu.svg';
import titleIcon from '../assets/icons/task-icon.svg';
import allTasksIcon from '../assets/icons/all-tasks.svg';
import todayIcon from '../assets/icons/today-icon.svg';
import weekIcon from '../assets/icons/week-icon.svg';
import priorityIcon from '../assets/icons/priority-high.svg';
import { projectsArr } from "./projects";

// add header
export const header = elFactory('HEADER', { id: 'myHeader' }, document.body,
  elFactory('img', { src: menuIcon }, ''),
  elFactory('div', { id: 'iconTitle' }, '',
    elFactory('img', { src: titleIcon }, ''),
    elFactory('h1', '', '', "Todo List")
  )
);

// Add sidebar
export const sidebar = elFactory('div', { id: 'sidebar' }, document.body,
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
      elFactory('h3', '', '', 'General Todo List'),
      elFactory('button', { class: 'rmProject' }, '', 'X')
    )
  )
);

// add task form 
export function addTaskForm() {
  elFactory('form', { id: 'taskForm' }, document.body,
    elFactory('p', '', '',
      elFactory('label', { for: 'dateAdded' }, '', 'Date Added:'),
      elFactory('input', { type: 'date', id: 'dateAdded', value: new Date().toISOString().slice(0, 10) }, '')
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
        elFactory('option', { id: 'defaultProject' }, '', projectsArr[0]),
        elFactory('option', { id: 'newProject' }, '', 'New Project'),
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
    elFactory('div', {class: 'formBtnDiv'}, '', 
    elFactory('button', { type: 'submit' }, '', 'Add Task'),
    elFactory('button', { class: 'deleteBtn' }, '', 'Cancel'),
    )
  )
}

// add project form
export function addProjectForm() {
  elFactory('form', { id: 'projectForm' }, document.body,
    elFactory('p', '', '',
      elFactory('label', { for: 'newProjectName' }, '', 'New Project Name:'),
      elFactory('input', { id: 'newProjectName' }, ''),
    ),
    elFactory('div', {class: 'formBtnDiv'}, '', 
    elFactory('button', { type: 'submit' }, '', 'Add Project'),
    elFactory('button', { class: 'deleteBtn' }, '', 'Cancel'),
    )
  )
};

export function buildDom(...domElements) {
  domElements.forEach(element => {
    return element;
  });
};


