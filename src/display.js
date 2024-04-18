import { format } from 'date-fns';
import { DateHandler } from './date.js'

export const displayController = (function() {
    let currentProjectIndex = 0
    // let isTodoEditDialog = false
    // let isProjectEditDialog = false
    const bodyEl = document.querySelector("body")

    const containerEl = document.createElement("div")
    const displayTopEl = document.createElement("div")
    const leftPanelEl = document.createElement("div")
    const rightPanelEl = document.createElement("div")
    const displayBottomEl = document.createElement("div")
    const projectsBtnEl = document.createElement("button")
    const addBtn = document.createElement("button")
    const dialogEl = document.createElement("dialog")
    const dialogCloseBtnEl = document.createElement("button")
    const dialogCloseBtnImageEl = document.createElement("image")
    const formEl = document.createElement("form")
    const formContentEl = document.createElement("div")
    const submitBtnEl = document.createElement("button")
    const todoDialogContainerEl = document.createElement("div")
    const todoTitleInputEl = document.createElement("input")
    const todoDescriptionInputEl = document.createElement("input")
    const todoDueDateInputEl = document.createElement("input")
    const todoNotesInputEl = document.createElement("textarea")
    const todoPriorityEl = document.createElement("button")

    attachTogglePriorityButtonDisplayEvent()

    function createMainLayout() {
        containerEl.classList.add("container")
        displayTopEl.classList.add("display-top")
        leftPanelEl.classList.add("left-panel")
        rightPanelEl.classList.add("right-panel")
        displayBottomEl.classList.add("display-bottom")
        dialogEl.classList.add("dialog")
        dialogCloseBtnEl.classList.add("dialog-close-button")
        dialogCloseBtnImageEl.classList.add("dialog-close-image")
        formEl.classList.add("form")
        formContentEl.classList.add("form-content")
        submitBtnEl.classList.add("submit-button")
        todoDialogContainerEl.classList.add("todo-dialog-container")
        projectsBtnEl.classList.add("projects-button")
        addBtn.classList.add("add-button")

        submitBtnEl.setAttribute("type", "submit")
        submitBtnEl.setAttribute("formmethod", "dialog")
        submitBtnEl.setAttribute("value", "submit")

        projectsBtnEl.textContent = "PROJECTS"
        addBtn.textContent = "ADD"
        dialogCloseBtnEl.textContent = "CLOSE"
        submitBtnEl.textContent = "SUBMIT"

        displayTopEl.appendChild(leftPanelEl)
        displayTopEl.appendChild(rightPanelEl)
        dialogCloseBtnEl.appendChild(dialogCloseBtnImageEl)
        dialogEl.appendChild(dialogCloseBtnEl)
        dialogEl.appendChild(formEl)
        containerEl.appendChild(displayTopEl)
        containerEl.appendChild(displayBottomEl)
        containerEl.appendChild(projectsBtnEl)
        containerEl.appendChild(addBtn)
        containerEl.appendChild(dialogEl)
        formEl.appendChild(formContentEl)
        formEl.appendChild(submitBtnEl)
        bodyEl.appendChild(containerEl)        
    }


    function renderProjects(projectsArray) {
        leftPanelEl.textContent = ""
        projectsArray.forEach((project, index) => {
            const projectEl = document.createElement("button")

            projectEl.classList.add("project-tile")
            projectEl.setAttribute("data-index", index)
            projectEl.textContent = project.name
            leftPanelEl.appendChild(projectEl)
        })

        renderTodos(projectsArray)
    }


    function renderTodos(projectsArray, projectIndex = 0) {
        rightPanelEl.textContent = ""

        currentProjectIndex = projectIndex
        console.log(`currentProjectIndex: ${currentProjectIndex}`)

        if (projectsArray[projectIndex].todos.length === 0) {
            rightPanelEl.textContent = "First task: make todo list!"
         } else {

        projectsArray[projectIndex].todos.forEach((todo, index) => {
            const todoEl = document.createElement("div")
            const todoTitleEl = document.createElement("h3")
            const todoDueDateEl = document.createElement("h3")
            const viewTodoBtnEl = document.createElement("button")
            const deleteTodoBtnEl = document.createElement("button")

            todoEl.setAttribute("data-index", index)
            viewTodoBtnEl.setAttribute("data-index", index)
            deleteTodoBtnEl.setAttribute("data-index", index)

            todoEl.classList.add("todo")
            todoTitleEl.classList.add("todo-title")
            todoDueDateEl.classList.add("todo-duedate")
            viewTodoBtnEl.classList.add("view-btn")
            deleteTodoBtnEl.classList.add("delete-btn")

            todoTitleEl.textContent = todo.title
            todoDueDateEl.textContent = DateHandler.formatDate(todo.dueDate)
            viewTodoBtnEl.textContent = "view"
            deleteTodoBtnEl.textContent = "delete"

            todoEl.appendChild(todoTitleEl)
            todoEl.appendChild(todoDueDateEl)
            todoEl.appendChild(viewTodoBtnEl)
            todoEl.appendChild(deleteTodoBtnEl)
            rightPanelEl.appendChild(todoEl)
        })
        }
    }


    function renderDialog(isProjectPanelVisible = 0) {
        dialogEl.showModal()

        const formContentEl = document.querySelector(".form-content")
        formContentEl.textContent = ""

        if (isProjectPanelVisible) {
            formContentEl.appendChild(projectDialog())
        } else {
            formContentEl.appendChild(todoDialog())
        }
    }


    function projectDialog() {
        console.log("rendering project dialog")

        const nameInputEl = document.createElement("input")

        nameInputEl.setAttribute("type", "text")
        nameInputEl.setAttribute("placeholder", "My Project")

        return nameInputEl
    }

    function todoDialog() {
        console.log("rendering todo dialog")

        todoTitleInputEl.classList.add("form-input", "title")
        todoDescriptionInputEl.classList.add("form-input", "description")
        todoDueDateInputEl.classList.add("form-input", "date")
        todoNotesInputEl.classList.add("form-input", "notes")
        todoPriorityEl.classList.add("form-input", "priority")

        todoTitleInputEl.setAttribute("type", "text")
        todoDescriptionInputEl.setAttribute("type", "text")
        todoDueDateInputEl.setAttribute("type", "date")

        todoPriorityEl.textContent = "Normal"
        todoPriorityEl.classList.remove("high-priority")

        todoTitleInputEl.setAttribute("placeholder", "play gaem")
        todoDescriptionInputEl.setAttribute("placeholder", "description of gaem")
        todoNotesInputEl.setAttribute("placeholder", "Lorem ipsum yadda yadda yadda yadda yadda yadda yadda")

        todoDialogContainerEl.appendChild(todoTitleInputEl)
        todoDialogContainerEl.appendChild(todoDescriptionInputEl)
        todoDialogContainerEl.appendChild(todoDueDateInputEl)
        todoDialogContainerEl.appendChild(todoNotesInputEl)
        todoDialogContainerEl.appendChild(todoPriorityEl)

        return todoDialogContainerEl
    }


    function getCurrentProjectIndex() {
        return currentProjectIndex
    }

    function getTodoFormValues() {
        const obj = {
            title: todoTitleInputEl.value,
            description: todoDescriptionInputEl.value,
            dueDate: todoDueDateInputEl.value,
            notes: todoNotesInputEl.value,
            isHighPriority: getFormTodoPriority(),
            isDone: false
        }

        console.log(obj)
        return obj
    }

    function attachTogglePriorityButtonDisplayEvent() {
        todoPriorityEl.addEventListener("click", (e) => {

            todoPriorityEl.textContent === "Normal" ? todoPriorityEl.textContent = "High" : todoPriorityEl.textContent = "Normal"

            if (todoPriorityEl.textContent === "Normal") {
                todoPriorityEl.classList.remove("high-priority")
            } else if (todoPriorityEl.textContent === "High") {
                todoPriorityEl.classList.add("high-priority")
            }

            e.preventDefault()
        })
    }

    function getFormTodoPriority(){
        return [...todoPriorityEl.classList].includes("high-priority")
    }

    function renderViewTodo(projectsArray, currentProjectIndex, todoIndex) {
        formContentEl.textContent = ""

        const todoViewContainer = document.createElement("div")
        todoViewContainer.classList.add("todo-view-container")

        const todoTitleViewEl = document.createElement("p")
        const todoDescriptionViewEl = document.createElement("p")
        const todoDueDateViewEl = document.createElement("p")
        const todoNotesViewEl = document.createElement("p")
        const todoIsHighPriorityViewEl = document.createElement("p")
        const todoIsDoneViewEl = document.createElement("p")
        const editBtnEl = document.createElement("button")
       
        todoTitleViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].title
        todoDescriptionViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].description
        todoDueDateViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].dueDate
        todoNotesViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].notes
        todoIsHighPriorityViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].isHighPriority
        todoIsDoneViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].isDone
        editBtnEl.textContent = "edit"

        editBtnEl.classList.add("edit-btn")
        editBtnEl.setAttribute("data-index", todoIndex)

        todoViewContainer.appendChild(todoTitleViewEl)
        todoViewContainer.appendChild(todoDescriptionViewEl)
        todoViewContainer.appendChild(todoDueDateViewEl)
        todoViewContainer.appendChild(todoNotesViewEl)
        todoViewContainer.appendChild(todoIsHighPriorityViewEl)
        todoViewContainer.appendChild(todoIsDoneViewEl)
        todoViewContainer.appendChild(editBtnEl)       
        formContentEl.appendChild(todoViewContainer)
    }

    function editTodoForm(projectsArray, projectIndex, todoIndex) {
        formContentEl.textContent = ""
        formContentEl.appendChild(todoDialog())

        todoTitleInputEl.value = projectsArray[projectIndex].todos[todoIndex].title
        todoDescriptionInputEl.value = projectsArray[currentProjectIndex].todos[todoIndex].description
        todoDueDateInputEl.value = projectsArray[currentProjectIndex].todos[todoIndex].dueDate       
        todoNotesInputEl.value = projectsArray[currentProjectIndex].todos[todoIndex].notes
        // todoPriorityEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].isHighPriority

        const isHighPriority = projectsArray[currentProjectIndex].todos[todoIndex].isHighPriority

        if (!isHighPriority) {
            todoPriorityEl.textContent = "Normal"
        } else if (isHighPriority) {
            todoPriorityEl.textContent = "High"
            todoPriorityEl.classList.add("high-priority")
        }
    }

    return { createMainLayout, renderProjects, renderTodos, renderDialog, renderViewTodo, getCurrentProjectIndex, getTodoFormValues, editTodoForm }

}())


