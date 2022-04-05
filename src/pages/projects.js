import { addProjectForm } from "./dom";

export let projectsArr = [];

export const getProjectsArr = () => {
  document.querySelectorAll(".projectWrap h3").forEach(project => {
    projectsArr.push(project.innerText);
    console.log({ projectsArr });
  })
}

export const getProjectForm = () => {
  document.getElementById('addProjectBtn').onclick = (e) => {
    if(!document.getElementById('projectForm') && !document.getElementById('taskForm')) addProjectForm();
  }
}