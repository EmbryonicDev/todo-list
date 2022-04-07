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
    })
  });
};

function clearTasks() {
  const mainDiv = document.getElementById('mainDiv')
  while (mainDiv.children.length > 1) {
    mainDiv.removeChild(mainDiv.lastChild);
  }
}