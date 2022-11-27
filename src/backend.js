import { renderTasks } from "./home";
import { manipulateDOM } from "./manipulateDom";

const ToDoTask = function (is_done, title, description, dueDate, project) {
  // Describes a single task in the todo list

  return {
    is_done, title, description, dueDate, project,
    modifyProperty(property_to_modify, new_value) {
      this[property_to_modify] = new_value;
    }

  }
}

const ToDoProject = function (project_name, items) {

  const addItem = (todo_item) => {
    items.push(todo_item)
  }

  const removeItem = (todo_item) => {
    if (items.indexOf(todo_item) > -1) {
      items.splice(items.indexOf(todo_item), 1);
    }
  }

  return {
    items, project_name,
    editProjectName(new_project_name) {
      this.project_name = new_project_name;
    },
    addItem, removeItem
  }
}

// How do I create a new project and new items? I also need an item that stores my different projects
const ProjectManager = function (projects) {

  const projectManager = self;

  const addItem = (project) => {
    projects.push(project)
    // some function here that makes sure that the new project is also added to the front end.
    // manipulateDOM().add_to_sidebar(project);
  }

  const removeItem = (project) => {
    if (projects.indexOf(project) > -1) {
      projects.splice(projects.indexOf(project), 1);
    }
    manipulateDOM().remove_from_sidebar(project.project_name);
  }

  const returnProject = (project_name) => {
    for (let i=0; i<projects.length; i++) {
      if (projects[i].project_name === project_name) {
        return projects[i];
      }}

  }

  return { projects, addItem, removeItem, returnProject }
};


export { ToDoTask, ToDoProject, ProjectManager }
