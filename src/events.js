// Event Handler Module:

import { appendNewTodo, appendNewProject, showTodoForm, deleteTodo, showProjectForm, appendTodos, updateProjectDisplay} from "./dommanipulation";
import { Todo, Project } from "./classes";
import { projectManager } from "./statemanager.js";

const manager = projectManager() // initilizes the manager object, I do it here to centralize everything


window.manager = manager // FOR TESTING

function setEvents () {

    const addTodo = document.querySelector(".add-todo");
    addTodo.addEventListener("click", showTodoForm);

    const addProject = document.querySelector(".add-project");
    addProject.addEventListener("click", showProjectForm);
}

function exitForms () {

    document.addEventListener("click", e => {

        const overlay = document.querySelector(".overlay");
    
        if (overlay && e.target.matches(".overlay")) { // if you click the overlay, you exit the form, easy
            overlay.remove();
        }
    })
}

function submitForms () {

    document.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoForm = document.querySelector('.todo-form');
        const projectForm = document.querySelector('.project-form');

        if (todoForm) {
            const activeList = manager.getActiveProject().listOfTodos;
            const title = todoForm.elements["todo-title"].value;
            const description = todoForm.elements["todo-description"].value;
            const priority = todoForm.elements["priority-option"].value;
            const newTodo = new Todo(title, description, "08/08/2025", priority)
            appendNewTodo(activeList, newTodo)
            document.querySelector(".overlay").remove()
        }

        if (projectForm) {
            const name = projectForm.elements["project-name"].value;
            const description = projectForm.elements["project-description"].value;
            const newProject = new Project(name, description);

            manager.addProject(newProject);
            appendNewProject(newProject);
            document.querySelector(".overlay").remove();
            appendTodos(newProject); // immediatelly shows the project created
            manager.setActiveProject(newProject);
        }
    })
}

function deleteTodoButton () {

    document.addEventListener("click", (e) => {

        if (e.target.matches(".todo-delete")) {
            const activeList = manager.getActiveProject().listOfTodos;
            const card = e.target.closest("[data-id]");
            const id = card.getAttribute("data-id");
            deleteTodo(activeList, id);
        }
    });
}

function selectProject () {
    
    document.addEventListener("click", (e) => {
        if (e.target.matches(".project-list p")) {
            const projectClickedID = e.target.closest('[data-id]').dataset.id;
            const projectToDisplay = manager.getAllProjects().find( a => a.id === projectClickedID)
            appendTodos(projectToDisplay);
            updateProjectDisplay(projectToDisplay);
            manager.setActiveProject(projectToDisplay);
        }
    })
}

/* WIP
function selectProject () {

    document.addEventListener("click", (e) => {

    })

}
*/


export { setEvents, exitForms, submitForms, deleteTodoButton, selectProject, manager }


// const todoForm = document.querySelector(".todo-form");

