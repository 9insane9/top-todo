export class StorageHandler {
    static projectsParsed = []
    static projectsProcessed = []

    static saveFrom(array) {
        console.log("saving to local storage")
    
        if (array.length === 0) {
            localStorage.removeItem("projectsJSON")
        } else {
            const projectsJSON = JSON.stringify(array)
            localStorage.setItem("projectsJSON", projectsJSON)
        }
    
        console.log(`local data saved: ${localStorage.getItem("projectsJSON")}`)
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

        this.addMethods(projectConstructor, todoConstructor)
        array.splice(0, array.length, ...this.projectsProcessed);
    }

    static addMethods(projectConstructor, todoConstructor) {
        const output = []

        this.projectsParsed.forEach(project => {
            const newProject = new projectConstructor(project.name)
            const todosForNewProject = []

            project.todos.forEach(todo => {
                const newTodo = new todoConstructor(todo)
                
                todosForNewProject.push(newTodo)
            })
        
            newProject.todos = [...todosForNewProject]
            output.push(newProject)
        })

        this.projectsProcessed.push(...output)
        console.log(`local data processed:`)
        console.log(this.projectsProcessed)
    }

    static initializeTo(liveProjectArray, projectConstructor, todoConstructor) {
        this.loadJSON()
        console.log(`data initialized:`)
        console.log(this.projectsParsed)

        if (this.projectsParsed.length !== 0) {
            this.loadTo(liveProjectArray, projectConstructor, todoConstructor)
            console.log(`data loaded to live:`)
            console.log(liveProjectArray)
        } else {
            this.createDefaultProject(liveProjectArray, projectConstructor)
        }
    }

    static createDefaultProject(liveProjectArray, projectConstructor) {
        if (liveProjectArray.length === 0) {
            const defaultProject = new projectConstructor()

            liveProjectArray.push(defaultProject)
            this.saveFrom(liveProjectArray)

            console.log(`starting fresh with: ${liveProjectArray}`)
        }
    }
}