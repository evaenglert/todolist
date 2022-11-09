import {ToDoTask, ToDoProject, ProjectManager} from './backend.js'

// -------------------------------------------------------------------
// 'home' project is not deletable. <- have to make sure this is encoded.

const default_project = ToDoProject('home', []);
const projectManager = ProjectManager([default_project]);
console.log(projectManager);

// next thing: need to create layout for the different pages.
// Basic layout is the same for all pages
