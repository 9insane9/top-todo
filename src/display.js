export const displayController = (function() {
    let currentProjectIndex = 0

    function createMainLayout() {
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
        const submitBtnEl = document.createElement("button")

        containerEl.classList.add("container")
        displayTopEl.classList.add("display-top")
        leftPanelEl.classList.add("left-panel")
        rightPanelEl.classList.add("right-panel")
        displayBottomEl.classList.add("display-bottom")
        dialogEl.classList.add("dialog")
        dialogCloseBtnEl.classList.add("dialog-close-button")
        dialogCloseBtnImageEl.classList.add("dialog-close-image")
        formEl.classList.add("form")
        submitBtnEl.classList.add("submit-button")

        projectsBtnEl.classList.add("projects-button")
        addBtn.classList.add("add-button")

        submitBtnEl.setAttribute("type", "submit")
        submitBtnEl.setAttribute("formmethod", "dialog")
        submitBtnEl.setAttribute("value", "submit")

        projectsBtnEl.textContent = "PROJECTS" //placeholder
        addBtn.textContent = "ADD" //placeholder
        dialogCloseBtnEl.textContent = "CLOSE" //placeholder
        submitBtnEl.textContent = "SUBMIT" //same

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
        formEl.appendChild(submitBtnEl)

        bodyEl.appendChild(containerEl)

        
    }

    function renderProjects(projectsArray) {
        const rightPanelEl = document.querySelector(".right-panel")
        const leftPanelEl = document.querySelector(".left-panel")

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
        const rightPanelEl = document.querySelector(".right-panel")
        rightPanelEl.textContent = ""

        currentProjectIndex = projectIndex
        console.log(`current project is ${currentProjectIndex}`)

        if (projectsArray[projectIndex].todos.length === 0) {
            rightPanelEl.textContent = "no todos here yet, let's add some!"
         } else {

        projectsArray[projectIndex].todos.forEach((todo, index) => {
            const todoEl = document.createElement("div")
            todoEl.classList.add("todo")
            todoEl.setAttribute("data-index", index)

            const todoTitleEl = document.createElement("h3")
            todoTitleEl.textContent = todo.title
            todoTitleEl.classList.add("todo-title")

            const todoDueDateEl = document.createElement("h3")
            todoDueDateEl.textContent = todo.dueDate
            todoDueDateEl.classList.add("todo-duedate")

            const editTodoBtnEl = document.createElement("button")
            editTodoBtnEl.classList.add("edit-btn")
            editTodoBtnEl.textContent = "edit"

            const deleteTodoBtnEl = document.createElement("button")
            deleteTodoBtnEl.classList.add("delete-btn")
            deleteTodoBtnEl.textContent = "delete"

            todoEl.appendChild(todoTitleEl)
            todoEl.appendChild(todoDueDateEl)
            todoEl.appendChild(editTodoBtnEl)
            todoEl.appendChild(deleteTodoBtnEl)

            rightPanelEl.appendChild(todoEl)
        })
        }
    }

    function renderDialog(isProjectPanelVisible = 0) {
        const dialogEl = document.querySelector(".dialog")
        dialogEl.showModal()

        if (isProjectPanelVisible) {
            projectDialog()
        } else {
            todoDialog()
        }
    }

    function projectDialog() {
        console.log("rendering new project dialog")
        
        const formEl = document.querySelector(".form")
        const nameInputEl = document.createElement("input")
        nameInputEl.setAttribute("type", "text")
        nameInputEl.setAttribute("placeholder", "My Project")
        formEl.appendChild(nameInputEl)
    }

    function todoDialog() {
        console.log("rendering new todo dialog")
    }

    function getCurrentProjectIndex() {
        return currentProjectIndex
    }
    

    return { createMainLayout, renderProjects, renderTodos, renderDialog, getCurrentProjectIndex }

}())


