import { addProjectForm } from "./dom";
import { newProject } from "./dom";

export let projectsArr = [];

export const getProjectsArr = () => {
  document.querySelectorAll(".projectWrap h3").forEach(project => {
    projectsArr.push(project.innerText);
    console.log({ projectsArr });
  })
}

export const getProjectForm = () => {
  document.getElementById('addProjectBtn').onclick = (e) => {
    // check if any form is on screen
    if (!document.getElementById('projectForm') && !document.getElementById('taskForm')) {
      addProjectForm();
      eListenerToProjectSubmit();
    }
  }
}

const eListenerToProjectSubmit = () => {
  document.getElementById('projectSubmit').onclick = (e) => {
    e.preventDefault();
    newProject(projectForm.newProjectName.value);
    removeProjectForm();
    getProjectsArr();
  }
}

const removeProjectForm = () => {
  projectForm.parentElement.removeChild(projectForm);
}
