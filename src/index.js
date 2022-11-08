

const toDoTask = function(title, description, dueDate, priority) {
  // Describes a single task in the todo list

  return {title, description, dueDate, priority}

}

const toDoList = function(items) {
  // Describes the whole list
  let items = items;

  const addItem = (todo_item) => {
    items.push(todo_item)
  }

  return {items, addItem}
}
