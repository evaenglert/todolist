
const manipulateDOM = () => {
  const side_bar = document.querySelector('#side-bar');
  const projects = document.querySelector('#projects');
  const todo_list = document.querySelector('#todo-list');

  const add_to_sidebar = (project_to_add) => {
    const new_project = document.createElement('li');
    new_project.textContent = project_to_add

    projects.appendChild(new_project);

    return new_project;
  }

  const remove_from_sidebar = (project_to_remove) => {
    for (let i=0; i<projects.childNodes.length; i++) {
      if (projects.childNodes[i].textContent == project_to_remove) {
        projects.childNodes[i].remove();
      }
    }
  }

  const create_add_task_form = (e) => {
    e.innerHTML ='';
    e.remove();

    const list_element = document.createElement('li');
    const todo_form = document.createElement('div');
    todo_form.setAttribute('class', 'todo-form');

    const text_input_todo = document.createElement('input');
    text_input_todo.setAttribute('class', 'text-input-todo');
    text_input_todo.setAttribute('type', 'text');

    const form_footer = document.createElement('div');
    form_footer.setAttribute('class', 'form-footer');

    const cancel_button = document.createElement('button');
    cancel_button.setAttribute('class', 'cancel-button');
    cancel_button.textContent = 'Cancel';

    const add_task_button = document.createElement('button');
    add_task_button.setAttribute('class', 'add-task-button');
    add_task_button.textContent = 'Add Task';

    form_footer.appendChild(cancel_button);
    form_footer.appendChild(add_task_button);

    todo_form.appendChild(text_input_todo);
    todo_form.appendChild(form_footer);

    list_element.appendChild(todo_form);

    todo_list.appendChild(list_element);
  }


  return { add_to_sidebar, remove_from_sidebar, create_add_task_form }
};


export { manipulateDOM }
