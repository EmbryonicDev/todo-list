import { tasks } from "../pages/script";

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

      tasks.getSelectedTasks.init();
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

  export const checkInputValidity = (inputId, inputName, errorMsg, noSubmitLocation) => {
    if (inputId.value.charAt(0) === " ") {
      errorMsg.innerText = `${inputName} can't start with a white spaces`;
      noSubmitLocation.noSubmit = 'preventSubmit';
    } else if (inputId.value.length <= 2) {
      errorMsg.innerText = `${inputName} must be at least 3 characters`;
      noSubmitLocation.noSubmit = 'preventSubmit';
    } else if (inputId.value.includes("  ")) {
      errorMsg.innerText = `${inputName} does not allow double white spaces`;
      noSubmitLocation.noSubmit = 'preventSubmit';
    } else if (inputId.value.charAt(inputId.value.length - 1) == " ") {
      errorMsg.innerText = `${inputName} can't end with a white spaces`;
      noSubmitLocation.noSubmit = 'preventSubmit';
    } else if (activeProjects.some(activeProjects => activeProjects == titleCase(inputId.value.trim()))) {
      errorMsg.innerText = `${inputName} must be unique`;
      noSubmitLocation.noSubmit = 'preventSubmit';
    } else if (inputId.value.length >= 33) {
      errorMsg.innerText = `${inputName} must be less than 32 characters`;
      noSubmitLocation.noSubmit = 'preventSubmit';
    } else {
      errorMsg.innerText = '';
      noSubmitLocation.noSubmit = null;
    }
  }