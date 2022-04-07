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
export const mainDivTitle = (querySelectorAll) => {
    document.querySelectorAll(querySelectorAll).forEach(element => {
      element.addEventListener('click', () => {
        const activeTitle = document.getElementById('activeTitle');
        activeTitle.innerText = element.innerText;
      })
    });
  };