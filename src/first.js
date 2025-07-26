import { Todo, Project } from "./classes.js";
import { createTodoCard, appendTodos, appendNewTodo, deleteTodo, showTodoForm } from "./dommanipulation.js";
import { setEvents, exitForms} from "./events.js"
import './styles.css';

// Step 1 - Test some fake To-dos for 1 project

const todoOne = new Todo("Test 1", "This is a test","08/08/2025","Low",);
const todoTwo = new Todo("Test 2", "This is a test","08/08/2025","Low",);
const todoThree = new Todo("Test 3", "This is a test","08/08/2025","Low",);

window.todoTwo = todoTwo;
window.todoOne = todoOne;
window.todoThree = todoThree;

const projectOne = new Project("Project One");
projectOne.addTodo(todoOne); // works
projectOne.addTodo(todoTwo);
projectOne.addTodo(todoThree);

projectOne.removeTodo(todoOne); // works

window.projectOne = projectOne;

appendTodos(projectOne.listOfTodos);

setEvents()

exitForms()






