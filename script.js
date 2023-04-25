let toDoInput // place when the user types the task
let errorInfo // info when no task has been typed in
let addBtn // add Btn - to add a new task to the list
let ulList // the task list, ul tags


const main = () => {
    prepareDomElements()
    prepareDOMEvens()
}

const prepareDomElements = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvens = () => {
    //adds event listeners
}


document.addEventListener('DOMContentLoaded', main)