import StorageHandler from './storage.js'

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

//here was storage
// class StorageHandler {
//     static projectsParsed = []
//     static projectsProcessed = []

//     static save(projects = ProjectHandler.projectsArray) {
//         const projectsJSON = JSON.stringify(projects)
//         localStorage.setItem("projectsJSON", projectsJSON)
//     }

//     static load(reference = "projectsJSON") {
//         const text = localStorage.getItem(reference)
//         this.projectsParsed = JSON.parse(text)
//     }

//     static addMethods() {
//         const output = []

//         this.projectsParsed.forEach(project => {
//             const newProject = new Project(project.name)
//             const todosForNewProject = []

//             project.todos.forEach(todo => {
//                 const newTodo = new Todo(todo.title, 
//                                         todo.description,
//                                         todo.dueDate,
//                                         todo.notes,
//                                         todo.priority,
//                                         todo.isDone)
                
//                 todosForNewProject.push(newTodo)
//             })
        
//             newProject.todos = todosForNewProject

//             output.push(newProject)
//         })

//         this.projectsProcessed = output;
//     }

//     static rebuildTo(array = ProjectHandler.projectsArray) {
//         this.load()
//         this.addMethods()
//         array = this.projectsProcessed
//     }

//     static saveAndRebuildTo(array = ProjectHandler.projectsArray) {
//         this.save()
//         this.load()
//         this.addMethods()
//         array = this.projectsProcessed
//     }
// }
//end storage

function appEngine() {//iife?

}


ProjectHandler.addProject()
ProjectHandler.addProject("testproject2")
ProjectHandler.addTodo(0)
ProjectHandler.addTodo(1)
// console.log(ProjectHandler.projectsArray)

ProjectHandler.projectsArray[0].todos[0].editProperty("description", "first test")
ProjectHandler.projectsArray[1].todos[0].editProperty("description", "another test")
ProjectHandler.projectsArray[0].todos[0].togglePriority()
ProjectHandler.projectsArray[0].todos[0].togglePriority()

console.log("intial data")
console.log(ProjectHandler.projectsArray)


//test
// StorageHandler.save()
// StorageHandler.load()
// console.log("parsed data:")
// console.log(StorageHandler.projectsParsed)

// StorageHandler.addMethods()
// console.log("processed data-end:")
// console.log(StorageHandler.projectsProcessed)

StorageHandler.saveAndRebuildTo(ProjectHandler.projectsArray)

StorageHandler.projectsProcessed[0].todos[0].toggleisDone();
