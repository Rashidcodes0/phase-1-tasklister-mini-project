document.addEventListener("DOMContentLoaded", () => {
  // Get references to the input field, submit button, and task list
  let taskInput = document.getElementById("new-task-description");
  let submitBtn = document.getElementById("create-task-form").querySelector("input[type='submit']");
  let taskList = document.getElementById("tasks");

  // Add event listener to the submit button
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

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

