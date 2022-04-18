import { tasksArr, tasksArrToPage, projectsArr } from "../pages/script";
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
export const mainDivTitle = (getThisElement) => {
  document.querySelectorAll(getThisElement).forEach(element => {
    element.addEventListener('click', () => {
      const activeTitle = document.getElementById('activeTitle');
      activeTitle.innerText = element.innerText;

      getSelectedTasks();
    })
  });
};

let allHidden = null;
let todayTasks = null;
let todayHidden = null;
let weekTasks = null;
let weekHidden = null;
let highPriority = null;
let highHidden = null;
let completedTasks = null;
let completedHidden = null

// create arrays for each tasks catagory
export const filteredArrays = () => {
  const temp = (new Date());
  const today = format(temp, 'yyyy-MM-dd');
  const tempWeek = addDays(temp, 6);
  const week = format(tempWeek, 'yyyy-MM-dd');

  allHidden = tasksArr.filter(tasksArr => tasksArr.complete == "No");
  todayTasks = tasksArr.filter(tasksArr => tasksArr.startDate <= today);
  todayHidden = todayTasks.filter(todayTasks => todayTasks.complete == "No")
  weekTasks = tasksArr.filter(tasksArr => tasksArr.startDate < week);
  weekHidden = weekTasks.filter(weekTasks => weekTasks.complete == "No")
  highPriority = tasksArr.filter(tasksArr => tasksArr.priority == 'High');
  highHidden = highPriority.filter(highPriority => highPriority.complete == "No")
  completedTasks = tasksArr.filter(tasksArr => tasksArr.complete == 'Yes');
  completedHidden = completedTasks.filter(completedTasks => completedTasks.complete == "No")
};

export function getSelectedTasks() {
  const activeTitle = document.getElementById('activeTitle').innerText;
  const hideBtn = document.getElementById('hideTickedTasksBtn');

  clearTasks();

  if (projectsArr.includes(activeTitle)) {
    let filteredProjects = tasksArr.filter(tasksArr => tasksArr.project == activeTitle);

    // if (hideBtn.innerText == 'Hide Complete') {
    //   filteredProjects = tasksArr.filter(tasksArr => tasksArr.project == activeTitle);
    // } else


    if (hideBtn.innerText == 'Unhide Complete') {
      filteredProjects = filteredProjects.filter(filteredProjects => filteredProjects.complete == 'No')
    }

    tasksArrToPage(filteredProjects);

  };

  filteredArrays();

  if (hideBtn.innerText == "Hide Complete") {
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
      case "Completed Tasks":
        tasksArrToPage(completedTasks)
        break;
    }
  }

  if (hideBtn.innerText == "Unhide Complete") {
    switch (activeTitle) {
      case "All Tasks":
        tasksArrToPage(allHidden);
        break;
      case "Today":
        tasksArrToPage(todayHidden);
        break;
      case "Next 7 Days":
        tasksArrToPage(weekHidden);
        break;
      case "High Priority":
        tasksArrToPage(highHidden)
        break;
      case "Completed Tasks":
        tasksArrToPage(completedHidden)
        break;
    }
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