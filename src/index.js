document.addEventListener("DOMContentLoaded", () => {
  let taskInput = document.getElementById("new-task-description");
  let submitBtn = document.getElementById("create-task-form").querySelector("input[type='submit']");
  let taskList = document.getElementById("tasks");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // Get the task string from the input field
    let task = taskInput.value;

    // Create a new list item element
    let taskItem = document.createElement("li");

    // Set the text content of the list item to the task string
    taskItem.textContent = task;

    // Append the list item to the task list
    taskList.appendChild(taskItem);

    // Reset the input field to empty
    taskInput.value = "";
  });
});

