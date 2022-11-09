

const ToDoTask = function (is_done, title, description, dueDate, priority, project) {
  // Describes a single task in the todo list

  return {
    is_done, title, description, dueDate, priority, project,
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

  const addItem = (project_name) => {
    projects.push(project_name)
  }

  const removeItem = (project_name) => {
    if (projects.indexOf(project_name) > -1) {
      projects.splice(projects.indexOf(project_name), 1);
    }
  }

  return { projects, addItem, removeItem }
};


export { ToDoTask, ToDoProject, ProjectManager }
