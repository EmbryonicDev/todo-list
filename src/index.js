import { addDays, startOfDay, format } from 'date-fns';
import { header, sidebar, buildDom } from './pages/dom';
import '../src/styles/modern-normalize.css';
import '../src/styles/style.css';
import '../src/styles/forms.css';
import { getTaskForm } from './pages/new-task.js';
import { getProjectsArr } from './pages/projects';

buildDom(header, sidebar);

getTaskForm();

getProjectsArr();

console.log('Locked \n \n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \n \n & Loaded ');
