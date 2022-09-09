let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".form");
let todoUlElem = $.querySelector('.todos')

function addNewTodo (newTodoValue) {
    let newTodoLi = $.createElement('li')
    newTodoLi.className = 'new-li'

    let newTodoTitleSpan = $.createElement('span')
    newTodoTitleSpan.innerHTML = newTodoValue

    let newTodoButton = $.createElement('button')
    newTodoButton.className = 'new-i'
    newTodoButton.innerHTML = 'delete'

    newTodoButton.addEventListener('click', function(event){
        event.target.parentElement.remove();
    })

    newTodoLi.append(newTodoTitleSpan, newTodoButton)

    todoUlElem.append(newTodoLi)

    console.log(newTodoLi);
}

addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();

  if (event.keyCode === 13) {
    if (newTodoValue) {
        inputElem.value = ''
        addNewTodo(newTodoValue)
    }
  }
});