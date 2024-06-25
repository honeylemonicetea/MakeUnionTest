let todoList = document.querySelector(".todo-list__tasks")
let textInput = document.querySelector(".todo-list__input")
let addButton = document.querySelector(".todo-list__button")

function addTask() {
    if (textInput.value === ""){
        alert("Текст задания не может быть пустым")
    } else {
        let li = document.createElement("LI")
        li.setAttribute("class", "todo-list__task")
        let span = document.createElement("SPAN")
        span.innerHTML = textInput.value
        let i = document.createElement("I")
        i.setAttribute("class", "bi bi-trash3 delete-button")
        li.appendChild(span)
        li.appendChild(i)
        todoList.appendChild(li)
        textInput.value = ""
    }
}

addButton.onclick = addTask
document.onkeydown = function(event){
    if (event.keyCode == 13){
        addTask()
    }
}

todoList.onclick = function(event) {
    let target = event.target
    if (target.classList.contains("delete-button")) {
        target.parentElement.remove()
    } else if (target.classList.contains("todo-list__task")){
        target.classList.toggle("done")
    } else if (target.parentElement.classList.contains("todo-list__task")){
        target.parentElement.classList.toggle("done")
    }
}
