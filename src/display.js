import { format, isPast } from 'date-fns';
import { DateHandler } from './date.js'
import pencilImg from './images/pencil.png'
import trashcanImg from './images/trash-can-outline.png'

export const displayController = (function() {
    let currentProjectIndex = 0
    const bodyEl = document.querySelector("body")

    const containerEl = document.createElement("div")
    const displayTopEl = document.createElement("div")
    const leftPanelEl = document.createElement("div")
    const rightPanelEl = document.createElement("div")
    const displayBottomEl = document.createElement("div")
    const projectsBtnEl = document.createElement("button")
    const addBtn = document.createElement("button")
    const dialogEl = document.createElement("dialog")
    const counterEl = document.createElement("div")
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

    const nameInputEl = document.createElement("input")

    attachTogglePriorityButtonDisplayEvent()
    attachCounterEvent()

    function createMainLayout() {
        containerEl.classList.add("container")
        displayTopEl.classList.add("display-top")
        leftPanelEl.classList.add("left-panel")
        rightPanelEl.classList.add("right-panel")
        displayBottomEl.classList.add("display-bottom")
        dialogEl.classList.add("dialog")
        counterEl.classList.add("counter")
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
        counterEl.textContent = `${document.activeElement}`

        displayTopEl.appendChild(leftPanelEl)
        displayTopEl.appendChild(rightPanelEl)
        dialogCloseBtnEl.appendChild(dialogCloseBtnImageEl)
        dialogEl.appendChild(counterEl)
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

    function renderProjects(projectsArray, projectIndex = 0) {
        leftPanelEl.textContent = ""
        
        projectsArray.forEach((project, index) => {
            const projectEl = document.createElement("div")
            const projectNameSpanEl = document.createElement("span")
            const editProjectImgEl = document.createElement("img")

            projectEl.classList.add("project-tile")
            projectNameSpanEl.classList.add("project-name")
            editProjectImgEl.classList.add("edit-project")

            editProjectImgEl.setAttribute("src", `${pencilImg}`)
            projectEl.setAttribute("data-index", index)
            editProjectImgEl.setAttribute("data-index", index)
            projectNameSpanEl.setAttribute("data-index", index)
            projectNameSpanEl.textContent = project.name

            projectEl.appendChild(editProjectImgEl)
            projectEl.appendChild(projectNameSpanEl)
            leftPanelEl.appendChild(projectEl)
        })

        renderTodos(projectsArray, projectIndex)
    }


    function renderTodos(projectsArray, projectIndex = 0) {
        rightPanelEl.textContent = ""

        currentProjectIndex = projectIndex
        const currentProject = projectsArray[projectIndex]
        
        console.log(`currentProjectIndex: ${currentProjectIndex}`)
        console.log(`looking at:`)
        console.log(projectsArray[currentProjectIndex])
        if (!currentProject || !currentProject.todos || currentProject.todos.length === 0) {
            rightPanelEl.textContent = "First task: make todo list!"
         } else {
            projectsArray[projectIndex].todos.forEach((todo, index) => {
                const todoEl = document.createElement("div")
                const todoTitleEl = document.createElement("h3")
                const todoDueDateEl = document.createElement("h3")
                const viewTodoBtnEl = document.createElement("button")
                const deleteTodoBtnEl = document.createElement("button")
                const isDoneBtn = document.createElement("button")

                todoEl.setAttribute("data-index", index)
                viewTodoBtnEl.setAttribute("data-index", index)
                deleteTodoBtnEl.setAttribute("data-index", index)
                isDoneBtn.setAttribute("data-index", index)

                todoEl.classList.add("todo")
                todoTitleEl.classList.add("todo-title")
                todoDueDateEl.classList.add("todo-duedate")
                viewTodoBtnEl.classList.add("view-btn")
                deleteTodoBtnEl.classList.add("delete-btn")
                isDoneBtn.classList.add("is-done-btn")

                todoTitleEl.textContent = todo.title
                todoDueDateEl.textContent = DateHandler.formatDate(todo.dueDate)
                viewTodoBtnEl.textContent = "view"
                deleteTodoBtnEl.textContent = "delete"
                isDoneBtn.textContent = getIsDone(todo, isDoneBtn)

                todoEl.appendChild(todoTitleEl)
                todoEl.appendChild(todoDueDateEl)
                todoEl.appendChild(viewTodoBtnEl)
                todoEl.appendChild(deleteTodoBtnEl)
                todoEl.appendChild(isDoneBtn)
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
            nameInputEl.focus()
        } else {
            formContentEl.appendChild(todoDialog())
            todoTitleInputEl.focus()
        }
    }


    function projectDialog() {
        console.log("rendering project dialog")
        resetSubmitBtnClass()
        resetCounter()
        checkIfDisableButton()
        submitBtnEl.classList.add("new-project-submit")

        const projectDialogContainerEl = document.createElement("div")
        projectDialogContainerEl.classList.add("project-dialog-container")
        nameInputEl.classList.add("project-name-input")

        nameInputEl.setAttribute("type", "text")
        nameInputEl.setAttribute("placeholder", "My Project")
        nameInputEl.value = ""

        projectDialogContainerEl.appendChild(nameInputEl)

        return projectDialogContainerEl
    }

    function todoDialog() {
        console.log("rendering todo dialog")
        const today = new Date()

        resetSubmitBtnClass()
        resetTodoForm()
        resetCounter()
        checkIfDisableButton()
        submitBtnEl.classList.add("new-todo-submit")

        todoTitleInputEl.classList.add("form-input", "title")
        todoDescriptionInputEl.classList.add("form-input", "description")
        todoDueDateInputEl.classList.add("form-input", "date")
        todoNotesInputEl.classList.add("form-input", "notes")
        todoPriorityEl.classList.add("form-input", "priority")

        todoPriorityEl.textContent = "Normal"
        todoPriorityEl.classList.remove("high-priority")

        todoTitleInputEl.setAttribute("type", "text")
        todoDescriptionInputEl.setAttribute("type", "text")
        todoDueDateInputEl.setAttribute("type", "date")

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

    function togglePanelInvisible() {
        leftPanelEl.classList.toggle("invisible")
    }

    function toggleSubmitInvisible() {
        if (submitBtnEl.getAttribute("class") === "submit-button") {
            submitBtnEl.classList.add("invisible")
            
        }
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

    function getProjectName() {
        if (nameInputEl.value) {
            return nameInputEl.value
        } 
        return "My Project"
        
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
        resetSubmitBtnClass()
        toggleSubmitInvisible()

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
        todoDueDateViewEl.textContent = DateHandler.formatDate(projectsArray[currentProjectIndex].todos[todoIndex].dueDate)
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

        resetSubmitBtnClass()
        submitBtnEl.classList.add("edit-todo-submit")

        todoTitleInputEl.value = projectsArray[projectIndex].todos[todoIndex].title
        todoDescriptionInputEl.value = projectsArray[currentProjectIndex].todos[todoIndex].description
        todoDueDateInputEl.value = DateHandler.formatDateForInput(projectsArray[currentProjectIndex].todos[todoIndex].dueDate)
        todoNotesInputEl.value = projectsArray[currentProjectIndex].todos[todoIndex].notes

        const isHighPriority = projectsArray[currentProjectIndex].todos[todoIndex].isHighPriority

        if (!isHighPriority) {
            todoPriorityEl.textContent = "Normal"
        } else if (isHighPriority) {
            todoPriorityEl.textContent = "High"
            todoPriorityEl.classList.add("high-priority")
        }
    }

    function editProjectForm(projectsArray, projectIndex) {
        const deleteProjectEl = document.createElement("img")
        deleteProjectEl.setAttribute("src",`${trashcanImg}`)
        deleteProjectEl.classList.add("delete-project")

        formContentEl.textContent = ""
        formContentEl.appendChild(projectDialog())
        formContentEl.appendChild(deleteProjectEl)
        // console.log("editing")

        resetSubmitBtnClass()
        submitBtnEl.classList.add("edit-project-submit")

        nameInputEl.value = projectsArray[projectIndex].name

        dialogEl.showModal()
    }

    function resetSubmitBtnClass() {
        submitBtnEl.removeAttribute("class")
        submitBtnEl.classList.add("submit-button")
    }

    function resetTodoForm() {        
        todoTitleInputEl.value = ""
        todoDescriptionInputEl.value = ""
        todoDueDateInputEl.value = ""   
        todoNotesInputEl.value = ""
        todoPriorityEl.textContent = "Normal"
        todoPriorityEl.classList.remove("high-priority")
    }

    function toggleIsDoneEvent() {
        const isDoneBtn = document.querySelector(".is-done-btn")
        console.log(isDoneBtn)
        let text

        if (isDoneBtn.classList.contains("not-done")) {
            isDoneBtn.classList.remove("not-done")
            isDoneBtn.classList.add("done")
            text = "done"
        } else if (isDoneBtn.classList.contains("done")) {
            isDoneBtn.classList.remove("done")
            isDoneBtn.classList.add("not-done")
            text = "not done"
        }
        isDoneBtn.textContent = text
    }

    function getIsDone(todo, isDoneBtn) {
        
        if(todo.isDone) {
            isDoneBtn.classList.remove("not-done")
            isDoneBtn.classList.add("done")
            return "done"
        } else if (!todo.isDone) {
            isDoneBtn.classList.remove("done")
            isDoneBtn.classList.add("not-done")
            return "not done"
        }
    }

    function getSubmitBtnState() {
        let state

        if (submitBtnEl.classList.contains("new-project-submit")) {
            state = "new-project"
        }
        if (submitBtnEl.classList.contains("new-todo-submit")) {
            state = "new-todo"
        }
        if (submitBtnEl.classList.contains("edit-todo-submit")) {
            state = "edit-todo"
        } if (submitBtnEl.classList.contains("edit-project-submit")) {
            state = "edit-project"
        }
        return state
    }

    function getActiveInputElement() {
        const type = document.activeElement.getAttribute("type")
        console.log(document.activeElement.tagName)

        if (type === "text" || document.activeElement.tagName === "TEXTAREA") {
            return document.activeElement
        }
    }

    function getInputIdentifier() {
        const classList = getActiveInputElement().classList
        let state
        
        if (classList.contains("title")) {
            console.log("title")
            state = "title"
        }
        if (classList.contains("description")) {
            console.log("description")
            state = "description"
        }
        if (classList.contains("notes")) {
            console.log("notes")
            state = "notes"
        }
        if (classList.contains("project-name-input")) {
            console.log("project")
            state = "project"
        }
        return state
    }

    function getActiveInputLength() {
        const activeInput = getActiveInputElement()
        if (activeInput) {
            console.log(activeInput.value.length)
            return activeInput.value.length
        }
        return 0;
    }

    function attachCounterEvent() {
        document.addEventListener("keyup", (event) => {
            if (event.key === "Tab") {
                return
            }
            counterEvent() 
        })
    }

    const counterObj = {
        titleCount: 0,
        descriptionCount: 0,
        notesCount: 0,
        projectCount: 0,
    }

    const counterLimitTracker = {
        isTitleTooLong: false,
        isDescriptionTooLong: false,
        isNotesTooLong: false,
        isProjectTooLong: false,
    }

    function resetCounter() {
        counterObj.titleCount = 0
        counterObj.descriptionCount = 0
        counterObj.notesCount = 0
        counterObj.projectCount = 0

        counterLimitTracker.isTitleTooLong = false
        counterLimitTracker.isDescriptionTooLong = false
        counterLimitTracker.isNotesTooLong = false
        counterLimitTracker.isProjectTooLong = false

        counterEl.textContent = ""
    }

    function counterEvent() {
        const counterLimits = {
            titleLimit: 60,
            descriptionLimit: 100,
            notesLimit: 300,
            projectLimit:60,
        }

        let isPastLimit = false

        switch (getInputIdentifier()) {
            case "title":
                counterObj.titleCount = getActiveInputLength()
                counterEl.textContent = `${counterObj.titleCount} / ${counterLimits.titleLimit}`

                isPastLimit = counterLimitTracker.isTitleTooLong
                inputLimiter(counterObj.titleCount, counterLimits.titleLimit, isPastLimit)
                checkIfDisableButton()
                updateCounterStyling(counterObj.titleCount / counterLimits.titleLimit)
                break
            case "description":
                counterObj.descriptionCount = getActiveInputLength()
                counterEl.textContent = `${counterObj.descriptionCount} / ${counterLimits.descriptionLimit}`

                isPastLimit = counterLimitTracker.isdescriptionTooLong
                inputLimiter(counterObj.descriptionCount, counterLimits.descriptionLimit, isPastLimit)
                checkIfDisableButton()
                updateCounterStyling(counterObj.descriptionCount / counterLimits.descriptionLimit)
                break
            case "notes":
                counterObj.notesCount = getActiveInputLength()
                counterEl.textContent = `${counterObj.notesCount} / ${counterLimits.notesLimit}`

                isPastLimit = counterLimitTracker.isNotesTooLong
                inputLimiter(counterObj.notesCount, counterLimits.notesLimit, isPastLimit)
                checkIfDisableButton()
                updateCounterStyling(counterObj.notesCount / counterLimits.notesLimit)
                break
            case "project":
                counterObj.projectCount = getActiveInputLength()
                counterEl.textContent = `${counterObj.projectCount} / ${counterLimits.projectLimit}`

                isPastLimit = counterLimitTracker.isProjectTooLong
                inputLimiter(counterObj.projectCount, counterLimits.projectLimit, isPastLimit)
                checkIfDisableButton()
                updateCounterStyling(counterObj.projectCount / counterLimits.projectLimit)
                break
        }
        console.log(counterObj)
        return counterLimits
    }

    function inputLimiter(countProp, countLimit, isPastLimit) {
        const activeElement = document.activeElement
        let inputIdentifier = getInputIdentifier()

        if (countProp > countLimit) {
            if (!activeElement.classList.contains("overmax")) {
                activeElement.classList.add("overmax")
                isPastLimit = true
                updateCounterLimitTracker(inputIdentifier, true)
            }
        } else if (countProp <= countLimit) {
            if (activeElement.classList.contains("overmax")) {
                activeElement.classList.remove("overmax")
                isPastLimit = false
                updateCounterLimitTracker(inputIdentifier, false)
            }
        }
        console.log(counterLimitTracker)
    }

    function updateCounterLimitTracker(identifier, isPastLimit) {
        switch (identifier) {
            case "title":
                counterLimitTracker.isTitleTooLong = isPastLimit;
                break;
            case "description":
                counterLimitTracker.isDescriptionTooLong = isPastLimit;
                break;
            case "notes":
                counterLimitTracker.isNotesTooLong = isPastLimit;
                break;
            case "project":
                counterLimitTracker.isProjectTooLong = isPastLimit;
                break;
        }
    }

    function checkIfDisableButton() {
        let anyPropertyTrue = false
        let isAtodoDialog = false

        const getCurrentDialogState = getSubmitBtnState()

        if (getCurrentDialogState === "new-todo" ||
            getCurrentDialogState === "edit-todo") {
                isAtodoDialog = true
                console.log("is a todo dialog")
        }
    
        for (const [key, value] of Object.entries(counterLimitTracker)) {
            if (value === true) {
                anyPropertyTrue = true;
                break
            }
        }
    
        if (anyPropertyTrue || (!counterObj.titleCount && isAtodoDialog)) {
            submitBtnEl.setAttribute("disabled", "disabled")
        } else {
            submitBtnEl.removeAttribute("disabled")
        }
    }

    function updateCounterStyling(ratio) {
        if (ratio > 0.75) {
            counterEl.classList.remove("hidden")
            counterEl.classList.remove("overcap")

        } else if (ratio <= 0.75) {
            if(!counterEl.classList.contains("hidden")) {
                counterEl.classList.add("hidden")
            }
        }
        if (ratio > 1) {
            if (!counterEl.classList.contains("overcap")) {
                counterEl.classList.add("overcap")
            }
        }


    }


    return { createMainLayout, renderProjects, renderTodos, renderDialog, renderViewTodo, getCurrentProjectIndex, getTodoFormValues, editTodoForm, getSubmitBtnState, getProjectName, togglePanelInvisible, toggleIsDoneEvent, editProjectForm }

}())


