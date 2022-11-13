import {ToDoTask, ToDoProject, ProjectManager} from './backend.js'
import { renderTasks } from './home.js'
import { manipulateDOM } from './manipulateDom.js';

// -------------------------------------------------------------------
// 'home' project is not deletable. <- have to make sure this is encoded.

const default_project = ToDoProject('home', []);

const sample_project = ToDoProject('sample_project', []);
const project2 = ToDoProject('My second amazing project', []);
const project3 = ToDoProject('My third amazing project!!', []);


const projectManager = ProjectManager([]);
projectManager.addItem(project3);
projectManager.removeItem(project2);


console.log(projectManager);
renderTasks('Home');


const side_bar = document.querySelector('#side-bar');

const home_menu_item = document.querySelector('#home-project');
const today_menu_item = document.querySelector('#today');
const upcoming_menu_item = document.querySelector('#upcoming');

home_menu_item.addEventListener("click", (e) => renderTasks(e, 'Home'));
today_menu_item.addEventListener("click", (e) => renderTasks(e, 'Today'));
upcoming_menu_item.addEventListener("click", (e) => renderTasks(e, 'Upcoming'));

// next thing: need to create layout for the different pages.
// Basic layout is the same for all pages
