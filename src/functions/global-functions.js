import { activeProjects, tasks, tasksArr } from "../pages/script";
import { addDays } from "date-fns";
import { loremIpsum } from "lorem-ipsum";

const checkFirstStartup = JSON.parse(localStorage.getItem("checkFirstStartup")) || []

export const addStartupProjects = {
  project_name: ['Project 1', 'Project 2', 'Project 3'],
  init: () => {
    addStartupProjects.checkFirstStartup();
  },
  checkFirstStartup: () => {
    if (checkFirstStartup.length < 1) {
      addStartupProjects.addProjects();
      addStartupProjects.addTestTasks();
      addStartupProjects.markRandomTaskComplete();
      addStartupProjects.firstStartupYes();
      tasks.taskSortStore();
    }
  },
  addProjects: () => {
    addStartupProjects.project_name.forEach(projectName => {
      activeProjects.push(projectName);
    });
  },
  addTestTasks: () => {
    const PRIORITY = ['Low', 'Medium', 'High'];
    const TODAY = new Date();
    let randomStartDay = addDays(TODAY, getRndInteger(0, 12));
    let randomDueDay = addDays(randomStartDay, getRndInteger(0, 12)).toISOString().slice(0, 10);

    // add 3 tasks for every "Test" projects
    addStartupProjects.project_name.forEach(project_name => {
      // 1st task added
      tasksArr.push(tasks.addTask.taskFactory(
        TODAY.toISOString().slice(0, 10),
        project_name + ': Task 1',
        loremIpsum({ count: 1, format: "plain", paragraphLowerBound: 1, paragraphUpperBound: 1, random: Math.random, sentenceLowerBound: 1, sentenceUpperBound: 3 }),
        randomStartDay.toISOString().slice(0, 10),
        project_name,
        PRIORITY[getRndInteger(0, 3)],
        '',
        tasks.addTask.getUniqueID())
      );

      randomStartDay = addDays(TODAY, getRndInteger(0, 14));
      // 2nd task added
      tasksArr.push(tasks.addTask.taskFactory(
        randomStartDay.toISOString().slice(0, 10),
        project_name + ': Task 2',
        loremIpsum({ count: 1, format: "plain", paragraphLowerBound: 1, paragraphUpperBound: 1, random: Math.random, sentenceLowerBound: 1, sentenceUpperBound: 3 }),
        randomDueDay,
        project_name,
        PRIORITY[getRndInteger(0, 3)],
        '',
        tasks.addTask.getUniqueID()
      ));

      randomStartDay = addDays(TODAY, getRndInteger(0, 14));
      randomDueDay = addDays(randomStartDay, getRndInteger(0, 12)).toISOString().slice(0, 10);
      // 3rd task added
      tasksArr.push(tasks.addTask.taskFactory(
        randomStartDay.toISOString().slice(0, 10),
        project_name + ': Task 3',
        loremIpsum({ count: 1, format: "plain", paragraphLowerBound: 1, paragraphUpperBound: 1, random: Math.random, sentenceLowerBound: 1, sentenceUpperBound: 3 }),
        randomDueDay,
        project_name,
        PRIORITY[getRndInteger(0, 3)],
        '',
        tasks.addTask.getUniqueID()
      ));
    });

    // add 3 tasks to General Tasks Project
    for (let i = 0; i < PRIORITY.length; i++) {
      randomStartDay = addDays(TODAY, getRndInteger(0, 14));
      randomDueDay = addDays(randomStartDay, getRndInteger(0, 12)).toISOString().slice(0, 10);

      tasksArr.push(tasks.addTask.taskFactory(
        randomStartDay.toISOString().slice(0, 10),
        'General Tasks: Task ' + [i + 1],
        loremIpsum({ count: 1, format: "plain", paragraphLowerBound: 1, paragraphUpperBound: 1, random: Math.random, sentenceLowerBound: 1, sentenceUpperBound: 3 }),
        randomDueDay,
        'General Tasks',
        PRIORITY[getRndInteger(0, 3)],
        '',
        tasks.addTask.getUniqueID()
      ));
    };
  },
  markRandomTaskComplete: () => {
    const TARGET_INDEX = [[0, 3], [3, 6], [6, 9], [9, 12]]
    for (let i = 0; i < TARGET_INDEX.length; i++) {
      const RANDOM_INDEX = getRndInteger(TARGET_INDEX[i][0], TARGET_INDEX[i][1]);
      tasksArr[RANDOM_INDEX].complete = 'Yes';
    }
  },
  firstStartupYes: () => {
    checkFirstStartup.push('First Startup Complete :-)');
    localStorage.setItem("checkFirstStartup", JSON.stringify(checkFirstStartup))
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export function buildDom(...domElements) {
  domElements.forEach(element => {
    return element;
  });
};

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

      tasks.getFilteredTasks.init();
    })
  });
};

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

export const titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

export const alphaNumSort = arr => {
  arr.sort((a, b) => {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    })
  });
}