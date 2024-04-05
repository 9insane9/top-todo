export const displayController = (function() {

    function createMainLayout() { //this needs to vomit out its garbage so others could consume
        const bodyEl = document.querySelector("body")

        const displayTopEl = document.createElement("div")
        displayTopEl.classList.add("display-top")

        const leftPanelEl = document.createElement("div")
        leftPanelEl.classList.add("left-panel")

        const rightPanelEl = document.createElement("div")
        rightPanelEl.classList.add("right-panel")

        const addBtn = document.createElement("button")
        addBtn.classList.add("add-button")
        addBtn.textContent = "ADD" //placeholder

        rightPanelEl.appendChild(addBtn)

        displayTopEl.appendChild(leftPanelEl)
        displayTopEl.appendChild(rightPanelEl)

        const displayBottomEl = document.createElement("div")
        displayBottomEl.classList.add("display-bottom")

        const projectsBtn = document.createElement("button")
        projectsBtn.classList.add("projects-button")
        projectsBtn.textContent = "PROJECTS" //placeholder

        displayBottomEl.appendChild(projectsBtn)

        const containerEl = document.createElement("div")
        containerEl.classList.add("container")

        containerEl.appendChild(displayTopEl)
        containerEl.appendChild(displayBottomEl)
        bodyEl.appendChild(containerEl)

        const dialogEl = document.createElement("dialog")
        dialogEl.classList.add("edit-dialog")
        
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
            editTodoBtnEl.textContent = "edit"

            const deleteTodoBtnEl = document.createElement("button")
            deleteTodoBtnEl.textContent = "delete"

            todoEl.appendChild(todoTitleEl)
            todoEl.appendChild(todoDueDateEl)
            todoEl.appendChild(editTodoBtnEl)
            todoEl.appendChild(deleteTodoBtnEl)



            rightPanelEl.appendChild(todoEl)
       })
    }

    return { createMainLayout, renderProjects, renderTodos }

}())


