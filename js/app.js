"use strict"

const form = document.getElementById("toDoForm");
const input = document.getElementById("toDoInput");
const content = document.getElementById("toDoContent");

const toDos = JSON.parse(localStorage.getItem("toDos"));

if(toDos) {
    toDos.forEach((toDo) => {
        addToDo(toDo);
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addToDo();
})

function addToDo(toDo) {
    let toDotext = input.value;

    if(toDo) {
        toDotext = toDo.text;
    }

    if(toDotext) {
        const toDoItem = document.createElement("li");

        if(toDo && toDo.completed) {
            toDoItem.classList.add("completed");
        }
        
        toDoItem.innerText = toDotext;

        toDoItem.addEventListener("click", () => {
            toDoItem.classList.toggle("completed");

            update();
        })

        toDoItem.addEventListener("contextmenu", () => {
            toDoItem.remove();

            update();
        })

        content.appendChild(toDoItem);

        input.value = "";

        update();
    }
}

function update() {
    const toDoItems = document.querySelectorAll("li");

    const toDos = [];

    toDoItems.forEach((toDoItem) => {
        toDos.push({
            text: toDoItem.innerText,
            completed: toDoItem.classList.contains("completed")
        })
    })

    localStorage.setItem("toDos", JSON.stringify(toDos));
}
