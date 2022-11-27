import {ToDoTask, ToDoProject, ProjectManager} from './backend.js'
import { renderTasks } from './home.js'
import { manipulateDOM } from './manipulateDom.js';

// -------------------------------------------------------------------
// 'home' project is not deletable. <- have to make sure this is encoded.

const default_project = ToDoProject('Home', []);

const project3 = ToDoProject('Coding journey', []);


const projectManager = ProjectManager([default_project]);

projectManager.addItem(project3);


const side_bar = document.querySelector('#side-bar');

const home_menu_item = document.querySelector('#home-project');
const today_menu_item = document.querySelector('#today');
const upcoming_menu_item = document.querySelector('#upcoming');

for (let i=0; i<projectManager.projects.length; i++) {
  if (projectManager.projects[i].project_name != 'Home') {
  manipulateDOM().add_to_sidebar(projectManager.projects[i], projectManager);}
}

renderTasks(home_menu_item, default_project, projectManager);

// Move this to backend.js
home_menu_item.addEventListener("click", (e) => renderTasks(e.target, default_project, projectManager));

// These actually need a different function. Will need to come up with a good
// way to sort it out but basically depending on the date we'd like to include them or not.
// today_menu_item.addEventListener("click", (e) => renderTasks(e.target, 'Today'));
// upcoming_menu_item.addEventListener("click", (e) => renderTasks(e.target, 'Upcoming'));
