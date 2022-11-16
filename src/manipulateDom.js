import { ToDoTask, ToDoProject, ProjectManager } from './backend.js'

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

  const create_add_task_button = (todo_list_already, project) => {
    const add_task_list_element = document.createElement('li');
    add_task_list_element.setAttribute('id', 'add-task-li');
    const add_task_button = document.createElement('button');
    add_task_button.setAttribute('class', 'add-task');

    const add_task_plus = document.createElement('span');
    add_task_plus.setAttribute('class', 'add-button');
    add_task_plus.textContent = '+';
    add_task_button.appendChild(add_task_plus);

    const add_task_text = document.createElement('span');
    add_task_text.textContent = 'Add Task';

    add_task_button.appendChild(add_task_text);
    add_task_button.addEventListener('click', () => manipulateDOM().create_add_task_form(project));
    add_task_list_element.appendChild(add_task_button);

    if (todo_list_already) { todo_list_already.appendChild(add_task_list_element);}
    else { todo_list.appendChild(add_task_list_element); }

  }

  const create_add_task_form = (project) => {
    const add_task_li = document.querySelector('#add-task-li');
    add_task_li.remove();

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
    cancel_button.addEventListener('click', () => { list_element.remove(); create_add_task_button() });

    const add_task_button = document.createElement('button');
    add_task_button.setAttribute('class', 'add-task-button');
    add_task_button.textContent = 'Add Task';
    add_task_button.addEventListener('click', () => {
      list_element.remove();
      const new_task = ToDoTask(false, text_input_todo.value);
      if (project) { project.addItem(new_task); }
      create_add_task_button();
    });

    form_footer.appendChild(cancel_button);
    form_footer.appendChild(add_task_button);

    todo_form.appendChild(text_input_todo);
    todo_form.appendChild(form_footer);

    list_element.appendChild(todo_form);

    todo_list.appendChild(list_element);
  }


  return { add_to_sidebar, remove_from_sidebar, create_add_task_button, create_add_task_form }
};


export { manipulateDOM }
