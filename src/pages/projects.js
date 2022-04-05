export let projectsArr = [];

export const getProjectsArr = () => {
  document.querySelectorAll(".projectWrap h3").forEach(project => {
    projectsArr.push(project.innerText);
    console.log({ projectsArr });
  })
}