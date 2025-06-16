const todoinput = document.getElementById("todo-input");
const listcont = document.getElementById("todo-list");

function AddTask() {
  if (todoinput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = todoinput.value;
  listcont.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  todoinput.value = "";
  saveData();
}

listcont.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("todoList", listcont.innerHTML);
}
function loadData() {
  const savedData = localStorage.getItem("todoList");
  if (savedData) {
    listcont.innerHTML = savedData;
  }
}
loadData();
