"use strict"

const form = document.getElementById("toDoForm");
const input = document.getElementById("toDoInput");
const content = document.getElementById("toDoContent");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addToDo();
})

function addToDo() {
    const toDo = input.value;

    if(toDo) {
        const toDoItem = document.createElement("li");
        toDoItem.innerHTML = toDo;

        toDoItem.addEventListener("click", () => {
            toDoItem.classList.toggle("completed");
        })

        toDoItem.addEventListener("contextmenu", () => {
            toDoItem.remove();
        })

        content.appendChild(toDoItem);

        input.value = "";
    }
}
