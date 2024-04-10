export default class StorageHandler {
    static projectsParsed = []
    static projectsProcessed = []

    static save(array) {
        const projectsJSON = JSON.stringify(array)
        localStorage.setItem("projectsJSON", projectsJSON)
    }

    static load(reference = "projectsJSON") {
        const text = localStorage.getItem(reference)
        this.projectsParsed = JSON.parse(text)
    }

    static addMethods(projectConstructor, todoConstructor) {
        const output = []

        this.projectsParsed.forEach(project => {
            const newProject = new projectConstructor(project.name)
            const todosForNewProject = []

            project.todos.forEach(todo => {
                const newTodo = new todoConstructor(todo.title, 
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

    static rebuildTo(array, projectConstructor, todoConstructor) {
        this.load()
        this.addMethods(projectConstructor, todoConstructor)
        array = this.projectsProcessed
    }

    static saveAndRebuildTo(array, projectConstructor, todoConstructor) {
        this.save(array) //not sure the whole loop is needed, only save because..
        this.load()       //..only time we need to load is when app loads, otherwise we edit live data
        this.addMethods(projectConstructor, todoConstructor)
        array = this.projectsProcessed
        // console.log("saved and rebuilt")
        console.log(this.projectsProcessed)
    }
}