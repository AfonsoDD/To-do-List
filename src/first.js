import { Todo, Project } from "./classes.js";
import { createTodoCard, appendTodos, appendNewTodo, deleteTodo, showTodoForm } from "./dommanipulation.js";
import { setEvents, exitForms, submitForms, deleteTodoButton, manager} from "./events.js"


import './styles.css';


// Testing some fake To-dos for 1 project

const todoOne = new Todo("Test 1", "Inside Project 1","08/08/2025","Low",);
const todoTwo = new Todo("Test 2", "Inside Project 1","08/08/2025","Low",);
const todoThree = new Todo("Test 3", "Inside Project 1","08/08/2025","Low",);

const todoOnePTwo = new Todo("Test 1", "Inside Project 2","08/08/2025","Low",);
const todoTwoPTwo = new Todo("Test 2", "Inside Project 2","08/08/2025","Low",);
const todoThreePTwo = new Todo("Test 3", "Inside Project 2","08/08/2025","Low",);

const todoOnePThree = new Todo("Test 1", "Inside Project 3","08/08/2025","Low",);
const todoTwoPThree = new Todo("Test 2", "Inside Project 3","08/08/2025","Low",);
const todoThreePThree = new Todo("Test 3", "Inside Project 3","08/08/2025","Low",);

window.todoTwo = todoTwo;
window.todoOne = todoOne;
window.todoThree = todoThree;

const projectOne = new Project("Project One");
const projectTwo = new Project("Project Two");
const projectThree = new Project("Project Three");

manager.addProject(projectOne);
manager.addProject(projectTwo);
manager.addProject(projectThree);

projectOne.addTodo(todoOne); // works
projectOne.addTodo(todoTwo);
projectOne.addTodo(todoThree);

projectTwo.addTodo(todoOnePTwo); // works
projectTwo.addTodo(todoTwoPTwo);
projectTwo.addTodo(todoThreePTwo);

projectThree.addTodo(todoOnePThree); // works
projectThree.addTodo(todoTwoPThree);
projectThree.addTodo(todoThreePThree);

// projectOne.removeTodo(todoOne); // works

window.projectOne = projectOne;
window.projectTwo = projectTwo;
window.projectThree = projectThree;

appendTodos(projectOne.listOfTodos);

setEvents();

exitForms();

submitForms(projectOne.listOfTodos);

deleteTodoButton(projectOne.listOfTodos);






