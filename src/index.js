import StorageHandler from './storage.js';
import { displayController } from './display.js';
import css from './style.css';

class ProjectHandler {
    static projectsArray = []

    static addProject(name) {
        this.projectsArray.push(new Project(name))
    }

    static addTodo(currentProjectIndex = 0, obj) {
        this.projectsArray[currentProjectIndex].todos.push(new Todo(obj))
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

    editName(name) {
        this.name = name
    }
}

class Todo {
    constructor(obj) {
        this.title = obj.title
        this.description = obj.description
        this.dueDate = obj.dueDate
        this.notes = obj.notes
        this.isHighPriority = obj.isHighPriority
        this.isDone = obj.isDone
    }

    editProperty(property, value) {
        if (property !== "isHighPriority" && property !== "isDone") {
            this[property] = value
        }
    }

    toggleisDone() {
        this.isDone === false ? this.isDone = true : this.isDone = false;
    }

    togglePriority() {
        this.isHighPriority === false ? this.isHighPriority = false : this.isHighPriority = true;
    }
}

const testObj = {
    title: "test title",
    description: "test description",
    dueDate: "test duedate",
    notes: "test notes",
    isHighPriority: false,
    isDone: false
}

testFunction()

function app() {
    let isProjectPanelVisible = true

    displayController.createMainLayout()
    displayController.renderProjects(ProjectHandler.projectsArray)

    attachProjectTileEvents()
    attachTodoEvents()
    attachProjectPanelBtnEvent()
    attachDialogEvent()
    attachCloseDialogEvent()
    attachSubmitEvents()

    function attachProjectPanelBtnEvent() {
        const projectPanelBtn = document.querySelector(".projects-button")
        projectPanelBtn.addEventListener("click", projectPanelEvent)
    }

    function projectPanelEvent() {
        const leftPanelEl = document.querySelector(".left-panel")
        leftPanelEl.classList.toggle("invisible")
        isProjectPanelVisible ? isProjectPanelVisible = false : isProjectPanelVisible = true;
        console.log(`panel visibility ${isProjectPanelVisible}`)

    }
    
    function attachProjectTileEvents() {
        const projectTileElList = document.querySelectorAll(".project-tile")

        projectTileElList.forEach(element => {
            element.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index")
                displayController.renderTodos(ProjectHandler.projectsArray, index)
                // attachTodoEvents()
            })
        })
    }

    function attachTodoEvents() {
        const todoElList = document.querySelectorAll(".todo")

        todoElList.forEach(element => {
            element.addEventListener("click", (event) => {
                const todoIndex = event.target.getAttribute("data-index")
                const currentProjectIndex = displayController.getCurrentProjectIndex()

                switch (event.target.getAttribute("class")) {
                    case "view-btn":
                        const dialogEl = document.querySelector("dialog")
                        dialogEl.showModal()
                        displayController.renderViewTodo(ProjectHandler.projectsArray, currentProjectIndex, todoIndex)
                        attachEditBtnEvent()
                        break
                    case "delete-btn":
                        ProjectHandler.deleteTodo(currentProjectIndex, todoIndex)
                        displayController.renderTodos(ProjectHandler.projectsArray, currentProjectIndex)
                        displayController.renderProjects(ProjectHandler.projectsArray, currentProjectIndex)
                        attachTodoEvents()
                        break
                }})})
    }

    function attachDialogEvent() {
        const addBtnEl = document.querySelector(".add-button")
        addBtnEl.addEventListener("click", () => { 
            displayController.renderDialog(isProjectPanelVisible)
        })
    }

    function attachCloseDialogEvent() {
        const closeBtnEl = document.querySelector(".dialog-close-button")
        const dialogEl = document.querySelector(".dialog")

        closeBtnEl.addEventListener("click", () => {
            console.log("closing dialog")
            dialogEl.close()
        })
    }

    function attachSubmitEvents() {
        const submitBtnEl = document.querySelector(".submit-button")
        const currentProjectIndex = displayController.getCurrentProjectIndex()

        submitBtnEl.addEventListener("click", () => {
            const formValues = displayController.getTodoFormValues()
            
            ProjectHandler.addTodo(displayController.getCurrentProjectIndex(), formValues)
            displayController.renderProjects(ProjectHandler.projectsArray, currentProjectIndex)
            attachProjectTileEvents()
            attachTodoEvents()
        })
    }

    function attachEditBtnEvent() {
        const editBtnEl = document.querySelector(".edit-btn")
        console.log(editBtnEl)

        editBtnEl.addEventListener("click", (e) => {
            const todoIndex = e.target.getAttribute("data-index")

            displayController.editTodoForm(ProjectHandler.projectsArray, displayController.getCurrentProjectIndex(), todoIndex)
        })
    }
}

app()

function testFunction() {
    // StorageHandler.saveFrom(ProjectHandler.projectsArray)

    ProjectHandler.addProject()
    ProjectHandler.addProject("testproject2")
    ProjectHandler.addTodo(0, testObj)
    ProjectHandler.addTodo(1, testObj)
    ProjectHandler.projectsArray[0].todos[0].editProperty("description", "first test")
    ProjectHandler.projectsArray[1].todos[0].editProperty("description", "another test")
    ProjectHandler.projectsArray[0].todos[0].editProperty("title", "first todo on first list")
    ProjectHandler.projectsArray[1].todos[0].editProperty("title", "first todo, second list")
    ProjectHandler.projectsArray[0].todos[0].togglePriority()
    ProjectHandler.projectsArray[0].todos[0].toggleisDone()
    ProjectHandler.projectsArray[0].editName("newName")
}