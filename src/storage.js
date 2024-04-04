export default class StorageHandler {
    static projectsParsed = []
    static projectsProcessed = []

    static save(array) {//here problem, is solved>?
        const projectsJSON = JSON.stringify(array)
        localStorage.setItem("projectsJSON", projectsJSON)
    }

    static load(reference = "projectsJSON") {
        const text = localStorage.getItem(reference)
        this.projectsParsed = JSON.parse(text)
    }

    static addMethods() {
        const output = []

        this.projectsParsed.forEach(project => {
            const newProject = new Project(project.name) //constructors also problem
            const todosForNewProject = []

            project.todos.forEach(todo => {
                const newTodo = new Todo(todo.title, 
                                        todo.description,
                                        todo.dueDate,
                                        todo.notes,
                                        todo.priority,
                                        todo.isDone)
                
                todosForNewProject.push(newTodo)
            })
        
            newProject.todos = todosForNewProject

            output.push(newProject)
        })

        this.projectsProcessed = output;
    }

    static rebuildTo(array) {
        this.load()
        this.addMethods()
        array = this.projectsProcessed
    }

    static saveAndRebuildTo(array) {
        this.save(array)
        this.load()
        this.addMethods()
        array = this.projectsProcessed
        console.log("saved and rebuilt")
    }
}