import { addDays, startOfDay, format } from 'date-fns';
import { header, sidebar, buildDom } from './pages/dom';
import '../src/styles/modern-normalize.css';
import '../src/styles/style.css';
import '../src/styles/form.css';
import { getTaskForm } from './pages/new-task.js';

buildDom(header, sidebar);

getTaskForm();

console.log('Locked \n \n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \n \n & Loaded ');
