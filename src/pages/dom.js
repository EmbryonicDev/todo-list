import { elFactory } from "../functions/global-functions";
import menuIcon from '../assets/icons/menu.svg';
import titleIcon from '../assets/icons/task-icon.svg';
import allTasksIcon from '../assets/icons/all-tasks.svg';
import todayIcon from '../assets/icons/today-icon.svg';
import weekIcon from '../assets/icons/week-icon.svg';
import priorityIcon from '../assets/icons/priority-high.svg';

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
  elFactory('h2', { class: 'sideTitle' }, '', 'Tasks'),
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
  elFactory('h2', { class: 'sideTitle' }, '', 'Projects'),
  elFactory('hr', '', ''),
  elFactory('div', { id: 'projectsDiv' }, '',
    elFactory('div', { class: 'projectWrap' }, '',
      elFactory('img', { src: menuIcon }, ''),
      elFactory('h3', '', '', 'General Todo List'),
      elFactory('button', { class: 'rmProject' }, '', 'X')
    )
  )
);

export function buildDom(...domElements) {
  domElements.forEach(element => {
    return element;
  });
};


