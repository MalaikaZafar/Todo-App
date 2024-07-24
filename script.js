const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", () => {
  const newTodoText = newTodoInput.value;

  if (newTodoText !== "") {
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = newTodoText;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "x";

    deleteBtn.classList.add("delete-todo-btn");
    deleteBtn.addEventListener("click", function () {
      newTodoItem.remove();
    });

    newTodoItem.appendChild(deleteBtn);
    todoList.appendChild(newTodoItem);
    newTodoInput.value = "";
  }
});
