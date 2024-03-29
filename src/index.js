
class Project {
    constructor() {
        this.name = "My Project";
        this.todos = []
    }

    static projects = [
        {}
    ];


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
        if (property !== priority && property !== isDone) {
            this.property = value
    }   }

    toggleisDone() {
        this.isDone === false ? this.isDone = true : this.isDone = false;
    }

    togglePriority() {
        switch(this.Priority) {
            case "Low":
                this.Priority = "Normal"
                break
            case "Normal":
                this.Priority = "High"
                break
            case "High":
                this.Priority = "Low"
                break;
        }
    }



}