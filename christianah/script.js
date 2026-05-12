const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const feedback = document.getElementById("feedback");
const todoList = document.getElementById("todo-list");

function showFeedback(message) {
  feedback.textContent = message;
}

function clearFeedback() {
  feedback.textContent = "";
}

function createTodoItem(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "todo-actions";

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.textContent = "Done";
  completeButton.addEventListener("click", () => {
    span.classList.toggle("todo-completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Remove";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(completeButton);
  actions.appendChild(deleteButton);
  li.appendChild(span);
  li.appendChild(actions);

  return li;
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = todoInput.value.trim();

  if (task === "") {
    showFeedback("Please enter a task before adding.");
    todoInput.focus();
    return;
  }

  clearFeedback();
  const todoItem = createTodoItem(task);
  todoList.appendChild(todoItem);
  todoInput.value = "";
  todoInput.focus();
});

todoInput.addEventListener("input", clearFeedback);
