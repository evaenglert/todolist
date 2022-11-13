
const manipulateDOM = (() => {
  const side_bar = document.querySelector('#side-bar');
  const projects = document.querySelector('#projects');

  const add_to_sidebar = (project_to_add) => {
    const new_project = document.createElement('li');
    new_project.textContent = project_to_add

    projects.appendChild(new_project);
  }

  const remove_from_sidebar = (project_to_remove) => {
    for (let i=0; i<projects.childNodes.length; i++) {
      if (projects.childNodes[i].textContent == project_to_remove) {
        projects.childNodes[i].remove();
      }
    }
  }

  return { add_to_sidebar, remove_from_sidebar }
})();


export { manipulateDOM }
