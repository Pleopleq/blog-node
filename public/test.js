const todoForm = document.querySelector('.todoForm');
const todoInput = document.querySelector('.todoInput');
const todoList = document.querySelector('.todosList');  


todoForm.addEventListener("submit", e =>{
    e.preventDefault();
    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type":  "application/json"
        },
        body: JSON.stringify({todo: todoInput.value})
    })
        .then(res => { 
            return res.json();
        })
        .then(json => {
        const li = document.createElement('li');
        li.innerHTML = json.todo;
        todoList.appendChild(li);
        });
});