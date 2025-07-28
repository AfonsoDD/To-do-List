// State Manager Module

function assignActiveList (todoList) { // updates the active list
    const activeList = todoList;
    return activeList;
}

function projectManager () {
    
    const listOfProjects = [];
    let activeProject = listOfProjects[0];

    function addProject(projectObject) {
        listOfProjects.push(projectObject);
    }

    function getAllProjects () {
        return listOfProjects
    }

    function setActiveProject (project) {
        activeProject = project;
    }

    function getActiveProject () {
        return activeProject;
    }

    return { addProject, getAllProjects, setActiveProject, getActiveProject };
}

export { projectManager, assignActiveList }
