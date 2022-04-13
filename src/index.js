import { addDays, startOfDay, format, quartersToYears } from 'date-fns';
import { activeTitleDisplay, header, newTask, sidebar } from './pages/dom';
import '../src/styles/modern-normalize.css';
import '../src/styles/style.css';
import '../src/styles/forms.css';
import { checkBoxAction, getTaskForm, tasksArr, tasksArrToPage } from './pages/tasks.js';
import { getProjectForm, getProjectsArr, getStoredProjects } from './pages/projects';
import { mainDivTitle } from './functions/global-functions';

console.log('Locked \n \n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \n \n & Loaded ');

function buildDom(...domElements) {
  domElements.forEach(element => {
    return element;
  });
};

buildDom(header(), sidebar(), activeTitleDisplay());

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

tasksArrToPage(tasksArr);

checkBoxAction();