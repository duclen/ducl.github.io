const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const todos = [];

function saveTodos (){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));

}

function deleteTodo(potato){
    const li=potato.target.parentElement;
    li.remove();
}
function paintTodo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.innerText = "×"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newTodo;
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos=localStorage.getItem(TODOS_KEY);
if (savedTodos !== null){
    const parsedTodos = JSON.stringify(savedTodos);
    parsedTodos.forEach(paintTodo);  
}