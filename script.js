// select DOM customElements
var newTodoForm = document.getElementById('new-todo-form')
var newTodoInput = document.getElementById('new-todo')
var todoList = document.getElementById('todo-list')

var todos = []

for (i = 0; i < todos.length; i++ ) {
var li = document.createElement('li')
li.innerText = todos[i]
todoList.appendChild(li)
}

function addTodo(event) {
event.preventDefault()
var newTodoText = newTodoInput.value
todos.push(newTodoText)
newTodoInput.value = ''
}

newTodoForm.addEventListener('submit', addTodo)