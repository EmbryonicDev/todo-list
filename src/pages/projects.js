// import { btnHover, elFactory, getSelectedTasks } from "../functions/global-functions";
// import { activeProjects, addProjectForm } from "./dom";
// import { newProject } from "./dom";
// import { tasksArr } from "./tasks";

// export let projectsArr = JSON.parse(localStorage.getItem("projectsArr")) || [];

// export const getStoredProjects = () => {
//   if (activeProjects.length > 0) {
//     activeProjects.forEach(element => {
//       newProject(element);
//       btnHover('.projectEditBtn', '.projectDeleteBtn');
//       editOrDeleteProject('.projectDeleteBtn', '.projectEditBtn');
//     });
//   }
// }

// export const getProjectsArr = () => {
//   projectsArr = [];
//   document.querySelectorAll(".projectWrap h3").forEach(project => {
//     projectsArr.push(project.innerText);
//   })
// }

// const editOrDeleteProject = (btn1, btn2) => {
//   const projectWrapBtns = [btn1, btn2];
//   let btn3 = null;
//   let btn4 = null;
//   let confirmBtns = [btn3, btn4];
//   let tasksToModify = null;
//   let projectToModify = null;
//   let projectDivToDelete = null;

//   const getProjectDetails = () => {
//     if (!document.getElementById('projectForm') && !document.getElementById('taskForm')) addProjectForm();
//     cancelProject();

//     // send selected project name to form input
//     newProjectName.value = projectToModify;

//     submitProjectMods();
//   }

//   const submitProjectMods = () => {
//     document.getElementById('projectSubmit').onclick = (e) => {
//       e.preventDefault();

//       // Remove original name from activeProjects & push new name to activeProjects
//       const modifiedProjectName = newProjectName.value
//       let index = activeProjects.indexOf(projectToModify)
//       activeProjects.splice(index);
//       activeProjects.push(modifiedProjectName);
//       projectSubmit();
//       localStorage.setItem("activeProjects", JSON.stringify(activeProjects));

//       // update tasks with new project name
//       for (let i = 0; i < tasksToModify.length; i++) {
//         tasksToModify[i].project = modifiedProjectName;
//       }

//       localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
//       getSelectedTasks();
//       removeProjectForm();
//       // location.reload();
//     }
//   };

//   const confirmProjectDelete = () => {
//     // create & display confirmation box
//     if (!document.getElementById('confirmDeleteWrap')) {
//       elFactory('div', { id: 'confirmDeleteWrap' }, document.body,
//         elFactory('h3', '', '', 'Warning!'),
//         elFactory('p', '', '', `Deleting ${projectToModify} will delete all of its tasks. Do you wish to continue?`),
//         elFactory('button', { id: 'confirmProjectDelete' }, '', 'Confirm'),
//         elFactory('button', { id: 'cancelProjectDelete' }, '', 'Cancel'),
//       )
//     }
//     // add eListeners to confirmation box buttons
//     btn3 = '#confirmProjectDelete';
//     btn4 = '#cancelProjectDelete';
//     confirmBtns = [btn3, btn4];
//     confirmBtns.forEach(button => {
//       addListeners(button);
//     })
//   }

//   const addListeners = (getThisElement) => {
//     // let projectDivToDelete = null;
//     document.querySelectorAll(getThisElement).forEach(button => {
//       button.addEventListener('click', () => {

//         if (getThisElement == btn1 || getThisElement == btn2) {
//           // get the containing div
//           projectDivToDelete = button.closest('.projectWrap');

//           console.log({ projectDivToDelete })

//           // get the project name of the container
//           projectToModify = button.closest('.projectWrap').children[1].innerText;
//           // get associated tasks
//           for (let i = 0; i < tasksArr.length; i++) {
//             tasksToModify = tasksArr.filter(tasksArr => tasksArr.project == projectToModify);
//           }
//         }

//         // action for deleteBtn
//         if (getThisElement == btn1) {
//           confirmProjectDelete();

//           // action for editBtn
//         } else if (getThisElement == btn2) {
//           getProjectDetails()

//           // action for confirm delete
//         } else if (getThisElement == btn3) {
//           // remove project from activeProjects
//           let projectIndex = activeProjects.indexOf(projectToModify);
//           activeProjects.splice(projectIndex, 1)
//           console.log({ activeProjects })
//           localStorage.setItem("activeProjects", JSON.stringify(activeProjects));

//           // get the containing div & delete from DOM, update projectsArr, remove confirmation box
//           console.log({ projectDivToDelete })

//           getProjectsArr();

//           // remove tasks from tasksArr
//           if (tasksToModify.length > 0) {
//             console.log('Before delete')
//             console.log({ tasksToModify });
//             console.log({ tasksArr });

//             // for (let i = 0; i < tasksArr.length; i++) {
//               let index = tasksArr.filter(tasksArr => tasksArr.project !== projectToModify);
//               // console.log({ tasksArr })
//               tasksArr.splice(0)
//               tasksArr = index.slice(0);
//               // console.logTasks
//               // tasksArr.splice(index, 1);
//             // }

//             tasksToModify.splice(0);
//             console.log('After delete')
//             console.log({ tasksToModify });
//             console.log({ tasksArr });

//             // tasksArr = tasksArr.filter(tasksArr => tasksArr.project !== projectToModify);
//             localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
//             getSelectedTasks();
//           }
//           // Remove confirmation request
//           document.getElementById('confirmDeleteWrap').remove()
//         } else if (getThisElement == btn4) {
//           // Remove confirmation request
//           document.getElementById('confirmDeleteWrap').remove();
//         }
//         localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
//       })
//     })
//   }
//   projectWrapBtns.forEach(button => {
//     addListeners(button);
//   })
// }

// export const getProjectForm = () => {
//   document.getElementById('addProjectBtn').onclick = (e) => {
//     // check if any form is on screen
//     if (!document.getElementById('projectForm') && !document.getElementById('taskForm')) {
//       addProjectForm();
//       projectSubmit();
//       cancelProject();
//     }
//   }
// }

// const projectSubmit = () => {
//   document.getElementById('projectSubmit').onclick = (e) => {
//     e.preventDefault();
//     newProject(projectForm.newProjectName.value, true);
//     removeProjectForm();
//     getProjectsArr();
//   }
// }

// const cancelProject = () => {
//   document.querySelector('#projectForm .cancelBtn').onclick = (e) => {
//     e.preventDefault();
//     removeProjectForm();
//   }
// };

// const removeProjectForm = () => {
//   projectForm.parentElement.removeChild(projectForm);
// }
