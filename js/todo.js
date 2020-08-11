const todoForm = document.querySelector('.form-todo');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.list-todo');

const KEY_TODO_LIST = 'toDos';

let toDos = [];

function filterArray(todo) {
    return todo.id === 1
}

function todoInit() {
    todoForm.addEventListener('submit', handelTodoListSubmit);
    loadToDos();
}

function handelTodoListSubmit(event) {
    event.preventDefault();
    const valueTodo = todoInput.value;
    todoInput.value = '';

    if (valueTodo === null || valueTodo.length === 0) return;

    makeTodoElement(valueTodo);
    saveTodo();
}

function saveTodo() {
    localStorage.setItem(KEY_TODO_LIST, JSON.stringify(toDos));
}

function deleteTodo(event) {
    var target = event.target;
    var li = target.parentNode;
    todoList.removeChild(li);

    const cleanTodos = toDos.filter(function (todo) {
        return todo.id !== Number(li.id);
    });

    toDos = cleanTodos;
    saveTodo();
}

function loadToDos() {
    const loadData = localStorage.getItem(KEY_TODO_LIST);

    if (loadData !== null) {
        const parseData = JSON.parse(loadData);
        parseData.forEach(todo => {
            makeTodoElement(todo.text);
        });
    }
}

function makeTodoElement(text) {
    const liTodo = document.createElement('li');

    const spanTodo = document.createElement('span');
    spanTodo.innerText = text;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "❌";
    deleteButton.addEventListener('click', deleteTodo);

    const newToDoId = toDos.length + 1;

    liTodo.id = newToDoId;
    liTodo.appendChild(spanTodo);
    liTodo.appendChild(deleteButton);

    todoList.appendChild(liTodo);

    const toDoObj = {
        text: text,
        id: newToDoId
    }

    toDos.push(toDoObj);
}



todoInit();