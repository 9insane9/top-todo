import { format, isPast } from 'date-fns';
import { DateHandler } from './date.js'
import pencilImg from './images/pen.png'
import trashcanImg from './images/trash-can-outline.png'
import closeBoxImg from './images/close-box-outline.png'
import eyeImg from './images/eye-outline.png'
import checkboxBlankImg from './images/checkbox-blank.png'
import checkboxMarkedImg from './images/checkbox-marked.png'
import floppyDiskImg from './images/floppy-disk.png'
import menuImg from './images/menu.png'
import plusImg from './images/plus-box-outline.png'

export const displayController = (function() {
    let currentProjectIndex = 0
    const bodyEl = document.querySelector("body")

    const containerEl = document.createElement("div")
    const displayTopEl = document.createElement("div")
    const leftPanelEl = document.createElement("div")
    const rightPanelEl = document.createElement("div")
    const displayHeaderEl = document.createElement("div")
    const projectsBtnEl = document.createElement("img")
    const addBtn = document.createElement("img")
    const dialogEl = document.createElement("dialog")
    const counterEl = document.createElement("div")
    const dialogCloseBtnEl = document.createElement("img")
    const dialogCloseContainerEl = document.createElement("div")
    const formEl = document.createElement("form")
    const formContentEl = document.createElement("div")
    const submitBtnEl = document.createElement("img")
    const todoDialogContainerEl = document.createElement("div")
    const todoTitleInputEl = document.createElement("input")
    const todoDescriptionInputEl = document.createElement("input")
    const todoDueDateInputEl = document.createElement("input")
    const todoNotesInputEl = document.createElement("textarea")
    const todoPriorityEl = document.createElement("button")
    const btnContainerEl = document.createElement("div")

    containerEl.setAttribute("spellcheck", "false")

    const nameInputEl = document.createElement("input")

    attachTogglePriorityButtonDisplayEvent()
    attachCounterEvent()

    function createMainLayout() {
        containerEl.classList.add("container")
        displayTopEl.classList.add("display-top")
        leftPanelEl.classList.add("left-panel")
        rightPanelEl.classList.add("right-panel")
        rightPanelEl.classList.add("invisible")
        displayHeaderEl.classList.add("display-header")
        dialogEl.classList.add("dialog")
        counterEl.classList.add("counter")
        dialogCloseBtnEl.classList.add("dialog-close-button")
        dialogCloseContainerEl.classList.add("dialog-close-container")
        formEl.classList.add("form")
        formContentEl.classList.add("form-content")
        submitBtnEl.classList.add("submit-button")
        todoDialogContainerEl.classList.add("todo-dialog-container")
        projectsBtnEl.classList.add("projects-button")
        addBtn.classList.add("add-button")
        btnContainerEl.classList.add("btn-container")

        submitBtnEl.setAttribute("type", "submit")
        submitBtnEl.setAttribute("formmethod", "dialog")
        submitBtnEl.setAttribute("value", "submit")

        projectsBtnEl.setAttribute("src", menuImg)
        addBtn.setAttribute("src", plusImg)
        dialogCloseBtnEl.setAttribute("src", closeBoxImg)

        submitBtnEl.setAttribute("src", floppyDiskImg)
        counterEl.textContent = ""

        displayTopEl.appendChild(leftPanelEl)
        displayTopEl.appendChild(rightPanelEl)
        dialogEl.appendChild(counterEl)
        dialogCloseContainerEl.appendChild(dialogCloseBtnEl)
        dialogEl.appendChild(dialogCloseContainerEl)
        dialogEl.appendChild(formEl)
        containerEl.appendChild(displayHeaderEl)
        containerEl.appendChild(displayTopEl)
        displayHeaderEl.appendChild(projectsBtnEl)
        displayHeaderEl.appendChild(addBtn)
        containerEl.appendChild(dialogEl)
        formEl.appendChild(formContentEl)
        btnContainerEl.appendChild(submitBtnEl)
        formEl.appendChild(btnContainerEl)
        bodyEl.appendChild(containerEl)
        
        //set fonts
        // const htmlEl = document.querySelector("html")
        // htmlEl.classList.add("lilita-one-regular")
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
                const viewTodoBtnEl = document.createElement("img")
                const isDoneBtn = document.createElement("img")
                const todoTextContainer = document.createElement("div")
                const todoBtnsContainer = document.createElement("div")

                todoEl.setAttribute("data-index", index)
                viewTodoBtnEl.setAttribute("data-index", index)
                isDoneBtn.setAttribute("data-index", index)

                todoEl.classList.add("todo")
                todoTitleEl.classList.add("todo-title")
                todoDueDateEl.classList.add("todo-duedate")
                viewTodoBtnEl.classList.add("view-btn")
                isDoneBtn.classList.add("is-done-btn")
                todoTextContainer.classList.add("todo-text-container")
                todoBtnsContainer.classList.add("todo-btns-container")

                todoTitleEl.textContent = todo.title
                todoDueDateEl.textContent = DateHandler.formatDate(todo.dueDate)
                viewTodoBtnEl.setAttribute("src", eyeImg)

                isDoneBtn.setAttribute("src", getIsDone(todo, isDoneBtn))

                todoBtnsContainer.appendChild(viewTodoBtnEl)
                todoBtnsContainer.appendChild(isDoneBtn)

                todoTextContainer.appendChild(todoTitleEl)
                todoTextContainer.appendChild(todoDueDateEl)

                todoEl.appendChild(todoTextContainer)
                todoEl.appendChild(todoBtnsContainer)
                rightPanelEl.appendChild(todoEl)
        })
        }
    }


    function renderDialog(isProjectPanelVisible = 0) {
        resetDialogClass()
        dialogEl.showModal()

        const formContentEl = document.querySelector(".form-content")
        formContentEl.textContent = ""

        if (isProjectPanelVisible) {
            dialogEl.classList.add("isproject")

            formContentEl.appendChild(projectDialog())
            nameInputEl.focus()
        } else {
            formContentEl.appendChild(todoDialog())
            todoTitleInputEl.focus()
        }
    }

    function resetDialogClass() {
        dialogEl.classList.remove("isproject")
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

        const deleteExists = document.querySelector(".delete-project")

        if (deleteExists) {
            btnContainerEl.removeChild(deleteExists)
        }

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

        todoTitleInputEl.setAttribute("placeholder", "snappyNameForTask")
        todoDescriptionInputEl.setAttribute("placeholder", "shortDescription")
        todoNotesInputEl.setAttribute("placeholder", "upTo300charactersOfNotesForDetailedInformationIfYouSoDesireButItIsOptionalJustLikeTheDescription")

        const deleteExists = document.querySelector(".delete-project")

        if (deleteExists) {
            btnContainerEl.removeChild(deleteExists)
        }

        todoDialogContainerEl.appendChild(todoTitleInputEl)
        todoDialogContainerEl.appendChild(todoDescriptionInputEl)
        todoDialogContainerEl.appendChild(todoDueDateInputEl)
        todoDialogContainerEl.appendChild(todoNotesInputEl)
        todoDialogContainerEl.appendChild(todoPriorityEl)

        return todoDialogContainerEl
    }

    function togglePanelInvisible() {
        leftPanelEl.classList.toggle("invisible")
        rightPanelEl.classList.toggle("invisible")
        addBtn.classList.toggle("add-todo")
    }

    function toggleSubmitInvisible() {
        if (submitBtnEl.getAttribute("class") === "submit-button") {
            submitBtnEl.classList.add("invisible")
            
        }
    }

    function getCurrentProjectIndex() {
        return currentProjectIndex
    }

    function getTodoFormValues(todoIndex) {
        const obj = {
            title: todoTitleInputEl.value,
            description: todoDescriptionInputEl.value,
            dueDate: todoDueDateInputEl.value,
            notes: todoNotesInputEl.value,
            isHighPriority: getFormTodoPriority(),
            isDone: getCurrentIsDoneState(todoIndex)
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

    function getCurrentIsDoneState(todoIndex) {
        const isDoneBtn = document.querySelector(`.is-done-btn[data-index="${todoIndex}"]`)

        if (isDoneBtn) {
            return isDoneBtn.classList.contains("done")
        } else {
            return false
        }
    }

    function renderViewTodo(projectsArray, currentProjectIndex, todoIndex) {
        formContentEl.textContent = ""
        resetSubmitBtnClass()
        toggleSubmitInvisible()
        resetCounter()
        resetDialogClass()

        const deleteExists = document.querySelector(".delete-project")

        if (deleteExists) {
            btnContainerEl.removeChild(deleteExists)
        }

        const todoViewContainer = document.createElement("div")
        todoViewContainer.classList.add("todo-view-container")

        const todoTitleViewEl = document.createElement("p")
        const todoDescriptionViewEl = document.createElement("p")
        const todoDueDateViewEl = document.createElement("p")
        const todoNotesViewEl = document.createElement("p")
        const todoIsHighPriorityViewEl = document.createElement("p")
        const todoIsDoneViewEl = document.createElement("p")
        const deleteTodoBtnEl = document.createElement("img")
        const editBtnEl = document.createElement("img")
        const buttonsContainerEl = document.createElement("div")

        todoTitleViewEl.classList.add("title-view")
        todoDescriptionViewEl.classList.add("description-view")
        todoDueDateViewEl.classList.add("date-view")
        todoNotesViewEl.classList.add("notes-view")
        todoIsHighPriorityViewEl.classList.add("priority-view")
        todoIsDoneViewEl.classList.add("is-done-view")
        buttonsContainerEl.classList.add("buttons-container")
       
        todoTitleViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].title
        todoDescriptionViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].description
        todoDueDateViewEl.textContent = DateHandler.formatDate(projectsArray[currentProjectIndex].todos[todoIndex].dueDate)
        todoNotesViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].notes

        const isHighPriority = projectsArray[currentProjectIndex].todos[todoIndex].isHighPriority
        if (isHighPriority) {
            todoIsHighPriorityViewEl.textContent = "Priority: High"
            todoIsHighPriorityViewEl.classList.add("priority-high")
        } else if (!isHighPriority) {
            todoIsHighPriorityViewEl.textContent = "Priority: Normal"
            todoIsHighPriorityViewEl.classList.add("priority-normal")
        }

        const isDone = projectsArray[currentProjectIndex].todos[todoIndex].isDone
        if (isDone) {
            todoIsDoneViewEl.textContent = "Done"
            todoIsDoneViewEl.classList.add("task-done")
        } else if (!isDone) {
            todoIsDoneViewEl.textContent = "Not done"
            todoIsDoneViewEl.classList.add("task-not-done")
        }
        deleteTodoBtnEl.setAttribute("data-index", todoIndex)
        deleteTodoBtnEl.classList.add("delete-btn")
        deleteTodoBtnEl.setAttribute("src", trashcanImg)

        editBtnEl.setAttribute("src", pencilImg)
        editBtnEl.classList.add("edit-btn")
        editBtnEl.setAttribute("data-index", todoIndex)

        buttonsContainerEl.appendChild(deleteTodoBtnEl)
        buttonsContainerEl.appendChild(editBtnEl)   

        todoViewContainer.appendChild(todoTitleViewEl)
        todoViewContainer.appendChild(todoDescriptionViewEl)
        todoViewContainer.appendChild(todoDueDateViewEl)
        todoViewContainer.appendChild(todoNotesViewEl)
        todoViewContainer.appendChild(todoIsHighPriorityViewEl)
        todoViewContainer.appendChild(todoIsDoneViewEl)
        todoViewContainer.appendChild(buttonsContainerEl)
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
        dialogEl.classList.add("isproject")

        const deleteExists = document.querySelector(".delete-project")

        if (!deleteExists) {
            btnContainerEl.appendChild(deleteProjectEl)
        }
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
        const isDoneBtn = document.querySelector(".is-done-btn");
        const todoEl = isDoneBtn.closest(".todo");  // Assuming .todo is the parent of .is-done-btn
        const grandParentEl = todoEl.parentElement;
    
        if (isDoneBtn.classList.contains("not-done")) {
            isDoneBtn.classList.remove("not-done");
            isDoneBtn.classList.add("done");
            todoEl.classList.remove("not-done");
            todoEl.classList.add("done");
            grandParentEl.classList.remove("not-done");
            grandParentEl.classList.add("done");
        } else if (isDoneBtn.classList.contains("done")) {
            isDoneBtn.classList.remove("done");
            isDoneBtn.classList.add("not-done");
            todoEl.classList.remove("done");
            todoEl.classList.add("not-done");
            grandParentEl.classList.remove("done");
            grandParentEl.classList.add("not-done");
        }
    }

    function getIsDone(todo, isDoneBtn) {
        
        if(todo.isDone) {
            isDoneBtn.classList.remove("not-done")
            isDoneBtn.classList.add("done")
        } else if (!todo.isDone) {
            isDoneBtn.classList.remove("done")
            isDoneBtn.classList.add("not-done")
        }
        
        return todo.isDone ? checkboxMarkedImg : checkboxBlankImg
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
            if (getActiveInputElement()) {
            counterEvent()
            }
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
            titleLimit: 30,
            descriptionLimit: 100,
            notesLimit: 300,
            projectLimit:30,
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
    
        // if (anyPropertyTrue || (!counterObj.titleCount && isAtodoDialog)) {
        //     submitBtnEl.setAttribute("disabled", "disabled")
        // } else {
        //     submitBtnEl.removeAttribute("disabled")
        // }
        
        // updated to use an image instead of a button
        if (anyPropertyTrue || (!counterObj.titleCount && isAtodoDialog)) {
            submitBtnEl.style.pointerEvents = "none"
            if (!submitBtnEl.classList.contains("submit-disabled")) {
                submitBtnEl.classList.add("submit-disabled")
            }
        } else {
            submitBtnEl.style.pointerEvents = "auto"
            submitBtnEl.classList.remove("submit-disabled")
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


