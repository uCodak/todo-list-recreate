const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");

const todoText = todoInput.value;

todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  const todoText = todoInput.value;
  todoInput.value = ""; // Clear the input field
  // console.log("Todo submitted:", todoText);
});
