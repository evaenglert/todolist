import { manipulateDOM } from "./manipulateDom";

const renderTasks = (e, project_name, project) => {

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

  main_content.appendChild(project_title);
  main_content.appendChild(todo_list);

  manipulateDOM().refresh_todo_list_display(todo_list, project);
  manipulateDOM().create_add_task_button(todo_list, project);


};

export {renderTasks}
