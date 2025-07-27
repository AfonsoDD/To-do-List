// DOM Manipulation Module:

import projectManager from './statemanager'

// 1. Function that creates a "Card" (a div) for a To-do based on a Todo object (defined in classes.js);
function createTodoCard (todoObject) { // obviously takes a Todo object
    
    const todoContainer = document.querySelector("#todo-container")
    const todoCard = document.createElement("div"); // creates the div
    todoCard.classList.add("card-container");
    todoCard.setAttribute("data-id", todoObject.id); // associates the ID of the div to the ID of the object

    // Generates the content of the card based on the object given
    todoCard.innerHTML = `
        <p class="todo-title">${todoObject.title}</p>
        <p class="todo-description">${todoObject.description}</p>
        <p class="todo-priority">${todoObject.priority}</p>
        <button class="todo-delete">Delete</button>`

    todoContainer.appendChild(todoCard); // appends the div to the correct container
}

// 2. A simple iterator for an object. Here it creates a card for every todo in a todo list;

    // 2.1 The loader - Function that loads the UI with the current To-do List;
function appendTodos (todoList) { // takes an array as an argument
    
    const todoContainer = document.querySelector("#todo-container");
    todoContainer.innerHTML = "";
    
    todoList.forEach(todoObject => createTodoCard(todoObject))
}

    // 2.2 The adder - Function that appends a new To-do Item to an already existing list;
function appendNewTodo (todoList, todoObject) {
    
    // Adds to the list
    todoList.push(todoObject);

    // Adds to the DOM
    createTodoCard(todoObject);
}

// 3. Delete functionality

    // 3.1 Delete one To-do Object:
function deleteTodo (todoList, id) {

    // Delete To-do item from the array it lives in
    const index = todoList.findIndex( object => object.id === id);
    if (index !== -1) {
        todoList.splice(index, 1);
    }

    // Delete To-do container from the UI
    const todoElement = document.querySelector(`[data-id="${id}"]`);
    if (todoElement) {
        todoElement.remove();
    }
}

// 4. Add the form to upload a To-do:

    // 4.1 The form itself
function showTodoForm () { // this should go to the dom file

    const overlay = addOverlay()
    const todoForm = document.createElement("form");
    todoForm.classList.add("todo-form")
    todoForm.innerHTML = `
    <input type="text" name="todo-title" placeholder="New To-do" minlength="3" maxlength="25" required>
    <textarea name="todo-description" maxlength="200">Describe the To-do you want to add</textarea>
    <div>
        <input type="radio" id="low-prio" name="priority-option" value="Low">
        <label for="low-prio">Low</label>
    </div>
    <div>
        <input type="radio" id="medium-prio" name="priority-option" value="Medium">
        <label for="low-prio">Medium</label>
    </div>
    <div>
        <input type="radio" id="high-prio" name="priority-option" value="High">
        <label for="low-prio">High</label>
    </div>
    <button type="submit">Add</button>
    `
    overlay.appendChild(todoForm); // adds the form to the document
}

    // 4.2 The overlay where the form lives
function addOverlay() {

    const body = document.querySelector("body");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    body.appendChild(overlay);
    return overlay;
}

// Function that Creates a Project

function showProjectForm () {

    const overlay = addOverlay()
    const projectForm = document.createElement("form");
    projectForm.classList.add("project-form");
    projectForm.innerHTML = `
    <input type="text" name="project-name" placeholder="New Project" minlength="3" maxlength="25" required>
    <textarea name="project-description" maxlength="200">Describe your project</textarea>
    <button type="submit">Add</button>
    `
    overlay.appendChild(projectForm);
}

function appendNewProject (projectObject) {
    const projectListUI = document.querySelector(".project-list");
    const newProject = document.createElement("p");
    newProject.setAttribute("data-id", projectObject.id);
    newProject.innerText = `${projectObject.name}`;
    projectListUI.appendChild(newProject); // adds the project to the UI
   // Need to add the project to the list of projects
}


export { createTodoCard, appendTodos, appendNewTodo, deleteTodo, showTodoForm, addOverlay, showProjectForm, appendNewProject }

