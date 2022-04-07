import { addDays, startOfDay, format } from 'date-fns';
import { header, sidebar, buildDom } from './pages/dom';
import '../src/styles/modern-normalize.css';
import '../src/styles/style.css';
import '../src/styles/forms.css';
import { getTaskForm } from './pages/tasks.js';
import { getProjectForm, getProjectsArr, getStoredProjects } from './pages/projects';

buildDom(header(), sidebar());

getStoredProjects();

getTaskForm();
getProjectForm();

getProjectsArr();

console.log('Locked \n \n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \n \n & Loaded ');
