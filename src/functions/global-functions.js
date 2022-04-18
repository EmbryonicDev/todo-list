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

export function getSelectedTasks() {

  // get arrays
    const temp = (new Date());
    const today = format(temp, 'yyyy-MM-dd');
    const tempWeek = addDays(temp, 6);
    const week = format(tempWeek, 'yyyy-MM-dd');
    const allHidden = tasksArr.filter(tasksArr => tasksArr.complete == "No");
    const todayTasks = tasksArr.filter(tasksArr => tasksArr.startDate <= today);
    const todayHidden = todayTasks.filter(todayTasks => todayTasks.complete == "No")
    const weekTasks = tasksArr.filter(tasksArr => tasksArr.startDate < week);
    const weekHidden = weekTasks.filter(weekTasks => weekTasks.complete == "No")
    const highPriority = tasksArr.filter(tasksArr => tasksArr.priority == 'High');
    const highHidden = highPriority.filter(highPriority => highPriority.complete == "No")
    const completedTasks = tasksArr.filter(tasksArr => tasksArr.complete == 'Yes');
    const completedHidden = completedTasks.filter(completedTasks => completedTasks.complete == "No")

  clearTasks();

  // sort tasks according to selected project
  const activeTitle = document.getElementById('activeTitle').innerText;
  const hideBtn = document.getElementById('hideComplete');
  if (projectsArr.includes(activeTitle)) {
    let filteredProjects = tasksArr.filter(tasksArr => tasksArr.project == activeTitle);
    if (hideBtn.innerText == 'Show Complete') {
      filteredProjects = filteredProjects.filter(filteredProjects => filteredProjects.complete == 'No')
    }
    tasksArrToPage(filteredProjects);
  };

  // sort tasks according to selected taskss category
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

  if (hideBtn.innerText == "Show Complete") {
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