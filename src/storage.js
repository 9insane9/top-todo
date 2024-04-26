export class StorageHandler {
    static projectsParsed = []
    static projectsProcessed = []

    static saveFrom(array) {
        console.log("saving to local storage");
    
        if (array.length === 0) {
            localStorage.removeItem("projectsJSON");
        } else {
            const projectsJSON = JSON.stringify(array);
            localStorage.setItem("projectsJSON", projectsJSON);
        }
    }

    static loadJSON(ref = "projectsJSON") {
        const storedData = localStorage.getItem(ref);
        console.log("Stored Data:", storedData)
    
        if (!storedData) {
            localStorage.setItem(ref, "[]");
            this.projectsParsed = [];
        } else {
            this.projectsParsed = JSON.parse(storedData);
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
                                        todo.isHighPriority,
                                        todo.isDone)
                
                todosForNewProject.push(newTodo)
            })
        
            newProject.todos = todosForNewProject
            output.push(newProject)
        })
        this.projectsProcessed = output;
    }

    static initializeTo(liveProjectArray, projectConstructor) {
        if (liveProjectArray.length === 0) {
            this.loadJSON()
            console.log(`${this.projectsParsed.length}`)
            console.log("live array is empty")
            if (this.projectsParsed.length === 0) {
                liveProjectArray.push(new projectConstructor())
                console.log(`starting fresh ${liveProjectArray}`)
            }
        }
    }
}