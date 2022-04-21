import { addDays, startOfDay, format, quartersToYears } from 'date-fns';
import { activeTitleDisplay, header, sidebar } from './pages/dom';
import '../src/styles/modern-normalize.css';
import '../src/styles/plain-style.css';
import '../src/styles/changed-style.css';
import '../src/styles/forms.css';
import { checkBoxAction, getTaskForm, tasksArr, tasksArrToPage, getProjectForm, getProjectsArr, getStoredProjects, taskSortStore, chooseStyle, pageStyle } from './pages/script.js';
import { mainDivTitle } from './functions/global-functions';

console.log('Locked \n \n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \n \n & Loaded ');

const addStyle = (() => {
  document.body.id = "bodyStyled";
})();

function buildDom(...domElements) {
  domElements.forEach(element => {
    return element;
  });
};

buildDom(header(), sidebar(), activeTitleDisplay());

pageStyle.init();

getStoredProjects();

getTaskForm();
getProjectForm();

getProjectsArr();

// show active project / task group title
(() => {
  let activeTitleArr = ['.sideNav div', '.projectWrap h3'];
  activeTitleArr.forEach(element => {
    mainDivTitle(element);
  });
})();

taskSortStore();
tasksArrToPage(tasksArr);

checkBoxAction();