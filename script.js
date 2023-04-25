let toDoInput // place when the user types the task
let errorInfo // info when no task has been typed in
let addBtn // add Btn - to add a new task to the list
let ulList // the task list, ul tags
let newTodo //dynamic created li with a new task

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
	addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
	if (toDoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = toDoInput.value

		createToolsArea()

		ulList.append(newTodo)

		toDoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

document.addEventListener('DOMContentLoaded', main)
