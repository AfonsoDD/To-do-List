class Todo {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID(); // adds a unique identifier for the item;
    }

    // methods to add
}

class Project {
    constructor (name, description) {
        this.name = name;
        this.listOfTodos = [];
        this.description = this.description;
        this.id = crypto.randomUUID();
    }

    // methods to add

    addTodo (todo) {
        this.listOfTodos.push(todo)
    }

    removeTodo (todoObject) { // this will need to be defined
        const id = todoObject.id
        const index = this.listOfTodos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.listOfTodos.splice(index, 1);
        } else {
            console.warn(`To-do ${todoObject.title} not found`);
        }
    }
}

export { Todo, Project}