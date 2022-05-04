import { activeTitleDisplay, header, sidebar } from './pages/dom';
import '../src/styles/modern-normalize.css';
import '../src/styles/plain-style.css';
import '../src/styles/changed-style.css';
import '../src/styles/night-mode.css';
import '../src/styles/forms.css';
import { pageStyle, projects, tasks } from './pages/script.js';
import { addStartupProjects, buildDom } from './functions/global-functions';

console.log('Locked \n \n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \n \n & Loaded ');

buildDom(header(), sidebar(), activeTitleDisplay());

addStartupProjects.init();

projects.init();

pageStyle.init();

tasks.init();