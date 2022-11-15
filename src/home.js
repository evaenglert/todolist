import { manipulateDOM } from "./manipulateDom";

const renderTasks = (e, project_name) => {

  const main_content = document.querySelector('#main-content');
  main_content.innerHTML = "";

  const side_bar = document.querySelector('#side-bar');
  for (let i=0; i < side_bar.childNodes.length; i++) {
    if (side_bar.childNodes[i].nodeName == 'UL') {
        for (let j = 0; j < side_bar.childNodes[i].childNodes.length; j++) {
          if (side_bar.childNodes[i].childNodes[j].nodeName == 'LI') {
            if (side_bar.childNodes[i].childNodes[j].classList.contains('selected')) {
              side_bar.childNodes[i].childNodes[j].classList.remove('selected');
          }
        }
      }
    }
  }

  e.classList.add('selected');

  const project_title = document.createElement('h3');
  project_title.textContent = project_name;

  const todo_list = document.createElement('ul');
  todo_list.setAttribute('id', 'todo-list');
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
  add_task_button.addEventListener('click', (e) => manipulateDOM().create_add_task_form(e.target));
  add_task_list_element.appendChild(add_task_button);

  todo_list.appendChild(add_task_list_element);

  main_content.appendChild(project_title);
  main_content.appendChild(todo_list);

};

export {renderTasks}

{/* <dev id="main-content">
  <h3>Home</h3>
  <ul id="todo-list">
    <li> <button class="add-task"><span class="add-button">+</span> Add Task</button></li>
  </ul>
</dev> */}
