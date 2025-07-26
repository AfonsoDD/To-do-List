// Event Handler Module:

import { showTodoForm } from "./dommanipulation";

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

/* WIP

function submitForms () {

    const submitTodo = document.querySelector('.todo-form');

    document.addEventListener("submit", () => {

        const title = submitTodo.title

    })
}

*/

export { setEvents, exitForms }


// const todoForm = document.querySelector(".todo-form");

