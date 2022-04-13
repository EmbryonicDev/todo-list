import { tasksArr, tasksArrToPage } from "../pages/tasks";
import { addDays, format } from "date-fns";
import { projectsArr } from "../pages/projects";

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
export const mainDivTitle = (getThisElement) => {
  document.querySelectorAll(getThisElement).forEach(element => {
    element.addEventListener('click', () => {
      const activeTitle = document.getElementById('activeTitle');
      activeTitle.innerText = element.innerText;

      getSelectedTasks();
    })
  });
};

let todayTasks = '';
let weekTasks = '';
let highPriority = '';
let generalTasks = '';

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
  const activeTitle = document.getElementById('activeTitle').innerText;
  clearTasks();

  if (projectsArr.includes(activeTitle)) {
    let filteredProjects = tasksArr.filter(tasksArr => tasksArr.project == activeTitle);
    tasksArrToPage(filteredProjects);
  };

  filteredArrays();
  switch (activeTitle) {
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

export const btnHover = (btn1, btn2) => {
  const affectedBtn = [btn1, btn2];

  const addListeners = (getThisElement, eListenerToAdd) => {
    document.querySelectorAll(getThisElement).forEach(element => {
      element.addEventListener(eListenerToAdd, () => {
        if (getThisElement == btn1) {
          const styleMe = element.nextSibling;
          if (eListenerToAdd == 'mouseover') {
            styleMe.style.visibility = "visible";
          } else {
            styleMe.style.visibility = "hidden";
          }
        } else if (getThisElement == btn2) {
          const styleMe = element.nextSibling;
          if (eListenerToAdd == 'mouseover') {
            styleMe.style.visibility = "visible";
          } else {
            styleMe.style.visibility = "hidden";
          }
        }
      })
    })
  }

  affectedBtn.forEach(element => {
    addListeners(element, 'mouseover');
    addListeners(element, 'mouseout');
  });
}