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

// chooseStyle();

// export const chooseStyle = () => {
//   const styleOnIcon = document.getElementById('styleOnBtn');
//   const styleOffIcon = document.getElementById('styleOffBtn');
//   const headerTitleIcon = document.querySelector('#iconTitle img');

//   document.getElementById('styleOffBtn').addEventListener('click', () => {
//     document.body.id = '';
//     styleOnIcon.setAttribute('src', blackStyleOn);
//     styleOffIcon.setAttribute('src', blackStyleOff);
//     styleOffIcon.style.cssText = "background: #a3a3a3";
//     headerTitleIcon.setAttribute('src', blackTitleIcon);
//   });

//   document.getElementById('styleOnBtn').addEventListener('click', () => {
//     document.body.id = 'bodyStyled';
//     styleOnIcon.setAttribute('src', styleOn);
//     styleOffIcon.setAttribute('src', styleOff);
//     styleOffIcon.style.cssText = "background: 0";
//     headerTitleIcon.setAttribute('src', titleIcon);
//   });
// }

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