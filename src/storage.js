export default class StorageHandler {
    static projectsParsed = []
    static projectsProcessed = []

    static saveFrom(array) {
        console.log("saving to local storage")

        const projectsJSON = JSON.stringify(array)
        localStorage.setItem("projectsJSON", projectsJSON)
    }

    static loadJSON(ref = "projectsJSON") {
        if (!localStorage.getItem(ref)) {
            localStorage.setItem("projectsJSON", "")
        } else {
            const text = localStorage.getItem(ref)
            this.projectsParsed = JSON.parse(text)
        }
    }

    static loadTo(array, projectConstructor, todoConstructor) {
        console.log("loading stuff to array")

        this.loadJSON()
        this.addMethods(projectConstructor, todoConstructor)
        array = this.projectsProcessed
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
}