import { addDays, startOfDay, format } from 'date-fns';
import { header, sidebar, buildDom } from './pages/dom';
import '../src/styles/modern-normalize.css';
import '../src/styles/style.css'

buildDom(header, sidebar);

console.log('Locked \n \n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \n \n & Loaded ');
