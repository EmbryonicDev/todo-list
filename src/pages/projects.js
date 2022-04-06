import { activeProjects, addProjectForm } from "./dom";
import { newProject } from "./dom";

export let projectsArr = JSON.parse(localStorage.getItem("projectsArr")) || [];

export const getStoredProjects = () => {
  if(activeProjects.length > 0) {
    activeProjects.forEach(element => {
      newProject(element);
    });
  }
}

export const getProjectsArr = () => {
  projectsArr = [];
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
      projectSubmit();
    }
  }
}

const projectSubmit = () => {
  document.getElementById('projectSubmit').onclick = (e) => {
    e.preventDefault();
    newProject(projectForm.newProjectName.value, true);
    removeProjectForm();
    getProjectsArr();
  }
}

const removeProjectForm = () => {
  projectForm.parentElement.removeChild(projectForm);
}
