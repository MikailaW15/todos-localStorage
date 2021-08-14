// select DOM customElements
var newTodoForm = document.getElementById('new-todo-form')
var newTodoInput = document.getElementById('new-todo')
var todoList = document.getElementById('todo-list')

var todos = []

function addTodo(event) {
event.preventDefault()
var newTodoText = newTodoInput.value
todos.push(newTodoText)
newTodoInput.value = ''
}

newTodoForm.addEventListener('submit', addTodo)