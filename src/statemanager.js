// State Manager Module

function assignActiveList (todoList) { // updates the active list
    const activeList = todoList;
    return activeList;
}

function projectManager () {
    
    const listOfProjects = [];

    function addProject(projectObject) {
        listOfProjects.push(projectObject);
    }

    function getProjects () {
        return listOfProjects
    }

    return { addProject, getProjects };
}

export { projectManager }
