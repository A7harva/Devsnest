const input = document.querySelector("input");
const btn = document.querySelector("button");
const todolist = document.querySelector(".todolist");

btn.addEventListener("click", ()=>{
    const newtodo = document.createElement("div");
    newtodo.innerHTML = input.value;
    todolist.appendChild(newtodo);
    input.value = "";
    newtodo.innerHTML = newtodo.innerHTML + '<button class="done" onclick="Remove(this)">Done</button>';
})

function Remove(k){
    k.parentNode.remove();
}