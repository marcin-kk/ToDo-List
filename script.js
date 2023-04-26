let toDoInput // place when the user types the task
let errorInfo // info when no task has been typed in
let addBtn // add Btn - to add a new task to the list
let ulList // the task list, ul tags
let newTodo //dynamic created li with a new task

let popup // popup
let popupInfo // text in popup when one adds an empty text
let todoToEdit // editable Todo
let popupInput // input in popup
let popupAddBtn // button Accept in popup
let popupCloseBtn //button Cancel in popup

const main = () => {
	prepareDomElements()
	prepareDOMEvens()
}

const prepareDomElements = () => {
	toDoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvens = () => {
	//adds event listeners
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
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

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		console.log('delete')
	}
}

const editTodo = e => {
	popup.style.display = 'flex'
	todoToEdit = e.target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent

	console.log(todoToEdit.firstChild)
}

const closePopup = () => {
	popup.style.display = 'none'
	popupInfo.textContent = ''
}

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Musisz podać jakąś wartość'
	}
}

document.addEventListener('DOMContentLoaded', main)
