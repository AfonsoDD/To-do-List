// Event Handler Module:

import { appendNewTodo, showTodoForm, deleteTodo } from "./dommanipulation";
import { Todo} from "./classes";

function setEvents () {

    const addTodo = document.querySelector(".add-todo");
    addTodo.addEventListener("click", showTodoForm);

    // Missing Project creation and association with respective button;
}

function exitForms () {

    document.addEventListener("click", e => {

        const overlay = document.querySelector(".overlay");
    
        if (overlay && e.target.matches(".overlay")) { // if you click the overlay, you exit the form, easy
            overlay.remove();
        }
    })
}

function submitForms (activeList) {

    document.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoForm = document.querySelector('.todo-form');

        if (todoForm) {
            const title = todoForm.elements["todo-title"].value;
            const description = todoForm.elements["todo-description"].value;
            const priority = todoForm.elements["priority-option"].value;
            const newTodo = new Todo(title, description, "08/08/2025", priority)
            appendNewTodo(activeList, newTodo)
            document.querySelector(".overlay").remove()
        }
    })

    // need to add the project logic, will do after state manager
}

function deleteTodoButton (activeList) {

    document.addEventListener("click", (e) => {

        if (e.target.matches(".todo-delete")) {
            const card = e.target.closest("[data-id]");
            const id = card.getAttribute("data-id");
            deleteTodo(activeList, id);
        }
    });
}



export { setEvents, exitForms, submitForms, deleteTodoButton }


// const todoForm = document.querySelector(".todo-form");

