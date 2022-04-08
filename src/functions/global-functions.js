import { tasksArr, tasksArrToPage } from "../pages/tasks";
import { addDays, format } from "date-fns";

export const elFactory = (type, attributes, appendTo, ...children) => {
  const el = document.createElement(type)

  for (let key in attributes) {
    el.setAttribute(key, attributes[key])
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child))
    } else {
      el.appendChild(child)
    }
  })

  if (appendTo != "") appendTo.append(el);

  return el
};

// display selected tasks catagory or project title in mainDiv
let selectedTasks = '';
export const mainDivTitle = (querySelectorAll) => {
  document.querySelectorAll(querySelectorAll).forEach(element => {
    element.addEventListener('click', () => {
      const activeTitle = document.getElementById('activeTitle');
      activeTitle.innerText = element.innerText;

      if (element.innerText === "All Tasks") selectedTasks = element.innerText;
      if (element.innerText === "Today") selectedTasks = element.innerText;
      if (element.innerText === "Next 7 Days") selectedTasks = element.innerText;
      if (element.innerText === "High Priority") selectedTasks = element.innerText;

      getSelectedTasks();
    })
  });
};

let todayTasks = '';
let weekTasks = '';
let highPriority = '';

// create arrays for each tasks catagory
export const filteredArrays = () => {
  const temp = (new Date());
  const today = format(temp, 'yyyy-MM-dd');
  const tempWeek = addDays(temp, 6);
  const week = format(tempWeek, 'yyyy-MM-dd');

  todayTasks = tasksArr.filter(tasksArr => tasksArr.startDate <= today);
  weekTasks = tasksArr.filter(tasksArr => tasksArr.startDate < week);
  highPriority = tasksArr.filter(tasksArr => tasksArr.priority == 'High');
};

export function getSelectedTasks() {
  clearTasks();
  if(!selectedTasks) tasksArrToPage(tasksArr);
  filteredArrays();
  switch (selectedTasks) {
    case "All Tasks":
      tasksArrToPage(tasksArr);
      break;
    case "Today":
      tasksArrToPage(todayTasks);
      break;
    case "Next 7 Days":
      tasksArrToPage(weekTasks);
      break;
    case "High Priority":
      tasksArrToPage(highPriority)
      break;
  }
}

function clearTasks() {
  const mainDiv = document.getElementById('mainDiv')
  while (mainDiv.children.length > 1) {
    mainDiv.removeChild(mainDiv.lastChild);
  }
}