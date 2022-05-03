import { activeTitleDisplay, header, sidebar } from './pages/dom';
import '../src/styles/modern-normalize.css';
import '../src/styles/plain-style.css';
import '../src/styles/changed-style.css';
import '../src/styles/night-mode.css';
import '../src/styles/forms.css';
import { pageStyle, projects, tasks } from './pages/script.js';
import { mainDivTitle } from './functions/global-functions';

console.log('Locked \n \n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \n \n & Loaded ');

function buildDom(...domElements) {
  domElements.forEach(element => {
    return element;
  });
};

buildDom(header(), sidebar(), activeTitleDisplay());

projects.init();

tasks.init();

pageStyle.init();