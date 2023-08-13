const todoFrm = document.querySelector('#todoFrm')
const todoInput = document.querySelector('.todoInput')
const todoList = document.querySelector('.todoList')

function addTodo(e){
    e.preventDefault()

    if (todoInput.value === '') {
        alert('Boş Bırakılamaz!');
        return;
    }

    todoList.innerHTML += 
    `<li>
        <div class="task">
        <input class="toggle" type="checkbox">
        <label class="todoLabel">${todoInput.value}</label>
        <button class="delete">X</button>
        </div>
    </li>`

    todoInput.value = '';

    bindClicks()
}

todoFrm.addEventListener('submit', addTodo)


function markTodo(){
    this.parentElement.parentElement.classList.toggle('completed')
}

function illuminateTodo() {
    this.parentElement.parentElement.remove()
}

for(const filter of document.querySelectorAll('.filters input')){
    filter.addEventListener('click', function(){
        todoList.classList.value = 'todoList' + this.value
    })
}

function bindClicks(){
    for(const button of document.querySelectorAll('.delete')){
        button.addEventListener('click', illuminateTodo)
    }

    for(const button of document.querySelectorAll('.toggle')){
        button.addEventListener('click', markTodo)
    }
}

const wDelete = document.querySelector('.btnCompleted')

wDelete.addEventListener('click', aIlluminate)

function aIlluminate(){
    for(const el of document.querySelectorAll('li.completed')){
        el.remove()
    }
}