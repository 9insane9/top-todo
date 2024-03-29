class ProjectHandler {
    static projects = [];

    static addProject() {
        this.projects.push(new Project)
    }

    static addTodo(projectIndex = 0) {
        this.projects[projectIndex].todos.push(new Todo);
    }
}

class Project {
    constructor(name = "My Project") {
        this.name = "";
        this.todos = []
    }
}

class Todo {
    constructor() {
        this.title = "Todo title"
        this.description = "Todo description"
        this.dueDate = "Todo dueDate"
        this.notes = "Todo notes"
        this.priority = "Low"
        this.isDone = false;
    }

    editProperty(property, value) {
        if (property !== "priority" && property !== "isDone") {
            this[property] = value
        }
    }

    toggleisDone() {
        this.isDone === false ? this.isDone = true : this.isDone = false;
    }

    togglePriority() {
        switch(this.priority) {
            case "Low":
                this.priority = "Normal"
                break
            case "Normal":
                this.priority = "High"
                break
            case "High":
                this.priority = "Low"
                break;
        }
    }
}

ProjectHandler.addProject()
ProjectHandler.addTodo()
console.log(ProjectHandler.projects)

ProjectHandler.projects[0].todos[0].toggleisDone()
ProjectHandler.projects[0].todos[0].editProperty("description", "wolololo")
ProjectHandler.projects[0].todos[0].togglePriority()
ProjectHandler.projects[0].todos[0].togglePriority()
ProjectHandler.projects[0].todos[0].togglePriority()