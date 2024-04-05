import StorageHandler from './storage.js';
import { format, addDays } from 'date-fns';
import { displayController } from './display.js';
import css from './style.css';

class ProjectHandler {
    static projectsArray = []

    static addProject(name) {
        this.projectsArray.push(new Project(name))
    }

    static addTodo(projectIndex = 0) {
        this.projectsArray[projectIndex].todos.push(new Todo())
    }

    static deleteProject(projectIndex) {
        this.projectsArray.splice(projectIndex, 1)
    }

    static deleteTodo(projectIndex, todoIndex) {
        this.projectsArray[projectIndex].todos.splice(todoIndex, 1)
    }
}

class Project {
    constructor(name = "My Project") {
        this.name = name
        this.todos = []
    }
}

class Todo {
    constructor(title = "Todo title",
                description = "Todo description",
                dueDate = "Todo dueDate",
                notes = "Todo notes",
                priority = "Low",
                isDone = false
                ) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.notes = notes
        this.priority = priority
        this.isDone = isDone
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
                break
        }
    }
}

class DateHandler {
    formatDate(date) {
        return format(date, "do MMMM yyyy")
    }

    static tomorrow() {
        const today = new Date()
        const tomorrow = addDays(today, 1)
        const formatted = format(tomorrow, "do MMMM yyyy")
        console.log(formatted)
        return formatted
    }
}

displayController.createMainLayout()

ProjectHandler.addProject()
ProjectHandler.addProject("testproject2")
ProjectHandler.addTodo(0)
ProjectHandler.addTodo(1)
ProjectHandler.projectsArray[0].todos[0].editProperty("description", "first test")
ProjectHandler.projectsArray[1].todos[0].editProperty("description", "another test")
ProjectHandler.projectsArray[0].todos[0].editProperty("title", "first todo on first list")
ProjectHandler.projectsArray[1].todos[0].editProperty("title", "first todo, second list")
ProjectHandler.projectsArray[0].todos[0].togglePriority()
ProjectHandler.projectsArray[0].todos[0].togglePriority()

StorageHandler.saveAndRebuildTo(ProjectHandler.projectsArray, Project, Todo)

ProjectHandler.projectsArray[0].todos[0].toggleisDone();

displayController.renderProjects(ProjectHandler.projectsArray)

function potato() {

}
