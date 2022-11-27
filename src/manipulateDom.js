import { ToDoTask, ToDoProject, ProjectManager } from './backend.js'

const manipulateDOM = () => {
  const side_bar = document.querySelector('#side-bar');
  const projects = document.querySelector('#projects');
  const todo_list = document.querySelector('#todo-list');

  const add_to_sidebar = (project_to_add) => {
    const new_project = document.createElement('li');
    new_project.textContent = project_to_add;

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

  const create_add_task_button = (todo_list_node, project, projectManager) => {
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
    add_task_button.addEventListener('click', () => create_add_task_form(project, projectManager));
    add_task_list_element.appendChild(add_task_button);

    if (todo_list_node) { todo_list_node.appendChild(add_task_list_element);}
    else { todo_list.appendChild(add_task_list_element); }

  }

  const create_add_task_form = (project, projectManager) => {
    const add_task_li = document.querySelector('#add-task-li');
    add_task_li.remove();

    const list_element = document.createElement('li');
    const todo_form = document.createElement('div');
    todo_form.setAttribute('class', 'todo-form');

    const input_part = document.createElement('div');
    input_part.setAttribute('class', 'input-part');

    const editor_title = document.createElement('div');
    editor_title.setAttribute('class', 'editor-title');

    const editor_description = document.createElement('div');
    editor_description.setAttribute('class', 'editor-description');

    const text_input_todo = document.createElement('input');
    text_input_todo.setAttribute('class', 'text-input-todo');
    text_input_todo.setAttribute('type', 'text');
    text_input_todo.setAttribute('placeholder', 'Task Name');

    const text_input_todo_description = document.createElement('input');
    text_input_todo_description.setAttribute('class', 'text-input-todo-description');
    text_input_todo_description.setAttribute('type', 'text');
    text_input_todo_description.setAttribute('placeholder', 'Description...');

    const editor_extra_buttons = document.createElement('div');
    editor_extra_buttons.setAttribute('class', 'editor-extra-buttons');

    const date_button = document.createElement('button');
    date_button.setAttribute('id', 'date-button');
    date_button.textContent = 'Due date';

    const project_button = document.createElement('button');
    project_button.setAttribute('id', 'project-button');
    project_button.textContent = project.project_name;
    project_button.addEventListener('click', (e) => project_popup(projectManager.projects, e))


    const form_footer = document.createElement('div');
    form_footer.setAttribute('class', 'form-footer');

    const cancel_button = document.createElement('button');
    cancel_button.setAttribute('class', 'cancel-button');
    cancel_button.textContent = 'Cancel';
    cancel_button.addEventListener('click', () => { list_element.remove(); create_add_task_button(todo_list, project, projectManager) });

    const add_task_button = document.createElement('button');
    add_task_button.setAttribute('class', 'add-task-button');

    add_task_button.textContent = 'Add Task';
    add_task_button.addEventListener('click', () => {
      list_element.remove();
      const new_task = ToDoTask(false, text_input_todo.value,
        text_input_todo_description.value, '2022-12-31', project_button.textContent);

      console.log(projectManager);
      const selected_project = projectManager.return_project(project_button.textContent);
      selected_project.addItem(new_task);

      if (project) {refresh_todo_list_display(todo_list, project) }
      create_add_task_button(todo_list, project, projectManager);

    });

    form_footer.appendChild(cancel_button);
    form_footer.appendChild(add_task_button);

    editor_extra_buttons.appendChild(date_button);
    editor_extra_buttons.appendChild(project_button);

    editor_description.appendChild(text_input_todo_description);
    editor_title.appendChild(text_input_todo);

    input_part.appendChild(editor_title);
    input_part.appendChild(editor_description);
    input_part.appendChild(editor_extra_buttons);

    todo_form.appendChild(input_part);
    todo_form.appendChild(form_footer);

    list_element.appendChild(todo_form);

    todo_list.appendChild(list_element);
  }


  const refresh_todo_list_display = (todo_list_node, project, projectManager) => {
    const todo_list_elements = project.items

    if (todo_list_node) { todo_list_node.innerHTML = ''; }
    else { todo_list.innerHTML = ''; }

    for (let i = 0; i < todo_list_elements.length; i++) {
      const list_element = document.createElement('li');
      const todo_task = document.createElement('button');
      todo_task.setAttribute('class', 'todo-task');
      const checkbox = document.createElement('div');
      checkbox.setAttribute('class', 'checkbox');
      checkbox.textContent = '✓';
      checkbox.addEventListener('click', (e) => {
        todo_list_elements.splice(i,1);
        refresh_todo_list_display(todo_list_node, project);
        create_add_task_button(todo_list_node, project, projectManager);

      })
      const todo_title = document.createElement('span');
      todo_title.textContent = todo_list_elements[i].title;

      todo_task.appendChild(checkbox);
      todo_task.appendChild(todo_title);
      list_element.appendChild(todo_task);
      todo_list.appendChild(list_element);
    }
  }

  const project_popup = (all_projects, project_button) => {
    // class="project-dropdown"
    const input_part = document.querySelector('.input-part');

    const project_dropdown = document.createElement('div');
    project_dropdown.setAttribute('class', 'project-dropdown');

    for (let i=0; i < all_projects.length; i++) {
      const new_project = document.createElement('div');
      new_project.textContent = all_projects[i].project_name;

      new_project.addEventListener('click', (e) => {
        project_button.target.textContent = new_project.textContent;
        project_dropdown.remove();
      });

      project_dropdown.appendChild(new_project);
    }

    input_part.appendChild(project_dropdown);

  }


  return { add_to_sidebar,
    remove_from_sidebar,
    create_add_task_button,
    refresh_todo_list_display
}
};


export { manipulateDOM }
