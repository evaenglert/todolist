

const ToDoTask = function(title, description, dueDate, priority) {
  // Describes a single task in the todo list

  return {
    title, description, dueDate, priority,
    modifyProperty(property_to_modify, new_value) {
      this[property_to_modify] = new_value; }

  }}


const ToDoProject = function(project_name, items) {

  const getProjectName = () => project_name;

  const editProjectName = (new_project_name) => {
    project_name = new_project_name;
  }

  const addItem = (todo_item) => {
    items.push(todo_item)
  }

  const removeItem = (todo_item) => {
    if (items.indexOf(todo_item) > -1) {
      items.splice(items.indexOf(todo_item), 1);
    }
  }

  return {items, editProjectName, getProjectName, addItem, removeItem}
}
