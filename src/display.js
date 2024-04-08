export const displayController = (function() {
    let currentProjectIndex = 0

    function createMainLayout() {
        const bodyEl = document.querySelector("body")

        const containerEl = document.createElement("div")
        const displayTopEl = document.createElement("div")
        const leftPanelEl = document.createElement("div")
        const rightPanelEl = document.createElement("div")
        const displayBottomEl = document.createElement("div")
        const projectsBtn = document.createElement("button")
        const addBtn = document.createElement("button")
        const dialogEl = document.createElement("dialog")

        containerEl.classList.add("container")
        displayTopEl.classList.add("display-top")
        leftPanelEl.classList.add("left-panel")
        rightPanelEl.classList.add("right-panel")
        displayBottomEl.classList.add("display-bottom")

        dialogEl.classList.add("edit-dialog")
        projectsBtn.classList.add("projects-button")
        addBtn.classList.add("add-button")

        projectsBtn.textContent = "PROJECTS" //placeholder
        addBtn.textContent = "ADD" //placeholder

        displayTopEl.appendChild(leftPanelEl)
        displayTopEl.appendChild(rightPanelEl)
        containerEl.appendChild(displayTopEl)
        containerEl.appendChild(displayBottomEl)
        containerEl.appendChild(projectsBtn)
        containerEl.appendChild(addBtn)
        containerEl.appendChild(dialogEl)

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

    function renderDialog(isProjectPanelVisible) {
        if (isProjectPanelVisible) {
            projectDialog()
        } else {
            todoDialog()
        }
    }

    function projectDialog() {///
        const formEl = document.createElement("form")

    }

    function todoDialog() {///

    }


    // function showHideProjectPanel() {
        
    // }

    function getCurrentProjectIndex() {
        console.log("beep")
        return currentProjectIndex
    }
    

    return { createMainLayout, renderProjects, renderTodos, renderDialog, getCurrentProjectIndex }

}())


